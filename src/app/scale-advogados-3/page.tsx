import Image from "next/image";
import "./scale-advogados-3.css";
import { legalLogos } from "@/data/legalLogos";
import { extraLogos, extraLogoBasePath } from "@/data/legalExtraLogos";
import { DepoimentosCarousel } from "./DepoimentosCarousel";
import { VideoTestimonials } from "./VideoTestimonials";
import { Laptop, UserPlus, Rocket, Globe, CheckCircle2, TrendingUp, Users, Globe2 } from "lucide-react";
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

export default function ScaleAdvogados3Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="bg-[#1a34e8] px-4 py-2.5 text-center">
        <p className="text-[13px] font-extrabold uppercase leading-snug tracking-wide">
          Agende um diagnóstico e desbloqueie um bônus exclusivo
        </p>
      </div>

      <section className="relative flex flex-col items-center overflow-hidden px-6 pb-14 pt-12 text-center">
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

        <div className="relative mt-10 max-w-md">
          <Image
            src="/images/scale-logo.svg"
            alt="Scale Company"
            width={140}
            height={35}
            className="mx-auto mb-8"
            priority
          />

          <h1 className="text-[28px] font-extrabold leading-[1.25] text-white">
            Sua Advocacia com
            <br />
            uma máquina
            <br />
            previsível de
            <br />
            captação de clientes:
          </h1>

          <p className="mt-5 text-[15px] leading-relaxed text-white/85">
            Descubra como implementamos em <strong className="font-bold text-white">15 dias</strong> a maior
            engrenagem de aquisição para escritórios de advocacia.
          </p>

          <a
            href="#formulario"
            className="cta-pulse mt-7 block rounded-lg bg-[#379D2E] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white"
          >
            Quero captar mais clientes
          </a>

          <p className="mt-4 text-[13px] text-white/70">
            Clique no botão para falar conosco agora mesmo!
          </p>
        </div>
      </section>

      <section className="bg-black px-6 pb-16 pt-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-wide text-white/45">
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

        <div className="mt-10 text-center">
          <h2 className="inline-block border-b-[3px] border-[#1a34e8] pb-2 text-[26px] font-extrabold text-white">
            Alguns feedbacks
          </h2>
        </div>

        <blockquote className="mx-auto mt-6 max-w-xs text-center text-[14px] italic leading-relaxed text-white/75">
          &ldquo;Eficiência é fazer as coisas direito; eficácia é fazer as coisas certas.&rdquo;
          <footer className="mt-1.5 text-[13px] not-italic font-semibold text-white/90">
            Peter Drucker
          </footer>
        </blockquote>

        <DepoimentosCarousel />

        <div className="mt-12 text-center">
          <h3 className="inline-block border-b-[3px] border-[#1a34e8] pb-2 text-[22px] font-extrabold text-white">
            Mais alguns feedbacks
          </h3>
        </div>

        <VideoTestimonials />

        <div className="mt-10 flex justify-center">
          <a
            href="#formulario"
            className="cta-pulse block rounded-lg bg-[#379D2E] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white"
          >
            Quero captar mais clientes
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-slate-900">
        <h2 className="text-center text-[24px] font-extrabold leading-tight">
          Um novo mercado está se abrindo na sua frente
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-center text-[14.5px] leading-relaxed text-slate-600">
          O digital é hoje a maior oportunidade de crescimento para escritórios de advocacia. Captar clientes nunca foi tão simples.
        </p>

        <div className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-4">
          {marketPoints.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-[13.5px] font-semibold leading-snug text-slate-800">{label}</span>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-9 max-w-xs text-center text-[14px] italic leading-relaxed text-slate-500">
          &ldquo;Você é o resultado das suas decisões.&rdquo;
          <footer className="mt-1.5 text-[13px] not-italic font-semibold text-slate-700">
            Albert Camus
          </footer>
        </blockquote>

        <div className="mt-9 flex flex-col items-center">
          <a
            href="#formulario"
            className="cta-pulse block rounded-lg bg-[#379D2E] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white"
          >
            Quero captar mais clientes
          </a>
          <p className="mt-4 text-[13px] text-slate-500">
            Clique no botão para falar conosco agora mesmo!
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white">
        <h2 className="text-center text-[24px] font-extrabold leading-tight">
          Por que investir em uma empresa de crescimento?
        </h2>

        <div className="mx-auto mt-7 grid max-w-sm grid-cols-2 gap-2.5">
          {investmentReasons.map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#379D2E]" />
              <span className="text-[12.5px] font-medium leading-snug text-white/90">{label}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-sm text-center text-[14.5px] leading-relaxed text-white/70">
          Você recebe tudo pronto, em um lugar só: landing page, CRM, treinamento comercial e artes. Nós estruturamos o seu escritório com você.
        </p>

        <div className="mx-auto mt-7 flex max-w-sm flex-col gap-4">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12]">
            <p className="px-4 py-3 text-[13px] font-bold text-white">Tráfego</p>
            <div className="aspect-video w-full">
              <img src="/scale-advogados/assets/google-meta-dashboard-dark.webp" alt="Dashboard de tráfego pago" decoding="async" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12]">
            <p className="px-4 py-3 text-[13px] font-bold text-white">Landing Page</p>
            <div className="aspect-video w-full">
              <video src="/scale-advogados/assets/landing-page-demo.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12]">
            <p className="px-4 py-3 text-[13px] font-bold text-white">Artes</p>
            <div className="aspect-video w-full">
              <img src="/scale-advogados/assets/arte-social-damas-lima.png" alt="Arte para redes sociais" decoding="async" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12]">
            <p className="px-4 py-3 text-[13px] font-bold text-white">Edição de Vídeo</p>
            <div className="aspect-video w-full">
              <video src="/scale-advogados/assets/video-editing-bg.mp4" autoPlay muted loop playsInline style={{ objectPosition: "left center" }} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12]">
            <p className="px-4 py-3 text-[13px] font-bold text-white">CRM</p>
            <div className="aspect-video w-full">
              <video src="/scale-advogados/assets/crm-demo.mp4" autoPlay muted loop playsInline style={{ objectPosition: "center top" }} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12]">
            <p className="px-4 py-3 text-[13px] font-bold text-white">Treinamento Comercial</p>
            <div className="aspect-video w-full">
              <video src="/scale-advogados/assets/comercial-gabriel.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col items-center">
          <a
            href="#formulario"
            className="cta-pulse block rounded-lg bg-[#379D2E] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white"
          >
            Quero captar mais clientes
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-slate-900">
        <h2 className="text-center text-[24px] font-extrabold leading-tight">
          Quanto custa ter tudo isso?
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-center text-[14.5px] leading-relaxed text-slate-600">
          Tudo vai depender das necessidades do seu escritório e dos resultados que você quer alcançar. A Scale entrega uma estrutura 100% personalizada, atuando em todas as frentes de captação do seu negócio. Mas responda as perguntas abaixo:
        </p>

        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
          {valueQuestions.map(({ Icon, question }) => (
            <div
              key={question}
              className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <span className="pt-1.5 text-[14px] font-medium leading-snug text-slate-800">{question}</span>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center">
          <a
            href="#formulario"
            className="cta-pulse block rounded-lg bg-[#379D2E] px-6 py-4 text-[15px] font-extrabold uppercase tracking-wide text-white"
          >
            Quero captar mais clientes
          </a>
          <p className="mt-4 text-[13px] text-slate-500">
            Clique no botão para falar conosco agora mesmo!
          </p>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-16 text-center"
        style={{ background: "#1630DF" }}
      >
        <div className="relative mx-auto max-w-xs">
          <h2 className="text-[24px] font-extrabold leading-tight text-white">
            Comece a estruturar seu escritório hoje
          </h2>

          <InlineLeadForm />
        </div>
      </section>
    </main>
  );
}
