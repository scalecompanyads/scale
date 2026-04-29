"use client";

import { useCallback, useRef } from "react";
import Image from "@/components/legacy-advogados/ui/next-image-shim";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIAL_SCREENSHOTS } from "@/components/legacy-advogados/lib/constants";
import { cn } from "@/components/legacy-advogados/lib/utils";

export function TestimonialScreenshotCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByStep = useCallback((direction: -1 | 1) => {
    const root = scrollerRef.current;
    if (!root) return;
    const slide = root.querySelector<HTMLElement>("[data-carousel-slide]");
    if (!slide) return;
    const styles = getComputedStyle(root);
    const gap = parseFloat(styles.columnGap || styles.gap || "16") || 16;
    const delta = slide.offsetWidth + gap;
    root.scrollBy({ left: direction * delta, behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 pt-1",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {TESTIMONIAL_SCREENSHOTS.map((src, i) => (
          <figure
            key={src}
            data-carousel-slide
            className={cn(
              "snap-center shrink-0",
              "flex-[0_0_calc(100%-1rem)] lg:flex-[0_0_calc((100%-2rem)/3)]"
            )}
          >
            <div className="relative h-[min(68vh,520px)] w-full overflow-hidden rounded-xl border border-white/[0.1] bg-black/25 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <Image
                src={src}
                alt={`Print de conversa — depoimento ${i + 1} de ${TESTIMONIAL_SCREENSHOTS.length}`}
                fill
                sizes="(max-width: 1023px) 92vw, 33vw"
                className="object-contain object-top"
                priority={i === 0}
              />
            </div>
          </figure>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 sm:px-0">
        <button
          type="button"
          onClick={() => scrollByStep(-1)}
          className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-surface-900/90 text-white shadow-lg backdrop-blur-sm transition hover:bg-surface-800 sm:h-11 sm:w-11"
          aria-label="Depoimentos anteriores"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByStep(1)}
          className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-surface-900/90 text-white shadow-lg backdrop-blur-sm transition hover:bg-surface-800 sm:h-11 sm:w-11"
          aria-label="Próximos depoimentos"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
