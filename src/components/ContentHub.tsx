"use client";

import { ArrowUpRightIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NewsletterForm from "@/components/NewsletterForm";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const FEATURED_ARTICLE = {
  category: "Estratégia",
  title: "A aquisição jurídica não pode depender apenas de indicação.",
  text: "O que muda quando o escritório passa a tratar aquisição como uma operação contínua, com canal, processo e acompanhamento.",
  href: "/conteudos/aquisicao-juridica-operacao-continua",
};

const ARTICLES = [
  {
    category: "Aquisição jurídica",
    title: "Como construir previsibilidade na aquisição do seu escritório",
    text: "Os fundamentos para transformar procura em uma operação comercial com processo, acompanhamento e critério.",
    href: "/conteudos/previsibilidade-na-aquisicao-juridica",
    image: "/images/article-predictability/cover.png",
  },
  {
    category: "Tráfego pago",
    title: "Google Ads para advogados: da intenção de busca ao contrato",
    text: "O que priorizar em campanhas de pesquisa para atrair oportunidades qualificadas.",
    href: "/conteudos/google-ads-para-advogados",
    image: "/images/article-google-ads/cover.png",
  },
  {
    category: "Conversão",
    title: "Landing pages jurídicas que conduzem a conversa certa",
    text: "Uma página eficiente une mensagem, autoridade e um caminho simples até o atendimento.",
    href: "/conteudos/landing-pages-juridicas",
    image: "/images/article-landing-pages/cover.png",
  },
];

export default function ContentHub() {
  return (
    <section id="conteudos" className="bg-[#ECE7DF] px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
      <motion.div
        className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-3xl">
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
            Conteúdos
          </span>
          <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
            Leituras para quem quer crescer com mais critério.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
          Estratégias de aquisição, campanhas e conversão para apoiar decisões melhores no seu
          escritório.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <StaggerGroup className="order-2 flex flex-col gap-4 lg:order-1" amount={0.1}>
          {ARTICLES.map((article) => (
            <StaggerItem key={article.title}>
              <Link
                href={article.href}
                className="group flex flex-col overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1 sm:min-h-36 sm:flex-row"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-neutral-100 sm:min-h-36 sm:w-44 sm:aspect-auto">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    quality={90}
                    sizes="(min-width: 640px) 11rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                      {article.category}
                    </p>
                    <h3 className="font-canela mt-3 text-xl leading-tight text-neutral-900 sm:text-2xl">
                      {article.title}
                    </h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                    Ler artigo
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <motion.article
          className="group relative order-1 flex min-h-[520px] overflow-hidden bg-[#101317] p-7 text-white sm:p-10 lg:order-2"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/article-acquisition-cover.png"
            alt=""
            fill
            quality={90}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
          <div className="relative z-10 mt-auto max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/65">
              {FEATURED_ARTICLE.category}
            </p>
            <h3 className="font-canela mt-4 text-3xl leading-tight sm:text-4xl">
              {FEATURED_ARTICLE.title}
            </h3>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
              {FEATURED_ARTICLE.text}
            </p>
            <Link
              href={FEATURED_ARTICLE.href}
              className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-70"
            >
              Ler artigo
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.article>
      </div>

      <motion.div
        className="mt-6 grid overflow-hidden bg-[#3A43E3] text-white lg:grid-cols-[1fr_0.85fr]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="p-7 sm:p-10">
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-white/65">
            Cases mais recentes
          </span>
          <h3 className="font-canela mt-5 max-w-xl text-3xl leading-tight sm:text-4xl">
            Receba os próximos resultados antes de todo mundo.
          </h3>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
            Cases, aprendizados de campanha e bastidores de operações que estão ajudando
            escritórios a crescer.
          </p>
        </div>

        <NewsletterForm
          endpoint="/api/lead-cases"
          formClassName="m-4 bg-white p-6 text-neutral-900 sm:m-6 sm:p-8"
          label="Deixe seu melhor e-mail"
          labelClassName="font-canela text-lg"
          inputClassName="mt-5 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#3A43E3]"
          buttonClassName="mt-6 inline-flex w-full items-center justify-between gap-3 bg-[#101317] px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-black"
          buttonText="Quero receber os cases"
          disclaimer="Sem spam. Apenas conteúdos e novos resultados da Scale."
        />
      </motion.div>
    </section>
  );
}
