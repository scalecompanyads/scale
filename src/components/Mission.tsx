"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Stat = {
  id: string;
  prefix?: string;
  value: number;
  rangeEnd?: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { id: "clients", prefix: "+", value: 700, label: "Escritórios Atendidos" },
  { id: "investment", prefix: "R$", value: 50, suffix: "M+", label: "Investimento Gerenciado" },
  { id: "satisfaction", value: 98, suffix: "%", label: "Taxa de Satisfação" },
  { id: "leads", value: 15, rangeEnd: 30, label: "dias para os primeiros leads" },
];

function StatItem({ stat, isAccent }: { stat: Stat; isAccent: boolean }) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const rangeRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const valueEl = valueRef.current;
    const rangeEl = rangeRef.current;
    if (!valueEl) return;

    // O HTML já nasce com o valor real (SSR/crawlers sempre veem o número
    // correto). Só depois de montar no navegador é que zeramos pra rodar a
    // contagem visual — useLayoutEffect garante que isso acontece antes do
    // primeiro paint, sem "flash" do valor real antes de contar.
    valueEl.textContent = "0";
    if (stat.rangeEnd !== undefined && rangeEl) rangeEl.textContent = "0";

    const trigger = ScrollTrigger.create({
      trigger: valueEl,
      start: "top 85%",
      once: true,
      onEnter: () => {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.value,
          duration: 1.6,
          ease: "power3.out",
          onUpdate: () => {
            valueEl.textContent = String(Math.round(counter.val));
          },
        });

        if (stat.rangeEnd !== undefined && rangeEl) {
          const rangeCounter = { val: 0 };
          gsap.to(rangeCounter, {
            val: stat.rangeEnd,
            duration: 1.6,
            ease: "power3.out",
            onUpdate: () => {
              rangeEl.textContent = String(Math.round(rangeCounter.val));
            },
          });
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [stat]);

  return (
    <div className={`px-5 py-4 ${isAccent ? "bg-[#3A43E3]" : "bg-white"}`}>
      <p
        className={`font-canela text-2xl sm:text-3xl ${
          isAccent ? "text-white" : "text-neutral-900"
        }`}
      >
        {stat.prefix}
        <span ref={valueRef}>{stat.value}</span>
        {stat.rangeEnd !== undefined && (
          <>
            -<span ref={rangeRef}>{stat.rangeEnd}</span>
          </>
        )}
        {stat.suffix}
      </p>
      <p className={`mt-1 text-xs leading-snug ${isAccent ? "text-white/70" : "text-neutral-500"}`}>
        {stat.label}
      </p>
    </div>
  );
}

export default function Mission() {
  return (
    <section className="bg-[#ECE7DF] px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
            Nossa missão
          </span>
          <h2 className="mt-4 text-3xl leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Mais que uma agência, um time obcecado por{" "}
            <strong className="font-semibold">resultado</strong>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Acreditamos que todo escritório de advocacia merece crescer com
            previsibilidade. Por isso, unimos estratégia, tecnologia e um time
            dedicado para transformar cada real investido em clientes reais,
            construindo lado a lado a máquina de aquisição que seu escritório
            precisa.
          </p>

          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3">
            {STATS.map((stat, index) => (
              <StatItem key={stat.id} stat={stat} isAccent={index % 2 === 0} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="order-1 relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:order-2 lg:aspect-[4/3]"
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/equipe.jpeg"
            alt="Time Scale Company"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
