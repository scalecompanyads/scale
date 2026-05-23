import { useEffect, useRef, useState } from 'react';

import { legalLogos } from '@data/legalLogos';
import { FileText, Gauge, LineChart } from 'lucide-react';

type BeamState = 'p1' | 'splash' | 'p2' | 'idle';

interface Props {
  heading: string;
  headingAccent: string;
  description: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
}

const brandLogos = legalLogos;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.74.45 3.43 1.31 4.92L2 22l5.32-1.39a9.87 9.87 0 0 0 4.71 1.2h.01c5.46 0 9.9-4.44 9.9-9.9a9.86 9.86 0 0 0-2.89-7ZM12.04 20.14h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.16.83.84-3.08-.2-.32a8.18 8.18 0 0 1-1.26-4.35c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.24.85 5.79 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.13 8.24Zm4.5-6.16c-.25-.13-1.47-.73-1.7-.82-.23-.08-.39-.12-.56.13-.16.24-.64.81-.78.97-.14.16-.28.18-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.24-.01-.37.11-.5.11-.11.25-.28.37-.42.13-.14.17-.24.25-.4.08-.16.04-.3-.02-.42-.07-.13-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.69 2.57 4.09 3.61.57.25 1.02.4 1.37.5.58.18 1.1.15 1.52.09.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29Z"
      />
    </svg>
  );
}

