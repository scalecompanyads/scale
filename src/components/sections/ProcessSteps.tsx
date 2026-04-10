'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, BarChart3, LineChart } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Diagnóstico gratuito',
    desc: 'Entendemos seu negócio, objetivos, concorrência e o que está travando suas vendas. Sem compromisso.',
  },
  {
    num: '02',
    icon: BarChart3,
    title: 'Estratégia sob medida',
    desc: 'Plano com metas claras, canais certos e budget calculado com base em resultado real, não em pacote fixo.',
  },
  {
    num: '03',
    icon: LineChart,
    title: 'Execução e relatórios',
    desc: 'Execução completa e relatório mensal em linguagem de negócio. Você acompanha cada resultado.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.22, duration: 0.7 },
  },
};

export default function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section relative overflow-hidden home-section-dark home-bg-grid">
      <div className="home-ambient-tl" aria-hidden="true" />

      <div ref={ref} className="relative z-10 mx-auto w-full max-w-site px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center md:mb-16"
        >
          <span className="home-label-caps mb-4">Como trabalhamos</span>
          <h2 className="heading-display-dark">Processo Simples.</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative mb-12 grid grid-cols-1 gap-5 md:mb-14 md:grid-cols-3 md:gap-6"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                variants={card}
                className="relative overflow-hidden rounded-[10px] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-[8px]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1 right-4 select-none font-heading text-[7rem] font-bold leading-none text-[rgba(0,186,255,0.06)]"
                >
                  {step.num}
                </span>

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[rgba(0,186,255,0.2)] bg-[rgba(0,186,255,0.1)]">
                    <Icon size={20} color="#00BAFF" strokeWidth={1.75} />
                  </div>
                  <span className="font-heading text-xs font-bold tracking-[0.08em] text-[rgba(0,186,255,0.5)]">
                    {step.num}
                  </span>
                </div>

                <p className="mb-2.5 text-[1.05rem] font-semibold text-white">{step.title}</p>
                <p className="m-0 text-sm leading-relaxed text-[rgba(255,255,255,0.45)]">{step.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="text-center"
        >
          <span className="cta-ring-wrap">
            <span className="cta-ring-spin animate-spin-slow" aria-hidden="true" />
            <a href="/contato" className="cta-ring-inner px-8 py-4 text-base">
              Solicitar diagnóstico gratuito
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
