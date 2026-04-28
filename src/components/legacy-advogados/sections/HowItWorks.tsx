"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Settings, FileText, CalendarCheck, Shield } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/components/legacy-advogados/lib/animations";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";

const steps = [
  {
    Icon: Activity,
    step: "01",
    title: "Monitoramento di├írio das campanhas",
    description:
      "Nossa equipe acompanha o desempenho das campanhas todos os dias. Nada escapa sem ser analisado.",
  },
  {
    Icon: Settings,
    step: "02",
    title: "Otimiza├º├Áes semanais com base em dados",
    description:
      "Semanalmente ajustamos lances, criativos, segmenta├º├Áes e p├íginas com base nos dados reais do per├¡odo.",
  },
  {
    Icon: FileText,
    step: "03",
    title: "Relat├│rios completos com m├®tricas reais",
    description:
      "Voc├¬ recebe relat├│rios detalhados com as m├®tricas que importam: custo por lead, taxa de qualifica├º├úo, custo por contrato.",
  },
  {
    Icon: CalendarCheck,
    step: "04",
    title: "Reuni├Áes estrat├®gicas para evolu├º├úo cont├¡nua",
    description:
      "Reuni├Áes peri├│dicas para analisar resultados, ajustar estrat├®gia e garantir que a opera├º├úo esteja sempre evoluindo.",
  },
];

const transparencyPoints = [
  "Voc├¬ sabe quanto investe",
  "Sabe quantos leads recebe",
  "Entende o que est├í funcionando",
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section bg-surface-900">
      <div className="container-page">
        {/* Process */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            Voc├¬ n├úo fica <span>no escuro</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto">
            Existe processo. Existe rotina. Existe controle.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {steps.map((step) => (
            <motion.div key={step.step} variants={fadeUp} className="card group hover:border-brand-blue/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center mb-2 group-hover:bg-brand-blue/25 transition-colors duration-300">
                    <step.Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="text-xs text-brand-blue/60 font-display font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-content-tertiary text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transparency callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="card-blue p-8 md:p-10 max-w-3xl mx-auto mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col gap-3 flex-1">
              {transparencyPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                  <span className="text-white font-medium">{point}</span>
                </div>
              ))}
            </div>
            <div className="w-px h-20 bg-brand-blue/20 hidden md:block" />
            <p className="text-content-secondary text-sm leading-relaxed flex-1 text-center md:text-left">
              N├úo existe caixa preta. Voc├¬ tem visibilidade total sobre a sua opera├º├úo de marketing.
            </p>
          </div>
        </motion.div>

        <div className="divider mb-16" />

        {/* Compliance */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            Toda a opera├º├úo respeita as normas <span>da OAB</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto mb-8">
            Criativos, an├║ncios, p├íginas e comunica├º├úo. Tudo validado para garantir seguran├ºa jur├¡dica.
            Voc├¬ cresce sem se expor.
          </motion.p>
          <motion.div variants={fadeUp}>
            <ShinyButton openLeadForm>
              Quero crescer sem risco com a OAB
              <ArrowRight className="h-4 w-4" />
            </ShinyButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
