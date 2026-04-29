"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Search, LayoutTemplate, PenTool } from "lucide-react";
import { Features, type FeatureSlide } from "@/components/legacy-advogados/ui/features";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";
import { fadeUp, stagger, viewport } from "@/components/legacy-advogados/lib/animations";

const serviceFeatures: FeatureSlide[] = [
  {
    id: 1,
    icon: Target,
    title: "Estratégia de tráfego com foco em intenção real",
    description:
      "Campanhas construídas com base no comportamento de busca do cliente em dor, não do advogado em euforia técnica.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    icon: Search,
    title: "Mapeamento avançado de palavras-chave e públicos",
    description:
      "Identificamos os termos exatos que seu cliente potencial usa no momento em que mais precisa de você.",
    image: "/images/mapeamento-palavras-chave-publicos.png",
  },
  {
    id: 3,
    icon: LayoutTemplate,
    title: "Landing pages otimizadas para conversão jurídica",
    description:
      "Páginas construídas para converter visitante em lead qualificado, respeitando o contexto e a seriedade da advocacia.",
    image: "/images/landing-pages-conversao-juridica.png",
  },
  {
    id: 4,
    icon: PenTool,
    title: "Criativos persuasivos e alinhados à OAB",
    description:
      "Anúncios que comunicam com empatia, geram confiança e não violam normas da publicidade jurídica.",
    image: "/images/criativos-scale-oab.png",
    imageFit: "contain",
  },
];

export function Services() {
  return (
    <section id="servicos" className="section bg-surface-900">
      <div className="container-page">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            Você não contrata <span>tráfego</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto">
            Você implementa uma estrutura completa de aquisição e conversão. Nós cuidamos de tudo
            que impacta a geração de clientes no seu escritório.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="dark mb-12 overflow-hidden rounded-xl border border-white/[0.08] bg-surface-950/80 px-2 py-4 md:px-4 md:py-6"
        >
          <Features features={serviceFeatures} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-6 text-lg text-content-secondary">
            Você não recebe volume. Você recebe{" "}
            <span className="font-semibold text-white">oportunidade real de contrato.</span>
          </p>
          <ShinyButton openLeadForm>
            Quero ver como isso funcionaria no meu caso
            <ArrowRight className="h-4 w-4" />
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  );
}
