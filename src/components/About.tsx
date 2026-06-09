"use client";

import { ShieldCheck, MapPin, Briefcase, Building } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="section relative">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container-page relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Manifesto / Text */}
          <div className="flex-1">
            <span className="section-label">Sobre a Scale</span>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)" }}>
              Crescimento orgânico e técnico <span>focado em conversão.</span>
            </h2>
            
            <div className="flex flex-col gap-6 mt-8">
              <p className="text-[rgba(255,255,255,0.9)] text-lg leading-relaxed">
                No início, atendíamos negócios locais de todos os tamanhos. A exigência do mercado nos forçou a estruturar processos técnicos de altíssima performance. Foi dessa maturidade, e da demanda por estratégias estritamente focadas em conversão, que tomamos a decisão de nos especializar exclusivamente no nicho jurídico.
              </p>
              
              <blockquote 
                className="card-glass relative"
                style={{
                  padding: "2rem",
                  borderLeft: "4px solid var(--color-brand-cyan)",
                  marginTop: "1rem"
                }}
              >
                <div 
                  className="absolute -top-4 -left-4 text-6xl"
                  style={{ color: "rgba(0,186,255,0.2)", lineHeight: 1 }}
                >
                  "
                </div>
                <p className="text-[rgba(255,255,255,0.9)] text-lg font-medium leading-relaxed italic relative z-10">
                  Milissegundos importam e cada clique no WhatsApp custa caro. Não podíamos ser uma agência de likes, tínhamos que ser uma máquina de aquisição.
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right: Company Details Card */}
          <div className="w-full lg:w-[450px]">
            <div className="card-glass" style={{ padding: "3rem 2.5rem" }}>
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck size={28} color="#00BAFF" />
                <h3 className="text-xl font-bold text-white">Registro Oficial</h3>
              </div>
              
              <p className="text-[rgba(255,255,255,0.85)] mb-8 leading-relaxed">
                Operação 100% regular e infraestrutura alocada no Espírito Santo, atendendo escritórios em todo o Brasil.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div style={{ padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "0.75rem" }}>
                    <Building size={20} color="rgba(255,255,255,0.5)" />
                  </div>
                  <div>
                    <span className="block text-[0.85rem] font-medium text-[rgba(255,255,255,0.4)] mb-1 uppercase tracking-wider">Empresa</span>
                    <strong className="text-white font-semibold">Scale Company</strong>
                    <span className="block text-[0.9rem] text-[rgba(255,255,255,0.6)] mt-1">Digital Days LTDA</span>
                  </div>
                </div>

                <div className="divider" style={{ opacity: 0.5 }}></div>

                <div className="flex items-start gap-4">
                  <div style={{ padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "0.75rem" }}>
                    <Briefcase size={20} color="rgba(255,255,255,0.5)" />
                  </div>
                  <div>
                    <span className="block text-[0.85rem] font-medium text-[rgba(255,255,255,0.4)] mb-1 uppercase tracking-wider">CNPJ</span>
                    <strong className="text-white font-semibold font-mono tracking-wide">44.021.911/0001-70</strong>
                  </div>
                </div>

                <div className="divider" style={{ opacity: 0.5 }}></div>

                <div className="flex items-start gap-4">
                  <div style={{ padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "0.75rem" }}>
                    <MapPin size={20} color="rgba(255,255,255,0.5)" />
                  </div>
                  <div>
                    <span className="block text-[0.85rem] font-medium text-[rgba(255,255,255,0.4)] mb-1 uppercase tracking-wider">Sede</span>
                    <strong className="text-white font-semibold">Vila Velha - ES</strong>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
