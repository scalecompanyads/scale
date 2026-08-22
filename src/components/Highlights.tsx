"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import KeywordMarquee from "@/components/KeywordMarquee";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

type DestaqueItem = {
  image: string;
  eyebrow: string;
  headingLine1: string;
  headingLine2Lead: string;
  headingLine2Strong: string;
  linkLabel: string;
  href: string;
};

type CardVariant = "accent" | "light";

type CardItem = {
  variant: CardVariant;
  label: string;
  title?: string;
  text: string;
  linkLabel: string;
  href: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

const DESTAQUE_POOL: DestaqueItem[] = [
  {
    image: "/images/destaque-1.png",
    eyebrow: "CASES",
    headingLine1: "Estratégia que sai da tela",
    headingLine2Lead: "e chega ao ",
    headingLine2Strong: "contrato.",
    linkLabel: "CONHEÇA NOSSOS RESULTADOS",
    href: "/cases",
  },
];

const CASES_POOL: CardItem[] = [
  {
    variant: "accent",
    label: "CASE",
    text: "5 contratos e +R$ 10,5 mil em honorários no primeiro mês, estratégia de aquisição desenvolvida para um escritório de Direito de Família, combinando Google Ads, Meta Ads e Landing Page.",
    linkLabel: "VER CASE COMPLETO",
    href: "/cases/vinicio-rodrigues",
    image: "/images/case-vinicio-rodrigues-cover-v2.png",
    imageAlt: "Capa do case do Dr. Vinício Rodrigues",
  },
];

const RECONHECIMENTO_POOL: CardItem[] = [
  {
    variant: "light",
    label: "RECONHECIMENTO",
    title: "Performance validada pelo Google",
    text: "A Scale apresenta a credencial Google Ads Search Certified, ligada à especialização da equipe em campanhas de pesquisa e aquisição.",
    linkLabel: "CONHEÇA NOSSA OPERAÇÃO",
    href: "/sobre",
    image: "/images/google-ads-badge.avif",
    imageAlt: "Credencial Google Ads Search Certified da Scale",
    imageFit: "contain",
  },
];

const DEPOIMENTOS_POOL: CardItem[] = [
  {
    variant: "accent",
    label: "DEPOIMENTO",
    text: "Quem trabalha com a Scale conta melhor que a gente. Experiências e resultados compartilhados por escritórios que já passaram pela nossa operação.",
    linkLabel: "CONHEÇA NOSSA OPERAÇÃO",
    href: "/sobre",
    image: "/images/client-testimonials-cover.png",
    imageAlt: "Conversa entre profissionais em uma reunião de trabalho",
  },
];

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function HighlightCard({ id, item }: { id: string; item: CardItem }) {
  const isAccent = item.variant === "accent";

  return (
    <div id={id}>
      <div
        className={`group flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 sm:flex-row ${
          isAccent
            ? "bg-[#3A43E3] hover:shadow-[0_24px_48px_-16px_rgba(58,67,227,0.5)]"
            : "bg-white hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.15)]"
        }`}
      >
        <div className="relative order-2 flex flex-1 flex-col justify-between gap-6 overflow-hidden p-6 sm:order-1 sm:p-8">
          <span
            aria-hidden="true"
            className={`font-canela pointer-events-none absolute -bottom-4 left-4 select-none whitespace-nowrap text-6xl font-normal uppercase leading-none tracking-tight transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 sm:text-7xl ${
              isAccent ? "text-white/10 group-hover:text-white/20" : "text-[#3A43E3]/10 group-hover:text-[#3A43E3]/20"
            }`}
          >
            {item.label}
          </span>

          <div className="relative z-10">
            {item.title && (
              <p className={`mb-2 text-base font-semibold ${isAccent ? "text-white" : "text-neutral-900"}`}>
                {item.title}
              </p>
            )}
            <p className={`text-sm leading-relaxed sm:text-base ${isAccent ? "text-white/90" : "text-neutral-600"}`}>
              {item.text}
            </p>
          </div>

          <a
            href={item.href}
            className={`relative z-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:bg-current/40 after:transition-transform after:duration-300 hover:after:scale-x-75 ${
              isAccent ? "text-white hover:text-white/75" : "text-[#3A43E3] hover:text-[#2f37c9]"
            }`}
          >
            {item.linkLabel}
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div
          className={`relative order-1 w-full shrink-0 overflow-hidden sm:order-2 sm:w-1/3 ${
            item.image ? "aspect-[16/9] sm:m-2 sm:aspect-square sm:self-center" : ""
          } ${
            item.image ? (item.imageFit === "contain" ? "bg-transparent" : "bg-black") : isAccent ? "bg-neutral-200" : "bg-[#3A43E3]"
          }`}
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.imageAlt ?? ""}
              fill
              quality={90}
              sizes="(min-width: 1024px) 17vw, (min-width: 640px) 33vw, 100vw"
              className={item.imageFit === "contain" ? "object-contain p-4" : "object-cover"}
            />
          )}
          <div
            className={`absolute inset-0 -translate-x-[150%] skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-[150%] ${
              isAccent ? "bg-gradient-to-r from-transparent via-white/60 to-transparent" : "bg-gradient-to-r from-transparent via-white/25 to-transparent"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default function Highlights() {
  const [picks, setPicks] = useState(() => ({
    destaque: DESTAQUE_POOL[0],
    cases: CASES_POOL[0],
    reconhecimento: RECONHECIMENTO_POOL[0],
    depoimentos: DEPOIMENTOS_POOL[0],
  }));

  useEffect(() => {
    // Random pick must happen client-side only: the pool has one entry per
    // slot today, but rendering the same deterministic default on server and
    // client avoids a hydration mismatch once more entries are added.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPicks({
      destaque: pickRandom(DESTAQUE_POOL),
      cases: pickRandom(CASES_POOL),
      reconhecimento: pickRandom(RECONHECIMENTO_POOL),
      depoimentos: pickRandom(DEPOIMENTOS_POOL),
    });
  }, []);

  const { destaque, cases, reconhecimento, depoimentos } = picks;

  return (
    <section className="bg-[#ECE7DF]">
      <div className="relative">
        <motion.div
          id="destaque"
          className="group relative min-h-[420px] overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:min-h-0 lg:w-[50%]"
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={destaque.image}
            alt=""
            fill
            quality={90}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/80" />

          <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-10 lg:pl-[5%]">
            <span className="font-canela mb-4 text-xs font-medium uppercase tracking-wider text-white/60 transition-colors duration-500 group-hover:text-white/80">
              {destaque.eyebrow}
            </span>
            <h3 className="text-4xl leading-snug text-white/80 sm:text-5xl lg:text-[2.75rem]">
              {destaque.headingLine1}
              <br />
              {destaque.headingLine2Lead}
              <strong className="font-semibold text-white">{destaque.headingLine2Strong}</strong>
            </h3>
            <a
              href={destaque.href}
              className="relative mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:bg-current/40 after:transition-transform after:duration-300 hover:text-white/75 hover:after:scale-x-75"
            >
              {destaque.linkLabel}
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        <div className="px-6 pb-8 pt-8 sm:px-8 lg:pb-10 lg:pl-[calc(50%+1.5rem)] lg:pr-[5%] lg:pt-0">
          <span className="font-canela block text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
            Destaques
          </span>
          <StaggerGroup className="mt-6 flex flex-col gap-6" amount={0.1}>
            <StaggerItem>
              <HighlightCard id="cases" item={cases} />
            </StaggerItem>
            <StaggerItem>
              <HighlightCard id="reconhecimento" item={reconhecimento} />
            </StaggerItem>
            <StaggerItem>
              <HighlightCard id="depoimentos" item={depoimentos} />
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>

      <KeywordMarquee />
    </section>
  );
}
