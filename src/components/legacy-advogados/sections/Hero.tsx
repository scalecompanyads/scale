"use client";

import Image from "@/components/legacy-advogados/ui/next-image-shim";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";
import { ScaleLogo } from "@/components/legacy-advogados/ui/scale-logo";
import { cn } from "@/components/legacy-advogados/lib/utils";

const proofPoints = ["200+ escritórios atendidos", "Compliance OAB garantido"];

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
  /** @deprecated Use headlineLine1–3 para controle das 3 linhas */
  headline?: string;
  /** @deprecated Use headlineLine3 (com destaque) */
  headlineHighlight?: string;
  subHeadline?: string;
}

const DEFAULT_HEADLINE_LINES = [
  "Advogados que dependem",
  "de indicação",
  "crescem devagar.",
] as const;

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

export function Hero(props: HeroProps) {
  const { subHeadline } = props;
  const [titleLine1, titleLine2, titleLine3] = resolveHeadlineLines(props);
  const sub = subHeadline ?? "Escritórios que constroem uma máquina de aquisição crescem com previsibilidade.";

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-16 pt-4 sm:pt-6 lg:min-h-screen lg:pt-[100px] lg:pb-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="glow-blue pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[700px] -translate-x-1/2 opacity-25 lg:left-0" />

      <div className="relative z-10 mx-auto flex w-[80vw] max-w-[80vw] flex-1 items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex w-full max-w-[41.4rem] flex-col items-start justify-center text-left">
            <div className="mb-4 flex justify-start lg:hidden">
              <a href="#" className="inline-flex py-0.5" aria-label="Scale Company — início">
                <ScaleLogo heightClass="h-9" className="max-w-[240px]" />
              </a>
            </div>

            <h1 className="hero-title mb-3 w-full max-w-[41.4rem] text-left font-display font-bold tracking-tight text-white md:tracking-[-0.03em]">
              <span className="block whitespace-nowrap">{titleLine1}</span>
              <span className="block whitespace-nowrap">{titleLine2}</span>
              <span className="block whitespace-nowrap text-gradient-white">{titleLine3}</span>
            </h1>

            <p className="hero-subheadline mb-4 mt-2 max-w-[41.4rem] text-left font-display text-base font-semibold leading-snug text-brand-blue sm:text-lg sm:leading-tight md:text-display-md md:leading-[1.06]">
              {sub}
            </p>

            <p className="mb-8 max-w-[41.4rem] text-left text-sm leading-relaxed text-content-secondary sm:text-base md:text-lg lg:mb-6">
              A Scale Company estrutura, executa e otimiza todo o seu processo de geração de clientes.{" "}
              <span className="font-medium text-white">Do primeiro clique até o fechamento do contrato.</span>
            </p>

            <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <ShinyButton
                openLeadForm
                className="min-h-[3.25rem] px-10 py-5 text-lg"
                aria-label="Quero atrair clientes com previsibilidade"
              >
                Quero atrair clientes com previsibilidade
                <ArrowRight className="h-5 w-5" />
              </ShinyButton>
              <a href="#problema" className="btn-outline">
                Entender o problema primeiro
              </a>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 lg:mt-6">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-blue" />
                  <span className="text-sm text-content-secondary">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full min-w-0 max-w-full items-center justify-center lg:max-w-[644px] lg:justify-end">
            <div className="aspect-[4/3] w-full max-w-full overflow-hidden border border-white/[0.1] shadow-elevated lg:max-w-[644px]">
              <div className="flex h-full w-full">
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
                      sizes="(max-width: 1024px) 100vw, 28vw"
                      className="relative z-[1] object-cover object-top transition duration-500 md:group-hover:scale-[1.03]"
                      priority={index === 2}
                    />
                    <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 md:transition-opacity md:duration-300 md:group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 z-[3] flex flex-col items-center justify-end p-3 text-center sm:p-4">
                      <div
                        className={cn(
                          "flex flex-col transition duration-300 ease-out",
                          "translate-y-0 opacity-100",
                          "md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100"
                        )}
                      >
                        <p className="font-display text-base font-bold leading-tight text-white sm:text-lg md:text-xl">
                          {person.name}
                        </p>
                        <p className="mx-auto mt-1 max-w-[14rem] text-xs leading-snug text-white/85 sm:text-sm">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-950 to-transparent" />
    </section>
  );
}
