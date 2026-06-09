"use client";

import { ShieldCheck } from "lucide-react";

export default function HubOAB() {
  return (
    <section className="section bg-[#000] relative border-t border-[rgba(255,255,255,0.05)] border-b">
      <div className="container-page relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1">
            <span className="section-label">Compliance e Ética</span>
            <h2 className="section-title">
              Captação Ativa vs. OAB:<br/> <span>O fim do medo do TED.</span>
            </h2>
            
            <div className="flex flex-col gap-6 mt-8">
              <p className="text-[rgba(255,255,255,0.85)] text-lg leading-relaxed">
                Um dos maiores travamentos do advogado na hora de crescer é o medo das penalidades do Tribunal de Ética e Disciplina da OAB. A verdade é que a OAB proíbe a mercantilização da profissão, a oferta agressiva e a captação ostensiva.
              </p>
              <p className="text-[rgba(255,255,255,0.85)] text-lg leading-relaxed">
                Ela <strong>não proíbe você de ser encontrado</strong> por quem já está ativamente procurando ajuda.
              </p>
              
              <div className="mt-4 flex items-start gap-4 p-6 rounded-xl bg-[rgba(0,186,255,0.05)] border border-[rgba(0,186,255,0.2)]">
                <ShieldCheck size={28} color="#00BAFF" className="flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">100% de Adequação ao Provimento 205/2021</h4>
                  <p className="text-[rgba(255,255,255,0.7)] text-[0.95rem] leading-relaxed m-0">
                    Nossas campanhas na Rede de Pesquisa são puramente informativas (Inbound). Não convencemos ninguém a processar ninguém. Apenas posicionamos o seu escritório no topo do Google no exato momento em que o cliente pesquisa pela solução da dor dele.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[500px]">
             <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] aspect-square flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)" }}>
               <div className="absolute inset-0 glow-cyan opacity-30 mix-blend-screen"></div>
               <ShieldCheck size={180} color="rgba(255,255,255,0.05)" className="absolute" />
               <div className="relative z-10 text-center px-8">
                 <div className="text-4xl font-extrabold text-white mb-4">Marketing de Autoridade</div>
                 <div className="text-[rgba(255,255,255,0.6)] text-lg">Sem panfletagem digital. Sem promessas irreais. Apenas posicionamento estratégico nos buscadores.</div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
