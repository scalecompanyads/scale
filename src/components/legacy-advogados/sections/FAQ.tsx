"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/components/legacy-advogados/lib/animations";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";

const faqs = [
  {
    question: "A Scale conhece as normas da OAB para publicidade jurídica?",
    answer:
      "Sim. Toda a operação é desenvolvida dentro dos limites do Provimento 205/2021 do CFP, que regulamenta a publicidade na advocacia. Criativos, anúncios, páginas e comunicação são validados para garantir sua segurança jurídica. Você cresce sem se expor.",
  },
  {
    question: "A Scale funciona para qualquer área do direito?",
    answer:
      "Sim. Atendemos escritórios de Previdenciário, Criminal, Família, Tributário, Trabalhista, Saúde Suplementar, Cível e outras especialidades. O que muda é a estratégia de palavras-chave e o comportamento do público — e isso a Scale mapeia antes de investir um centavo.",
  },
  {
    question: "Em quanto tempo começo a ver resultado?",
    answer:
      "Os primeiros leads qualificados geralmente chegam dentro de 15 a 30 dias após o início das campanhas. O volume e a qualidade crescem com o tempo à medida que os dados se acumulam e as otimizações são aplicadas.",
  },
  {
    question: "Preciso ter um escritório grande para contratar a Scale?",
    answer:
      "Não. Atendemos desde advogados que trabalham sozinhos até escritórios com mais de 30 profissionais. O que importa é a disposição para estruturar um processo de aquisição e comercial consistente.",
  },
  {
    question: "Como funciona o acompanhamento dos resultados?",
    answer:
      "Você recebe relatórios completos com métricas reais, tem acesso a dados de performance e participa de reuniões estratégicas periódicas. Nada de caixa preta: você sabe exatamente quanto investe, quantos leads recebe e o que está funcionando.",
  },
  {
    question: "Isso é para quem?",
    answer:
      "Para advogados que entendem que dependência de indicação é vulnerabilidade, não estratégia. Para quem quer previsibilidade, estrutura e crescimento real. Se você ainda acredita que postar conteúdo no Instagram vai encher seu escritório de clientes, essa solução não é para você — pelo menos não ainda.",
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
            Tire suas <span>dúvidas</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto">
            Se ainda tem algo que não ficou claro, fale com um especialista. Sem enrolação.
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
          <ShinyButton openLeadForm>Quero escalar meu escritório com estratégia</ShinyButton>
        </motion.div>
      </div>
    </section>
  );
}
