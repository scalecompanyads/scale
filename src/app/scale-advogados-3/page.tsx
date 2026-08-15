import Image from "next/image";
import Script from "next/script";
import "./scale-advogados-3.css";
import { legalLogos } from "@/data/legalLogos";
import { extraLogos, extraLogoBasePath } from "@/data/legalExtraLogos";
import { DepoimentosCarousel } from "./DepoimentosCarousel";
import { VideoTestimonials } from "./VideoTestimonials";
import { Laptop, UserPlus, Rocket, Globe, CheckCircle2, TrendingUp, Users, Globe2, Target, Layout, Palette, Clapperboard, Database, GraduationCap } from "lucide-react";
import { InlineLeadForm } from "./InlineLeadForm";

const marketPoints = [
  { Icon: Laptop, label: "Sem espaço físico" },
  { Icon: UserPlus, label: "Clientes chegando todos os dias" },
  { Icon: Rocket, label: "Na frente dos concorrentes" },
  { Icon: Globe, label: "Sem limite territorial" },
];

const investmentReasons = [
  "Time completo de marketing",
  "Otimização de tempo",
  "Adaptabilidade e flexibilidade",
  "Resultados mensuráveis",
  "Abordagem estratégica",
  "Foco no retorno",
];

const brandLogos = [
  ...legalLogos,
  ...extraLogos.map((logo) => ({ ...logo, src: `${extraLogoBasePath}/${logo.file}` })),
];

const valueQuestions = [
  { Icon: TrendingUp, question: "Quanto vale escalar os fechamentos de contrato do seu escritório?" },
  { Icon: Users, question: "Quanto vale ter uma equipe de marketing completa trabalhando pra você?" },
  { Icon: Globe2, question: "Quanto vale expandir as fronteiras do seu escritório?" },
];

const deliverables = [
  { Icon: Target, title: "Tráfego", description: "Campanhas no Google e Meta Ads gerenciadas para gerar leads qualificados todos os dias." },
  { Icon: Layout, title: "Landing Page", description: "Página de captação profissional, otimizada para converter visitantes em leads." },
  { Icon: Palette, title: "Artes", description: "Criativos para redes sociais e anúncios, prontos para publicar." },
  { Icon: Clapperboard, title: "Edição de Vídeo", description: "Vídeos editados para anúncios e conteúdo, prontos para rodar nas campanhas." },
  { Icon: Database, title: "CRM", description: "Sistema para organizar e acompanhar seus leads do primeiro contato ao fechamento." },
  { Icon: GraduationCap, title: "Treinamento Comercial", description: "Capacitação da sua equipe para converter mais leads em contratos." },
];

