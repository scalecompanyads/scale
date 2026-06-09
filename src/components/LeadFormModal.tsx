"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { CheckCircle2, ChevronLeft, Loader2, X } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const MAKE_WEBHOOK_URL = "https://hook.us1.make.com/bk8vzf7u1d7m0fueemgfqemutft9k6ve";
const EXCEL_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwdcXNSA-sUdCtT4JXky5JMTDihkGb1zNL41DLlgFTpOU1aMWs2xw0HmxpWiMIKYIDx/exec";

const LEAD_EVENT_NAME = "lead_submit_success";

const FATURAMENTO_OPTIONS = [
  { value: "menos_30k", label: "Menos de R$ 30 mil" },
  { value: "30_50k", label: "Entre R$ 30 mil e R$ 50 mil" },
  { value: "50_100k", label: "Entre R$ 50 mil e R$ 100 mil" },
  { value: "100k_plus", label: "Mais de R$ 100 mil" },
] as const;

type Faturamento = (typeof FATURAMENTO_OPTIONS)[number]["value"];

const initialForm = {
  nome: "",
  perfilArroba: "",
  telefone: "",
  faturamento: "" as Faturamento | "",
};

function normalizeArrobaHandle(raw: string): string {
  const t = raw.trim();
  if (!t) return "";
  return t.startsWith("@") ? t : `@${t}`;
}

function generateLeadId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function digitsOnly(str: string): string {
  return str.replace(/\D/g, "");
}

function maskPhoneBR(v: string): string {
  let r = v.replace(/\D/g, "");
  if (r.length > 11) r = r.slice(0, 11);
  if (r.length > 10) {
    return r.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (r.length > 6) {
    return r.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  } else if (r.length > 2) {
    return r.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  } else if (r.length > 0) {
    return r.replace(/^(\d{0,2})$/, "($1");
  }
  return r;
}

function getAttributionParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_content: params.get("utm_content") ?? "",
    utm_term: params.get("utm_term") ?? "",
    gclid: params.get("gclid") ?? "",
    fbclid: params.get("fbclid") ?? "",
  };
}

function pushLeadSubmitEvent(data: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: LEAD_EVENT_NAME,
    ...data,
  });
}

