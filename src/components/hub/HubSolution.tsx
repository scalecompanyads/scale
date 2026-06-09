"use client";

import { MonitorSmartphone, Search, Video, LineChart } from "lucide-react";
import Ecosystem from "@/components/Ecosystem";

const machineSteps = [
  {
    icon: <MonitorSmartphone size={20} color="#00BAFF" />,
    title: "1. Hub de Conversão (Landing Page)",
    desc: "Seu site institucional não serve para captar clientes. Criamos páginas de alta velocidade focadas em conversão, desenhadas para receber tráfego frio e transformá-lo em contatos quentes no WhatsApp."
  },
  {
    icon: <Search size={20} color="#00BAFF" />,
    title: "2. Rede de Pesquisa (Google Ads)",
    desc: "Posicionamos seu escritório exatamente no exato milissegundo em que um cliente em potencial digita 'advogado criminalista urgente' ou 'advogado especialista em divórcio'. Tráfego de intenção pura."
  },
  {
    icon: <Video size={20} color="#00BAFF" />,
    title: "3. Retargeting e Autoridade (Meta Ads)",
    desc: "Aquele cliente que clicou no seu anúncio e não fechou na hora não pode ser esquecido. Distribuímos vídeos institucionais nas redes sociais para persegui-lo com autoridade até a decisão de contratação."
  },
  {
    icon: <LineChart size={20} color="#00BAFF" />,
    title: "4. Qualificação e Previsibilidade (CRM)",
    desc: "Instalamos processos de triagem (filtros prévios) para bloquear curiosos. O seu time comercial recebe apenas leads qualificados, e tudo é rastreado para calcular seu Custo de Aquisição (CAC)."
  }
];

export default function HubSolution() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="container-page relative z-10">
        
        <div className="max-w-[900px] mx-auto text-center mb-16">
          <span className="section-label">A Solução Definitiva</span>
          <h2 className="section-title">
            A Solução Definitiva para a Captação de Clientes para Advogados
          </h2>
          <p className="section-subtitle">
            Não entregamos apenas a gestão do tráfego pago. Construímos o seu ecossistema digital inteiro de ponta a ponta. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {machineSteps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col group overflow-hidden"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                borderRadius: "1rem",
                padding: "2rem",
                border: "1px solid rgba(255,255,255,0.05)",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#00BAFF] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,186,255,0.08)", border: "1px solid rgba(0,186,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                 {step.icon}
              </div>
              <div>
                 <h4 className="text-[1.1rem] font-bold text-white mb-2 tracking-tight leading-snug">{step.title}</h4>
                 <p className="text-[rgba(255,255,255,0.85)] text-[0.95rem] leading-relaxed m-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Ecosystem />

      </div>
    </section>
  );
}
