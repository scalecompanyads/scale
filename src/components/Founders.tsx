"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

type Founder = {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
};

const FOUNDERS: Founder[] = [
  {
    id: "gabriel",
    name: "Gabriel Dias",
    role: "Co-fundador · Liderança",
    description:
      "Cofundador da Scale e um dos nomes por trás de uma operação que já atendeu mais de 700 escritórios. Sua visão de mercado ajudou a transformar uma ideia nascida no fundo de um quarto em uma empresa de alcance nacional.",
    image: "/socios/gabriel-dias.png",
  },
  {
    id: "pedro",
    name: "Pedro Clark",
    role: "Co-fundador · Liderança",
    description:
      "Cofundador da Scale e peça-chave na construção de uma empresa que cresceu sem perder proximidade com o cliente. Une visão de negócio e execução para transformar ambição em uma operação que entrega resultado todos os dias.",
    image: "/socios/pedro-clark.png",
  },
  {
    id: "leonardo",
    name: "Leonardo Carmo",
    role: "Operações, Marketing & Tecnologia",
    description:
      "Sócio, responsável pela área operacional. Hoje, carrega uma visão rara de operação: sabe o que precisa acontecer para a estratégia sair do papel e ganhar escala.",
    image: "/socios/leonardo-carmo.png",
  },
  {
    id: "samuel",
    name: "Samuel Alves",
    role: "Head de Vendas",
    description:
      "Mais de 10 anos de estrada em vendas consultivas B2B e B2C. Chega à Scale com a bagagem de quem já conduziu negociações complexas e entende que confiança é o ponto de partida de qualquer grande venda.",
    image: "/socios/samuel-alves.png",
  },
];

export default function Founders() {
  const imagesRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = imagesRowRef.current;
    if (!row) return;

    const images = row.querySelectorAll<HTMLElement>("[data-founder-image]");
    if (images.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        images,
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, row);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#ECE7DF]">
      <motion.div
        className="flex flex-col gap-8 px-6 pb-10 pt-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-[5%] lg:pt-16"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
            Sócios
          </span>
          <h2 className="mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
            Quem construiu
            <br />
            da Scale
          </h2>
        </div>

        <p className="max-w-sm text-base leading-relaxed text-neutral-600">
          Pedro e Gabriel começaram no fundo de um quarto com uma ideia
          simples: marketing só vale quando coloca a pessoa certa em uma
          conversa de verdade. Hoje, a Scale já atendeu mais de 700 escritórios.
        </p>
      </motion.div>

      <div className="px-6 sm:px-8 lg:px-[5%]">
        <StaggerGroup className="lg:hidden" amount={0.1}>
          {FOUNDERS.map((founder, index) => (
            <StaggerItem key={`${founder.id}-mobile`}>
              <article className="border-t border-neutral-300 py-7 first:border-t-0 first:pt-0">
                <div className="relative aspect-[481/750] w-full overflow-hidden">
                  {founder.image ? (
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      quality={90}
                      sizes="100vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="flex h-full items-end bg-[#3A43E3] p-6 text-white">
                      <span className="font-canela text-6xl leading-none">LC</span>
                    </div>
                  )}
                </div>

                <div className="pt-6">
                  <p className="font-canela text-2xl text-neutral-900">{founder.name}</p>
                  <p className="font-canela mt-2 text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                    {founder.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{founder.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div ref={imagesRowRef} className="hidden lg:flex lg:flex-wrap">
          {FOUNDERS.map((founder, index) => (
            <div
              key={founder.id}
              data-founder-image
              className="relative aspect-[481/750] w-1/2 overflow-hidden sm:w-1/4"
            >
              {founder.image ? (
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  quality={90}
                  sizes="25vw"
                  className="object-cover"
                  priority={index === 0}
                />
              ) : (
                <div className="flex h-full items-end bg-[#3A43E3] p-6 text-white sm:p-8">
                  <span className="font-canela text-6xl leading-none sm:text-7xl">
                    LC
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          className="hidden border-t border-neutral-300 lg:flex lg:flex-wrap lg:divide-x lg:divide-neutral-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {FOUNDERS.map((founder, index) => (
            <div
              key={`${founder.id}-caption-${index}`}
              className="w-1/4 min-w-0 py-8 pr-6 pl-8 first:pl-0"
            >
              <p className="font-canela text-xl text-neutral-900">{founder.name}</p>
              <p className="font-canela mt-1 text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                {founder.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {founder.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
