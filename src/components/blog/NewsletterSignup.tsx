"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { MAKE_WEBHOOK_URL, EXCEL_WEBHOOK_URL } from "@/lib/webhooks";

type NewsletterSignupProps = {
  /** "dark" para o índice do blog (bg-[#010f1c]), "light" para dentro de um post (bg-slate-50) */
  variant?: "dark" | "light";
  /** identifica de onde veio a inscrição (ex: "blog-index" ou o slug do post) */
  source: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function NewsletterSignup({ variant = "light", source }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState<string | null>(null);
  const dark = variant === "dark";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(email)) {
      setError("Informe um e-mail válido.");
      return;
    }

    setStatus("submitting");

    const payload = {
      type: "newsletter_signup",
      email: email.trim(),
      source,
      pagina: typeof window !== "undefined" ? window.location.pathname : "",
      criadoEm: new Date().toISOString(),
    };

    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Erro ao enviar inscrição de newsletter:", err);
    }

    try {
      await fetch(EXCEL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });
    } catch (err) {
      console.error("Erro ao enviar inscrição de newsletter para Excel webhook:", err);
    }

    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div
        className={`not-prose rounded-2xl border p-6 sm:p-8 text-center shadow-blue-soft ${
          dark ? "bg-[#021626] border-white/10" : "bg-white border-slate-200"
        }`}
      >
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10">
          <CheckCircle2 className="h-6 w-6 text-emerald-400" />
        </div>
        <p className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>Inscrição confirmada.</p>
        <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-slate-600"}`}>
          Você vai receber os próximos artigos da Scale por e-mail.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`not-prose relative overflow-hidden rounded-2xl border p-6 sm:p-8 shadow-blue-soft ${
        dark ? "bg-[#021626] border-white/10" : "bg-white border-slate-200"
      }`}
    >
      <div className="glow-cyan pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full" aria-hidden="true" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <Mail className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? "text-blue-400" : "text-blue-500"}`} />
          <div>
            <p className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}>
              Receba os próximos artigos por e-mail
            </p>
            <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-slate-600"}`}>
              Sem spam. Só conteúdo novo de marketing jurídico, quando publicarmos.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className={`w-full rounded-full border px-4 py-2.5 text-sm outline-none transition-colors ${
              dark
                ? "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-blue-400"
                : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-400"
            }`}
          />
          <button type="submit" disabled={status === "submitting"} className="btn-shiny shrink-0 whitespace-nowrap disabled:opacity-50">
            {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Inscrever"}
          </button>
        </form>
      </div>
      {error && <p className="relative mt-3 text-sm text-red-400">{error}</p>}
    </div>
  );
}
