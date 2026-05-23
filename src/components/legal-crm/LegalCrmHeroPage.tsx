"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const videoSrc =
  "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";

const posterSrc =
  "https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080";

const navItems = [
  { label: "Produto", hasChevron: true },
  { label: "Casos reais" },
  { label: "Recursos" },
  { label: "Planos" },
] as const;

function ScaleBrand() {
  return (
    <a href="/" className="inline-flex py-1" aria-label="Scale Company">
      <img
        src="/images/scale-logo.svg"
        alt="Scale Company"
        width={584}
        height={182}
        decoding="async"
        className="h-7 w-auto max-w-[168px] object-contain object-left sm:h-8 sm:max-w-[190px]"
      />
    </a>
  );
}

function DashboardFrame() {
  return (
    <motion.div
      id="dashboard"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.55 }}
      className="relative w-full max-w-[1420px]"
    >
      <div className="absolute inset-x-[12%] top-3 h-14 rounded-full bg-[#d2b071]/10 blur-[64px]" />
      <div className="absolute inset-x-[10%] bottom-[-5%] h-16 rounded-full bg-black/38 blur-[56px]" />

      <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[#0a1621]/38 shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
        <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-inset ring-white/6" />

        <img
          src="/images/legal-crm-dashboard-hero.png"
          alt="Dashboard premium do CRM juridico da Scale mostrando pipeline, atividade e funil de vendas."
          className="relative block w-full"
          loading="eager"
          decoding="async"
        />
      </div>
    </motion.div>
  );
}

export default function LegalCrmHeroPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    const handleLoadedMetadata = () => {
      video.play().catch((error) => console.log("Auto-play prevented:", error));
    };

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((error) => console.log("Auto-play prevented:", error));
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (hls) hls.destroy();
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-[Inter,sans-serif] text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 bg-transparent px-6 py-4">
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between">
          <ScaleBrand />

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.label}
                {item.hasChevron ? <ChevronDown className="h-4 w-4" /> : null}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/contato"
              className="hidden text-sm font-medium text-white/80 transition-colors hover:text-white sm:block"
            >
              Falar com especialista
            </a>
            <a
              href="/contato"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] sm:inline-flex"
            >
              Agendar demo
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 p-2 text-white md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-[60] bg-black/94 px-6 py-24 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/84"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex w-fit rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
            >
              Agendar demo
            </a>
          </div>
        </div>
      ) : null}

      <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
        <video
          ref={videoRef}
          poster={posterSrc}
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-[0.82]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,16,0.14)_0%,rgba(8,8,12,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(210,176,113,0.12),transparent_34%)]" />
        <div className="absolute left-[14%] top-[-18%] h-[620px] w-[620px] bg-[#8a6738]/18 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-8%] right-[14%] h-[560px] w-[560px] bg-[#d2b071]/14 blur-[120px] mix-blend-screen" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center px-4 pb-0 pt-20 text-center sm:px-6 sm:pt-24">
          <div className="mt-10 flex w-full flex-col items-center space-y-5 sm:mt-12 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-full border border-white/12 bg-white/7 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72"
            >
              CRM juridico para escritorios em crescimento
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-5xl bg-gradient-to-b from-white via-white to-[#8fdcff] bg-clip-text text-4xl font-semibold leading-[0.92] tracking-[-0.06em] text-transparent sm:text-6xl lg:text-[92px]"
            >
              Seu comercial juridico, sob controle.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.94 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-3xl text-base leading-[1.68] text-white sm:text-[19px]"
            >
              Organize leads, follow-ups, agenda e pipeline em um so lugar para
              ganhar velocidade comercial e fechar mais casos com previsibilidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col items-center gap-6 sm:flex-row"
            >
              <a
                href="/contato"
                className="group inline-flex items-center rounded-full bg-white pl-6 pr-2 py-2 text-[#0a0400] transition duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <span className="text-lg font-medium">Agendar demonstracao</span>
                <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1630DF] transition-colors group-hover:bg-[#0f27b9]">
                  <ArrowRight className="h-5 w-5 text-white" />
                </span>
              </a>

              <a
                href="#dashboard"
                className="group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                <span>Explorar o dashboard</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <div className="w-full overflow-visible px-0 pt-4 sm:px-2 sm:pt-6">
              <DashboardFrame />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
