"use client";

import { motion } from "framer-motion";
import ContactTrigger from "@/components/ContactTrigger";
import { ArrowUpRightIcon } from "@/components/icons";

export default function Cta() {
  return (
    <div className="flex justify-center bg-[#ECE7DF] py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <ContactTrigger className="inline-flex items-center gap-3 rounded-none bg-[#3A43E3] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#2f37c9]">
          Falar com um especialista
          <ArrowUpRightIcon className="h-4 w-4" />
        </ContactTrigger>
      </motion.div>
    </div>
  );
}
