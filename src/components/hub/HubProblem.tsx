"use client";

import { AlertTriangle, Ghost, Coins } from "lucide-react";

const agencyMistakes = [
  {
    icon: <Ghost size={20} color="#ef4444" />,
    title: "Métricas de Vaidade",
    desc: "Agências comemoram milhares de impressões e cliques. Você, no entanto, recebe uma caixa de entrada lotada de contatos frios perguntando se 'a consulta é grátis'. Clique não paga as contas do escritório.",
  },
  {
    icon: <AlertTriangle size={20} color="#ef4444" />,
    title: "Estratégia de Varejo",
    desc: "A maioria aplica funis de e-commerce na advocacia. Eles não entendem a diferença entre a jornada de urgência de um flagrante criminal e a jornada de confiança de um inventário familiar.",
  },
  {
    icon: <Coins size={20} color="#ef4444" />,
    title: "Falta de Infraestrutura",
    desc: "O gestor apenas 'aperta botões' no Google Ads. Se o seu site for lento ou a sua Landing Page não passar autoridade, o lead foge para o concorrente. E a culpa? A agência diz que é 'do algoritmo'.",
  },
];

export default function HubProblem() {
  return (
    <section className="section bg-[rgba(255,255,255,0.01)] relative">
      <div className="container-page relative z-10">
        <div className="max-w-[800px] mx-auto text-center mb-20">
          <span className="section-label">O Erro Mais Comum</span>
          <h2 className="section-title">
            Por que tentar descobrir como atrair clientes na advocacia sozinho <span>queima o seu dinheiro?</span>
          </h2>
          <p className="section-subtitle">
            O mercado jurídico digital está saturado de operações amadoras. Eles vendem "posicionamento" e entregam frustração para o seu time comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {agencyMistakes.map((mistake, idx) => (
            <div
              key={idx}
              className="relative flex flex-col group overflow-hidden"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                borderRadius: "1.25rem",
                padding: "2.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.05)",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#ef4444] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                   {mistake.icon}
                </div>
                <h3 className="text-[1.2rem] font-bold text-white tracking-tight m-0 leading-tight">
                  {mistake.title}
                </h3>
              </div>
              <p className="text-[rgba(255,255,255,0.85)] text-[0.95rem] leading-relaxed m-0">
                {mistake.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-[800px] mx-auto text-center border border-[rgba(255,255,255,0.1)] rounded-2xl p-10 bg-[rgba(255,255,255,0.02)]">
           <h3 className="text-2xl font-bold text-white mb-4">A advocacia não aceita testes amadores.</h3>
           <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed m-0">
             Para captar clientes de alto ticket (honorários acima de 5, 10 ou 50 mil reais), você não precisa de mais um "criativo viral". Você precisa de uma engenharia de vendas desenhada especificamente para a mentalidade de quem tem um problema jurídico urgente.
           </p>
        </div>

      </div>
    </section>
  );
}
