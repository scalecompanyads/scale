"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { FEATURED_VIDEO_EMBED_URLS } from "@/components/legacy-advogados/lib/constants";
import { fadeUp, stagger, viewport } from "@/components/legacy-advogados/lib/animations";

export function FeaturedVideoCase() {
  const videos = useMemo(
    () => FEATURED_VIDEO_EMBED_URLS.map((s) => s.trim()).filter(Boolean),
    []
  );

  return (
    <section
      className="relative overflow-hidden bg-white py-20 text-neutral-900 lg:py-28"
      aria-labelledby="featured-video-case-heading"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-orange"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brand-blue/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-brand-orange/[0.05] blur-3xl" />

      <div className="container-page relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="w-full">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Case em destaque
            </p>
            <h2
              id="featured-video-case-heading"
              className="font-display mx-auto mt-3 max-w-3xl text-balance text-3xl font-bold leading-[1.12] tracking-tight text-neutral-950 md:text-4xl lg:text-[2.35rem]"
            >
              Veja alguns dos cases de sucesso da Scale!
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 md:text-lg">
              Isso ├® resultado de um trabalho de excel├¬ncia com muita entrega de um time extraordin├írio
              e de clientes com muita vontade de vencer!
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 w-full">
            {videos.length > 0 ? (
              <div className="mx-auto flex w-full max-w-4xl flex-col items-stretch gap-8 md:flex-row md:justify-center md:gap-6 lg:gap-8">
                {videos.map((url, i) => (
                  <div
                    key={url}
                    className="mx-auto w-full min-w-0 max-w-[min(92vw,360px)] shrink-0 md:mx-0 md:flex-1 md:max-w-none"
                  >
                    <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.12)]">
                      <div className="relative aspect-[9/16] w-full">
                        <iframe
                          title={`Depoimento em v├¡deo ÔÇö case ${i + 1}`}
                          src={url}
                          className="absolute inset-0 h-full w-full border-0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mx-auto w-full max-w-[min(92vw,360px)] overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.12)]">
                <div className="relative aspect-[9/16] w-full">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-neutral-100 to-neutral-200/90 px-6 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-brand-blue/15">
                      <Play className="h-7 w-7 translate-x-0.5 text-brand-blue" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-neutral-800">
                        Depoimentos em v├¡deo
                      </p>
                      <p className="mx-auto mt-1 max-w-md text-sm text-neutral-500">
                        Adicione as URLs de incorpora├º├úo dos v├¡deos nas constantes do projeto para exibi-los
                        aqui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
