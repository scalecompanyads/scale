"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/components/legacy-advogados/lib/animations";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";

const faqs = [
  {
    question: "A Scale conhece as normas da OAB para publicidade jur├¡dica?",
    answer:
      "Sim. Toda a opera├º├úo ├® desenvolvida dentro dos limites do Provimento 205/2021 do CFP, que regulamenta a publicidade na advocacia. Criativos, an├║ncios, p├íginas e comunica├º├úo s├úo validados para garantir sua seguran├ºa jur├¡dica. Voc├¬ cresce sem se expor.",
  },
  {
    question: "A Scale funciona para qualquer ├írea do direito?",
    answer:
      "Sim. Atendemos escrit├│rios de Previdenci├írio, Criminal, Fam├¡lia, Tribut├írio, Trabalhista, Sa├║de Suplementar, C├¡vel e outras especialidades. O que muda ├® a estrat├®gia de palavras-chave e o comportamento do p├║blico ÔÇö e isso a Scale mapeia antes de investir um centavo.",
  },
  {
    question: "Em quanto tempo come├ºo a ver resultado?",
    answer:
      "Os primeiros leads qualificados geralmente chegam dentro de 15 a 30 dias ap├│s o in├¡cio das campanhas. O volume e a qualidade crescem com o tempo ├á medida que os dados se acumulam e as otimiza├º├Áes s├úo aplicadas.",
  },
  {
    question: "Preciso ter um escrit├│rio grande para contratar a Scale?",
    answer:
      "N├úo. Atendemos desde advogados que trabalham sozinhos at├® escrit├│rios com mais de 30 profissionais. O que importa ├® a disposi├º├úo para estruturar um processo de aquisi├º├úo e comercial consistente.",
  },
  {
    question: "Como funciona o acompanhamento dos resultados?",
    answer:
      "Voc├¬ recebe relat├│rios completos com m├®tricas reais, tem acesso a dados de performance e participa de reuni├Áes estrat├®gicas peri├│dicas. Nada de caixa preta: voc├¬ sabe exatamente quanto investe, quantos leads recebe e o que est├í funcionando.",
  },
  {
    question: "Isso ├® para quem?",
    answer:
      "Para advogados que entendem que depend├¬ncia de indica├º├úo ├® vulnerabilidade, n├úo estrat├®gia. Para quem quer previsibilidade, estrutura e crescimento real. Se voc├¬ ainda acredita que postar conte├║do no Instagram vai encher seu escrit├│rio de clientes, essa solu├º├úo n├úo ├® para voc├¬ ÔÇö pelo menos n├úo ainda.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question w-full text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
          {open ? (
            <Minus className="w-3.5 h-3.5 text-brand-blue" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-content-secondary" />
          )}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="faq-answer">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section bg-surface-900">
      <div className="container-page">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            Tire suas <span>d├║vidas</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto">
            Se ainda tem algo que n├úo ficou claro, fale com um especialista. Sem enrola├º├úo.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <ShinyButton openLeadForm>Quero escalar meu escrit├│rio com estrat├®gia</ShinyButton>
        </motion.div>
      </div>
    </section>
  );
}
