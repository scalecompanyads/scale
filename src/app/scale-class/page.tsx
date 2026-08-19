"use client";

import { useState, useEffect } from "react";

const WEBHOOK_URL = "https://crm.scalecompany.com.br/api/v1/webhooks/live";

function maskWhatsapp(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const CONFETTI: { left: number; delay: number; color: string; w: number; h: number; spin: number }[] = [
  { left:  4, delay:   0, color:"#FF3A24", w:8,  h:6,  spin: 1  },
  { left: 11, delay: 140, color:"#568CF7", w:6,  h:9,  spin:-1  },
  { left: 18, delay:  60, color:"#2FBE68", w:9,  h:6,  spin: 1  },
  { left: 25, delay: 220, color:"#FFD700", w:7,  h:7,  spin:-1  },
  { left: 32, delay: 100, color:"#FF6B35", w:8,  h:5,  spin: 1  },
  { left: 39, delay: 300, color:"#C77DFF", w:6,  h:8,  spin:-1  },
  { left: 46, delay:  40, color:"#FF3A24", w:7,  h:6,  spin: 1  },
  { left: 53, delay: 180, color:"#568CF7", w:9,  h:7,  spin:-1  },
  { left: 60, delay: 260, color:"#2FBE68", w:6,  h:9,  spin: 1  },
  { left: 67, delay:  80, color:"#FFD700", w:8,  h:5,  spin:-1  },
  { left: 74, delay: 340, color:"#FF6B35", w:7,  h:8,  spin: 1  },
  { left: 81, delay: 160, color:"#C77DFF", w:6,  h:6,  spin:-1  },
  { left: 88, delay:  20, color:"#FF3A24", w:8,  h:7,  spin: 1  },
  { left: 95, delay: 280, color:"#568CF7", w:7,  h:5,  spin:-1  },
  { left:  8, delay: 380, color:"#2FBE68", w:6,  h:8,  spin: 1  },
  { left: 21, delay: 120, color:"#FFD700", w:9,  h:6,  spin:-1  },
  { left: 35, delay: 240, color:"#FF6B35", w:7,  h:7,  spin: 1  },
  { left: 48, delay: 360, color:"#C77DFF", w:8,  h:5,  spin:-1  },
  { left: 62, delay: 200, color:"#FF3A24", w:6,  h:9,  spin: 1  },
  { left: 76, delay:  50, color:"#568CF7", w:8,  h:6,  spin:-1  },
  { left: 15, delay: 320, color:"#2FBE68", w:7,  h:8,  spin: 1  },
  { left: 43, delay: 440, color:"#FFD700", w:6,  h:6,  spin:-1  },
  { left: 70, delay: 170, color:"#FF6B35", w:9,  h:7,  spin: 1  },
  { left: 91, delay: 410, color:"#C77DFF", w:7,  h:5,  spin:-1  },
];

export default function ScaleClassPage() {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "", faturamento: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [utms, setUtms] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    const captured: Record<string, string> = {};
    keys.forEach((k) => { const v = params.get(k); if (v) captured[k] = v; });
    setUtms(captured);

    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setShowModal(false); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function validate() {
    const errs: Record<string, string> = {};
    const words = form.nome.trim().split(/\s+/).filter(Boolean);
    if (words.length < 2 || words.some((w) => w.length < 2))
      errs.nome = "Digite seu nome e sobrenome completos.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email))
      errs.email = "Digite um e-mail válido.";
    const digits = form.whatsapp.replace(/\D/g, "");
    if (digits.length !== 11)
      errs.whatsapp = "Digite um WhatsApp válido com DDD (11 dígitos).";
    if (!form.faturamento)
      errs.faturamento = "Selecione sua faixa de faturamento.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    setShowModal(true);

    if (WEBHOOK_URL) {
      const payload = {
        nome: form.nome.trim(),
        email: form.email.trim(),
        whatsapp: form.whatsapp,
        faturamento: form.faturamento,
        ...utms,
      };
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    }
  }

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  }
  return (
    <>
      <style>{`
        .sc-root * { box-sizing: border-box; }
        .sc-root { font-family: var(--font-inter-tight, 'Inter Tight', sans-serif); }

        /* Dotted texture on left card */
        .sc-qcard::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image: radial-gradient(rgba(20, 19, 18, 0.16) 1.2px, transparent 1.5px);
          background-size: 26px 26px;
          mask-image: radial-gradient(125% 95% at 30% 40%, transparent 26%, rgb(0, 0, 0) 62%);
          -webkit-mask-image: radial-gradient(125% 95% at 30% 40%, transparent 26%, rgb(0, 0, 0) 62%);
        }

        /* CTA inner top shine */
        .sc-term::before {
          content: "";
          position: absolute;
          inset: 2px;
          border-radius: 14px;
          pointer-events: none;
          background: linear-gradient(rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 50%);
        }

        .sc-term:hover { transform: scale(1.012); filter: brightness(1.05); }

        /* Entrance animations */
        @keyframes sc-entra {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .sc-qtopo   { animation: sc-entra .55s cubic-bezier(.2,.7,.3,1) .05s both; }
        .sc-h1      { animation: sc-entra .60s cubic-bezier(.2,.7,.3,1) .14s both; }
        .sc-lead    { animation: sc-entra .60s cubic-bezier(.2,.7,.3,1) .24s both; }
        .sc-ctacol  { animation: sc-entra .60s cubic-bezier(.2,.7,.3,1) .34s both; }
        .sc-qcol    { animation: sc-entra .70s cubic-bezier(.2,.7,.3,1) .20s both; }

        /* Heading — trecho 1: Inter Tight Light Italic + degradê preto→cinza escuro */
        .sc-h1-grad {
          display: block;
          font-family: var(--font-inter-tight, 'Inter Tight', sans-serif);
          font-style: italic;
          font-weight: 300;
          background: linear-gradient(to right, #000000, #2C2C2C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        /* Heading — trecho 2: Manrope Semibold */
        .sc-h1-manrope {
          display: block;
          font-family: var(--font-manrope, 'Manrope', sans-serif);
          font-style: normal;
          font-weight: 600;
          color: rgb(20, 19, 18);
          -webkit-text-fill-color: rgb(20, 19, 18);
        }
        /* Heading — trecho 3: Manrope Bold #568CF7 */
        .sc-h1-blue {
          display: block;
          font-family: var(--font-manrope, 'Manrope', sans-serif);
          font-style: normal;
          font-weight: 700;
          color: #568CF7;
          -webkit-text-fill-color: #568CF7;
        }

        /* Viúvas: impede palavra solta no final de cada linha */
        .sc-h1-grad, .sc-h1-manrope, .sc-h1-blue { text-wrap: pretty; }

        /* Mensagem de erro inline */
        .sc-ferr {
          font-size: 12px;
          font-weight: 600;
          color: #E03131;
          margin: -6px 0 0 4px;
        }
        .sc-finput-err {
          border-color: rgba(224, 49, 49, 0.55) !important;
          box-shadow: 0 0 0 4px rgba(224, 49, 49, 0.08) !important;
        }

        /* Form section */
        .sc-finput {
          width: 100%;
          height: 68px;
          border-radius: 16px;
          border: 1.5px solid rgba(86, 140, 247, 0.28);
          background: rgb(247, 248, 252);
          padding: 0 22px;
          font-size: 16px;
          font-weight: 400;
          font-family: var(--font-inter-tight, 'Inter Tight', sans-serif);
          color: rgb(20, 19, 18);
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s;
          -webkit-appearance: none;
          appearance: none;
          display: block;
        }
        .sc-finput:focus {
          border-color: rgba(86, 140, 247, 0.55);
          box-shadow: 0 0 0 4px rgba(86, 140, 247, 0.09);
        }
        .sc-finput::placeholder { color: rgba(20, 19, 18, 0.32); }
        .sc-fselect {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23141312' stroke-opacity='.4' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 22px center;
        }
        .sc-fselect option { color: rgb(20, 19, 18); }
        .sc-fbtn {
          width: 100%;
          height: 68px;
          border-radius: 16px;
          border: none;
          cursor: pointer;
          background: linear-gradient(rgb(47, 190, 104) 0%, rgb(27, 158, 75) 46%, rgb(15, 122, 55) 100%);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          font-family: var(--font-inter-tight, 'Inter Tight', sans-serif);
          letter-spacing: 0.02em;
          position: relative;
          overflow: hidden;
          box-shadow: rgba(255,255,255,0.5) 0px 1px 0px inset, rgba(0,0,0,0.16) 0px -10px 18px inset, rgba(255,255,255,0.16) 0px 0px 0px 1px inset, rgba(27,158,75,0.14) 0px 0px 0px 6px, rgba(27,158,75,0.32) 0px 14px 30px;
          transition: transform .25s cubic-bezier(.2,.7,.3,1), filter .25s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .sc-fbtn::before {
          content: "";
          position: absolute;
          inset: 2px;
          border-radius: 14px;
          background: linear-gradient(rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 50%);
          pointer-events: none;
        }
        .sc-fbtn:hover { transform: scale(1.012); filter: brightness(1.05); }

        /* ── Modal ── */
        .sc-modal-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(10,10,12,0.55);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          animation: sc-fade-in .25s ease both;
        }
        .sc-modal-card {
          background: #fff; border-radius: 28px;
          padding: 52px 44px 44px; max-width: 460px; width: calc(100% - 32px);
          text-align: center; position: relative; overflow: hidden;
          animation: sc-slide-up .4s cubic-bezier(.2,.7,.3,1) both;
          box-shadow: 0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.06);
        }
        @keyframes sc-fade-in  { from{opacity:0}  to{opacity:1}  }
        @keyframes sc-slide-up { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }

        /* Confete */
        .sc-confetti-piece {
          position: absolute; top: -12px; border-radius: 2px;
          animation: sc-fall 2.4s ease-in forwards;
          pointer-events: none;
        }
        @keyframes sc-fall {
          0%   { transform: translateY(0)     rotate(0deg);   opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(480px) rotate(720deg); opacity: 0; }
        }

        /* Check animado */
        .sc-check-circle {
          stroke-dasharray: 166; stroke-dashoffset: 166;
          animation: sc-stroke .65s cubic-bezier(.65,.05,.35,.95) .15s forwards;
        }
        .sc-check-tick {
          stroke-dasharray: 48; stroke-dashoffset: 48;
          animation: sc-stroke .38s cubic-bezier(.65,.05,.35,.95) .72s forwards;
        }
        @keyframes sc-stroke { to { stroke-dashoffset: 0; } }

        /* Botão WhatsApp */
        .sc-wa-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          width: 100%; height: 58px; border-radius: 14px;
          background: #25D366; color: #fff;
          font-family: var(--font-inter-tight,'Inter Tight',sans-serif);
          font-size: 14px; font-weight: 700; letter-spacing: 0.02em;
          text-decoration: none; border: none; cursor: pointer;
          box-shadow: 0 8px 24px rgba(37,211,102,.35);
          transition: filter .2s, transform .2s;
          position: relative; overflow: hidden;
        }
        .sc-wa-btn::before {
          content:""; position:absolute; inset:2px; border-radius:12px;
          background:linear-gradient(rgba(255,255,255,.18) 0%,rgba(255,255,255,0) 50%);
          pointer-events:none;
        }
        .sc-wa-btn:hover { filter:brightness(1.07); transform:scale(1.012); }

        @media (min-width: 1921px) {
          .sc-h1 { font-size: clamp(32px, 4.4vw, 88px) !important; }
        }

        @media (max-width: 768px) {
          .sc-qgrid       { grid-template-columns: 1fr !important; min-height: auto !important; }
          .sc-qcol        { display: none !important; }
          .sc-in          { padding: 48px 24px 0 !important; }
          .sc-br-desktop  { display: none; }
          .sc-h1-line     { display: inline; }
          /* Centraliza conteúdo da hero */
          .sc-in          { align-items: center !important; text-align: center !important; }
          /* Logo acima, infos de data/hora abaixo centralizadas, sem quebra */
          .sc-qtopo       { flex-direction: column !important; align-items: center !important; gap: 12px !important; margin-bottom: 36px !important; }
          .sc-qtopo-badge { white-space: nowrap !important; }
          .sc-h1          { text-align: center !important; }
          .sc-lead        { text-align: center !important; }
          .sc-ctacol      { align-items: center !important; }
          /* Card vira coluna no mobile para imagem ficar abaixo do texto */
          .sc-qcard       { flex-direction: column !important; }
          /* CTA: largura total, sem limite de desktop, texto sem quebra */
          .sc-ctacol      { max-width: 100% !important; width: 100% !important; }
          .sc-term        { width: 100% !important; min-width: 0 !important; justify-content: space-between !important; }
          .sc-term-label  { white-space: nowrap; }
          /* Imagem mobile visível */
          .sc-mobile-img  { display: block !important; }
        }
      `}</style>

      {/* ===== OUTER PAGE ===== */}
      <div
        className="sc-root"
        style={{
          background: "rgb(11, 11, 13)",
          padding: "8px",
          minHeight: "100vh",
        }}
      >
        {/* ===== GRID ===== */}
        <div
          className="sc-qgrid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "8px",
            minHeight: "calc(100vh - 16px)",
          }}
        >

          {/* ══════════════════════════════
              LEFT CARD
          ══════════════════════════════ */}
          <div
            className="sc-qcard"
            style={{
              background: "rgb(245, 244, 241)",
              borderRadius: "28px 28px 0 0",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            {/* Inner content (z-index:1 above dot pattern) */}
            <div
              className="sc-in"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                padding: "110px clamp(40px, 6vw, 120px) 0",
                display: "flex",
                flexDirection: "column",
              }}
            >

              {/* — TOPO: logo + data badge — */}
              <div
                className="sc-qtopo"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  marginBottom: "clamp(48px, 6vw, 88px)",
                }}
              >
                {/* Logo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/scale-class/logo-scale-black.png"
                  alt="Scale Company"
                  style={{ height: "36px", width: "auto", flexShrink: 0 }}
                />

                {/* Date badge */}
                <div className="sc-qtopo-badge" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "rgba(20, 19, 18, 0.55)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#FF3A24"/>
                  </svg>
                 SEGUNDA FEIRA
                  <span style={{ opacity: 0.35 }}>·</span>
                  31 DE AGOSTO
                  <span style={{ opacity: 0.35 }}>·</span>
                  AO VIVO ÀS 12H
                </div>
              </div>

              {/* — HEADING — */}
              <h1
                className="sc-h1"
                style={{
                  fontSize: "clamp(32px, 3.52vw, 70px)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: "-0.04em",
                  margin: "0 0 24px",
                  maxWidth: "15em",
                }}
              >
                <span className="sc-h1-grad">Advogado, aprenda as 7</span>
                <span className="sc-h1-grad">etapas para</span>
                <span className="sc-h1-manrope">transformar leads que</span>
                <span className="sc-h1-manrope">somem e enrolam em</span>
                <span className="sc-h1-blue">clientes fechados</span>
              </h1>

              {/* — LEAD — */}
              <p
                className="sc-lead"
                style={{
                  fontSize: "clamp(15px, 1vw, 18px)",
                  fontWeight: 300,
                  lineHeight: "1.6",
                  color: "rgba(20, 19, 18, 0.66)",
                  margin: "0 0 46px",
                  maxWidth: "44em",
                }}
              >
                Um treinamento comercial ao vivo para advogados que querem aumentar a conversão dos leads que já chegam no escritório, sem investir mais um real em marketing.
              </p>

              {/* — CTA COL — */}
              <div className="sc-ctacol" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "min(52.5vw, 1050px)", width: "100%" }}>

                {/* Button */}
                <a
                  href="#inscricao"
                  className="sc-term"
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    height: "66px",
                    borderRadius: "16px",
                    background: "linear-gradient(rgb(47, 190, 104) 0%, rgb(27, 158, 75) 46%, rgb(15, 122, 55) 100%)",
                    border: "none",
                    cursor: "pointer",
                    padding: "0 24px 0 40px",
                    minWidth: "min(400px, 100%)",
                    maxWidth: "100%",
                    textDecoration: "none",
                    boxShadow: "rgba(255,255,255,0.5) 0px 1px 0px inset, rgba(0,0,0,0.16) 0px -10px 18px inset, rgba(255,255,255,0.16) 0px 0px 0px 1px inset, rgba(27,158,75,0.14) 0px 0px 0px 6px, rgba(27,158,75,0.32) 0px 14px 30px",
                    transition: "transform .3s cubic-bezier(.2,.7,.3,1), box-shadow .3s cubic-bezier(.2,.7,.3,1), filter .3s cubic-bezier(.2,.7,.3,1)",
                  }}
                >
                  <span className="sc-term-label" style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}>
                   GARANTIR MEU ACESSO GRATUITO
                  </span>
                  {/* White square icon */}
                  <span style={{
                    flexShrink: 0,
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "#fff",
                    display: "grid",
                    placeItems: "center",
                    color: "rgb(18, 129, 59)",
                    marginLeft: "14px",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </span>
                </a>

                {/* Progress bar */}
                <div>
                  <div style={{
                    width: "100%",
                    height: "5px",
                    borderRadius: "100px",
                    background: "rgba(20, 19, 18, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "7px",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: 0, top: 0, bottom: 0,
                      width: "80%",
                      borderRadius: "100px",
                      background: "linear-gradient(to right, rgb(47,190,104), #FF3A24)",
                    }} />
                  </div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "rgba(20, 19, 18, 0.45)",
                    whiteSpace: "nowrap",
                  }}>
                    <b style={{ color: "rgb(20,19,18)" }}>80%</b>{" "}das vagas já foram preenchidas!
                  </div>
                </div>

              </div>
            </div>

            {/* — MOBILE HERO IMAGE — only visible on mobile, after text content */}
            <div
              className="sc-mobile-img"
              style={{
                display: "none",
                width: "100%",
                height: "360px",
                position: "relative",
                flexShrink: 0,
                marginTop: "32px",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/scale-class/img-gabriel.jpg"
                alt="Gabriel Dias"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              {/* Bottom presenter bar */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                background: "rgba(16,16,18,0.72)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF3A24", flexShrink: 0 }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "rgba(245,245,243,0.7)",
                  textTransform: "uppercase",
                }}>
                  Gabriel Dias · AO VIVO
                </span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "rgba(245,245,243,0.35)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginLeft: "4px",
                }}>
                  Treinamento Comercial · 12h às 14h
                </span>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════
              RIGHT COLUMN
          ══════════════════════════════ */}
          <div
            className="sc-qcol"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              minHeight: 0,
            }}
          >
            {/* Video / presenter panel */}
            <div
              style={{
                flex: 1,
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
                background: "rgb(12, 12, 14)",
                minHeight: 0,
              }}
            >
              {/* Presenter image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/scale-class/img-gabriel.jpg"
                alt="Gabriel"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />

              {/* Bottom presenter bar */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                zIndex: 2,
                background: "rgba(16, 16, 18, 0.72)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                padding: "14px 24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "#FF3A24",
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "rgba(245, 245, 243, 0.7)",
                  textTransform: "uppercase",
                }}>
                  Gabriel Dias · AO VIVO
                </span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "rgba(245, 245, 243, 0.35)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginLeft: "4px",
                }}>
                  Treinamento Comercial · 12h às 14h
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ══════════════════════════════
            FORM SECTION
        ══════════════════════════════ */}
        <div id="inscricao" style={{
          background: "#ffffff",
          borderTop: "1px solid rgba(20, 19, 18, 0.12)",
          borderBottom: "1px solid rgba(20, 19, 18, 0.12)",
          padding: "100px clamp(24px, 6vw, 80px)",
        }}>
          <div style={{
            maxWidth: "680px",
            margin: "0 auto",
          }}>

            {/* Textos acima do form — centralizados */}
            <div style={{ textAlign: "center", marginBottom: "36px" }}>

              {/* Badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(20,19,18,0.5)",
                marginBottom: "20px",
              }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="4" fill="#FF3A24"/>
                </svg>
                50 vagas · inscrições abertas
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: "var(--font-inter-tight, 'Inter Tight', sans-serif)",
                fontSize: "clamp(36px, 4vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "rgb(20, 19, 18)",
                margin: "0 0 14px",
              }}>
                Vagas Limitadas!
              </h2>

              {/* Subheadline */}
              <p style={{
                fontSize: "clamp(15px, 1.1vw, 18px)",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "rgba(20,19,18,0.6)",
                margin: "0 0 6px",
              }}>
                Apenas 50 participantes são selecionados para participarem da nossa Scale Class.
              </p>
              <p style={{
                fontSize: "clamp(14px, 1vw, 16px)",
                fontWeight: 600,
                color: "rgba(20,19,18,0.75)",
                margin: 0,
              }}>
                Preencha o formulário abaixo e garanta sua vaga.
              </p>

            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(20,19,18,0.09)", marginBottom: "32px" }} />

            {submitted ? (
              /* Success state */
              <div style={{
                textAlign: "center",
                padding: "48px 24px",
              }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  background: "linear-gradient(rgb(47,190,104), rgb(15,122,55))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-inter-tight)", fontSize: "24px", fontWeight: 800, letterSpacing: "-0.03em", color: "rgb(20,19,18)", margin: "0 0 10px" }}>
                  Vaga garantida!
                </h3>
                <p style={{ color: "rgba(20,19,18,0.55)", lineHeight: 1.6, margin: 0 }}>
                  Fique atento ao seu WhatsApp — em breve você receberá as informações de acesso.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

                <div>
                  <input
                    className={`sc-finput${errors.nome ? " sc-finput-err" : ""}`}
                    type="text"
                    placeholder="Preencha seu nome e sobrenome"
                    value={form.nome}
                    onChange={(e) => set("nome", e.target.value)}
                    required
                  />
                  {errors.nome && <p className="sc-ferr">{errors.nome}</p>}
                </div>

                <div>
                  <input
                    className={`sc-finput${errors.email ? " sc-finput-err" : ""}`}
                    type="email"
                    placeholder="Preencha seu email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    required
                  />
                  {errors.email && <p className="sc-ferr">{errors.email}</p>}
                </div>

                <div>
                  <input
                    className={`sc-finput${errors.whatsapp ? " sc-finput-err" : ""}`}
                    type="tel"
                    placeholder="Preencha seu WhatsApp  ex: (11) 99999-9999"
                    value={form.whatsapp}
                    onChange={(e) => set("whatsapp", maskWhatsapp(e.target.value))}
                    required
                  />
                  {errors.whatsapp && <p className="sc-ferr">{errors.whatsapp}</p>}
                </div>

                <div>
                <select
                  className={`sc-finput sc-fselect${errors.faturamento ? " sc-finput-err" : ""}`}
                  value={form.faturamento}
                  onChange={(e) => set("faturamento", e.target.value)}
                  required
                  style={{ color: form.faturamento ? "rgb(20,19,18)" : "rgba(20,19,18,0.32)" }}
                >
                  <option value="" disabled>Selecione a sua média de faturamento mensal</option>
                  <option value="menos-30k">Menos de R$30 mil</option>
                  <option value="30k-50k">Entre R$30 e R$50 mil</option>
                  <option value="50k-100k">Entre R$50 e R$100 mil</option>
                  <option value="mais-100k">Mais de R$100 mil</option>
                </select>
                {errors.faturamento && <p className="sc-ferr">{errors.faturamento}</p>}
                </div>

                {/* Submit — mesma largura dos inputs */}
                <button type="submit" className="sc-fbtn" style={{ marginTop: "8px" }}>
                  Garanta a sua vaga
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                {/* Disclaimer */}
                <p style={{
                  textAlign: "center",
                  fontSize: "12px",
                  color: "rgba(20,19,18,0.38)",
                  lineHeight: 1.5,
                  margin: "4px 0 0",
                }}>
                  *Ao clicar em &ldquo;Garanta sua vaga&rdquo; você aceita receber notificações da Scale Company.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>

      {/* ══════════════════════════════
          MODAL DE CONFIRMAÇÃO
      ══════════════════════════════ */}
      {showModal && (
        <div
          className="sc-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="sc-modal-card">

            {/* Confete */}
            {CONFETTI.map((p, i) => (
              <div
                key={i}
                className="sc-confetti-piece"
                style={{
                  left: `${p.left}%`,
                  width: p.w,
                  height: p.h,
                  background: p.color,
                  animationDelay: `${p.delay}ms`,
                  animationDuration: `${1800 + (i % 5) * 200}ms`,
                  transform: `rotate(${p.spin * 30}deg)`,
                }}
              />
            ))}

            {/* Check animado */}
            <div style={{ display:"flex", justifyContent:"center", marginBottom:24 }}>
              <svg width="80" height="80" viewBox="0 0 52 52" fill="none">
                <circle
                  className="sc-check-circle"
                  cx="26" cy="26" r="24"
                  stroke="#2FBE68"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path
                  className="sc-check-tick"
                  d="M14 26l8 9 16-17"
                  stroke="#2FBE68"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Título */}
            <h3 style={{
              fontFamily:"var(--font-inter-tight,'Inter Tight',sans-serif)",
              fontSize:28, fontWeight:800, letterSpacing:"-0.03em",
              color:"rgb(20,19,18)", margin:"0 0 10px",
            }}>
              Inscrição confirmada!
            </h3>
            <p style={{
              fontSize:15, color:"rgba(20,19,18,0.55)", lineHeight:1.6,
              margin:"0 0 32px",
            }}>
              Sua vaga está garantida. Agora entre no grupo exclusivo do WhatsApp para não perder nenhum detalhe do treinamento.
            </p>

            {/* Botão WhatsApp */}
            <a
              href="https://chat.whatsapp.com/IUIOhqEDHV5AEpSvrS1Uu7?s=cl&p=i&mlu=4"
              target="_blank"
              rel="noopener noreferrer"
              className="sc-wa-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Entre para o grupo exclusivo do treinamento
            </a>

            {/* Fechar */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                background:"none", border:"none", cursor:"pointer",
                fontSize:12, color:"rgba(20,19,18,0.4)", marginTop:20,
                fontFamily:"var(--font-inter-tight,'Inter Tight',sans-serif)",
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
