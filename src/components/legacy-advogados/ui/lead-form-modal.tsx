"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, ChevronLeft, Loader2, X } from "lucide-react";
import { useLeadForm } from "@/components/legacy-advogados/contexts/lead-form-context";
import { INSTAGRAM_URL } from "@/components/legacy-advogados/lib/constants";
import { digitsOnly, maskPhoneBR } from "@/components/legacy-advogados/lib/phone-mask";
import { cn } from "@/components/legacy-advogados/lib/utils";

const FATURAMENTO_OPTIONS = [
  { value: "menos_30k", label: "Menos de R$ 30 mil" },
  { value: "30_50k", label: "Entre R$ 30 mil e R$ 50 mil" },
  { value: "50_80k", label: "Entre R$ 50 mil e R$ 80 mil" },
  { value: "80k_plus", label: "R$ 80 mil pra cima" },
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

export function LeadFormModal() {
  const { isOpen, close } = useLeadForm();
  const titleId = useId();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setStep(1);
    setForm(initialForm);
    setConsent(false);
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

  const goNext = () => {
    setError(null);
    if (step === 1) {
      if (form.nome.trim().length < 2) {
        setError("Informe seu nome completo.");
        return;
      }
      setStep(2);
      return;
    }
    if (step === 2) {
      const d = digitsOnly(form.telefone);
      if (d.length < 10) {
        setError("Informe um WhatsApp válido com DDD.");
        return;
      }
      setStep(3);
      return;
    }
    if (step === 3) {
      const h = form.perfilArroba.trim().replace(/^@+/, "");
      if (h.length < 2) {
        setError("Informe o @ do perfil profissional ou do escritório (mínimo 2 caracteres após o @).");
        return;
      }
      if (h.length > 64) {
        setError("Use no máximo 64 caracteres no @.");
        return;
      }
      setStep(4);
      return;
    }
    if (step === 4) {
      if (!form.faturamento) {
        setError("Selecione uma faixa de faturamento.");
        return;
      }
      setStep(5);
    }
  };

  const goBack = () => {
    setError(null);
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setError(null);
    if (!consent) {
      setError("É necessário aceitar para continuar.");
      return;
    }
    setSubmitting(true);
    const faturamentoLabel =
      FATURAMENTO_OPTIONS.find((o) => o.value === form.faturamento)?.label ?? form.faturamento;

    const perfilNormalizado = normalizeArrobaHandle(form.perfilArroba);

    const payload = {
      nome: form.nome.trim(),
      perfilArroba: perfilNormalizado,
      telefone: form.telefone,
      telefoneDigits: digitsOnly(form.telefone),
      faturamento: form.faturamento,
      faturamentoLabel,
      consentiuContato: consent,
      origem: "lead-form-modal",
    };

    try {
      // Webhook / API: adicione aqui o envio do lead (ex.: fetch para URL do Make, n8n, etc.)
      // await fetch(process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL!, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      await new Promise((r) => setTimeout(r, 450));
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  if (!mounted || !isOpen) return null;

  const modal = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-md backdrop-saturate-150"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-black shadow-elevated"
        )}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-10 rounded-lg p-2 text-content-tertiary transition-colors hover:bg-white/10 hover:text-white md:right-4 md:top-4"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <>
            <div className="p-6 pb-8 md:p-8 md:pb-10">
            <h2 id={titleId} className="pr-10 text-center font-display text-xl font-bold text-white md:text-2xl">
              Você está a poucos passos de tomar a decisão certa.
            </h2>
            <p className="mt-3 text-center text-sm text-content-secondary md:text-base">
              Preencha o formulário abaixo e receba o contato do nosso time comercial em instantes.
            </p>

            <div className="mt-8 space-y-5">
              {step === 1 && (
                <div>
                  <label htmlFor="lead-nome" className="mb-2 block text-sm font-medium text-content-secondary">
                    Nome completo
                  </label>
                  <input
                    id="lead-nome"
                    type="text"
                    autoComplete="name"
                    className="input"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                  />
                </div>
              )}

              {step === 2 && (
                <div>
                  <label htmlFor="lead-tel" className="mb-2 block text-sm font-medium text-content-secondary">
                    WhatsApp
                  </label>
                  <input
                    id="lead-tel"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    className="input"
                    placeholder="(11) 99999-9999"
                    value={form.telefone}
                    onChange={(e) => setForm((f) => ({ ...f, telefone: maskPhoneBR(e.target.value) }))}
                  />
                </div>
              )}

              {step === 3 && (
                <div>
                  <label htmlFor="lead-arroba" className="mb-2 block text-sm font-medium text-content-secondary">
                    @ do Instagram do advogado ou do escritório
                  </label>
                  <input
                    id="lead-arroba"
                    type="text"
                    autoComplete="username"
                    className="input"
                    placeholder="@escritorio ou @advogado"
                    value={form.perfilArroba}
                    onChange={(e) => setForm((f) => ({ ...f, perfilArroba: e.target.value }))}
                  />
                  <p className="mt-2 text-xs text-content-tertiary">
                    Informe como aparece no Instagram (com ou sem @).
                  </p>
                </div>
              )}

              {step === 4 && (
                <fieldset>
                  <legend className="mb-3 block text-sm font-medium text-content-secondary">
                    Faturamento mensal aproximado
                  </legend>
                  <div className="space-y-2">
                    {FATURAMENTO_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        className={cn(
                          "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors",
                          form.faturamento === opt.value
                            ? "border-brand-blue bg-brand-blue/15 text-white"
                            : "border-white/[0.1] bg-white/[0.03] text-content-secondary hover:border-white/20"
                        )}
                      >
                        <input
                          type="radio"
                          name="faturamento"
                          value={opt.value}
                          checked={form.faturamento === opt.value}
                          onChange={() => setForm((f) => ({ ...f, faturamento: opt.value }))}
                          className="h-4 w-4 accent-brand-blue"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 5 && (
                <label className="flex cursor-pointer items-start gap-3 text-sm text-content-secondary">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-brand-blue"
                  />
                  <span>
                    Ao clicar em enviar eu concordo em receber mensagens e ligações da Scale Company.
                  </span>
                </label>
              )}

              {error && <p className="text-center text-sm text-red-400">{error}</p>}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex items-center gap-1 text-sm font-medium text-content-secondary hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Voltar
                  </button>
                ) : (
                  <span />
                )}
                {step < 5 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="ml-auto rounded-sm bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Continuar
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={handleSubmit}
                    className="ml-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Enviar"}
                  </button>
                )}
              </div>
            </div>
            </div>

            <div
              className="flex h-2 w-full shrink-0 border-t border-white/[0.1]"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={5}
              aria-valuenow={step}
              aria-label={`Passo ${step} de 5`}
            >
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={cn(
                    "min-h-0 flex-1 border-l border-black/40 transition-colors duration-300 first:border-l-0",
                    s <= step ? "bg-brand-blue" : "bg-white/[0.08]"
                  )}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="p-6 pt-2 text-center md:p-8">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-green-500/40 bg-green-500/20">
              <CheckCircle2 className="h-9 w-9 text-green-400" strokeWidth={2} />
            </div>
            <p className="font-display text-lg font-bold text-white md:text-xl">
              Entraremos em contato com você em até 30 minutos
            </p>
            <p className="mt-4 text-xs leading-relaxed text-content-tertiary">
              *Válido apenas para horários comerciais e dias da semana, exceto feriados.
            </p>
            <p className="mt-6 text-sm text-content-secondary">
              Enquanto isso acesse nosso Instagram e fique por dentro das novidades.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-brand-blue hover:underline"
            >
              Instagram da Scale Company
            </a>
            <button
              type="button"
              onClick={close}
              className="mt-8 w-full rounded-sm border border-white/15 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
