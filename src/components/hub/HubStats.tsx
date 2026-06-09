"use client";

const stats = [
  { value: "R$ 50M+", label: "Em Investimento Gerenciado sob nossa tutela." },
  { value: "+200", label: "Bancas de Advocacia que confiaram e estruturaram suas máquinas conosco." },
  { value: "98%", label: "De Taxa de Satisfação e Retenção de clientes parceiros." },
  { value: "15 a 30", label: "Dias é o tempo médio para os primeiros leads qualificados começarem a cair no seu WhatsApp." },
];

export default function HubStats() {
  return (
    <section className="section bg-[#000] relative border-b border-[rgba(255,255,255,0.05)]">
      <div className="container-page relative z-10">
        
        <div className="max-w-[900px] mx-auto text-center mb-16">
          <span className="section-label">A Prova Matemática</span>
          <h2 className="section-title">
            A Operação por Trás de Mais de <span>200 Escritórios Escalados</span>
          </h2>
          <p className="section-subtitle">
            Nós não somos teóricos do marketing. Nós operamos, diariamente, orçamentos que geram contratos reais para bancas de advocacia em todo o país.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-[rgba(255,255,255,0.02)] rounded-2xl border border-[rgba(255,255,255,0.05)]">
              <span className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00BAFF] to-[#1630DF] mb-4">
                {stat.value}
              </span>
              <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed m-0">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
