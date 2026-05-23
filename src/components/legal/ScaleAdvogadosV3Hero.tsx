import { legalLogos } from '@data/legalLogos';
import { FileText, Gauge, LineChart } from 'lucide-react';

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

function normalizeCopy(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export default function ScaleAdvogadosV3Hero({
  heading,
  headingAccent,
  description,
  primaryCtaHref,
  primaryCtaLabel,
}: Props) {
  const isDefaultDescription =
    /controle do seu faturamento/i.test(description) &&
    /diagn/i.test(description) &&
    /gratuito/i.test(description);
  const isDefaultHeadingAccent =
    /previs/i.test(headingAccent) && /escal/i.test(headingAccent) && /capt/i.test(headingAccent);
  const isDefaultPrimaryCta = /solicitar/i.test(primaryCtaLabel) && /diagn/i.test(primaryCtaLabel);

  const heroDescription = isDefaultDescription || normalizeCopy(description).includes('controle do seu faturamento') ? (
    <>
      Coloque o <strong>controle do seu faturamento</strong> em suas maos
      {' '}<br className="hero-sub__break" />
      com um <strong>diagnostico gratuito e personalizado</strong>.
    </>
  ) : (
    description
  );

  const heroHeadingAccent = isDefaultHeadingAccent || normalizeCopy(headingAccent).startsWith('previsivel e escalavel') ? (
    <>
      <span className="hero-heading__emphasis">previsível e escalável</span> de captação de
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

        <div className="nav-menu">
          <div className="nav-actions">
            <a className="btn-login" href="#metodo">
              Ver método
            </a>
            <a className="btn-signup" href={primaryCtaHref}>
              Diagnóstico
            </a>
          </div>
        </div>
      </nav>

      <section className="hero-card" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />

        <div className="icon-pipeline" aria-hidden="true">
          <div className="pipeline-flow">
            <span className="pipeline-flow__line" />
            <span className="pipeline-flow__beam" />
            <span className="pipeline-flow__pulse" />
          </div>

          <div className="icon-node node-light-right">
            <Gauge size={20} strokeWidth={1.8} />
          </div>

          <div className="icon-center-wrap">
            <div className="icon-node-center">
              <LineChart size={28} strokeWidth={1.8} />
            </div>
          </div>

          <div className="icon-node node-light-left">
            <FileText size={20} strokeWidth={1.8} />
          </div>
        </div>

        <div className="hero-content">
          <h1 id="hero-title" className="hero-heading">
            {heading}
            {' '}
            <strong>{heroHeadingAccent}</strong>
          </h1>
          <p className="hero-sub">
            {isDefaultDescription ? (
              <>
                Receba um <strong>Receba um Mapa Estratégico Completo da Operação</strong>
                {' '}<br className="hero-sub__break" />
                de Crescimento do seu Escritório.
              </>
            ) : (
              heroDescription
            )}
          </p>
          <a href={primaryCtaHref} className="btn-cta">
            <WhatsAppIcon />
            {isDefaultPrimaryCta ? 'Solicitar diagnóstico' : primaryCtaLabel}
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
