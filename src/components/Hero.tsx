"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

export default function Hero() {
  const { open } = useLeadForm();

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
        paddingBottom: "4rem",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        className="bg-grid"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Ambient glows */}
      <div
        className="glow-cyan"
        style={{
          position: "absolute",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        className="glow-blue"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "500px",
          height: "400px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container-page" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2.5rem",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              border: "1px solid rgba(0,186,255,0.3)",
              background: "rgba(0,186,255,0.08)",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#00BAFF",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#00BAFF",
                display: "inline-block",
              }}
            />
            Especialistas em Marketing Jurídico
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
              margin: 0,
              background: "linear-gradient(to bottom, #ffffff 30%, #a1a1aa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Agência de Marketing Jurídico que Entrega a Sua{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00BAFF 0%, #1630DF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Máquina de Aquisição
            </span>{" "}
            Pronta.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 600,
              color: "rgba(255,255,255,0.75)",
              maxWidth: "750px",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Esqueça o amadorismo de ter que contratar um gestor de tráfego, um designer e um editor separados.
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "680px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Nós estruturamos, executamos e otimizamos 100% da sua captação de clientes com previsibilidade e total respeito às normas da OAB.{" "}
            <strong style={{ color: "#fff", fontWeight: 600 }}>
              Do primeiro clique ao contrato fechado.
            </strong>
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
              <button
                onClick={open}
                className="btn-shiny"
                style={{ fontSize: "1rem", padding: "1rem 2.25rem", width: "100%", maxWidth: "450px" }}
                id="hero-cta-primary"
              >
                Agendar Diagnóstico Gratuito da Minha Captação
                <ArrowRight size={18} />
              </button>
              <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
                Entenda onde seu escritório está perdendo dinheiro hoje.
              </span>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background:
            "linear-gradient(to top, #010f1c, transparent)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </section>
  );
}