export default function ScaleAdvogadosV3Hero({
  heading,
  headingAccent,
  description,
  primaryCtaHref,
  primaryCtaLabel,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const beamSvgRef = useRef<SVGSVGElement>(null);
  const nodeStackRef = useRef<HTMLDivElement>(null);
  const nodeXRef = useRef<HTMLDivElement>(null);
  const nodeShieldRef = useRef<HTMLDivElement>(null);
  const beamGlowRef = useRef<SVGPathElement>(null);
  const beamCoreRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? 'hidden' : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const pipeline = pipelineRef.current;
    const beamSvg = beamSvgRef.current;
    const nodeStack = nodeStackRef.current;
    const nodeX = nodeXRef.current;
    const nodeShield = nodeShieldRef.current;
    const beamGlow = beamGlowRef.current;
    const beamCore = beamCoreRef.current;
    const gradient = gradientRef.current;
    const splash = splashRef.current;

    if (
      !pipeline ||
      !beamSvg ||
      !nodeStack ||
      !nodeX ||
      !nodeShield ||
      !beamGlow ||
      !beamCore ||
      !gradient ||
      !splash
    ) {
      return;
    }

    let frameId = 0;
    let state: BeamState = 'p1';
    let lastStateChange = performance.now();

    const setBeamVisibility = (visible: boolean) => {
      beamGlow.style.opacity = visible ? '0.6' : '0';
      beamCore.style.opacity = visible ? '1' : '0';
    };

    const setBeamProgress = (percentage: number) => {
      const center = percentage * 100;
      gradient.setAttribute('x1', `${center - 5}%`);
      gradient.setAttribute('x2', `${center + 5}%`);
      gradient.setAttribute('y1', '0%');
      gradient.setAttribute('y2', '0%');
    };

    const updatePath = () => {
      const pRect = pipeline.getBoundingClientRect();
      const sRect = nodeStack.getBoundingClientRect();
      const xRect = nodeX.getBoundingClientRect();
      const shRect = nodeShield.getBoundingClientRect();

      const startX = sRect.left + sRect.width / 2 - pRect.left;
      const startY = sRect.top + sRect.height / 2 - pRect.top;
      const midX = xRect.left + xRect.width / 2 - pRect.left;
      const midY = xRect.top + xRect.height / 2 - pRect.top;
      const endX = shRect.left + shRect.width / 2 - pRect.left;
      const endY = shRect.top + shRect.height / 2 - pRect.top;
      const d = `M ${startX},${startY} L ${midX},${midY} L ${endX},${endY}`;

      beamSvg.setAttribute('viewBox', `0 0 ${pRect.width} ${pRect.height}`);
      beamSvg.setAttribute('width', `${pRect.width}`);
      beamSvg.setAttribute('height', `${pRect.height}`);
      beamGlow.setAttribute('d', d);
      beamCore.setAttribute('d', d);
    };

    const animateSplash = () => {
      splash.classList.remove('animate');
      void splash.offsetWidth;
      splash.classList.add('animate');
    };

    const tick = (timestamp: number) => {
      const elapsed = timestamp - lastStateChange;

      if (state === 'p1') {
        const progress = Math.min(elapsed / 800, 1);
        setBeamProgress(progress * 0.5);

        if (progress < 0.4) {
          nodeStack.classList.add('active');
        } else {
          nodeStack.classList.remove('active');
        }

        if (progress >= 1) {
          nodeStack.classList.remove('active');
          setBeamVisibility(false);
          animateSplash();
          state = 'splash';
          lastStateChange = timestamp;
        }
      } else if (state === 'splash') {
        if (elapsed >= 800) {
          splash.classList.remove('animate');
          setBeamVisibility(true);
          setBeamProgress(0.5);
          state = 'p2';
          lastStateChange = timestamp;
        }
      } else if (state === 'p2') {
        const progress = Math.min(elapsed / 800, 1);
        setBeamProgress(0.5 + progress * 0.5);

        if (progress > 0.6) {
          nodeShield.classList.add('active');
        } else {
          nodeShield.classList.remove('active');
        }

        if (progress >= 1) {
          nodeShield.classList.remove('active');
          state = 'idle';
          lastStateChange = timestamp;
        }
      } else if (elapsed >= 1000) {
        setBeamVisibility(true);
        setBeamProgress(0);
        state = 'p1';
        lastStateChange = timestamp;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    const handleResize = () => {
      updatePath();
    };

    updatePath();
    setBeamVisibility(true);
    setBeamProgress(0);

    window.addEventListener('resize', handleResize);
    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      nodeStack.classList.remove('active');
      nodeShield.classList.remove('active');
      splash.classList.remove('animate');
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const heroDescription =
    description ===
    'Coloque o controle do seu faturamento em suas maos com um diagnostico gratuito e personalizado.' ? (
      <>
        Coloque o <strong>controle do seu faturamento</strong> em suas maos
        <br className="hero-sub__break" />
        com um <strong>diagnostico gratuito e personalizado</strong>.
      </>
    ) : (
      description
    );

  const heroHeadingAccent =
    headingAccent === 'previsivel e escalavel de captacao de clientes:' ? (
      <>
        <span className="hero-heading__emphasis">previsivel e escalavel</span> de captacao de
        clientes:
      </>
    ) : (
      headingAccent
    );

  return (
    <div className="scale-v3-hero-shell">
      <nav className="hero-nav" aria-label="Navegacao principal da pagina">
        <a href="/" className="nav-logo" aria-label="Scale Company">
          <img src="/images/scale-logo.svg" alt="Scale Company" />
        </a>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? ' active' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="hero-nav-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div id="hero-nav-menu" className={`nav-menu${menuOpen ? ' active' : ''}`}>
          <div className="nav-actions">
            <a className="btn-login" href="#metodo" onClick={closeMenu}>
              Ver metodo
            </a>
            <a className="btn-signup" href={primaryCtaHref} onClick={closeMenu}>
              Diagnostico
            </a>
          </div>
        </div>
      </nav>

      <section className="hero-card" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />

        <div className="icon-pipeline" ref={pipelineRef}>
          <svg ref={beamSvgRef} className="beam-svg" aria-hidden="true" focusable="false">
            <defs>
              <filter id="scale-v3-glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient
                id="scale-v3-beam-gradient"
                ref={gradientRef}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#0f6fff" stopOpacity="0" />
                <stop offset="20%" stopColor="#0f6fff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="80%" stopColor="#8cc8ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8cc8ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              ref={beamGlowRef}
              stroke="url(#scale-v3-beam-gradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#scale-v3-glow)"
              opacity="0.6"
            />
            <path
              ref={beamCoreRef}
              stroke="url(#scale-v3-beam-gradient)"
              strokeWidth="0.8"
              fill="none"
            />
          </svg>

          <div
            ref={nodeStackRef}
            id="node-stack"
            className="icon-node node-light-right"
            aria-label="Sistema previsivel"
          >
            <Gauge size={20} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <div className="pipeline-line" aria-hidden="true" />

          <div className="icon-center-wrap">
            <div ref={splashRef} className="splash" aria-hidden="true" />
            <div
              ref={nodeXRef}
              id="node-x"
              className="icon-node-center"
              aria-label="Controle do faturamento"
            >
              <LineChart size={28} strokeWidth={1.8} aria-hidden="true" />
            </div>
          </div>

          <div className="pipeline-line right" aria-hidden="true" />

          <div
            ref={nodeShieldRef}
            id="node-shield"
            className="icon-node node-light-left"
            aria-label="Diagnostico personalizado"
          >
            <FileText size={20} strokeWidth={1.8} aria-hidden="true" />
          </div>
        </div>

        <div className="hero-content">
          <h1 id="hero-title" className="hero-heading">
            {heading}
            {' '}
            <strong>{heroHeadingAccent}</strong>
          </h1>
          <p className="hero-sub">{heroDescription}</p>
          <a href={primaryCtaHref} className="btn-cta">
            <WhatsAppIcon />
            {primaryCtaLabel}
          </a>
        </div>
      </section>

      <div className="brands-shell">
        <p className="brands-label">Escritorios que confiam na Scale</p>
        <div className="brands" aria-label="Escritorios de advocacia que ja confiaram na Scale">
          <div className="brands-track">
            {brandLogos.map((logo) => (
              <div className="brand-item" key={logo.src}>
                <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
              </div>
            ))}
            {brandLogos.map((logo) => (
              <div className="brand-item brand-item--clone" key={`${logo.src}-clone`} aria-hidden="true">
                <img src={logo.src} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
