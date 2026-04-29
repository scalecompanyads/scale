"use client";

import Image from "@/components/legacy-advogados/ui/next-image-shim";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { stagger, fadeUp } from "@/components/legacy-advogados/lib/animations";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";
import { ScaleLogo } from "@/components/legacy-advogados/ui/scale-logo";
import { cn } from "@/components/legacy-advogados/lib/utils";

const proofPoints = ["200+ escritórios atendidos", "Compliance OAB garantido"];

const squad = [
  {
    name: "Gabriel Dias",
    role: "Chief Organization Officer",
    image: "/images/hero-squad-1.png",
    bg: "bg-[#f5a8bc]",
  },
  {
    name: "Pedro Clark",
    role: "Chief Executive Officer",
    image: "/images/hero-squad-2.png",
    bg: "bg-[#ff6a00]",
  },
  {
    name: "Vitor Escocard",
    role: "Sócio da Scale Company",
    image: "/images/hero-squad-3.png",
    bg: "bg-[#4ecdc4]",
  },
] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-4 sm:pt-6 lg:min-h-[90vh] lg:flex-col lg:items-stretch lg:pt-[140px] lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="glow-blue absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 opacity-25" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto flex w-full flex-col items-center gap-10 lg:gap-5"
        >
          <div className="mx-auto w-full max-w-6xl text-center lg:flex lg:min-h-[calc(70vh-4.5rem)] lg:flex-col lg:justify-center lg:py-2">
            <motion.div variants={fadeUp} className="mb-4 flex justify-center lg:hidden">
              <a href="#" className="inline-flex py-0.5" aria-label="Scale Company — início">
                <ScaleLogo heightClass="h-9" className="max-w-[240px]" />
              </a>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mb-3 text-center font-display text-[1.65rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-3xl sm:leading-[1.06] md:text-display-2xl md:leading-[0.98] md:tracking-[-0.03em]"
            >
              Advogados que dependem de indicação{" "}
              <span className="text-gradient-white">crescem devagar.</span>
            </motion.h1>

            <div className="mx-auto w-[70%] max-w-full text-center">
              <motion.p
                variants={fadeUp}
                className="mb-6 mt-2 text-center font-display text-base font-bold leading-snug text-brand-orange sm:text-lg sm:leading-tight md:text-display-md md:leading-[1.06]"
              >
                Escritórios que constroem uma máquina de aquisição crescem com previsibilidade.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-content-secondary sm:text-base md:text-lg lg:mb-3"
              >
                A Scale Company estrutura, executa e otimiza todo o seu processo de geração de clientes.{" "}
                <span className="font-medium text-white">Do primeiro clique até o fechamento do contrato.</span>
              </motion.p>
            </div>
          </div>

          {/* Expanding image panels */}
          <motion.div
            variants={fadeUp}
            className="-mt-[40px] flex h-[min(37.2vh,336px)] w-full min-h-[228px] overflow-hidden border border-white/[0.1] shadow-elevated sm:h-[min(36vh,372px)] md:mt-0 md:h-[min(60vh,620px)] md:min-h-[380px] lg:-mt-2"
          >
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
                    alt={`Retrato de ${person.name}, ${person.role}`}
                    fill
                    sizes="(max-width: 1024px) 34vw, 28vw"
                    className="relative z-[1] object-cover object-top transition duration-500 md:group-hover:scale-[1.03]"
                    priority={index === 0}
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
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
          >
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
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
          >
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-blue" />
                <span className="text-sm text-content-secondary">{point}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-950 to-transparent" />
    </section>
  );
}
