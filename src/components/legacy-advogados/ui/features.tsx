"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "@/components/legacy-advogados/ui/next-image-shim";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/components/legacy-advogados/lib/utils";

export interface FeatureSlide {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  /** Padrão `cover`. Use `contain` para artes compostas que não devem ser cortadas. */
  imageFit?: "cover" | "contain";
}

export interface FeaturesProps {
  features: FeatureSlide[];
  className?: string;
  /** Tailwind classes for the active progress bar fill */
  progressClassName?: string;
}

export function Features({
  features,
  className,
  progressClassName = "bg-gradient-to-r from-brand-blue to-cyan-400",
}: FeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const t = setTimeout(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
      setProgress(0);
    }, 200);
    return () => clearTimeout(t);
  }, [progress, features.length]);

  useEffect(() => {
    const active = featureRefs.current[currentFeature];
    const container = containerRef.current;
    if (!active || !container) return;

    const containerRect = container.getBoundingClientRect();
    const elementRect = active.getBoundingClientRect();
    container.scrollTo({
      left: active.offsetLeft - (containerRect.width - elementRect.width) / 2,
      behavior: "smooth",
    });
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  const active = features[currentFeature];

  return (
    <div className={cn("w-full py-8 md:py-10", className)}>
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div
          ref={containerRef}
          className="order-1 flex flex-row gap-4 overflow-x-auto overflow-y-hidden pb-3 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:space-y-6 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = currentFeature === index;

            return (
              <div
                key={feature.id}
                ref={(el) => {
                  featureRefs.current[index] = el;
                }}
                className="relative w-[min(100%,20rem)] flex-shrink-0 cursor-pointer lg:w-full lg:max-w-none"
                onClick={() => handleFeatureClick(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleFeatureClick(index);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div
                  className={cn(
                    "flex max-w-sm flex-col items-start gap-3 rounded-xl p-3 transition-all duration-300 lg:max-w-none lg:flex-row lg:gap-4 lg:p-4",
                    isActive
                      ? "border border-white/[0.12] bg-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                      : "border border-transparent"
                  )}
                >
                  <div
                    className={cn(
                      "hidden rounded-full p-3 transition-all duration-300 md:block",
                      isActive
                        ? "bg-brand-blue text-white shadow-blue-glow"
                        : "bg-white/5 text-brand-blue-light"
                    )}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={cn(
                        "mb-2 text-base font-semibold leading-snug transition-colors duration-300 md:text-lg",
                        isActive ? "text-white" : "text-white/70"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-relaxed transition-colors duration-300",
                        isActive ? "text-content-secondary" : "text-content-tertiary"
                      )}
                    >
                      {feature.description}
                    </p>
                    <div className="mt-4 h-1 overflow-hidden rounded-full bg-black/40">
                      {isActive && (
                        <motion.div
                          className={cn("h-full rounded-full", progressClassName)}
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.1, ease: "linear" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative order-2 mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.1] shadow-elevated",
              active.imageFit === "contain" && "bg-black"
            )}
          >
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={cn(
                active.imageFit === "contain"
                  ? "object-contain object-center"
                  : "object-cover"
              )}
              priority={currentFeature === 0}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
