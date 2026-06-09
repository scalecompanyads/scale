"use client";

import { X } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const badLeadTypes = [
  {
    label: "Gente Curiosa",
    description: "Querem apenas tirar dúvidas gratuitas pelo WhatsApp, sem intenção de contrato.",
  },
  {
    label: "Gente Sem Recursos",
    description: "Não possuem capacidade financeira para arcar com os seus honorários.",
  },
  {
    label: "Gente Fria",
    description: "Pessoas que ainda estão apenas pesquisando e não têm urgência na resolução do caso.",
  },
];

const agencyFailures = [
  {
    text: "Não analisam o atendimento",
    cell: "md:col-span-2 md:row-start-1",
  },
  {
    text: "Não entendem o funil",
    cell: "md:col-span-1 md:row-start-1",
  },
  {
    text: "Não acompanham o fechamento",
    cell: "md:col-span-1 md:row-start-2",
  },
  {
    text: "Não otimizam com base em resultado real",
    cell: "md:col-span-2 md:row-start-2 md:col-start-2",
  },
];

export default function Problem() {
  const { open } = useLeadForm();

  return (
    <section id="problema" className="section" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="container-page">
        {/* Part 1 — Reality */}
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "5rem" }}>
          <h2 className="section-title">
            Se você já se frustrou com outra agência,{" "}
            <span>a culpa provavelmente não é do seu escritório.</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
            O mercado está saturado de operações genéricas que tentam aplicar estratégias de varejo na advocacia. Eles vendem "cliques" e entregam uma caixa de entrada lotada de problemas para o seu time comercial.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16 text-left"
          >
            {badLeadTypes.map((type, idx) => (
              <div
                key={type.label}
                className="relative flex flex-col group overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Hover Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#ef4444] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                     <X size={20} color="#ef4444" />
                  </div>
                  <h3 className="text-[1.15rem] font-bold text-white tracking-tight m-0">
                    {type.label}
                  </h3>
                </div>
                <p className="text-[rgba(255,255,255,0.85)] text-[0.95rem] leading-relaxed m-0">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              position: "relative",
              padding: "4rem 2rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            {/* Minimalist glow behind text instead of a hard border box */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,186,255,0.08) 0%, transparent 60%)", pointerEvents: "none" }}></div>
            
            <h3 style={{ position: "relative", zIndex: 1, fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
              A resposta da agência comum é sempre a mesma:<br/> 
              <span style={{ fontStyle: "italic", color: "#00BAFF", fontWeight: 500, display: "inline-block", marginTop: "0.5rem" }}>&ldquo;Vamos testar mais um criativo.&rdquo;</span>
            </h3>
            <p style={{ position: "relative", zIndex: 1, color: "var(--color-text-muted)", fontSize: "1.1rem", margin: "0 auto", maxWidth: "600px", lineHeight: 1.6 }}>
              Enquanto eles testam sem entender o funil do direito, você continua pagando a conta. Advocacia exige uma agência especializada focada no contrato fechado, não no clique solto.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              onClick={open}
              className="btn-shiny"
            >
              Quero uma operação que traga contratos reais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
