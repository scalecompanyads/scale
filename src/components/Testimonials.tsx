"use client";

import Image from "next/image";
import { useLeadForm } from "@/contexts/LeadFormContext";

// Gerar array de 1 a 19 para os depoimentos
const testimonials = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/images/testimonials/testimonial-${String(i + 1).padStart(2, "0")}.png`,
}));

export default function Testimonials() {
  const { open } = useLeadForm();

  return (
    <section id="depoimentos" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="glow-cyan" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "600px", opacity: 0.15 }} />

      <div className="container-page relative z-10">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="section-title">
            Resultados Reais de uma Agência de Marketing Jurídico de <span>Alta Performance</span>
          </h2>
          <p className="section-subtitle">
            Não são promessas vazias. São anos operando o crescimento de bancas por todo o Brasil.
          </p>
        </div>

        {/* Marquee de depoimentos linha 1 */}
        <div style={{ position: "relative", marginBottom: "2rem" }}>
           <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "150px",
              background: "linear-gradient(to right, #010f1c, transparent)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "150px",
              background: "linear-gradient(to left, #010f1c, transparent)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          
          <div style={{ display: "flex", overflow: "hidden" }}>
            <div 
              className="animate-marquee" 
              style={{ display: "flex", gap: "1.5rem", whiteSpace: "nowrap", flexShrink: 0, paddingRight: "1.5rem" }}
            >
              {[...testimonials.slice(0, 10), ...testimonials.slice(0, 10)].map((t, idx) => (
                <div 
                  key={`${t.id}-${idx}`} 
                  style={{ 
                    position: "relative", 
                    width: "300px", 
                    height: "400px", 
                    flexShrink: 0,
                    borderRadius: "1rem",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                >
                  <Image 
                    src={t.src} 
                    alt="Depoimento de cliente" 
                    fill 
                    sizes="300px"
                    style={{ objectFit: "cover", objectPosition: "top" }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee de depoimentos linha 2 (reverse) */}
        <div style={{ position: "relative" }}>
           <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "150px",
              background: "linear-gradient(to right, #010f1c, transparent)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "150px",
              background: "linear-gradient(to left, #010f1c, transparent)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          
          <div style={{ display: "flex", overflow: "hidden" }}>
            <div 
              className="animate-marquee" 
              style={{ display: "flex", gap: "1.5rem", whiteSpace: "nowrap", flexShrink: 0, paddingRight: "1.5rem", animationDirection: "reverse" }}
            >
              {[...testimonials.slice(10, 19), ...testimonials.slice(10, 19)].map((t, idx) => (
                <div 
                  key={`${t.id}-${idx}`} 
                  style={{ 
                    position: "relative", 
                    width: "300px", 
                    height: "400px", 
                    flexShrink: 0,
                    borderRadius: "1rem",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                >
                  <Image 
                    src={t.src} 
                    alt="Depoimento de cliente" 
                    fill 
                    sizes="300px"
                    style={{ objectFit: "cover", objectPosition: "top" }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <button 
            onClick={open}
            className="btn-shiny"
            style={{ padding: "1rem 2rem" }}
          >
            Quero ser o próximo case de sucesso
          </button>
        </div>

      </div>
    </section>
  );
}
