"use client";

import { useState } from "react";
import Image from "@/components/legacy-advogados/ui/next-image-shim";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";
import { ScaleLogo } from "@/components/legacy-advogados/ui/scale-logo";
import { cn } from "@/components/legacy-advogados/lib/utils";
import { digitsOnly, maskPhoneBR } from "@/components/legacy-advogados/lib/phone-mask";

const proofPoints = ["+ 200 escritórios", "Compliance com OAB Garantido"];

const squad = [
  {
    name: "Gabriel Dias",
    role: "Chief Organization Officer",
    image: "/images/hero-squad-1-480.webp",
    srcSet: "/images/hero-squad-1-320.webp 320w, /images/hero-squad-1-480.webp 480w",
    bg: "bg-[#f5a8bc]",
  },
  {
    name: "Pedro Clark",
    role: "Chief Executive Officer",
    image: "/images/hero-squad-2-480.webp",
    srcSet: "/images/hero-squad-2-320.webp 320w, /images/hero-squad-2-480.webp 480w",
    bg: "bg-[#ff6a00]",
  },
  {
    name: "Vitor Escocard",
    role: "Sócio da Scale Company",
    image: "/images/hero-squad-3-480.webp",
    srcSet: "/images/hero-squad-3-320.webp 320w, /images/hero-squad-3-480.webp 480w",
    bg: "bg-[#4ecdc4]",
  },
] as const;

interface HeroProps {
  headlineLine1?: string;
  headlineLine2?: string;
  headlineLine3?: string;
  headline?: string;
  headlineHighlight?: string;
  subHeadline?: string;
}

const DEFAULT_HEADLINE_LINES = [
  "Marketing Jurídico.",
  "Assessoria focada em",
  "Captação para Advogados.",
] as const;

const DEFAULT_SUBHEADLINE =
  "Implementação em 15 dias da Máquina de Aquisição de novos contratos com um método validado para Advocacia.";

const MAKE_WEBHOOK_URL = "https://hook.us1.make.com/bk8vzf7u1d7m0fueemgfqemutft9k6ve";
const EXCEL_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwdcXNSA-sUdCtT4JXky5JMTDihkGb1zNL41DLlgFTpOU1aMWs2xw0HmxpWiMIKYIDx/exec";

const FATURAMENTO_OPTIONS = [
  { value: "menos_30k", label: "Menos de R$ 30 mil" },
  { value: "30_50k", label: "Entre R$ 30 mil e R$ 50 mil" },
  { value: "50_100k", label: "Entre R$ 50 mil e R$ 100 mil" },
  { value: "100k_plus", label: "Mais de R$ 100 mil" },
] as const;

type Faturamento = (typeof FATURAMENTO_OPTIONS)[number]["value"];

function HeroInlineForm() {
  const [form, setForm] = useState({ nome: "", perfilArroba: "", telefone: "", faturamento: "" as Faturamento | "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    if (form.nome.trim().length < 2) { setError("Informe seu nome completo."); return; }
    if (digitsOnly(form.telefone).length < 10) { setError("Informe um WhatsApp válido com DDD."); return; }
    const h = form.perfilArroba.trim().replace(/^@+/, "");
    if (h.length < 2) { setError("Informe o @ do perfil profissional."); return; }
    if (!form.faturamento) { setError("Selecione uma faixa de faturamento."); return; }

    setSubmitting(true);
    const perfilNormalizado = form.perfilArroba.trim().startsWith("@") ? form.perfilArroba.trim() : `@${form.perfilArroba.trim()}`;
    const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
    const payload = {
      lead_id: crypto?.randomUUID?.() ?? `lead-${Date.now()}`,
      nome: form.nome.trim(),
      perfilArroba: perfilNormalizado,
      telefone: form.telefone,
      telefoneDigits: digitsOnly(form.telefone),
      faturamento: form.faturamento,
      faturamentoLabel: FATURAMENTO_OPTIONS.find((o) => o.value === form.faturamento)?.label ?? form.faturamento,
      origem: "hero-inline-form",
      pagina: typeof window !== "undefined" ? window.location.pathname : "/advogados",
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      createdAt: new Date().toISOString(),
    };
    try {
      await fetch(MAKE_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    } catch {}
    try {
      await fetch(EXCEL_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload), mode: "no-cors" });
    } catch {}
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: "lead_submit_success", ...payload });
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full rounded-2xl border border-white/[0.1] bg-black/60 p-6 text-center backdrop-blur-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-green-500/40 bg-green-500/20">
          <CheckCircle2 className="h-8 w-8 text-green-400" />
        </div>
        <p className="font-display text-lg font-bold text-white">Entraremos em contato em até 30 minutos</p>
        <p className="mt-2 text-xs text-content-tertiary">*Válido apenas em horários comerciais.</p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-white/[0.1] bg-black/60 p-6 backdrop-blur-sm md:p-8">
      <h3 className="mb-1 text-center font-display text-lg font-bold text-white">Aplique agora</h3>
      <p className="mb-5 text-center text-sm text-content-secondary">Preencha e receba contato do nosso time.</p>
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-content-secondary">Nome completo</label>
          <input type="text" className="input w-full" placeholder="Seu nome" value={form.nome} onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-content-secondary">WhatsApp</label>
          <input type="tel" inputMode="numeric" className="input w-full" placeholder="(11) 99999-9999" value={form.telefone} onChange={(e) => setForm((f) => ({ ...f, telefone: maskPhoneBR(e.target.value) }))} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-content-secondary">@ do Instagram</label>
          <input type="text" className="input w-full" placeholder="@escritorio" value={form.perfilArroba} onChange={(e) => setForm((f) => ({ ...f, perfilArroba: e.target.value }))} />
        </div>
        <div>
          <label className="mb-4 block text-sm font-medium text-content-secondary">Faturamento mensal</label>
          <div className="faturamento-track-wrapper">
            <div className="faturamento-track">
              <div className="faturamento-track-fill" style={{ width: `${(FATURAMENTO_OPTIONS.findIndex((o) => o.value === form.faturamento) === -1 ? 0 : FATURAMENTO_OPTIONS.findIndex((o) => o.value === form.faturamento)) / 3 * 100}%` }} />
              {FATURAMENTO_OPTIONS.map((opt, i) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, faturamento: opt.value }))}
                  className={cn("faturamento-checkpoint", form.faturamento === opt.value && "active")}
                  style={{ left: `${(i / 3) * 100}%` }}
                  aria-label={opt.label}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            {FATURAMENTO_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setForm((f) => ({ ...f, faturamento: opt.value }))}
                className={cn("text-[11px] leading-tight text-center max-w-[72px] transition-all duration-200 cursor-pointer", form.faturamento === opt.value ? "text-white font-semibold scale-105" : "text-content-tertiary hover:text-content-secondary")}
              >
                {opt.label.replace("Entre ", "").replace("Menos de ", "< ").replace("Mais de ", "> ")}
              </button>
            ))}
          </div>
        </div>
        {error && <p className="text-center text-sm text-red-400">{error}</p>}
        <button type="button" disabled={submitting} onClick={handleSubmit} className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center gap-2">
          {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Enviar"}
        </button>
        <p className="text-center text-xs text-content-tertiary">Ao enviar, você concorda em receber mensagens e ligações da Scale Company.</p>
      </div>
    </div>
  );
}

