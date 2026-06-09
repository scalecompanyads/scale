"use client";

import { ArrowRight } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

export default function HubHero() {
  const { open } = useLeadForm();

  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "4rem",
        overflow: "hidden",
      }}
    >
      <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-50" />
      <div className="glow-cyan absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] z-0 pointer-events-none opacity-30" />

      <div className="container-page relative z-10">
        <div className="flex flex-col items-center text-center gap-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,186,255,0.3)] bg-[rgba(0,186,255,0.08)] text-[0.75rem] font-bold text-[#00BAFF] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00BAFF] block" />
            O Guia Definitivo 2026
          </div>

          <h1 className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight max-w-[1000px] m-0 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
            Como Captar Clientes na Advocacia{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#00BAFF] to-[#1630DF]">
              Sem Depender de Indicação.
            </span>
          </h1>

          <p className="text-[clamp(1.1rem,2vw,1.35rem)] font-semibold text-[rgba(255,255,255,0.85)] max-w-[800px] leading-relaxed m-0">
            Enquanto você espera o telefone tocar, o seu concorrente está pagando menos de R$ 20 por um contato qualificado no Google Ads. 
          </p>

          <p className="text-[1.05rem] text-[rgba(255,255,255,0.6)] max-w-[700px] leading-relaxed m-0">
            Descubra por que a maioria dos escritórios perde dinheiro na internet e aprenda a estruturar uma verdadeira Máquina de Aquisição que obedece 100% ao código de ética da OAB.
          </p>

          <div className="flex flex-col items-center gap-3 mt-4">
            <button
              onClick={open}
              className="btn-shiny px-10 py-4 text-[1.05rem]"
            >
              Quero Estruturar Minha Captação Agora
              <ArrowRight size={18} />
            </button>
            <span className="text-sm text-[rgba(255,255,255,0.4)]">
              Ou continue rolando para ler o guia definitivo.
            </span>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#010f1c] to-transparent pointer-events-none z-10" />
    </section>
  );
}
