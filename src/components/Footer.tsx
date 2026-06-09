"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLeadForm } from "@/contexts/LeadFormContext";

export function FinalCTA() {
  const { open } = useLeadForm();

  return (
    <section className="section" style={{ paddingBottom: "2rem" }}>
      <div className="container-page">
        <div 
          className="card-glass"
          style={{
            position: "relative",
            padding: "5rem 2rem",
            textAlign: "center",
            overflow: "hidden",
            background: "linear-gradient(to bottom, rgba(1, 15, 28, 0.95), rgba(1, 15, 28, 0.8))",
          }}
        >
          {/* Background effects */}
          <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
          <div className="glow-cyan" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", opacity: 0.15 }} />

          <div style={{ position: "relative", zIndex: 10, maxWidth: "700px", margin: "0 auto" }}>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Assuma o controle do crescimento do seu <span>escritório hoje.</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
              Pare de depender exclusivamente de indicações. Terceirize a execução técnica com quem entende de performance jurídica e foque no que você faz de melhor: advogar.
            </p>

            <button 
              onClick={open}
              className="btn-shiny"
              style={{ padding: "1.25rem 2.5rem", fontSize: "1.1rem" }}
            >
              AGENDAR MEU DIAGNÓSTICO E VER O PROCESSO
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "4rem", paddingBottom: "2rem", background: "#010f1c" }}>
      <div className="container-page">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", marginBottom: "4rem" }}>
          <Image 
            src="/images/scale-logo.svg" 
            alt="Scale Company" 
            width={160} 
            height={40} 
            style={{ opacity: 0.8 }}
          />
          <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center", maxWidth: "400px", fontSize: "0.95rem", lineHeight: 1.6 }}>
            Aceleradora de negócios e agência de marketing especializada no mercado jurídico.
          </p>
        </div>

        <div className="divider" style={{ marginBottom: "2rem" }} />

        <div 
          style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "space-between", 
            alignItems: "center",
            gap: "1rem",
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.85rem"
          }}
        >
          <p>© {currentYear} Scale Company. Todos os direitos reservados.</p>
          <p>CNPJ: 45.418.599/0001-08</p>
        </div>
      </div>
    </footer>
  );
}
