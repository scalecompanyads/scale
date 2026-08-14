"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SWIPE_THRESHOLD = 40;

const slides = [
  { n: "01", width: 517, height: 576 },
  { n: "02", width: 715, height: 336 },
  { n: "03", width: 512, height: 331 },
  { n: "04", width: 757, height: 424 },
  { n: "05", width: 831, height: 372 },
  { n: "06", width: 537, height: 419 },
  { n: "07", width: 1024, height: 298 },
  { n: "08", width: 618, height: 309 },
  { n: "09", width: 876, height: 362 },
  { n: "10", width: 812, height: 805 },
  { n: "11", width: 793, height: 385 },
  { n: "12", width: 785, height: 506 },
  { n: "13", width: 707, height: 513 },
  { n: "14", width: 476, height: 841 },
  { n: "15", width: 486, height: 820 },
  { n: "16", width: 617, height: 862 },
  { n: "17", width: 511, height: 797 },
  { n: "18", width: 631, height: 887 },
  { n: "19", width: 1024, height: 507 },
].map((s) => ({
  src: `/scale-advogados/depoimentos-whatsapp/testimonial-${s.n}.webp`,
  width: s.width,
  height: s.height,
}));

export function DepoimentosCarousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }

  function handleTouchEnd() {
    if (touchDeltaX.current > SWIPE_THRESHOLD) {
      prev();
    } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      next();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  }

  return (
    <div className="mt-6">
      <div
        className="mx-auto max-w-sm touch-pan-y select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          key={slide.src}
          src={slide.src}
          alt="Print de depoimento de cliente"
          width={slide.width}
          height={slide.height}
          sizes="380px"
          className="h-auto w-full rounded-xl"
          draggable={false}
        />
      </div>

      <div className="mt-4 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={prev}
          aria-label="Depoimento anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Próximo depoimento"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-1.5 px-4">
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
