import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── CSS ────────────────────────────────────────────────────────────────────
const STYLES = `
@keyframes footer-breathe {
  0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.9; }
}
@keyframes footer-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes footer-heartbeat {
  0%,100% { transform: scale(1);   }
  15%,45% { transform: scale(1.25); }
  30%     { transform: scale(1);   }
}

.sf-breathe   { animation: footer-breathe  8s ease-in-out infinite alternate; }
.sf-marquee   { animation: footer-marquee 35s linear infinite; }
.sf-heartbeat { animation: footer-heartbeat 2s cubic-bezier(.25,1,.5,1) infinite; }

/* Subtle grid */
.sf-grid {
  background-size: 72px 72px;
  background-image:
    linear-gradient(to right,  rgba(255,255,255,0.018) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.018) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
}

/* Glass pill */
.sf-pill {
  background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
  border: 1px solid rgba(255,255,255,0.09);
  box-shadow: 0 8px 24px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.38s cubic-bezier(0.16,1,0.3,1);
}
.sf-pill:hover {
  background: linear-gradient(145deg, rgba(0,186,255,0.12) 0%, rgba(22,48,223,0.08) 100%);
  border-color: rgba(0,186,255,0.30);
  box-shadow: 0 16px 36px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,186,255,0.12), inset 0 1px 0 rgba(0,186,255,0.15);
  color: #fff;
}

/* Ghost link */
.sf-ghost {
  color: rgba(255,255,255,0.38);
  transition: color 0.25s ease;
}
.sf-ghost:hover { color: #00BAFF; }

/* Giant watermark */
.sf-watermark {
  font-size: 22vw;
  line-height: 0.78;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.04);
  background: linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 55%);
  -webkit-background-clip: text;
  background-clip: text;
  user-select: none;
  pointer-events: none;
}

/* CTA heading gradient */
.sf-cta-heading {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.55) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 24px rgba(0,186,255,0.18));
}
`;

// ─── MAGNETIC BUTTON ────────────────────────────────────────────────────────
type MagBtnProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
};

