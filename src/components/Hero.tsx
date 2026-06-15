"use client";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

import { type LegalLogo, legalLogos } from '@/data/legalLogos';
import '@/styles/scale-advogados-v3-hero.css';

export default function Hero() {
  const { open } = useLeadForm();

  return (
    <section className="relative h-[100dvh] md:h-screen flex flex-col overflow-hidden bg-[#020b16] md:pb-0">
      
      {/* Mobile Image Container */}
      <div className="absolute top-0 inset-x-0 w-full md:hidden h-[45dvh] z-0">
        <img 
          src="/images/hero-mobile-bg.png" 
          alt="Scale Company" 
          className="w-full h-full object-cover object-top"
        />
        {/* Mobile Overlay: Apenas na metade de baixo para não invadir o rosto/topo */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#020b16] to-transparent" />
      </div>

      {/* Desktop Background Image */}
      <div 
        className="hidden md:block absolute inset-0 bg-[url('/images/hero-desktop-bg.png')] bg-cover bg-center bg-no-repeat z-0" 
      />

      {/* Desktop Overlay */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-[#020b16] via-[#020b16]/90 to-transparent z-0" />

      {/* Content Container */}
      <div className="container-page relative z-10 w-full flex-grow flex flex-col justify-end md:justify-center pb-2 pt-[30vh] md:py-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center md:items-start md:text-left max-w-full md:max-w-[550px]"
        >
          
          {/* Badge (Hidden on Mobile) */}
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-[rgba(255,255,255,0.8)] text-xs font-bold tracking-[0.15em] uppercase backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
            Especialistas em Marketing Jurídico
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white m-0 mb-4">
            Agência de Marketing Jurídico que Entrega a Sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#1630DF]">
              Máquina de Aquisição
            </span>{" "}
            Pronta.
          </h1>

          {/* Subheadline */}
          <div className="flex flex-col gap-3 mb-6">
            <p className="text-[clamp(0.9rem,1.2vw,1.15rem)] font-medium text-[rgba(255,255,255,0.85)] leading-relaxed m-0">
              Esqueça o amadorismo de ter que contratar um gestor de tráfego, um designer e um editor separados.
            </p>
            <p className="text-[0.85rem] md:text-base text-[rgba(255,255,255,0.85)] leading-relaxed m-0">
              Nós estruturamos, executamos e otimizamos 100% da sua captação de clientes.{" "}
              <strong className="text-white font-medium block mt-1 md:inline md:mt-0">Do primeiro clique ao contrato fechado.</strong>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
            <button
              onClick={open}
              className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-bold text-[0.8rem] md:text-sm uppercase tracking-widest px-6 py-3 hover:bg-[#1630DF] transition-colors duration-300 w-full md:w-auto"
            >
              <WhatsAppIcon size={18} />
              Agendar Diagnóstico Gratuito
            </button>
          </div>

        </motion.div>
      </div>

      {/* Bottom transition border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent z-20" />
    </section>
  );
}
