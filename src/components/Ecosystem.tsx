"use client";

import Image from "next/image";

export default function Ecosystem() {
  return (
    <div style={{ width: "100%", padding: "0", marginBottom: "4rem" }}>
      {/* Bento Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            gridAutoRows: "280px",
          }}
          className="bento-container"
        >
          {/* Tráfego (Largo) */}
          <div className="card-glass bento-item" style={{ position: "relative", overflow: "hidden", borderRadius: "1.5rem" }}>
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", zIndex: 20, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", padding: "0.5rem 1rem", borderRadius: "0.5rem", fontSize: "0.85rem", fontWeight: 700, color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }}>
              Tráfego
            </div>
            <img 
              src="/images/ecosistema/google-meta-dashboard-dark.webp" 
              alt="Dashboard de Tráfego Pago" 
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Landing Page */}
          <div className="card-glass bento-item" style={{ position: "relative", overflow: "hidden", borderRadius: "1.5rem" }}>
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", zIndex: 20, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", padding: "0.5rem 1rem", borderRadius: "0.5rem", fontSize: "0.85rem", fontWeight: 700, color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }}>
              Landing Page
            </div>
            <video 
              src="/images/ecosistema/landing-page-demo.mp4" 
              autoPlay muted loop playsInline 
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Artes (Vertical) */}
          <div className="card-glass bento-item" style={{ position: "relative", overflow: "hidden", borderRadius: "1.5rem" }}>
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", zIndex: 20, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", padding: "0.5rem 1rem", borderRadius: "0.5rem", fontSize: "0.85rem", fontWeight: 700, color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }}>
              Artes
            </div>
            <img 
              src="/images/ecosistema/arte-social-damas-lima.png" 
              alt="Arte para Redes Sociais" 
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Edição de Vídeo */}
          <div className="card-glass bento-item" style={{ position: "relative", overflow: "hidden", borderRadius: "1.5rem" }}>
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", zIndex: 20, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", padding: "0.5rem 1rem", borderRadius: "0.5rem", fontSize: "0.85rem", fontWeight: 700, color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }}>
              Edição de Vídeo
            </div>
            <video 
              src="/images/ecosistema/video-editing-bg.mp4" 
              autoPlay muted loop playsInline 
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left center" }}
            />
          </div>

          {/* Comercial */}
          <div className="card-glass bento-item" style={{ position: "relative", overflow: "hidden", borderRadius: "1.5rem" }}>
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", zIndex: 20, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", padding: "0.5rem 1rem", borderRadius: "0.5rem", fontSize: "0.85rem", fontWeight: 700, color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }}>
              Comercial
            </div>
            <video 
              src="/images/ecosistema/comercial-gabriel.mp4" 
              autoPlay muted loop playsInline 
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* CRM Jurídico Exclusivo (Destaque Largo) */}
          <div className="card-glass bento-item" style={{ position: "relative", overflow: "hidden", borderRadius: "1.5rem" }}>
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", zIndex: 20, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", padding: "0.5rem 1rem", borderRadius: "0.5rem", fontSize: "0.85rem", fontWeight: 700, color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }}>
              CRM Exclusivo Jurídico
            </div>
            <video 
              src="/images/ecosistema/crm-demo.mp4" 
              autoPlay muted loop playsInline 
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>

      <style jsx>{`
        /* For Desktop, use specific grid layout */
        @media (min-width: 1024px) {
          .bento-container {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .bento-item:nth-child(1) { grid-column: span 2 !important; }
          .bento-item:nth-child(2) { grid-column: span 1 !important; }
          .bento-item:nth-child(3) { grid-column: span 1 !important; grid-row: span 2 !important; }
          .bento-item:nth-child(4) { grid-column: span 2 !important; }
          .bento-item:nth-child(5) { grid-column: span 1 !important; }
          .bento-item:nth-child(6) { grid-column: span 4 !important; height: 400px; } /* CRM destaque total embaixo */
        }
        .bento-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
