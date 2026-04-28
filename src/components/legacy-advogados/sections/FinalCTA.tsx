"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/components/legacy-advogados/lib/animations";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";

const benefits = ["Sem promessa vazia", "Sem achismo", "Sem enrola├º├úo"];

export function FinalCTA() {
  return (
    <section id="cta-final" className="section">
      <div className="absolute inset-0 bg-gradient-orange-glow pointer-events-none" />
      <div className="glow-orange w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="container-page relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-xl mb-4 font-bold leading-[1.06] text-white"
          >
            Fale com um especialista da{" "}
            <span className="text-gradient-orange">Scale Company</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto mb-6">
            Receba um diagn├│stico estrat├®gico do seu cen├írio atual.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-orange" />
                <span className="text-sm text-content-secondary">{b}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-lg text-center"
        >
          <ShinyButton
            openLeadForm
            className="mx-auto min-h-[3.25rem] px-10 py-4 text-base"
            aria-label="Abrir formul├írio de contato"
          >
            Preencher formul├írio de contato
            <ArrowRight className="h-5 w-5" />
          </ShinyButton>
          <p className="mt-6 text-sm text-content-tertiary">
            Resposta do time comercial em instantes ap├│s o envio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
