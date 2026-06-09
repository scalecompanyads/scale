"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a captação de clientes para advogados de forma automatizada?",
    answer: "Ela funciona através da criação de um ecossistema digital. Em vez de panfletagem digital, nós posicionamos o seu site no topo dos buscadores (Google Ads e SEO) exatamente quando o cliente final pesquisa pelo seu serviço. O lead clica, entra em uma página de alta conversão e aciona o seu WhatsApp."
  },
  {
    question: "Anúncios no Google Ads não violam o código de ética da OAB?",
    answer: "Não. O Provimento 205/2021 da OAB permite explicitamente o marketing de conteúdos e o patrocínio de postagens/anúncios, desde que tenham caráter puramente informativo, sóbrio e não utilizem termos mercantilistas (como \"compre já\" ou \"desconto em honorários\"). É marketing receptivo (Inbound)."
  },
  {
    question: "Qual a diferença entre o Tráfego Pago e a Consultoria de SEO Local para Advogados?",
    answer: "O Tráfego Pago gera leads de forma imediata (em até 15-30 dias), pois você paga por cada clique que recebe no anúncio. A Consultoria de SEO Local e Google Meu Negócio cria um ativo de longo prazo para o escritório: posiciona seu negócio organicamente no mapa da sua região de forma fixa, gerando contatos sem custo por clique."
  }
];

export default function HubFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-[rgba(255,255,255,0.01)] relative">
      <div className="container-page relative z-10">
        
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="section-label">Dúvidas Frequentes</span>
          <h2 className="section-title">
            Perguntas Frequentes Sobre o <span>Marketing de Performance</span> na Advocacia
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden transition-colors hover:border-[rgba(255,255,255,0.1)] cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="text-[1.1rem] font-bold text-white m-0">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    size={20} 
                    className={`flex-shrink-0 text-[#00BAFF] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                  />
                </div>
                <div 
                  className="px-6 text-[rgba(255,255,255,0.7)] leading-relaxed transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    paddingBottom: isOpen ? "1.5rem" : "0",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
