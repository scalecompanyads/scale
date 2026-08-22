"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ChevronRightIcon } from "@/components/icons";

type Service = {
  number: string;
  title: string;
  image: string;
  description: string;
  href?: string;
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Tráfego pago",
    image: "/img-cards-services/trafego.png",
    description: "Campanhas de Google Ads e Meta Ads focadas em gerar oportunidades qualificadas.",
    href: "/servicos/trafego-pago",
  },
  {
    number: "02",
    title: "Landing pages",
    image: "/img-cards-services/landpage.png",
    description: "Páginas que conduzem a atenção até uma conversa com o escritório.",
    href: "/servicos/landing-pages",
  },
  {
    number: "03",
    title: "SEO jurídico",
    image: "/img-cards-services/seo-juridico.png",
    description: "Estratégia orgânica para ampliar autoridade, visibilidade e procura qualificada.",
    href: "/servicos/seo-juridico",
  },
  {
    number: "04",
    title: "CRM jurídico",
    image: "/img-cards-services/crm.png",
    description: "Processo e acompanhamento para nenhum lead se perder no caminho.",
  },
  {
    number: "05",
    title: "Arte & design",
    image: "/img-cards-services/arte.png",
    description: "Direção criativa para dar consistência e força ao posicionamento.",
  },
  {
    number: "06",
    title: "Comercial",
    image: "/img-cards-services/comercial.png",
    description: "Estrutura para transformar procura em atendimento e contrato.",
  },
];

export default function ServicesList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES[activeIndex];

  return (
    <section className="bg-[#F1EDE6] px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <div>
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
            Como atuamos
          </span>
          <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
            Uma operação construída para o momento do seu escritório.
          </h2>
        </div>

        <div className="max-w-3xl space-y-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
          <p>
            Na Scale, não operamos no automático. Cada frente começa por um{" "}
            <strong className="font-semibold text-neutral-900">diagnóstico do momento, dos objetivos e da estrutura do escritório</strong>,
            para transformar marketing em uma operação que faz sentido para o negócio.
          </p>
          <p>
            Combinamos{" "}
            <strong className="font-semibold text-neutral-900">mídia, páginas, tecnologia, design e processos comerciais</strong>{" "}
            para criar uma jornada coerente, da primeira impressão até a conversa com potencial de
            contratação. Sempre com atenção às particularidades da comunicação jurídica.
          </p>
          <p>
            Podemos estruturar uma aquisição completa ou atuar como extensão do seu time em uma
            frente específica. O objetivo permanece o mesmo: criar mais{" "}
            <strong className="font-semibold text-neutral-900">previsibilidade, presença e oportunidades qualificadas</strong>{" "}
            para o escritório crescer.
          </p>
        </div>
      </div>

      <div className="mt-10 lg:hidden">
        {SERVICES.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={service.title} className="border-b border-neutral-300 first:border-t">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-expanded={isActive}
                className="flex w-full items-center gap-4 py-5 text-left text-neutral-900"
              >
                <span className="font-canela text-sm text-[#3A43E3]">{service.number}</span>
                <span className="font-canela flex-1 text-2xl leading-tight">{service.title}</span>
                <ChevronRightIcon
                  className={`h-5 w-5 shrink-0 text-[#3A43E3] transition-transform duration-300 ${
                    isActive ? "rotate-90" : ""
                  }`}
                />
              </button>

              <div
                aria-hidden={!isActive}
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className={`mb-5 overflow-hidden bg-white transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        quality={90}
                        sizes="100vw"
                        className={`object-cover transition-transform duration-700 ease-out ${
                          isActive ? "scale-100" : "scale-105"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    </div>
                    <p className="font-canela p-5 pb-0 text-xl leading-tight text-neutral-900">
                      {service.description}
                    </p>
                    {service.href ? (
                      <Link
                        href={service.href}
                        className="mx-5 mb-5 mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3A43E3]"
                      >
                        Ver serviço
                        <ArrowUpRightIcon className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <div className="pb-5" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 hidden overflow-hidden bg-white lg:grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="p-2 sm:p-3">
          {SERVICES.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={service.title}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`group flex w-full items-center gap-4 border-b px-5 py-6 text-left transition-colors sm:px-6 sm:py-7 ${
                  isActive
                    ? "border-transparent bg-[#3A43E3] text-white"
                    : "border-neutral-200 text-neutral-900 hover:bg-[#F1EDE6]"
                }`}
              >
                <span className={`font-canela text-sm ${isActive ? "text-white/65" : "text-[#3A43E3]"}`}>
                  {service.number}
                </span>
                <span className="font-canela flex-1 text-2xl leading-tight sm:text-3xl">{service.title}</span>
                <ChevronRightIcon
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                    isActive ? "translate-x-1" : "group-hover:translate-x-1"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[360px] overflow-hidden bg-black sm:min-h-[480px]">
          {SERVICES.map((service, index) => (
            <Image
              key={service.image}
              src={service.image}
              alt={index === activeIndex ? service.title : ""}
              fill
              quality={90}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className={`object-cover transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
            <p className="font-canela text-xs font-bold uppercase tracking-wider text-[#8CB6FF]">
              {activeService.number} · {activeService.title}
            </p>
            <p className="font-canela mt-3 max-w-md text-2xl leading-tight sm:text-3xl">
              {activeService.description}
            </p>
            {activeService.href ? (
              <Link
                href={activeService.href}
                className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-80"
              >
                Ver serviço
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
