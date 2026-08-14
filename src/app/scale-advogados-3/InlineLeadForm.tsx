"use client";

import { useState } from "react";
import { User, Phone, Mail, AtSign, TrendingUp, ChevronDown, ShieldCheck, ArrowRight } from "lucide-react";
import { MAKE_WEBHOOK_URL, EXCEL_WEBHOOK_URL } from "@/lib/webhooks";

const VALID_DDDS = ["11","12","13","14","15","16","17","18","19","21","22","24","27","28","31","32","33","34","35","37","38","41","42","43","44","45","46","47","48","49","51","53","54","55","61","62","63","64","65","66","67","68","69","71","73","74","75","77","79","81","82","83","84","85","86","87","88","89","91","92","93","94","95","96","97","98","99"];

const faturamentoOptions = [
  { value: "menos_30k", label: "Menos de R$ 30 mil" },
  { value: "30_50k", label: "Entre R$ 30 mil e R$ 50 mil" },
  { value: "50_100k", label: "Entre R$ 50 mil e R$ 100 mil" },
  { value: "100k_plus", label: "Mais de R$ 100 mil" },
  { value: "prefiro_nao_informar", label: "Prefiro não informar" },
];

function stripCC(v: string) {
  let d = v.replace(/\D/g, "");
  if ((d.length === 12 || d.length === 13) && d.slice(0, 2) === "55") {
    d = d.slice(2);
  }
  return d;
}

function maskPhone(v: string) {
  const d = stripCC(v).slice(0, 11);
  if (d.length <= 2) return d.length ? "(" + d : d;
  if (d.length <= 6) return "(" + d.slice(0, 2) + ") " + d.slice(2);
  if (d.length <= 10) return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
  return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
}

function digitsOnly(v: string) {
  return stripCC(v.replace(/\D/g, ""));
}

function isValidPhone(v: string) {
  const d = digitsOnly(v);
  if (d.length !== 10 && d.length !== 11) return false;
  if (VALID_DDDS.indexOf(d.slice(0, 2)) === -1) return false;
  if (d.length === 11 && d.charAt(2) !== "9") return false;
  if (/^(\d)\1+$/.test(d.slice(2))) return false;
  return true;
}

function getAttribution() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") || "",
    utm_medium: p.get("utm_medium") || "",
    utm_campaign: p.get("utm_campaign") || "",
    utm_content: p.get("utm_content") || "",
    utm_term: p.get("utm_term") || "",
    gclid: p.get("gclid") || "",
    fbclid: p.get("fbclid") || "",
  };
}

const iconClass = "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400";
const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3.5 text-left text-[14px] text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const labelClass = "mb-1.5 block text-left text-[11.5px] font-semibold uppercase tracking-wide text-slate-500";

export function InlineLeadForm() {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [telInvalid, setTelInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [arroba, setArroba] = useState("@");
  const [fat, setFat] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleTelBlur() {
    setTelInvalid(!!tel && !isValidPhone(tel));
  }

  function handleSubmit() {
    setError("");

    if (nome.trim().length < 2) {
      setError("Informe seu nome completo.");
      return;
    }
    if (!isValidPhone(tel)) {
      setError("Informe um WhatsApp válido com DDD, ex: (11) 99999-9999.");
      setTelInvalid(true);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Informe um e-mail válido.");
      return;
    }
    if (!fat) {
      setError("Selecione uma faixa de faturamento.");
      return;
    }

    let handle = arroba.trim();
    if (handle && !handle.startsWith("@")) handle = "@" + handle;

    const leadId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : "lead-" + Date.now() + "-" + Math.random().toString(36).slice(2, 10);

    const faturamentoLabel = faturamentoOptions.find((o) => o.value === fat)?.label || fat;

    const payload = {
      lead_id: leadId,
      nome: nome.trim(),
      email: email.trim(),
      perfilArroba: handle,
      telefone: tel,
      telefoneDigits: digitsOnly(tel),
      faturamento: fat,
      faturamentoLabel,
      consentiuContato: true,
      origem: "scale-advogados-3-inline",
      form_name: "scale_advogados_3_inline_lp",
      pagina: "/scale-advogados-3",
      criadoEm: new Date().toISOString(),
      ...getAttribution(),
    };

    setSubmitting(true);
    setSuccess(true);

    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "lead_submit_success", payload });

    fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    fetch(EXCEL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      mode: "no-cors",
    }).catch(() => {});
  }

  if (success) {
    return (
      <div id="formulario" className="mx-auto mt-8 max-w-sm rounded-3xl bg-white p-8 text-center text-slate-900 shadow-2xl md:max-w-md">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-[17px] font-extrabold">Recebemos seus dados!</p>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">Nosso time entra em contato pelo WhatsApp em breve.</p>
      </div>
    );
  }

  return (
    <div id="formulario" className="mx-auto mt-8 max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl md:max-w-md">
      <div className="px-6 pb-1 pt-6 text-center">
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/10">
          <ArrowRight className="h-5 w-5 text-blue-600" />
        </div>
        <p className="text-[16px] font-extrabold text-slate-900">Preencha e fale com a gente agora</p>
        <p className="mt-1 text-[12.5px] text-slate-500">Resposta rápida direto no seu WhatsApp.</p>
      </div>

      <div className="grid gap-3.5 px-6 pb-6 pt-5">
        <div>
          <label className={labelClass}>Nome completo</label>
          <div className="relative">
            <User className={iconClass} />
            <input
              type="text"
              autoComplete="name"
              placeholder="Seu nome"
              className={inputClass}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>WhatsApp</label>
          <div className="relative">
            <Phone className={iconClass} />
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="(11) 99999-9999"
              className={`${inputClass} ${telInvalid ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
              value={tel}
              onChange={(e) => {
                setTel(maskPhone(e.target.value));
                setTelInvalid(false);
              }}
              onBlur={handleTelBlur}
            />
          </div>
          {telInvalid && <p className="mt-1 text-[12px] text-red-500">Confira o DDD e o número.</p>}
        </div>

        <div>
          <label className={labelClass}>E-mail</label>
          <div className="relative">
            <Mail className={iconClass} />
            <input
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="seuemail@exemplo.com"
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Instagram do escritório</label>
          <div className="relative">
            <AtSign className={iconClass} />
            <input
              type="text"
              autoComplete="off"
              placeholder="@seuescritorio"
              className={inputClass}
              value={arroba}
              onChange={(e) => setArroba(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Faturamento mensal aproximado</label>
          <div className="relative">
            <TrendingUp className={iconClass} />
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <select
              className={`${inputClass} appearance-none pr-9`}
              value={fat}
              onChange={(e) => setFat(e.target.value)}
            >
              <option value="">Selecione...</option>
              {faturamentoOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && <p className="text-center text-[13px] font-medium text-red-500">{error}</p>}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-[#379D2E] px-6 py-3.5 text-[15px] font-extrabold uppercase tracking-wide text-white transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
        >
          Enviar
          <ArrowRight className="h-4 w-4" />
        </button>

        <p className="flex items-center justify-center gap-1.5 text-[11.5px] leading-relaxed text-slate-400">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          Seus dados estão seguros com a gente.
        </p>
      </div>
    </div>
  );
}