export function LeadFormModal() {
  const { isOpen, close } = useLeadForm();
  const titleId = useId();
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setForm(initialForm);
    setSubmitted(false);
    setSubmitting(false);
    setError(null);
  }, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) {
      reset();
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen, reset]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const handleSubmit = async () => {
    setError(null);

    // Validações
    if (form.nome.trim().length < 2) {
      setError("Informe seu nome completo.");
      return;
    }
    const d = digitsOnly(form.telefone);
    if (d.length < 10) {
      setError("Informe um WhatsApp válido com DDD.");
      return;
    }
    const h = form.perfilArroba.trim().replace(/^@+/, "");
    if (h.length < 2 || h.length > 64) {
      setError("Informe o @ do perfil profissional válido.");
      return;
    }
    if (!form.faturamento) {
      setError("Selecione uma faixa de faturamento.");
      return;
    }

    setSubmitting(true);
    const faturamentoLabel =
      FATURAMENTO_OPTIONS.find((o) => o.value === form.faturamento)?.label ?? form.faturamento;

    const perfilNormalizado = normalizeArrobaHandle(form.perfilArroba);
    const leadId = generateLeadId();
    const attribution = getAttributionParams();
    const createdAt = new Date().toISOString();

    const payload = {
      lead_id: leadId,
      nome: form.nome.trim(),
      perfilArroba: perfilNormalizado,
      telefone: form.telefone,
      telefoneDigits: digitsOnly(form.telefone),
      faturamento: form.faturamento,
      faturamentoLabel,
      origem: "lead-form-modal",
      form_name: "advogados_lp",
      pagina: "/marketing-juridico",
      criadoEm: createdAt,
      ...attribution,
    };

    pushLeadSubmitEvent(payload);
    setSubmitted(true);

    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Erro ao enviar lead para webhook:", err);
    }
    
    if (EXCEL_WEBHOOK_URL) {
      try {
        await fetch(EXCEL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
          mode: "no-cors"
        });
      } catch (err) {
        console.error("Erro ao enviar lead para Excel webhook:", err);
      }
    }

    setSubmitting(false);
  };

  if (!mounted || !isOpen) return null;

  const modal = (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 999999, display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", padding: "1rem"
      }}
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={{
          position: "relative", display: "flex", width: "100%", maxWidth: "32rem", flexDirection: "column",
          overflow: "hidden", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.12)", background: "#010f1c",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          style={{
            position: "absolute", right: "1rem", top: "1rem", zIndex: 10, borderRadius: "0.5rem", padding: "0.5rem",
            color: "rgba(255,255,255,0.6)", background: "transparent", border: "none", cursor: "pointer"
          }}
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div style={{ padding: "2rem", paddingBottom: "2.5rem" }}>
              <h2 id={titleId} style={{ paddingRight: "2rem", textAlign: "center", fontSize: "1.25rem", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                Você está a poucos passos de tomar a decisão certa.
              </h2>
              <p style={{ marginTop: "0.75rem", textAlign: "center", fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>
                Preencha o formulário abaixo e receba o contato do nosso time comercial em instantes.
              </p>

              <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label htmlFor="lead-nome" style={{ marginBottom: "0.5rem", display: "block", fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                    Nome completo
                  </label>
                  <input
                    id="lead-nome"
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                    style={{
                      width: "100%", padding: "0.875rem 1rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "1rem", outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="lead-tel" style={{ marginBottom: "0.5rem", display: "block", fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                    WhatsApp
                  </label>
                  <input
                    id="lead-tel"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="(11) 99999-9999"
                    value={form.telefone}
                    onChange={(e) => setForm((f) => ({ ...f, telefone: maskPhoneBR(e.target.value) }))}
                    style={{
                      width: "100%", padding: "0.875rem 1rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "1rem", outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="lead-arroba" style={{ marginBottom: "0.5rem", display: "block", fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                    @ do Instagram
                  </label>
                  <input
                    id="lead-arroba"
                    type="text"
                    autoComplete="username"
                    placeholder="@escritorio ou @advogado"
                    value={form.perfilArroba}
                    onChange={(e) => setForm((f) => ({ ...f, perfilArroba: e.target.value }))}
                    style={{
                      width: "100%", padding: "0.875rem 1rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "1rem", outline: "none"
                    }}
                  />
                </div>

                <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
                  <legend style={{ marginBottom: "0.75rem", display: "block", fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                    Faturamento mensal aproximado
                  </legend>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                    {FATURAMENTO_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        style={{
                          display: "flex", cursor: "pointer", alignItems: "center", gap: "0.5rem", borderRadius: "0.5rem", border: "1px solid",
                          padding: "0.6rem 0.8rem", fontSize: "0.75rem", transition: "all 0.2s",
                          borderColor: form.faturamento === opt.value ? "#00BAFF" : "rgba(255,255,255,0.1)",
                          background: form.faturamento === opt.value ? "rgba(0,186,255,0.1)" : "rgba(255,255,255,0.03)",
                          color: form.faturamento === opt.value ? "#fff" : "rgba(255,255,255,0.7)",
                          lineHeight: 1.2
                        }}
                      >
                        <input
                          type="radio"
                          name="faturamento"
                          value={opt.value}
                          checked={form.faturamento === opt.value}
                          onChange={() => setForm((f) => ({ ...f, faturamento: opt.value }))}
                          style={{ margin: 0, flexShrink: 0 }}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                  </fieldset>

                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", textAlign: "center", lineHeight: 1.4 }}>
                    O nosso time comercial entrará em contato em até <strong>5 minutos</strong> após o envio deste formulário.
                    <br />
                    <span style={{ fontSize: "0.65rem", opacity: 0.8 }}>*Válido para horários comerciais, exceto feriados e finais de semana.</span>
                  </p>

                  {error && <p style={{ textAlign: "center", fontSize: "0.875rem", color: "#f87171", margin: 0 }}>{error}</p>}

                <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "0.5rem" }}>
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={handleSubmit}
                    className="btn-shiny"
                    style={{ width: "100%", padding: "0.75rem 1.5rem", opacity: submitting ? 0.5 : 1 }}
                  >
                    {submitting ? <Loader2 size={20} style={{ animation: "spin-slow 1s linear infinite" }} /> : "Agendar Diagnóstico Gratuito"}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <div style={{ margin: "0 auto 1.5rem", display: "flex", height: "4rem", width: "4rem", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1px solid rgba(74, 222, 128, 0.4)", background: "rgba(74, 222, 128, 0.1)" }}>
              <CheckCircle2 size={36} color="#4ade80" />
            </div>
            <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>
              Tudo certo! Entraremos em contato com você em até 5 minutos.
            </p>
            <p style={{ marginTop: "1rem", fontSize: "0.75rem", lineHeight: 1.6, color: "rgba(255,255,255,0.5)" }}>
              *Válido apenas para horários comerciais, exceto feriados e finais de semana.
            </p>
            <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
              Enquanto isso acesse nosso Instagram e fique por dentro das novidades.
            </p>
            <a
              href="https://instagram.com/scalecompany"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "0.75rem", display: "inline-block", fontSize: "0.875rem", fontWeight: 600, color: "#00BAFF", textDecoration: "none" }}
            >
              Instagram da Scale Company
            </a>
            <button
              type="button"
              onClick={close}
              style={{ marginTop: "2rem", width: "100%", borderRadius: "0.25rem", border: "1px solid rgba(255,255,255,0.15)", padding: "0.75rem", fontSize: "0.875rem", fontWeight: 500, color: "#fff", background: "transparent", cursor: "pointer" }}
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return modal;
}