function resolveHeadlineLines({
  headlineLine1,
  headlineLine2,
  headlineLine3,
  headline,
  headlineHighlight,
}: HeroProps): readonly [string, string, string] {
  if (headlineLine1 && headlineLine2 && headlineLine3) {
    return [headlineLine1, headlineLine2, headlineLine3];
  }
  if (headline === "Marketing jurídico para escritórios que querem") {
    return [
      "Marketing jurídico para",
      "escritórios que querem",
      headlineHighlight ?? "atrair clientes com previsibilidade.",
    ];
  }
  if (headline || headlineHighlight) {
    return [DEFAULT_HEADLINE_LINES[0], DEFAULT_HEADLINE_LINES[1], headlineHighlight ?? DEFAULT_HEADLINE_LINES[2]];
  }
  return DEFAULT_HEADLINE_LINES;
}

function SquadPanels({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-full overflow-hidden border border-white/[0.1] shadow-elevated", className)}>
      {squad.map((person, index) => (
        <div
          key={person.name}
          tabIndex={0}
          className={cn(
            "group relative min-w-0 flex-1 overflow-hidden transition-[flex] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "cursor-default md:cursor-pointer",
            "md:hover:flex-[2.6] md:focus-visible:flex-[2.6]",
            "focus-visible:outline-none md:focus-visible:ring-2 md:focus-visible:ring-inset md:focus-visible:ring-brand-blue/60"
          )}
        >
          <div className={cn("absolute inset-0 z-0", person.bg)} />
          <Image
            src={person.image}
            srcSet={person.srcSet}
            alt={`Retrato de ${person.name}, ${person.role}`}
            fill
            sizes="(max-width: 1024px) 34vw, 28vw"
            className="relative z-[1] object-cover object-top transition duration-500 md:group-hover:scale-[1.03]"
            priority={index === 2}
          />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 md:transition-opacity md:duration-300 md:group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 z-[3] flex flex-col items-center justify-end p-3 text-center sm:p-4 md:p-5">
            <div
              className={cn(
                "flex flex-col transition duration-300 ease-out",
                "translate-y-0 opacity-100",
                "md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100"
              )}
            >
              <p className="font-display text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl">
                {person.name}
              </p>
              <p className="mx-auto mt-1 max-w-[18rem] text-xs leading-snug text-white/85 sm:text-sm">
                {person.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroCTAs({ className, mobile }: { className?: string; mobile?: boolean }) {
  return (
    <div
      className={cn(
        "flex w-full min-w-0 max-w-full flex-col items-stretch justify-center gap-4",
        !mobile && "sm:flex-row sm:items-center",
        className
      )}
    >
      <ShinyButton
        openLeadForm
        className={cn(
          "min-h-[3.25rem] w-full max-w-full whitespace-normal text-center leading-snug",
          mobile ? "px-5 py-4 text-sm sm:text-base" : "px-10 py-5 text-lg sm:w-auto"
        )}
        aria-label="Quero atrair clientes com previsibilidade"
      >
        Quero atrair clientes com previsibilidade
        <ArrowRight className="h-5 w-5" />
      </ShinyButton>
      <a
        href="#problema"
        className={cn("btn-outline text-center", mobile ? "w-full max-w-full" : "sm:w-auto")}
      >
        Entender o problema primeiro
      </a>
    </div>
  );
}

function HeroProofPoints({ className, mobile }: { className?: string; mobile?: boolean }) {
  return (
    <div
      className={cn(
        "flex w-full min-w-0 max-w-full flex-col items-center justify-center gap-3",
        !mobile && "sm:flex-row sm:gap-8",
        className
      )}
    >
      {proofPoints.map((point) => (
        <div
          key={point}
          className={cn("flex max-w-full items-center gap-2", mobile && "justify-center text-center")}
        >
          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-blue" />
          <span className="text-sm leading-snug text-content-secondary">{point}</span>
        </div>
      ))}
    </div>
  );
}

export function HeroAdvogados(props: HeroProps) {
  const { subHeadline } = props;
  const [titleLine1, titleLine2, titleLine3] = resolveHeadlineLines(props);
  const sub = subHeadline ?? DEFAULT_SUBHEADLINE;
  return (
    <section className="relative flex min-h-screen items-center overflow-x-hidden pb-16 pt-4 sm:pt-6 lg:min-h-[90vh] lg:pt-[100px] lg:pb-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="glow-blue pointer-events-none absolute -top-40 left-1/2 h-[min(500px,80vw)] w-[min(700px,120vw)] -translate-x-1/2 opacity-25" />

      {/* Mobile — centralizado */}
      <div className="container-page relative z-10 w-full min-w-0 max-w-full lg:hidden">
        <div className="mx-auto flex w-full min-w-0 max-w-full flex-col items-center gap-4 sm:gap-6">
          <div className="w-full min-w-0 max-w-full text-center">
            <div className="mb-4 flex justify-center">
              <a href="#" className="inline-flex max-w-full py-0.5" aria-label="Scale Company — início">
                <ScaleLogo heightClass="h-9" className="max-w-[min(240px,100%)]" />
              </a>
            </div>

            <h1 className="hero-title-mobile mb-3 w-full max-w-full text-balance font-display font-bold leading-[1.12] tracking-tight text-white">
              <span className="block">{titleLine1}</span>
              <span className="block">{titleLine2}</span>
              <span className="block">{titleLine3}</span>
            </h1>

            <p className="hero-subheadline text-gradient-blue-metallic mx-auto mb-5 mt-2 w-full max-w-xl text-pretty text-center font-display text-base font-semibold leading-snug sm:text-lg">
              {sub}
            </p>

            <p className="mx-auto mb-6 w-full max-w-xl text-pretty text-center text-sm leading-relaxed text-content-secondary sm:text-base">
              Estruturamos e otimizamos todo o seu processo de geração de contratos.{" "}
              <span className="font-medium text-white">Previsibilidade de honorários e crescimento.</span>
            </p>
          </div>

          <HeroInlineForm />

          <HeroProofPoints mobile />
        </div>
      </div>

      {/* Desktop — duas colunas */}
      <div className="container-page relative z-10 hidden w-full flex-1 items-center lg:flex">
        <div className="grid w-full items-center gap-12 xl:gap-16 lg:grid-cols-2">
          <div className="hero-desktop-copy flex w-full min-w-0 max-w-[41.4rem] flex-col items-start justify-center text-left">
            <a href="#" className="mb-6 inline-flex" aria-label="Scale Company — início">
              <ScaleLogo heightClass="h-10" className="max-w-[260px]" />
            </a>

            <h1 className="hero-title mb-3 w-full min-w-0 max-w-full text-left font-display font-bold tracking-tight text-white md:tracking-[-0.03em]">
              <span className="block">{titleLine1}</span>
              <span className="block">{titleLine2}</span>
              <span className="block">{titleLine3}</span>
            </h1>

            <p className="hero-subheadline text-gradient-blue-metallic mb-4 mt-2 max-w-[41.4rem] text-left font-display text-base font-semibold leading-snug sm:text-lg sm:leading-tight md:text-display-md md:leading-[1.06]">
              {sub}
            </p>

            <p className="mb-8 max-w-[41.4rem] text-left text-sm leading-relaxed text-content-secondary sm:text-base md:text-lg lg:mb-6">
              Estruturamos e otimizamos todo o seu processo de geração de contratos.{" "}
              <span className="font-medium text-white">Previsibilidade de honorários e crescimento.</span>
            </p>

            <HeroProofPoints className="!items-start !justify-start" />
          </div>

          <div className="flex w-full min-w-0 items-center justify-end">
            <div className="w-full max-w-[440px]">
              <HeroInlineForm />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-950 to-transparent" />
    </section>
  );
}
