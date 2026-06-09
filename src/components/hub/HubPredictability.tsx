"use client";

import { useLeadForm } from "@/contexts/LeadFormContext";

export default function HubPredictability() {
  const { open } = useLeadForm();

  return (
    <section className="section bg-[rgba(255,255,255,0.01)] relative">
      <div className="container-page relative z-10">
        
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="section-label">Retorno Sobre Investimento</span>
          <h2 className="section-title">
            Roleta Russa não é modelo de negócio. <span>Previsibilidade sim.</span>
          </h2>
          <p className="section-subtitle">
            Seu escritório não pode viver o mês de dezembro sem saber se vai ter honorários em janeiro. Você precisa de métricas, não de sorte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-[1000px] mx-auto">
          
          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 flex flex-col gap-4">
            <div className="text-[#00BAFF] font-mono text-sm tracking-widest font-bold mb-2">A MÉTRICA MAIS IMPORTANTE</div>
            <h3 className="text-2xl font-bold text-white">CAC (Custo de Aquisição)</h3>
            <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
              Quanto custa para o seu escritório assinar um novo contrato hoje? A maioria dos advogados não sabe responder isso. Nossa máquina rastreia cada centavo investido. Se você coloca R$ 1.000 no Google e fecha um contrato de R$ 10.000, seu CAC é R$ 1.000. Isso é previsibilidade matemática.
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 flex flex-col gap-4">
            <div className="text-[#00BAFF] font-mono text-sm tracking-widest font-bold mb-2">O EFEITO BOLA DE NEVE</div>
            <h3 className="text-2xl font-bold text-white">LTV (Lifetime Value)</h3>
            <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
              O cliente do Direito de Família que faz um divórcio hoje, amanhã faz uma revisão de alimentos e depois um inventário. O CAC é pago no primeiro contrato; o lucro real (ROAS) se multiplica nos anos seguintes com o mesmo cliente confiando na sua banca.
            </p>
          </div>

        </div>

        <div className="text-center">
          <button onClick={open} className="btn-shiny px-8 py-4">
            Quero ter previsibilidade no meu escritório
          </button>
        </div>

      </div>
    </section>
  );
}
