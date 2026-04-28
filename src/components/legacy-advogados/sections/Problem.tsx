"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { fadeUp, stagger, viewport, popIn } from "@/components/legacy-advogados/lib/animations";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";
import { cn } from "@/components/legacy-advogados/lib/utils";

const badLeadTypes = [
  {
    label: "Gente curiosa",
    description: "Que quer informa├º├úo gratuita, n├úo contrato.",
  },
  {
    label: "Gente sem dinheiro",
    description: "Que n├úo tem como pagar os honor├írios.",
  },
  {
    label: "Gente que nunca vai fechar",
    description: "Que j├í decidiu n├úo contratar, s├│ est├í pesquisando.",
  },
];

const agencyFailures = [
  {
    text: "N├úo analisam o atendimento",
    cell: "md:col-span-2 md:row-start-1",
  },
  {
    text: "N├úo entendem o funil",
    cell: "md:col-span-1 md:row-start-1",
  },
  {
    text: "N├úo acompanham o fechamento",
    cell: "md:col-span-1 md:row-start-2",
  },
  {
    text: "N├úo otimizam com base em resultado real",
    cell: "md:col-span-2 md:row-start-2 md:col-start-2",
  },
] as const;

const bentoCard3d =
  "relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-surface-700 via-surface-800 to-surface-950 p-5 md:p-6 " +
  "shadow-[0_14px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-18px_36px_rgba(0,0,0,0.45),inset_3px_3px_10px_rgba(0,0,0,0.35),inset_-2px_-2px_8px_rgba(255,255,255,0.03)] " +
  "transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-14px_28px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(0,0,0,0.3)]";

export function Problem() {
  return (
    <section id="problema" className="section bg-surface-900">
      <div className="container-page">
        {/* Part 1 ÔÇö Realidade */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            Se voc├¬ j├í contratou uma ag├¬ncia e se frustrou,{" "}
            <span>o problema provavelmente n├úo era voc├¬</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="section-subtitle mx-auto mb-6">
            O mercado est├í cheio de opera├º├Áes que vendem promessa e entregam lead desqualificado.
          </motion.p>

          <motion.div variants={stagger} className="mb-12 grid gap-4 text-left sm:grid-cols-3">
            {badLeadTypes.map((type) => (
              <motion.div
                key={type.label}
                variants={popIn}
                className="relative rounded-xl border border-black/[0.06] bg-white p-5 pt-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <span
                  className="absolute -right-1 -top-1 flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold leading-none text-white shadow-md ring-2 ring-white"
                  aria-hidden
                >
                  1
                </span>
                <p className="mb-1 text-sm font-semibold text-gray-900">{type.label}</p>
                <p className="text-xs leading-relaxed text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-2">
            <p className="text-content-secondary text-lg">
              E no final, a culpa sempre parece ser sua.
            </p>
            <p className="text-white text-xl font-bold font-display">Mas n├úo ├®.</p>
            <p className="text-content-secondary">
              Advocacia n├úo pode ser tratada como qualquer outro nicho.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <ShinyButton openLeadForm>Quero entender como gerar clientes de verdade</ShinyButton>
          </motion.div>
        </motion.div>

        <div className="divider mb-20" />

        {/* Part 2 ÔÇö Por que ag├¬ncias falham */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="section-title mb-4">
              Por que a maioria das <span>ag├¬ncias falha</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Elas param no an├║ncio. E quando o resultado n├úo vem, a resposta ├® sempre a mesma.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-4">
            {agencyFailures.map((failure) => (
              <motion.div
                key={failure.text}
                variants={popIn}
                className={cn(bentoCard3d, "flex min-h-[5.5rem] items-center gap-3", failure.cell)}
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-red-500/25 bg-red-500/10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.35)]">
                  <X className="h-4 w-4 text-red-400" />
                </div>
                <span className="text-sm font-medium leading-snug text-content-secondary md:text-base">
                  {failure.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mb-8 rounded-2xl border border-white/[0.08] bg-surface-800/40 px-6 py-8 text-center shadow-[inset_0_2px_12px_rgba(0,0,0,0.35),inset_0_-1px_0_rgba(255,255,255,0.05)]"
          >
            <p
              className={cn("text-[29px] font-medium leading-snug text-white")}
            >
              &ldquo;Vamos testar mais um criativo.&rdquo;
            </p>
            <p className="mt-2 text-sm text-content-secondary">
              Enquanto isso, voc├¬ continua pagando a conta.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="text-center">
            <ShinyButton openLeadForm>Quero parar de desperdi├ºar dinheiro com marketing</ShinyButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
