"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const controls = [
  {
    label: "Controle sobre a entrada de novos casos",
    description: "Você decide o volume de leads que quer receber, com qualidade e previsibilidade.",
  },
  {
    label: "Controle sobre o crescimento do escritório",
    description: "Escale quando quiser, nos ritmos que o seu escritório suporta.",
  },
  {
    label: "Controle sobre o seu faturamento",
    description: "Conheça o custo por caso fechado e tome decisões baseadas em dados reais.",
  },
];

export default function Results() {
  const { open } = useLeadForm();

  return (
    <section id="resultados" className="section" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="glow-blue" style={{ position: "absolute", bottom: 0, right: 0, width: "500px", height: "300px", opacity: 0.15 }} />

      <div className="container-page relative z-10">
        
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="section-title">
            Aqui não existe <span>amadorismo</span>
          </h2>
          <p className="section-subtitle">
            Você terá acesso a uma operação completa, com profissionais dedicados exclusivamente ao
            crescimento do seu escritório.
          </p>
        </div>

        {/* Team Showcase */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "5rem" }}>
          <div 
            style={{ 
              position: "relative", 
              width: "100%", 
              maxWidth: "600px", 
              aspectRatio: "16/9",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
          >
            <Image 
              src="/images/criativos-scale-oab.png" 
              alt="Equipe Scale em ação" 
              fill 
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(1,15,28,0.9), transparent)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, padding: "2rem" }}>
               <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
                 Operação Comercial e Marketing
               </h3>
               <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", maxWidth: "400px" }}>
                 Alinhamento constante entre campanhas e o time de fechamento do seu escritório.
               </p>
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: "5rem" }} />

        {/* What you really buy */}
        <div>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              Você não compra tráfego. Você compra <span>controle</span>.
            </h2>
            <p className="section-subtitle">E isso muda o jogo.</p>
          </div>

          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
              gap: "1.5rem",
              marginBottom: "4rem"
            }}
          >
            {controls.map((ctrl, i) => (
              <div 
                key={ctrl.label} 
                className="card-glass"
                style={{ padding: "2rem", textAlign: "center" }}
              >
                <div 
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    background: "rgba(0, 186, 255, 0.15)",
                    border: "1px solid rgba(0, 186, 255, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                    color: "#00BAFF",
                    fontWeight: 800,
                    fontSize: "1.1rem"
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.3 }}>
                  {ctrl.label}
                </h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {ctrl.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button 
              onClick={open}
              className="btn-shiny"
            >
              Agendar diagnóstico e ver processo
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
