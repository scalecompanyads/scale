"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@/components/icons";
import { staggerItemVariants } from "@/components/motion/Stagger";

const REVIEWS = [
  {
    name: "Arthur Paiva",
    text: "Além do serviço de alto nível técnico, é incrível a confiança, transparência e comprometimento deles com o projeto. Minha experiência foi perfeita, recomendo para qualquer empresa que queira escalar seus resultados.",
  },
  {
    name: "Jonatas Frias",
    text: "Melhor assessoria que já tive. Entregam um serviço de altíssima qualidade, desde o atendimento até a entrega de criativos incríveis para rodar os anúncios.",
  },
  {
    name: "Fernando Prado",
    text: "Sinônimo de bons resultados é a Scale Company. Profissionais sensacionais, atendimento de primeira e sempre focados no melhor para o cliente.",
  },
  {
    name: "Bárbara Guedes Néspoli",
    text: "Depois de muitas tentativas, foi a única empresa de tráfego que conseguiu trazer leads qualificados para o escritório. Obrigada por toda atenção.",
  },
  {
    name: "Lucas Ferreira",
    text: "Bem atenciosos e profissionais no que fazem. Depois de passar por cinco agências, conseguimos grandes resultados com a equipe.",
  },
  {
    name: "Carina Peres",
    text: "Experiência completa de atendimento, desde o comercial até a entrega dos resultados. Tráfego pago com maestria.",
  },
  {
    name: "Bruno Chaves",
    text: "Sem dúvidas a melhor agência do Brasil. Atendimento, acompanhamento do projeto e ótima qualidade na entrega.",
  },
  {
    name: "Samuel Correa Alves",
    text: "Melhor assessoria de vendas que já tive.",
  },
];

export default function Reviews() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function moveCarousel(direction: 1 | -1) {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>("[data-review-card]");
    if (!carousel || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <section id="avaliacoes" className="bg-[#ECE7DF] px-6 pb-4 pt-20 sm:px-8 lg:px-[5%] lg:pb-6 lg:pt-28">
      <motion.div
        className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-3xl">
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
            Avaliações
          </span>
          <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
            Quem cresce com a Scale conta melhor do que a gente.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
          Feedbacks de empresas que encontraram uma operação mais próxima, criteriosa e focada em
          resultado.
        </p>
      </motion.div>

      <div className="mt-12 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Ver avaliações anteriores"
          onClick={() => moveCarousel(-1)}
          className="flex h-11 w-11 items-center justify-center border border-neutral-300 text-neutral-900 transition-colors hover:border-[#3A43E3] hover:bg-[#3A43E3] hover:text-white"
        >
          <ChevronRightIcon className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Ver próximas avaliações"
          onClick={() => moveCarousel(1)}
          className="flex h-11 w-11 items-center justify-center bg-[#3A43E3] text-white transition-colors hover:bg-[#2f37c9]"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>

      <motion.div
        ref={carouselRef}
        aria-label="Avaliações de clientes"
        className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {REVIEWS.map((review, index) => {
          const isBlue = index % 2 !== 0;

          return (
            <motion.article
              key={review.name}
              data-review-card
              variants={staggerItemVariants}
              className={`flex min-h-80 w-full min-w-0 shrink-0 basis-full snap-start flex-col justify-between p-7 sm:w-auto sm:basis-[calc((100%-1rem)/2)] sm:p-8 lg:basis-[calc((100%-2rem)/3)] lg:p-9 ${
                isBlue ? "bg-[#3A43E3] text-white" : "bg-white text-neutral-900"
              }`}
            >
              <div>
                <p className={`text-sm tracking-[0.18em] ${isBlue ? "text-white/70" : "text-[#3A43E3]"}`}>
                  ★★★★★
                </p>
                <blockquote className={`font-canela mt-8 text-xl leading-snug sm:text-2xl ${isBlue ? "text-white" : "text-neutral-900"}`}>
                  “{review.text}”
                </blockquote>
              </div>
              <footer className={`mt-10 border-t pt-5 ${isBlue ? "border-white/25" : "border-neutral-200"}`}>
                <p className="text-sm font-semibold">{review.name}</p>
              </footer>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
