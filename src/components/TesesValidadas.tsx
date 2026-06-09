"use client";

import { Target, CheckCircle2 } from "lucide-react";

const teses = [
  "Holding Familiar",
  "BPC/LOAS",
  "Planejamento Previdenciário",
  "Habeas Corpus e Flagrante",
  "Divórcio Litigioso e Guarda",
  "Recuperação Tributária",
  "Trabalhista Reclamante",
  "Erro Médico e Saúde",
];

export default function TesesValidadas() {
  return (
    <section className="section bg-[rgba(255,255,255,0.01)] relative border-y border-[rgba(255,255,255,0.05)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] glow-blue opacity-20 pointer-events-none" />

      <div className="container-page relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1">
            <span className="section-label">Inteligência de Mercado</span>
            <h2 className="section-title">
              Execução baseada em <span>Teses Validadas.</span><br/> Zero Achismo.
            </h2>
            
            <div className="flex flex-col gap-6 mt-8">
              <p className="text-[rgba(255,255,255,0.85)] text-lg leading-relaxed">
                Você não precisa pagar pela nossa curva de aprendizado. Com dezenas de milhões de reais já gerenciados em anúncios jurídicos, nós já mapeamos exatamente quais argumentos, palavras-chave e landing pages convertem para as teses mais rentáveis do direito.
              </p>
              
              <div className="flex items-start gap-4 p-6 rounded-xl bg-[rgba(22,48,223,0.05)] border border-[rgba(22,48,223,0.2)] mt-2">
                <Target size={28} color="#1630DF" className="flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Sem "Testes com o seu dinheiro"</h4>
                  <p className="text-[rgba(255,255,255,0.7)] text-[0.95rem] leading-relaxed m-0">
                    Muitas agências usam o orçamento do primeiro mês do advogado apenas para "descobrir o que funciona". Nós aplicamos frameworks de conversão que já rodam diariamente em centenas de bancas pelo Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-white font-bold mb-6 flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#00BAFF]" />
                Algumas teses que tracionamos diariamente:
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {teses.map((tese, idx) => (
                  <div 
                    key={idx}
                    className="px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-[rgba(255,255,255,0.8)] text-sm font-semibold hover:border-[rgba(0,186,255,0.5)] hover:text-white transition-colors cursor-default"
                  >
                    {tese}
                  </div>
                ))}
                <div className="px-4 py-2 rounded-lg border border-dashed border-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.4)] text-sm font-semibold">
                  E mais de 40 outras áreas...
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
