"use client";

import Image from "next/image";
import { ShieldCheck, Target, TrendingUp } from "lucide-react";

const areas = [
  "Direito Previdenciário",
  "Direito Criminal",
  "Direito de Família",
  "Direito Tributário",
  "Direito Trabalhista",
  "Saúde Suplementar",
  "Direito Cível",
  "Direito Empresarial",
  "Direito Imobiliário",
  "Direito do Consumidor",
];

const stats = [
  { value: "+200", label: "Escritórios Atendidos" },
  { value: "R$50M+", label: "Investimento Gerenciado" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "15-30", label: "dias para os primeiros leads" },
];

export default function LogosMarquee() {
  return (
    <section
      style={{
        padding: "6rem 0",
        position: "relative",
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden"
      }}
    >
      <div className="container-page" style={{ position: "relative", zIndex: 10 }}>
        
        {/* Certifications */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
          marginBottom: "5rem"
        }}>
          {/* Google Ads Badge */}
          <div className="bg-white shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center relative overflow-hidden" style={{ width: "160px", height: "160px", borderRadius: "50%", padding: "1.5rem" }}>
            <Image 
              src="/images/google-ads-badge.png" 
              alt="Google Ads Partner" 
              fill 
              style={{ objectFit: "contain", padding: "1.5rem" }} 
            />
          </div>
          
          {/* Meta Business Partner Badge */}
          <div className="bg-white shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center relative overflow-hidden" style={{ width: "160px", height: "160px", borderRadius: "50%", padding: "1.5rem" }}>
            <Image 
              src="/images/meta-bussiness-partner.jpg" 
              alt="Meta Business Partner" 
              fill 
              style={{ objectFit: "contain", padding: "1.5rem" }} 
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "4rem 2rem",
        }}>
          {stats.map((stat, i) => (
            <div key={stat.label} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}>
              <div style={{
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.05em",
                lineHeight: 1,
                color: "#fff",
                marginBottom: "0.75rem"
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.15em"
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Outline Text Marquee */}
      <div style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: 0,
        right: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.4,
        display: "flex",
        overflow: "hidden"
      }}>
        <div
          className="animate-marquee"
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            gap: "4rem",
            paddingRight: "4rem"
          }}
        >
          {[...areas, ...areas].map((area, i) => (
            <span
              key={i}
              style={{
                fontSize: "clamp(4rem, 8vw, 8rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                letterSpacing: "0.05em"
              }}
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
