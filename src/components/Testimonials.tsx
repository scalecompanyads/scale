"use client";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

import Image from "next/image";
import { useLeadForm } from "@/contexts/LeadFormContext";

// Gerar array de 1 a 19 para os depoimentos em imagem
const testimonials = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/images/testimonials/testimonial-${String(i + 1).padStart(2, "0")}.png`,
}));



const portraitVideos = [
  { id: 1, title: "Depoimento - Bichara", src: "https://www.youtube.com/embed/hZxR3DadbTg" },
  { id: 2, title: "Depoimento - Vitor", src: "https://www.youtube.com/embed/4V0ArJKXb-4" },
];

export default function Testimonials() {
  const { open } = useLeadForm();

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-[#010a12]">
      <div className="glow-cyan" style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "600px", opacity: 0.15 }} />

      <div className="container-page relative z-10">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Resultados Reais de uma Agência de Marketing Jurídico de <span className="text-[#3B82F6]">Alta Performance</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.85)] text-lg leading-relaxed">
            Não são promessas vazias. Ouça quem já validou o nosso método e experimentou o crescimento previsível de caixa.
          </p>
        </div>

        {/* --- VIDEO TESTIMONIALS --- */}
        <div className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center max-w-2xl mx-auto">
            {portraitVideos.map((video, idx) => (
              <div key={`${video.id}-${idx}`} className="relative w-full aspect-[9/16] max-w-[320px] mx-auto rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.05)] shadow-2xl bg-[rgba(1,15,28,0.5)]">
                <iframe 
                  src={video.src} 
                  title={video.title} 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* --- IMAGE TESTIMONIALS (MARQUEE) --- */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-2">E centenas de outros resultados...</h3>
        </div>

        {/* Marquee de depoimentos linha 1 */}
        <div style={{ position: "relative", marginBottom: "2rem" }}>
           <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "150px",
              background: "linear-gradient(to right, #010a12, transparent)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "150px",
              background: "linear-gradient(to left, #010a12, transparent)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          
          <div style={{ display: "flex", overflow: "hidden" }}>
            <div 
              className="animate-marquee" 
              style={{ display: "flex", gap: "1.5rem", whiteSpace: "nowrap", flexShrink: 0, paddingRight: "1.5rem" }}
            >
              {[...testimonials.slice(0, 10), ...testimonials.slice(0, 10)].map((t, idx) => (
                <div 
                  key={`${t.id}-${idx}`} 
                  style={{ 
                    position: "relative", 
                    width: "300px", 
                    height: "400px", 
                    flexShrink: 0,
                    borderRadius: "1rem",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                >
                  <Image 
                    src={t.src} 
                    alt="Depoimento de cliente" 
                    fill 
                    sizes="300px"
                    style={{ objectFit: "cover", objectPosition: "top" }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee de depoimentos linha 2 (reverse) */}
        <div style={{ position: "relative" }}>
           <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "150px",
              background: "linear-gradient(to right, #010a12, transparent)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "150px",
              background: "linear-gradient(to left, #010a12, transparent)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          
          <div style={{ display: "flex", overflow: "hidden" }}>
            <div 
              className="animate-marquee" 
              style={{ display: "flex", gap: "1.5rem", whiteSpace: "nowrap", flexShrink: 0, paddingRight: "1.5rem", animationDirection: "reverse" }}
            >
              {[...testimonials.slice(10, 19), ...testimonials.slice(10, 19)].map((t, idx) => (
                <div 
                  key={`${t.id}-${idx}`} 
                  style={{ 
                    position: "relative", 
                    width: "300px", 
                    height: "400px", 
                    flexShrink: 0,
                    borderRadius: "1rem",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                >
                  <Image 
                    src={t.src} 
                    alt="Depoimento de cliente" 
                    fill 
                    sizes="300px"
                    style={{ objectFit: "cover", objectPosition: "top" }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <button 
            onClick={open}
            className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-bold text-sm md:text-base uppercase tracking-widest px-10 py-5 hover:bg-[#1630DF] transition-colors duration-300 rounded-sm"
          >
  <WhatsAppIcon size={20} />
  Quero ser o próximo case de sucesso
</button>
        </div>

      </div>
    </section>
  );
}