export default function ScaleAdvogados3Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Google Tag Manager */}
      <Script
        id="gtm-init"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KS5L52P9');`,
        }}
      />
      {/* End Google Tag Manager */}

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KS5L52P9"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      <div className="bg-[#1a34e8] px-4 py-3 text-center md:py-3.5">
        <p className="text-[13px] font-extrabold uppercase leading-snug tracking-wide md:text-[15px]">
          Agende um diagnóstico e desbloqueie um bônus exclusivo
        </p>
      </div>

      <section className="relative flex flex-col items-center overflow-hidden px-6 pb-14 pt-12 text-center md:px-10 md:pb-24 md:pt-20">
        <Image
          src="/scale-advogados/assets/hero-3.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/85 to-black"
          aria-hidden="true"
        />

        <div className="relative mt-10 max-w-md md:mt-4 md:max-w-2xl">
          <Image
            src="/images/scale-logo.svg"
            alt="Scale Company"
            width={140}
            height={35}
            className="mx-auto mb-8 h-auto w-[140px] md:w-[180px]"
            priority
          />

          <h1 className="text-[28px] font-extrabold leading-[1.25] text-white md:text-5xl lg:text-6xl">
            Sua Advocacia com
            <br />
            uma máquina
            <br />
            previsível de
            <br />
            captação de clientes:
          </h1>

          <p className="mt-5 text-[15px] leading-relaxed text-white/85 md:mx-auto md:mt-7 md:max-w-xl md:text-lg">
            Descubra como implementamos em <strong className="font-bold text-white">15 dias</strong> a maior
            engrenagem de aquisição para escritórios de advocacia.
          </p>

          <a
            href="#formulario"
            className="cta-pulse mt-7 block rounded-lg bg-[#379D2E] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white md:mx-auto md:mt-9 md:max-w-xs md:text-base"
          >
            Quero captar mais clientes
          </a>

          <p className="mt-4 text-[13px] text-white/70 md:text-sm">
            Clique no botão para falar conosco agora mesmo!
          </p>
        </div>
      </section>

      <section className="bg-black px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
        <p className="text-center text-[11px] font-bold uppercase tracking-wide text-white/45 md:text-[13px]">
          Escritórios que confiam na <span className="text-white">Scale</span>
        </p>

        <div className="sa3-brands mt-5">
          <div className="sa3-brands-track">
            {brandLogos.map((logo) => (
              <div className="sa3-brand-item" key={logo.src}>
                <img src={logo.src} alt={logo.alt} decoding="async" />
              </div>
            ))}
            {brandLogos.map((logo) => (
              <div className="sa3-brand-item" key={`${logo.src}-clone`} aria-hidden="true">
                <img src={logo.src} alt="" decoding="async" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center md:mt-16">
          <h2 className="inline-block border-b-[3px] border-[#1a34e8] pb-2 text-[26px] font-extrabold text-white md:text-4xl">
            Alguns feedbacks
          </h2>
        </div>

        <blockquote className="mx-auto mt-6 max-w-xs text-center text-[14px] italic leading-relaxed text-white/75 md:max-w-md md:text-base">
          &ldquo;Eficiência é fazer as coisas direito; eficácia é fazer as coisas certas.&rdquo;
          <footer className="mt-1.5 text-[13px] not-italic font-semibold text-white/90 md:text-sm">
            Peter Drucker
          </footer>
        </blockquote>

        <DepoimentosCarousel />

        <div className="mt-12 text-center md:mt-16">
          <h3 className="inline-block border-b-[3px] border-[#1a34e8] pb-2 text-[22px] font-extrabold text-white md:text-3xl">
            Mais alguns feedbacks
          </h3>
        </div>

        <VideoTestimonials />

        <div className="mt-10 flex justify-center md:mt-14">
          <a
            href="#formulario"
            className="cta-pulse block rounded-lg bg-[#379D2E] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white md:max-w-xs md:text-base"
          >
            Quero captar mais clientes
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-slate-900 md:px-10 md:py-24">
        <h2 className="text-center text-[24px] font-extrabold leading-tight md:text-4xl">
          Um novo mercado está se abrindo na sua frente
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-center text-[14.5px] leading-relaxed text-slate-600 md:mt-4 md:max-w-xl md:text-lg">
          O digital é hoje a maior oportunidade de crescimento para escritórios de advocacia. Captar clientes nunca foi tão simples.
        </p>

        <div className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-4 md:mt-12 md:max-w-3xl md:grid-cols-4">
          {marketPoints.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 md:h-12 md:w-12">
                <Icon className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />
              </div>
              <span className="text-[13.5px] font-semibold leading-snug text-slate-800 md:text-sm">{label}</span>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-9 max-w-xs text-center text-[14px] italic leading-relaxed text-slate-500 md:mt-12 md:max-w-md md:text-base">
          &ldquo;Você é o resultado das suas decisões.&rdquo;
          <footer className="mt-1.5 text-[13px] not-italic font-semibold text-slate-700 md:text-sm">
            Albert Camus
          </footer>
        </blockquote>

        <div className="mt-9 flex flex-col items-center md:mt-12">
          <a
            href="#formulario"
            className="cta-pulse block rounded-lg bg-[#379D2E] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white md:max-w-xs md:text-base"
          >
            Quero captar mais clientes
          </a>
          <p className="mt-4 text-[13px] text-slate-500 md:text-sm">
            Clique no botão para falar conosco agora mesmo!
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white md:px-10 md:py-24">
        <h2 className="text-center text-[24px] font-extrabold leading-tight md:text-4xl">
          Por que investir em uma empresa de crescimento?
        </h2>

        <div className="mx-auto mt-7 grid max-w-sm grid-cols-2 gap-2.5 md:mt-12 md:max-w-2xl md:grid-cols-3">
          {investmentReasons.map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#379D2E]" />
              <span className="text-[12.5px] font-medium leading-snug text-white/90 md:text-sm">{label}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-sm text-center text-[14.5px] leading-relaxed text-white/70 md:mt-12 md:max-w-xl md:text-lg">
          Você recebe tudo pronto, em um lugar só: landing page, CRM, treinamento comercial e artes. Nós estruturamos o seu escritório com você.
        </p>

        <div className="mx-auto mt-7 grid max-w-sm gap-3 md:mt-10 md:max-w-2xl md:grid-cols-2">
          {deliverables.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                <Icon className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-white">{title}</p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-white/60">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center md:mt-12">
          <a
            href="#formulario"
            className="cta-pulse block rounded-lg bg-[#379D2E] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white md:max-w-xs md:text-base"
          >
            Quero captar mais clientes
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-slate-900 md:px-10 md:py-24">
        <h2 className="text-center text-[24px] font-extrabold leading-tight md:text-4xl">
          Quanto custa ter tudo isso?
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-center text-[14.5px] leading-relaxed text-slate-600 md:mt-5 md:max-w-2xl md:text-lg">
          Tudo vai depender das necessidades do seu escritório e dos resultados que você quer alcançar. A Scale entrega uma estrutura 100% personalizada, atuando em todas as frentes de captação do seu negócio. Mas responda as perguntas abaixo:
        </p>

        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 md:mt-12 md:max-w-4xl md:flex-row">
          {valueQuestions.map(({ Icon, question }) => (
            <div
              key={question}
              className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-1 md:flex-col md:items-center md:gap-3 md:p-6 md:text-center"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 md:h-12 md:w-12">
                <Icon className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />
              </div>
              <span className="pt-1.5 text-[14px] font-medium leading-snug text-slate-800 md:pt-0 md:text-[15px]">{question}</span>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center md:mt-12">
          <a
            href="#formulario"
            className="cta-pulse block rounded-lg bg-[#379D2E] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white md:max-w-xs md:text-base"
          >
            Quero captar mais clientes
          </a>
          <p className="mt-4 text-[13px] text-slate-500 md:text-sm">
            Clique no botão para falar conosco agora mesmo!
          </p>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-16 text-center md:px-10 md:py-24"
        style={{ background: "#1630DF" }}
      >
        <div className="relative mx-auto max-w-xs md:max-w-lg">
          <h2 className="text-[24px] font-extrabold leading-tight text-white md:text-4xl">
            Comece a estruturar seu escritório hoje
          </h2>

          <InlineLeadForm />
        </div>
      </section>
    </main>
  );
}
