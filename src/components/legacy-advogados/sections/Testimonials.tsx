"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/components/legacy-advogados/lib/animations";
import { TestimonialScreenshotCarousel } from "@/components/legacy-advogados/ui/testimonial-screenshot-carousel";

export function Testimonials() {
  return (
    <section className="section">
      <div className="absolute inset-0 bg-gradient-orange-glow pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-14"
        >
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            Resultados reais de{" "}
            <span className="highlight-orange" style={{ color: "#FF6A00" }}>
              advogados reais
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto">
            Não são promessas. São relatos de quem já passou pelo mesmo cenário que você está hoje.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <TestimonialScreenshotCarousel />
        </motion.div>
      </div>
    </section>
  );
}
