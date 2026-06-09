"use client";

import { CheckCircle2, TrendingUp, Search, Share2, ArrowRight, Shield, Layers, Target } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";
import Ecosystem from "@/components/Ecosystem";

const checklist = [
  {
    title: "Não terceirize a dor de cabeça:",
    desc: "Esqueça a gestão de múltiplos freelancers."
  },
  {
    title: "Infraestrutura Tecnológica:",
    desc: "Suas páginas, seus vídeos e suas campanhas criadas pela mesma equipe."
  },
  {
    title: "Foco em ROAS:",
    desc: "Controle exato de quanto custa cada caso fechado para o seu escritório."
  }
];

const trafegoService = {
  title: "Ecossistema Completo de Tráfego Pago",
  desc: "Aceleração imediata de resultados. Não entregamos apenas a gestão das campanhas no Google Ads e Meta Ads; entregamos o pacote completo e pronto para a campanha rodar com alta performance:",
  features: [
    { t: "Landing Pages Premium", d: "Desenvolvemos páginas de altíssima conversão, com visual clean e gatilhos focados na urgência do seu cliente." },
    { t: "Edição de Vídeo Profissional", d: "Recebemos o seu material bruto e transformamos em anúncios dinâmicos que prendem a atenção." },
    { t: "Criativos e Design", d: "Direção de arte completa alinhada à sobriedade que a OAB exige." },
    { t: "Gestão de Tráfego", d: "Otimização diária para garantir que você receba o contato de quem realmente precisa do seu serviço agora." }
  ],
  cta: "Quero estruturar meu Tráfego Pago"
};

export default function SolutionAndServices() {
  const { open } = useLeadForm();

  return (
    <section id="servicos" className="section relative">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="glow-cyan absolute left-0 top-1/4 w-[500px] h-[500px] opacity-20 pointer-events-none" />
      
      <div className="container-page relative z-10">
        
        {/* Dobra 3: Solution Intro */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", marginBottom: "7rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title">
              Como a Scale Company é Diferente: <br/><span>Nós Entregamos a Solução Pronta.</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: "800px", margin: "0 auto" }}>
              Você não é dono de agência, é advogado. Seu foco deve estar na tese e no atendimento, não em montar um quebra-cabeça de marketing. Como uma verdadeira agência de marketing jurídico, nós assumimos o controle da sua infraestrutura.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {checklist.map((item, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col group overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Hover Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#00BAFF] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "0.75rem",
                  background: "rgba(0, 186, 255, 0.08)",
                  border: "1px solid rgba(0, 186, 255, 0.2)",
                  marginBottom: "1.25rem"
                }}>
                  {idx === 0 ? <Shield size={20} color="#00BAFF" /> :
                   idx === 1 ? <Layers size={20} color="#00BAFF" /> :
                   <Target size={20} color="#00BAFF" />}
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" style={{ marginBottom: "6rem" }} />

        {/* Dobra 4: A Máquina */}
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.4rem 1.25rem", marginBottom: "1.5rem", borderRadius: "9999px", border: "1px solid rgba(0,186,255,0.3)", background: "rgba(0,186,255,0.05)", color: "#00BAFF", fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Ecossistema Completo de Tráfego Pago
            </div>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "900px", margin: "0 auto", marginBottom: "1.5rem", lineHeight: 1.1 }}>
              A Primeira Máquina 360° de <br/><span>Aquisição Jurídica</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: "700px", margin: "0 auto" }}>
              Aceleração imediata de resultados. Não entregamos apenas gestão de campanhas; entregamos a infraestrutura pronta para escalar seus contratos.
            </p>
          </div>

          {/* Features Grid (Linear Dark Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {trafegoService.features.map((feat, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col group overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Hover Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#00BAFF] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(0,186,255,0.08)", border: "1px solid rgba(0,186,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                   <CheckCircle2 size={18} color="#00BAFF" />
                </div>
                <div>
                   <h4 className="text-[1.1rem] font-bold text-white mb-2 tracking-tight leading-snug">{feat.t}</h4>
                   <p className="text-[rgba(255,255,255,0.85)] text-[0.9rem] leading-relaxed m-0">{feat.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MEDIA CONTENT */}
          <Ecosystem />

          <div style={{ textAlign: "center", marginTop: "2rem", marginBottom: "4rem" }}>
             <button onClick={open} className="btn-shiny" style={{ padding: "1.25rem 3rem", fontSize: "1.1rem" }}>
               Quero estruturar minha Máquina 360°
             </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