const MagBtn = React.forwardRef<HTMLElement, MagBtnProps>(
  ({ className = "", children, as: Tag = "button", ...props }, ref) => {
    const el = useRef<HTMLElement>(null);

    useEffect(() => {
      const node = el.current;
      if (!node) return;
      const ctx = gsap.context(() => {
        const onMove = (e: MouseEvent) => {
          const r = node.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top  - r.height / 2;
          gsap.to(node, { x: x * 0.38, y: y * 0.38, rotationX: -y * 0.14, rotationY: x * 0.14, scale: 1.04, ease: "power2.out", duration: 0.35 });
        };
        const onLeave = () => {
          gsap.to(node, { x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1, ease: "elastic.out(1,0.3)", duration: 1.1 });
        };
        node.addEventListener("mousemove", onMove as any);
        node.addEventListener("mouseleave", onLeave);
        return () => { node.removeEventListener("mousemove", onMove as any); node.removeEventListener("mouseleave", onLeave); };
      }, node);
      return () => ctx.revert();
    }, []);

    return (
      <Tag
        ref={(node: HTMLElement) => {
          (el as any).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as any).current = node;
        }}
        className={`cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
MagBtn.displayName = "MagBtn";

// ─── MARQUEE ITEM ────────────────────────────────────────────────────────────
const MarqueeItem = () => (
  <div className="flex items-center" style={{ gap: "2.5rem", padding: "0 1.5rem" }}>
    <span>Sites que Convertem</span>
    <span style={{ color: "#00BAFF", opacity: 0.6 }}>✦</span>
    <span>Tráfego Pago</span>
    <span style={{ color: "#00BAFF", opacity: 0.6 }}>✦</span>
    <span>SEO Estratégico</span>
    <span style={{ color: "#00BAFF", opacity: 0.6 }}>✦</span>
    <span>Gestão de Redes</span>
    <span style={{ color: "#00BAFF", opacity: 0.6 }}>✦</span>
    <span>Landing Pages</span>
    <span style={{ color: "#00BAFF", opacity: 0.6 }}>✦</span>
    <span>Estruturação Comercial</span>
    <span style={{ color: "#00BAFF", opacity: 0.6 }}>✦</span>
  </div>
);

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────
const SOCIALS: {
  label: string;
  href: string;
  /** false = link interno (ex.: /contato abre o modal de lead) */
  external: boolean;
  icon: React.ReactNode;
}[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/scalecompany_/",
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/scale-company-br/",
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Fale conosco",
    href: "/contato",
    external: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export function CinematicFooter() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const linksRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    // Hide header when footer enters viewport
    const header = document.getElementById("site-header");
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!header) return;
        if (entry.isIntersecting) {
          header.style.transition = "opacity 0.4s ease, transform 0.4s ease";
          header.style.opacity = "0";
          header.style.transform = "translateY(-12px)";
          header.style.pointerEvents = "none";
        } else {
          header.style.opacity = "1";
          header.style.transform = "translateY(0)";
          header.style.pointerEvents = "";
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(wrapperRef.current);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        watermarkRef.current,
        { y: "8vh", scale: 0.85, opacity: 0 },
        {
          y: "0vh", scale: 1, opacity: 1, ease: "power1.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 85%", end: "bottom bottom", scrub: 1 },
        }
      );
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 45, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 45%", end: "center bottom", scrub: 1 },
        }
      );
    }, wrapperRef);

    return () => {
      obs.disconnect();
      ctx.revert();
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Curtain-reveal wrapper */}
      <div
        ref={wrapperRef}
        style={{ position: "relative", height: "100svh", width: "100%", clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100svh",
            background: "#010f1c",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          {/* ── Aurora glow ── */}
          <div
            className="sf-breathe"
            style={{
              position: "absolute",
              left: "50%", top: "50%",
              width: "80vw", height: "60vh",
              background: "radial-gradient(circle at 50% 50%, rgba(0,186,255,0.14) 0%, rgba(22,48,223,0.10) 40%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(72px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* ── Grid ── */}
          <div className="sf-grid" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

          {/* ── Watermark ── */}
          <div
            ref={watermarkRef}
            className="sf-watermark"
            style={{ position: "absolute", bottom: "-4vh", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", zIndex: 0 }}
          >
            SCALE
          </div>

          {/* ── Marquee ── */}
          <div
            style={{
              position: "absolute",
              top: "2.5rem",
              left: 0,
              width: "100%",
              overflow: "hidden",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(1,15,28,0.65)",
              backdropFilter: "blur(12px)",
              padding: "0.85rem 0",
              transform: "rotate(-1.5deg) scaleX(1.08)",
              zIndex: 10,
            }}
          >
            <div
              className="sf-marquee"
              style={{
                display: "flex",
                width: "max-content",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
              }}
            >
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* ── Center content ── */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "5rem 1.5rem 2rem",
              maxWidth: "900px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <h2
              ref={headingRef}
              className="sf-cta-heading"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(2.75rem, 7vw, 6rem)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                textAlign: "center",
                marginBottom: "2.5rem",
              }}
            >
              Pronto para<br />crescer?
            </h2>

            <div ref={linksRef} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", width: "100%" }}>
              {/* Primary CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.85rem" }}>
                <MagBtn
                  as="a"
                  href="/contato"
                  className="sf-pill"
                  style={{
                    padding: "1rem 2.25rem",
                    borderRadius: "9999px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Solicitar diagnóstico gratuito
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </MagBtn>
              </div>

              {/* Social icons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "0.65rem" }}>
                {SOCIALS.map((s) => (
                  <MagBtn
                    key={s.label}
                    as="a"
                    href={s.href}
                    {...(s.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="sf-pill"
                    aria-label={s.label}
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                    }}
                  >
                    {s.icon}
                  </MagBtn>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div
            style={{
              position: "relative",
              zIndex: 20,
              width: "100%",
              padding: "1.25rem 2rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>
              © {new Date().getFullYear()} Scale. Todos os direitos reservados.
            </span>

            

            <MagBtn
              as="button"
              onClick={scrollToTop}
              className="sf-pill"
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.45)",
                border: "none",
                background: "rgba(255,255,255,0.05)",
              }}
              aria-label="Voltar ao topo"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 10l7-7m0 0l7 7m-7-7v18"/>
              </svg>
            </MagBtn>
          </div>
        </footer>
      </div>
    </>
  );
}
