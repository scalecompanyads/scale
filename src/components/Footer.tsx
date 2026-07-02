"use client";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

import { ArrowRight, MapPin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLeadForm } from "@/contexts/LeadFormContext";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

export function FinalCTA() {
  const { open } = useLeadForm();

  return (
    <section className="relative py-32 overflow-hidden bg-[#010f1c] border-t border-[rgba(255,255,255,0.05)]">
      {/* Full width background image generated */}
      <div 
        className="absolute inset-0 bg-[url('/images/cta-bg.png')] bg-cover bg-center bg-no-repeat z-0" 
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010f1c] via-[#010f1c]/85 to-[#010f1c] z-0" />
      
      <div className="container-page relative z-10 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold mb-6 text-white leading-[1.1] tracking-tight">
            Assuma o controle do crescimento do seu <span className="text-[#3B82F6]">escritório hoje.</span>
          </h2>
          <p className="text-lg md:text-xl text-[rgba(255,255,255,0.85)] leading-relaxed mb-10 max-w-[700px] mx-auto">
            Pare de depender exclusivamente de indicações. Terceirize a execução técnica com quem entende de performance jurídica e foque no que você faz de melhor: advogar.
          </p>

          <button 
            onClick={open}
            className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-bold text-sm md:text-base uppercase tracking-widest px-10 py-5 hover:bg-[#1630DF] transition-colors duration-300 w-full md:w-auto"
          >
  <WhatsAppIcon size={20} />
  AGENDAR MEU DIAGNÓSTICO E VER O PROCESSO
</button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010f1c] pt-20 pb-8 relative z-10">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-6">
            <a href="https://www.scalecompany.com.br/" aria-label="Scale Company">
              <Image 
                src="/images/scale-logo.svg" 
                alt="Scale Company" 
                width={160} 
                height={40} 
                className="opacity-90"
              />
            </a>
            <p className="text-[rgba(255,255,255,0.85)] text-sm leading-relaxed max-w-[280px]">
              Aceleradora de negócios e agência de marketing especializada no mercado jurídico. Construindo Máquinas de Aquisição com previsibilidade e total respeito ao Provimento 205 da OAB.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[rgba(255,255,255,0.85)] hover:text-white hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[rgba(255,255,255,0.85)] hover:text-white hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[rgba(255,255,255,0.85)] hover:text-white hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Serviços (SEO Keywords) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-2">Serviços Jurídicos</h4>
            <Link href="/scale-advogados" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">Gestão de Tráfego Jurídico</Link>
            <Link href="/google-ads-advogados" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">Google Ads para Advogados</Link>
            <Link href="/scale-advogados" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">Meta Ads para Advocacia</Link>
            <Link href="/scale-advogados" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">Landing Pages OAB Compliance</Link>
            <Link href="/crm-advogados" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">CRM para Escritórios</Link>
            <Link href="/servicos" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">Design e Identidade Visual</Link>
          </div>

          {/* Col 3: Links Úteis */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-2">Navegação</h4>
            <Link href="#solucao" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">Nossa Solução</Link>
            <Link href="#servicos" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">O Ecossistema 360°</Link>
            <Link href="#resultados" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">Cases de Sucesso</Link>
            <Link href="#faq" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">Dúvidas Frequentes</Link>
            <Link href="#" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">Política de Privacidade</Link>
            <Link href="#" className="text-[rgba(255,255,255,0.85)] hover:text-[#3B82F6] text-sm transition-colors">Termos de Uso</Link>
          </div>

          {/* Col 4: Contato */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-2">Contato</h4>
            <div className="flex items-start gap-3 text-[rgba(255,255,255,0.85)] text-sm">
              <Mail size={16} className="mt-0.5 text-[#3B82F6]" />
              <a href="mailto:contato@scalecompany.com.br" className="hover:text-white transition-colors">
                contato@scalecompany.com.br
              </a>
            </div>
            <div className="flex items-start gap-3 text-[rgba(255,255,255,0.85)] text-sm">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#3B82F6]" />
              <span>
                Atendimento Nacional<br/>
                Operação 100% Remota
              </span>
            </div>
          </div>
          
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[rgba(255,255,255,0.85)] text-xs md:text-sm">
          <p>© {currentYear} Scale Company. Todos os direitos reservados.</p>
          <p>CNPJ: 44.021.911/0001-70</p>
        </div>
      </div>
    </footer>
  );
}
