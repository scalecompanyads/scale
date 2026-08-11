import Image from "next/image";
import {
  Calendar,
  Clock,
  Video,
  MessageCircleOff,
  MessageCircleX,
  CalendarX,
  TrendingDown,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/ERTRC0jyB5bFAYaXvb8VIo?s=cl&p=i&mlu=4";

const publico = [
  { icon: MessageCircleOff, label: "Leads que não respondem" },
  { icon: MessageCircleX, label: "Leads que respondem e somem no meio da conversa" },
  { icon: CalendarX, label: "Leads que marcam reunião e não comparecem" },
  { icon: TrendingDown, label: "Leads qualificados, mas com dificuldade de conversão" },
];

const conteudo = [
  "Fundamentos de um atendimento comercial eficiente",
  "Princípios de uma boa abordagem comercial",
  "Exemplos de casos reais",
];

function CTAButton() {
  return (
    <a
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-shiny"
    >
      <WhatsAppIcon size={18} />
      Quero participar
    </a>
  );
}

export default function TreinamentoComercialPage() {
  return (
    <main className="min-h-screen bg-[#010f1c] text-white">
      {/* Topo */}
      <section className="relative flex flex-col items-center overflow-hidden px-6 pb-20 pt-16 text-center sm:px-10">
        <Image src="/scale-advogados/assets/bg.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010f1c]/30 via-[#010f1c]/70 to-[#010f1c]" aria-hidden="true" />
        <div className="relative w-full max-w-3xl">
          <Image src="/images/scale-logo.svg" alt="Scale Company" width={160} height={40} className="mx-auto mb-10" priority />

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Treinamento Comercial ao Vivo · Para Advogados
          </p>

          <h1 className="section-title !text-3xl md:!text-5xl">
            Aprenda as 7 etapas para transformar leads que somem, enrolam ou não comparecem em <span>clientes fechados</span>
          </h1>

          <p className="section-subtitle mx-auto mt-6 max-w-2xl">
            Um treinamento comercial ao vivo para advogados que querem aumentar a conversão dos leads que já chegam no escritório, sem precisar investir mais em tráfego.
          </p>

          <div className="card-glass shadow-blue-soft mx-auto mt-10 flex max-w-xl flex-col divide-y divide-white/10 sm:flex-row sm:divide-x sm:divide-y-0">
            <div className="flex flex-1 items-center justify-center gap-3 px-6 py-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                <Calendar className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/40">Data</p>
                <p className="font-semibold text-white">Terça-feira</p>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-3 px-6 py-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/40">Horário</p>
                <p className="font-semibold text-white">12h</p>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-3 px-6 py-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                <Video className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/40">Onde</p>
                <p className="font-semibold text-white">Google Meet</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <CTAButton />
            <p className="mt-4 text-sm text-white/50">O link da reunião é enviado dentro do grupo do WhatsApp.</p>
          </div>
        </div>
      </section>

      {/* Para quem é essa aula */}
      <section className="bg-white px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">O problema</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">Para quem é essa aula</h2>
          <p className="text-lg text-slate-600 mb-10">
            Essa aula é focada em advogados que se encaixam em pelo menos uma dessas situações:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {publico.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <item.icon className="h-5 w-5 text-amber-600" />
                </div>
                <span className="pt-1.5 text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section
        className="relative overflow-hidden border-t border-white/5 px-6 py-20 sm:px-10"
        style={{ background: "linear-gradient(135deg, #0b1740 0%, #010f1c 55%, #0a1330 100%)" }}
      >
        <div className="glow-cyan pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">A solução</p>
          <h2 className="section-title !text-2xl md:!text-3xl">O que você vai aprender</h2>
          <div className="mt-10 space-y-4">
            {conteudo.map((label, i) => (
              <div key={label} className="card-glass flex items-center gap-5 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 font-bold text-blue-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-white/90">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section
        className="relative overflow-hidden border-t border-white/5 px-6 py-20 text-center sm:px-10 sm:py-28"
        style={{ background: "linear-gradient(135deg, #3B82F6 0%, #1630DF 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl">Garanta sua vaga</h2>
          <p className="mb-8 text-lg text-white/85">
            Entre no grupo do WhatsApp para receber o link da reunião no Google Meet.
          </p>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-600 shadow-xl transition-transform hover:scale-105"
          >
            <WhatsAppIcon size={18} />
            Quero participar
          </a>
        </div>
      </section>
    </main>
  );
}
