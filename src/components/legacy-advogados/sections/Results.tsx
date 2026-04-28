"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/components/legacy-advogados/lib/animations";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";
import TeamShowcase from "@/components/legacy-advogados/ui/team-showcase";

const controls = [
  {
    label: "Controle sobre a entrada de novos casos",
    description: "Voc├¬ decide o volume de leads que quer receber, com qualidade e previsibilidade.",
  },
  {
    label: "Controle sobre o crescimento do escrit├│rio",
    description: "Escale quando quiser, nos ritmos que o seu escrit├│rio suporta.",
  },
  {
    label: "Controle sobre o seu faturamento",
    description: "Conhe├ºa o custo por caso fechado e tome decis├Áes baseadas em dados reais.",
  },
];

export function Results() {
  return (
    <section className="section">
      <div className="absolute inset-0 bg-gradient-section pointer-events-none" />
      <div className="glow-blue w-[500px] h-[300px] bottom-0 right-0 opacity-15" />

      <div className="container-page relative z-10">
        {/* Team structure */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            Aqui n├úo existe <span>amadorismo</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto">
            Voc├¬ ter├í acesso a uma opera├º├úo completa, com profissionais dedicados exclusivamente ao
            crescimento do seu escrit├│rio.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20 flex justify-center"
        >
          <TeamShowcase />
        </motion.div>

        <div className="divider mb-20" />

        {/* What you really buy */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="section-title mb-4">
              Voc├¬ n├úo compra tr├ífego. Voc├¬ compra <span>controle</span>.
            </h2>
            <p className="section-subtitle mx-auto">E isso muda o jogo.</p>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6 mb-12">
            {controls.map((ctrl, i) => (
              <motion.div key={ctrl.label} variants={fadeUp} className="card-glass text-center p-8">
                <div className="w-12 h-12 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-brand-orange text-lg">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white mb-3 leading-snug">{ctrl.label}</h3>
                <p className="text-content-tertiary text-sm leading-relaxed">{ctrl.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center">
            <ShinyButton openLeadForm>
              Quero uma estrutura profissional no meu escrit├│rio
              <ArrowRight className="h-4 w-4" />
            </ShinyButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
