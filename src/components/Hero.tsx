"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import ContactTrigger from "@/components/ContactTrigger";
import ParallaxImage from "@/components/ParallaxImage";
import { ArrowUpRightIcon } from "@/components/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black lg:min-h-screen">
      <ParallaxImage
        src="/images/hero-home-bg.png"
        alt=""
        priority
        range={140}
        wrapperClassName="hero-bg-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

      <Header />

      <div className="relative z-10 flex flex-1 items-center justify-center lg:mt-auto lg:block lg:flex-none">
        <div className="w-full px-6 py-24 sm:px-8 lg:px-[5%] lg:pb-24 lg:pt-40">
          <motion.div
            className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <div className="lg:flex-1">
              <motion.div
                variants={item}
                className="mb-6 flex items-center justify-center gap-3 lg:justify-start"
              >
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-white" />
                <span className="text-sm text-white/70">
                  Especialistas em Marketing Jurídico
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="font-canela mx-auto max-w-5xl text-[2.75rem] font-normal leading-[1.08] text-white sm:text-[3.75rem] lg:mx-0 lg:text-[4.604rem]"
              >
                Sua máquina de aquisição jurídica,{" "}
                <span className="text-gradient-blue">pronta para crescer.</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/80 lg:mx-0"
              >
                <strong className="font-semibold text-white">Estratégia</strong>,{" "}
                <strong className="font-semibold text-white">tráfego</strong>,{" "}
                <strong className="font-semibold text-white">design</strong> e
                conteúdo em uma única operação. Nós estruturamos tudo para
                transformar a presença digital do seu escritório em{" "}
                <strong className="font-semibold text-white">
                  aquisição previsível
                </strong>
                .
              </motion.p>
            </div>

            <motion.div
              variants={item}
              className="flex shrink-0 flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Link
                href="/servicos"
                className="hidden items-center gap-3 rounded-none bg-[#3A43E3] px-5 py-[15.034px] text-xs font-semibold tracking-wider text-white transition-colors hover:bg-[#2f37c9] lg:flex"
              >
                NOSSOS SERVIÇOS
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>

              <ContactTrigger className="flex items-center gap-3 rounded-none bg-[#3A43E3] px-5 py-[15.034px] text-xs font-semibold tracking-wider text-white transition-colors hover:bg-[#2f37c9] lg:hidden">
                FALE CONOSCO
                <ArrowUpRightIcon className="h-4 w-4" />
              </ContactTrigger>

              <div className="hidden lg:flex">
                <ContactTrigger className="btn-liquid-glass rounded-none text-xs font-semibold tracking-wider text-white">
                  FALE CONOSCO
                </ContactTrigger>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
