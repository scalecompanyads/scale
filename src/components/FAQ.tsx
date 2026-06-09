"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const faqs = [
  {
    question: "A Scale Company atua dentro das normas da OAB?",
    answer: "Absolutamente. Todo o nosso ecossistema de campanhas, landing pages, vídeos e criativos respeita rigorosamente os limites do provimento 205/2021 da OAB, garantindo captação ética, informativa e sem risco de mercantilização."
  },
  {
    question: "Funciona para qualquer área do direito?",
    answer: "Sim. Do preventivo empresarial ao criminal de urgência, passando por demandas de volume como previdenciário e consumidor. O que muda é a estratégia de funil e o nível de consciência do cliente, mas a máquina de conversão funciona."
  },
  {
    question: "Eu preciso criar as páginas e editar os vídeos?",
    answer: "Não. Esse é o nosso maior diferencial competitivo. Nós entregamos a operação pronta. Você grava os vídeos pelo celular (nós damos o roteiro), nos envia, e nossa equipe cuida de toda a edição cinematográfica, programação das LPs e otimização do tráfego."
  },
  {
    question: "É preciso ter um escritório físico gigante para contratar a Scale?",
    answer: "Não. Atendemos desde o advogado autônomo que atua 100% digital e precisa iniciar sua máquina de aquisição, até grandes bancas estruturadas que desejam escalar o volume e reduzir o custo de aquisição de clientes (CAC)."
  },
  {
    question: "Em quanto tempo começo a ver resultados em contratos fechados?",
    answer: "O tráfego pago é uma ferramenta de aceleração imediata. Logo na primeira semana de veiculação, o seu comercial começará a receber os primeiros contatos (leads). O tempo de conversão real depende da urgência da sua área, mas nossa máquina é calibrada para buscar o retorno sobre o investimento (ROI) já nos primeiros 30 a 60 dias."
  },
  {
    question: "O que é o CRM Jurídico Exclusivo e por que ele é essencial?",
    answer: "Atrair clientes é apenas metade do jogo. Se o seu WhatsApp vira uma bagunça, você perde dinheiro. Nosso CRM Exclusivo é uma tecnologia implantada para o seu escritório ter controle total do funil de vendas, saber exatamente a etapa de cada negociação e garantir um follow-up agressivo, sem deixar nenhum honorário na mesa."
  },
  {
    question: "Vocês atendem escritórios concorrentes na mesma cidade?",
    answer: "Para teses e atuações de hiper-segmentação local (como criminal, família ou previdenciário municipal), nós garantimos exclusividade por praça. Não competimos contra nós mesmos no leilão do Google. Se já temos um escritório faturando alto com uma tese na sua região, não fecharemos com o seu concorrente."
  },
  {
    question: "Nunca fiz marketing jurídico na vida. Isso é para mim?",
    answer: "Com certeza. Entrar no digital com uma máquina 360º pronta já te coloca anos à frente de escritórios mais antigos que tentam fazer tudo de forma amadora. Nós construímos a sua fundação digital (Landing page, posicionamento e campanhas) já no padrão de grandes bancas."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span style={{ paddingRight: "1rem" }}>{question}</span>
        <span 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            flexShrink: 0,
            transition: "all 0.2s"
          }}
        >
          {open ? <Minus size={14} color="#00BAFF" /> : <Plus size={14} color="rgba(255,255,255,0.5)" />}
        </span>
      </button>
      
      <div 
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s ease-in-out",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p className="faq-answer">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { open } = useLeadForm();

  return (
    <section id="faq" className="section" style={{ background: "rgba(255,255,255,0.015)" }}>
      <div className="container-page">
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="section-title">
            Tire suas dúvidas com especialistas em <span>marketing para advogados</span>
          </h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <button 
            onClick={open}
            className="btn-shiny"
          >
            Agendar diagnóstico da sua captação
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
