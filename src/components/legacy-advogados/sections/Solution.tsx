"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, AlertTriangle } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/components/legacy-advogados/lib/animations";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";
import { cn } from "@/components/legacy-advogados/lib/utils";

const wrongSearches = [
  "especialista em direito à saúde suplementar",
  "advogado previdenciário de excelência",
] as const;

const rightSearches = [
  "plano de saúde negou cirurgia",
  "convênio recusou exame",
  "liminar urgente plano de saúde",
  "INSS negou benefício",
  "o que fazer quando plano de saúde nega",
] as const;

const areas = [
  { name: "Criminal", example: "o que fazer quando sou acusado de crime" },
  { name: "Previdenciário", example: "INSS negou meu benefício o que fazer" },
  { name: "Família", example: "como conseguir pensão alimentícia urgente" },
  { name: "Tributário", example: "empresa autuada pela receita federal" },
];

function useTypewriterCycle(lines: readonly string[]) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "hold" | "erase">("typing");

  const current = lines[lineIdx] ?? "";

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const typeMs = 42;
    const holdMs = 2600;
    const eraseMs = 28;
    const gapMs = 400;

    if (phase === "typing") {
      if (charIdx < current.length) {
        id = setTimeout(() => setCharIdx((c) => c + 1), typeMs);
      } else {
        id = setTimeout(() => setPhase("hold"), holdMs);
      }
    } else if (phase === "hold") {
      id = setTimeout(() => setPhase("erase"), gapMs);
    } else if (charIdx > 0) {
      id = setTimeout(() => setCharIdx((c) => c - 1), eraseMs);
    } else {
      id = setTimeout(() => {
        setLineIdx((i) => (i + 1) % lines.length);
        setPhase("typing");
      }, gapMs);
    }

    return () => clearTimeout(id);
  }, [phase, charIdx, lineIdx, current]);

  return current.slice(0, charIdx);
}

function GoogleTypingSearchBar({
  queries,
  variant,
}: {
  queries: readonly string[];
  variant: "wrong" | "right";
}) {
  const typed = useTypewriterCycle(queries);

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-full border bg-white px-4 py-3.5 shadow-[0_1px_6px_rgba(32,33,36,0.28)] md:px-5 md:py-4",
        variant === "wrong" ? "border-[#dfe1e5]" : "border-[#dfe1e5]"
      )}
    >
      <Search className="h-5 w-5 flex-shrink-0 text-[#9aa0a6]" aria-hidden />
      <p
        className="min-h-[1.375rem] flex-1 text-left text-[15px] font-normal leading-snug text-[#202124] md:text-base"
        aria-live="polite"
      >
        {typed}
        <span
          className="ml-0.5 inline-block h-[1.05em] w-px translate-y-[0.1em] bg-[#1a73e8] align-middle animate-pulse"
          aria-hidden
        />
      </p>
    </div>
  );
}

export function Solution() {
  return (
    <section id="solucao" className="section">
      <div className="pointer-events-none absolute inset-0 bg-gradient-section" />

      <div className="container-page relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            A maioria das campanhas jurídicas falha porque{" "}
            <span>ignora o comportamento real</span> do cliente
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto">
            O advogado fala técnico. O cliente pesquisa com dor.
          </motion.p>
        </motion.div>

        {/* Comparison — Google-style search bars */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mb-16 grid max-w-4xl gap-6 lg:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-red-500/25 bg-red-500/[0.07] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <span className="text-sm font-medium uppercase tracking-widest text-red-400">
                Como o Advogado Pensa
              </span>
            </div>
            <GoogleTypingSearchBar queries={wrongSearches} variant="wrong" />
            <p className="mt-4 text-xs text-red-400/80">
              Quem usa essa linguagem, gera clique. Não cliente.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-brand-blue/30 bg-brand-blue-900/35 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <div className="mb-4 flex items-center gap-2">
              <Search className="h-4 w-4 text-brand-blue-light" />
              <span className="text-sm font-medium uppercase tracking-widest text-brand-blue-light">
                Como o Cliente pesquisa
              </span>
            </div>
            <GoogleTypingSearchBar queries={rightSearches} variant="right" />
            <p className="mt-4 text-xs text-brand-blue-light/90">
              Quem entende isso, gera cliente. Não só clique.
            </p>
          </motion.div>
        </motion.div>

        {/* Pattern repeats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-4xl"
        >
          <motion.p variants={fadeUp} className="mb-8 text-center text-content-secondary">
            Esse padrão se repete em todas as áreas:
          </motion.p>

          <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <motion.div key={area.name} variants={fadeUp} className="card text-center">
                <p className="mb-2 font-display font-bold text-white">{area.name}</p>
                <p className="text-xs italic text-content-tertiary">&ldquo;{area.example}&rdquo;</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 text-center">
            <ShinyButton openLeadForm>
              Quero aplicar isso no meu escritório
              <ArrowRight className="h-4 w-4" />
            </ShinyButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
