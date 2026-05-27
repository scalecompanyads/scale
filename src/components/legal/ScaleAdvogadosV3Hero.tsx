import { legalLogos } from '@data/legalLogos';
import { FileText, Gauge, LineChart, type LucideIcon } from 'lucide-react';

interface HeroChannelCard {
  title: string;
  description: string;
  label?: string;
  logo?: 'google-ads' | 'meta-ads' | 'journey';
  highlights?: string[];
  Icon: LucideIcon;
}

interface Props {
  eyebrow?: string;
  heading: string;
  headingAccent: string;
  description: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  supportNote?: string;
  navHelperHref?: string;
  navHelperLabel?: string;
  brandsLabel?: string;
  channelTitle?: string;
  channelDescription?: string;
  channelCards?: HeroChannelCard[];
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

function GoogleAdsLogo() {
  return (
    <svg viewBox="0 0 64 64" width="30" height="30" aria-hidden="true" focusable="false">
      <g transform="matrix(0.257748 0 0 0.257745 -0.361416 2.515516)">
        <path
          d="M85.9 28.6c2.4-6.3 5.7-12.1 10.6-16.8 19.6-19.1 52-14.3 65.3 9.7 10 18.2 20.6 36 30.9 54l51.6 89.8c14.3 25.1-1.2 56.8-29.6 61.1-17.4 2.6-33.7-5.4-42.7-21l-45.4-78.8c-.3-.6-.7-1.1-1.1-1.6-1.6-1.3-2.3-3.2-3.3-4.9L88.8 62.2c-3.9-6.8-5.7-14.2-5.5-22 .3-4 .8-8 2.6-11.6"
          fill="#4285F4"
        />
        <path
          d="M85.9 28.6c-.9 3.6-1.7 7.2-1.9 11-.3 8.4 1.8 16.2 6 23.5l32.9 56.9c1 1.7 1.8 3.4 2.8 5l-18.1 31.1-25.3 43.6c-.4 0-.5-.2-.6-.5-.1-.8.2-1.5.4-2.3 4.1-15 .7-28.3-9.6-39.7-6.3-6.9-14.3-10.8-23.5-12.1-12-1.7-22.6 1.4-32.1 8.9-1.7 1.3-2.8 3.2-4.8 4.2-.4 0-.6-.2-.7-.5l14.3-24.9L85.2 29.7c.2-.4.5-.7.7-1.1"
          fill="#FBBC04"
        />
        <path
          d="M11.8 158l5.7-5.1c24.3-19.2 60.8-5.3 66.1 25.1 1.3 7.3.6 14.3-1.6 21.3-.1.6-.2 1.1-.4 1.7-.9 1.6-1.7 3.3-2.7 4.9-8.9 14.7-22 22-39.2 20.9C20 225.4 4.5 210.6 1.8 191c-1.3-9.5.6-18.4 5.5-26.6 1-1.8 2.2-3.4 3.3-5.2.5-.4.3-1.2 1.2-1.2"
          fill="#34A853"
        />
        <path d="M11.8 158c-.4.4-.4 1.1-1.1 1.2-.1-.7.3-1.1.7-1.6l.4.4" fill="#FBBC04" />
        <path d="M81.6 201c-.4-.7 0-1.2.4-1.7l.4.4-.8 1.3" fill="#FBBC04" />
      </g>
    </svg>
  );
}

function MetaLogo() {
  return (
    <svg viewBox="0 0 16 16" width="32" height="32" aria-hidden="true" focusable="false">
      <path
        fillRule="evenodd"
        d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.615-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.137 0 .27.018"
        fill="#0866FF"
      />
    </svg>
  );
}

function JourneyLogo() {
  return (
    <svg viewBox="0 0 64 64" width="30" height="30" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="journeyGradient" x1="8" y1="32" x2="56" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4285F4" />
          <stop offset="0.5" stopColor="#34A853" />
          <stop offset="1" stopColor="#0866FF" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="32" r="8" fill="#4285F4" />
      <circle cx="32" cy="20" r="8" fill="#34A853" />
      <circle cx="52" cy="32" r="8" fill="#0866FF" />
      <path
        d="M18 30c4-5 8-8 14-8h0c6 0 10 3 14 8"
        fill="none"
        stroke="url(#journeyGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18 34c4 5 8 8 14 8h0c6 0 10-3 14-8"
        fill="none"
        stroke="url(#journeyGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.85"
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

function getChannelLogo(logo?: HeroChannelCard['logo']) {
  if (logo === 'google-ads') return <GoogleAdsLogo />;
  if (logo === 'meta-ads') return <MetaLogo />;
  if (logo === 'journey') return <JourneyLogo />;
  return null;
}

export default function ScaleAdvogadosV3Hero({
  eyebrow,
  heading,
  headingAccent,
  description,
  primaryCtaHref,
  primaryCtaLabel,
  supportNote,
  navHelperHref = '#metodo',
  navHelperLabel = 'Ver metodo',
  brandsLabel = 'Escritorios que confiam na Scale',
  channelTitle,
  channelDescription,
  channelCards = [],
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

  const mainChannels = channelCards.filter(c => c.logo !== 'journey');
  const journeyChannel = channelCards.find(c => c.logo === 'journey');
  const showChannelBridge = Boolean(journeyChannel && mainChannels.length === 2);

  return (
    <div className="scale-v3-hero-shell">
      <nav className="hero-nav" aria-label="Navegacao principal da pagina">
        <a href="/" className="nav-logo" aria-label="Scale Company">
          <img src="/images/scale-logo.svg" alt="Scale Company" />
        </a>

        <div className="nav-menu">
          <div className="nav-actions">
            <a className="btn-login" href={navHelperHref}>
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
          {eyebrow ? <p className="hero-eyebrow">{eyebrow}</p> : null}
          <h1 id="hero-title" className="hero-heading">
            {heading}
            {' '}
            <strong>{heroHeadingAccent}</strong>
          </h1>
          <p className="hero-sub">
            {isDefaultDescription ? (
              <>
          <strong>Receba um Mapa Estratégico Completo da Operação</strong>
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
          {supportNote ? <p className="hero-support-note">{supportNote}</p> : null}
        </div>
      </section>

      <div className="brands-shell">
        <p className="brands-label">{brandsLabel}</p>
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

      {channelCards.length ? (
        <section className="hero-channels" aria-label={channelTitle ?? 'Canais de aquisicao juridica'}>
          <div className="hero-channels__layout-header">
            {channelTitle ? <h2 className="hero-channels__title">{channelTitle}</h2> : null}
            {channelDescription ? <p className="hero-channels__description">{channelDescription}</p> : null}
          </div>

          <div className="hero-channels__flow">
            <div className="hero-channels__pillars">
              {mainChannels.map((card, index) => {
                const Icon = card.Icon;
                const logo = getChannelLogo(card.logo);
                const cardClassName = ['hero-channel-card', `hero-channel-card--${card.logo}`];

                return (
                  <div key={card.title}>
                    <article className={cardClassName.join(' ')}>
                      <div className="hero-channel-card__header">
                        <div className="hero-channel-card__brand">
                          <div className="hero-channel-card__icon">
                            {logo ?? <Icon size={20} strokeWidth={1.8} />}
                          </div>
                          <div className="hero-channel-card__headline">
                            {card.label ? <span className="hero-channel-card__label">{card.label}</span> : null}
                            <h3>{card.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="hero-channel-card__copy">
                        <p dangerouslySetInnerHTML={{ __html: card.description }} />
                      </div>
                    </article>

                    {showChannelBridge && index === 0 ? (
                      <div className="hero-channels__bridge hero-channels__bridge--mobile" aria-hidden="true">
                        <span className="hero-channels__bridge-arm hero-channels__bridge-arm--left" />
                        <span className="hero-channels__bridge-arm hero-channels__bridge-arm--right" />
                        <div className="hero-channels__bridge-core">
                          <WhatsAppIcon />
                        </div>
                        <span className="hero-channels__bridge-drop" />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            {journeyChannel ? (
              <>
                {showChannelBridge ? (
                  <div className="hero-channels__bridge hero-channels__bridge--desktop" aria-hidden="true">
                    <span className="hero-channels__bridge-arm hero-channels__bridge-arm--left" />
                    <span className="hero-channels__bridge-arm hero-channels__bridge-arm--right" />
                    <div className="hero-channels__bridge-core">
                      <WhatsAppIcon />
                    </div>
                    <span className="hero-channels__bridge-drop" />
                  </div>
                ) : null}

                <article className="hero-channel-card hero-channel-card--journey hero-channel-card--wide">
                  <div className="hero-channel-card__journey-grid">
                    <div className="hero-channel-card__journey-text">
                      <div className="hero-channel-card__header">
                        <div className="hero-channel-card__brand">
                          <div className="hero-channel-card__icon">
                            <JourneyLogo />
                          </div>
                          <div className="hero-channel-card__headline">
                            {journeyChannel.label ? <span className="hero-channel-card__label">{journeyChannel.label}</span> : null}
                            <h3>{journeyChannel.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="hero-channel-card__copy">
                        <p dangerouslySetInnerHTML={{ __html: journeyChannel.description }} />
                      </div>
                    </div>

                    <div className="journey-whatsapp-focus" aria-hidden="true">
                      <span className="journey-whatsapp-focus__halo" />
                      <div className="journey-whatsapp-focus__icon">
                        <WhatsAppIcon />
                      </div>
                      <span className="journey-whatsapp-focus__label">WhatsApp do escritório</span>
                      <p className="journey-whatsapp-focus__copy">
                        O ponto em que intenção e autoridade viram conversa comercial.
                      </p>
                      {journeyChannel.highlights?.length ? (
                        <div className="journey-whatsapp-focus__chips">
                          {journeyChannel.highlights.map((highlight) => (
                            <span key={highlight}>{highlight}</span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              </>
            ) : null}
          </div>
        </section>
      ) : null}
    </div>
  );
}
