"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_DEPOIMENTOS = 19;

const slides = Array.from({ length: TOTAL_DEPOIMENTOS }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/scale-advogados/depoimentos-whatsapp/testimonial-${n}.webp`;
});

export function DepoimentosCarousel() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <div className="mt-6">
      <div className="mx-auto flex max-w-xs items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Depoimento anterior"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-white/5">
          <Image
            src={slides[index]}
            alt="Print de depoimento de cliente"
            fill
            sizes="280px"
            className="object-contain"
          />
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Próximo depoimento"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5 px-4">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ir para depoimento ${i + 1}`}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
