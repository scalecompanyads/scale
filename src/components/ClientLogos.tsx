"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LOGOS = [
  { src: "/images/logos-escritorios-adv/bastos-colomba.png", alt: "Bastos Colomba Advocacia" },
  { src: "/images/logos-escritorios-adv/bruno-magalhaes.png", alt: "Bruno Magalhães" },
  { src: "/images/logos-escritorios-adv/carvalho-neves.png", alt: "Carvalho Neves" },
  { src: "/images/logos-escritorios-adv/castro-borges.png", alt: "Castro Borges" },
  { src: "/images/logos-escritorios-adv/feitosa-advocacia-logo.png", alt: "Feitosa Advocacia" },
  { src: "/images/logos-escritorios-adv/JRA.png", alt: "JRA Advocacia" },
  { src: "/images/logos-escritorios-adv/logo-cliente-monograma.png", alt: "Escritório parceiro" },
  { src: "/images/logos-escritorios-adv/logothiagovetor.png", alt: "Thiago Advocacia" },
  { src: "/images/logos-escritorios-adv/lucas-silva-advogado.png", alt: "Lucas Silva Advogado" },
  { src: "/images/logos-escritorios-adv/mandato-adv.png", alt: "Mandato Advocacia" },
  { src: "/images/logos-escritorios-adv/mauerberg-advocacia.png", alt: "Mauerberg Advocacia" },
  { src: "/images/logos-escritorios-adv/pacifico-advocacia.png", alt: "Pacífico Advocacia" },
  { src: "/images/logos-escritorios-adv/restituiir.png", alt: "Restituir" },
  { src: "/images/logos-escritorios-adv/sinay-marotta.png", alt: "Sinay Marotta" },
];

export default function ClientLogos() {
  return (
    <section aria-label="Escritórios parceiros" className="overflow-hidden bg-[#ECE7DF] pb-8 lg:pb-10">
      <div className="px-6 sm:px-8 lg:px-[5%]">
        <motion.p
          className="font-canela text-center text-xs font-bold uppercase tracking-wider text-[#3A43E3]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Escritórios que crescem com a Scale
        </motion.p>
      </div>

      <motion.div
        className="relative mx-6 mt-8 overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-12 before:bg-gradient-to-r before:from-[#ECE7DF] before:via-[#ECE7DF]/85 before:to-transparent before:backdrop-blur-[2px] after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-12 after:bg-gradient-to-l after:from-[#ECE7DF] after:via-[#ECE7DF]/85 after:to-transparent after:backdrop-blur-[2px] sm:mx-8 sm:before:w-20 sm:after:w-20 lg:mx-[5%]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="animate-logo-marquee flex w-max items-center">
          {[0, 1].map((setIndex) => (
            <div key={setIndex} aria-hidden={setIndex === 1} className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14">
              {LOGOS.map((logo) => (
                <div key={`${setIndex}-${logo.src}`} className="relative h-14 w-36 shrink-0 sm:h-16 sm:w-44">
                  <Image
                    src={logo.src}
                    alt={setIndex === 0 ? logo.alt : ""}
                    fill
                    sizes="176px"
                    className="object-contain brightness-0 opacity-65"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
