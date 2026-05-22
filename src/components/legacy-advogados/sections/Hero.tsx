"use client";

import Image from "@/components/legacy-advogados/ui/next-image-shim";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";
import { ScaleLogo } from "@/components/legacy-advogados/ui/scale-logo";
import { cn } from "@/components/legacy-advogados/lib/utils";

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
  "Agência Especializada",
  "para Escritórios de",
  "Advocacia",
] as const;

const DEFAULT_SUBHEADLINE =
  "Implementamos uma máquina de aquisição de novos contratos com uma estrutura validada";

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

export function Hero(props: HeroProps) {
  const { subHeadline } = props;
  const [titleLine1, titleLine2, titleLine3] = resolveHeadlineLines(props);
  const sub = subHeadline ?? DEFAULT_SUBHEADLINE;
  return (
    <section className="relative flex min-h-screen items-center overflow-x-hidden pb-16 pt-4 sm:pt-6 lg:min-h-screen lg:items-stretch lg:justify-center lg:overflow-hidden lg:pt-[100px] lg:pb-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="glow-blue pointer-events-none absolute -top-40 left-1/2 h-[min(500px,80vw)] w-[min(700px,120vw)] -translate-x-1/2 opacity-25 lg:left-0 lg:h-[500px] lg:w-[700px]" />

      {/* Mobile — centralizado, sem overflow horizontal */}
      <div className="container-page relative z-10 w-full min-w-0 max-w-full lg:hidden">
        <div className="mx-auto flex w-full min-w-0 max-w-full flex-col items-center gap-8 sm:gap-10">
          <div className="w-full min-w-0 max-w-full text-center">
            <div className="mb-4 flex justify-center">
              <a href="#" className="inline-flex max-w-full py-0.5" aria-label="Scale Company — início">
                <ScaleLogo heightClass="h-9" className="max-w-[min(240px,100%)]" />
              </a>
            </div>

            <h1 className="hero-title-mobile mb-3 w-full max-w-full text-balance font-display font-normal leading-[1.12] tracking-tight text-white">
              <span className="hero-title-bold block">{titleLine1}</span>
              <span className="hero-title-bold block">{titleLine2}</span>
              <span className="hero-title-light block">{titleLine3}</span>
            </h1>

            <p className="hero-subheadline mx-auto mb-5 mt-2 w-full max-w-xl text-pretty text-center font-display font-semibold text-white">
              {sub}
            </p>

            <p className="mx-auto mb-6 w-full max-w-xl text-pretty text-center text-sm leading-relaxed text-content-secondary sm:text-base">
              A Scale Company estrutura, executa e otimiza todo o seu processo de geração de clientes.{" "}
              <span className="font-medium text-white">Do primeiro clique até o fechamento do contrato.</span>
            </p>
          </div>

          <SquadPanels className="h-[min(32vh,280px)] min-h-[200px] w-full min-w-0 max-w-full sm:h-[min(34vh,320px)]" />

          <HeroCTAs mobile className="px-0" />
          <HeroProofPoints mobile />
        </div>
      </div>

      {/* Desktop — coluna única empilhada e centralizada */}
      <div className="container-page hero-desktop-container relative z-10 hidden w-full flex-1 items-center lg:flex">
        <div className="hero-desktop-stack flex w-full min-w-0 max-w-full flex-col items-center gap-10 xl:gap-12">
          <div className="hero-desktop-copy mx-auto flex w-full min-w-0 max-w-[62.1rem] flex-col items-center text-center">
            <h1 className="hero-title mb-3 mt-[50px] w-full min-w-0 max-w-full text-center font-display font-normal tracking-tight text-white md:tracking-[-0.03em]">
              <span className="hero-title-bold block">{titleLine1}</span>
              <span className="hero-title-bold block">{titleLine2}</span>
              <span className="hero-title-light block">{titleLine3}</span>
            </h1>

            <p className="hero-subheadline mx-auto mb-4 mt-2 max-w-[62.1rem] text-center font-display font-semibold text-white">
              {sub}
            </p>

            <p className="mx-auto max-w-[62.1rem] text-center text-sm leading-relaxed text-content-secondary sm:text-base md:text-lg">
              A Scale Company estrutura, executa e otimiza todo o seu processo de geração de clientes.{" "}
              <span className="font-medium text-white">Do primeiro clique até o fechamento do contrato.</span>
            </p>
          </div>

          <SquadPanels className="mx-auto aspect-[4/3] h-auto min-h-[320px] w-full max-w-[72rem]" />

          <HeroCTAs className="w-full !items-center !justify-center sm:flex-wrap" />
          <HeroProofPoints className="w-full !items-center !justify-center" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-950 to-transparent" />
    </section>
  );
}
