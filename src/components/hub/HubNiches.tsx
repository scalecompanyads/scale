"use client";

import { Scale, HeartPulse, ShieldAlert, Building2 } from "lucide-react";

const niches = [
  {
    icon: <ShieldAlert size={28} color="#ef4444" />,
    title: "Direito Criminal (Funil de Altíssima Urgência)",
    behavior: "O cliente não está pesquisando artigos de blog; ele está desesperado no meio da noite precisando de um especialista em flagrante ou audiência de custódia.",
    strategy: "Campanhas focadas em redes de pesquisa móvel, Landing Pages ultra-rápidas com botão de chamada direta e criativos com foco 24h.",
    color: "#ef4444"
  },
  {
    icon: <HeartPulse size={28} color="#f59e0b" />,
    title: "Direito Previdenciário (Funil de Volume e Qualificação)",
    behavior: "Clientes buscando por concessão de aposentadorias, BPC/LOAS ou revisões. Alto volume de buscas, mas com alta taxa de analfabetismo digital.",
    strategy: "Páginas extremamente limpas, formulários de triagem inteligentes integrados ao WhatsApp para filtrar quem realmente tem o tempo de contribuição ou a idade necessária antes de acionar sua equipe.",
    color: "#f59e0b"
  },
  {
    icon: <Scale size={28} color="#00BAFF" />,
    title: "Direito de Família e Sucessões (Funil de Confiança e Discrição)",
    behavior: "Situações delicadas (divórcio, inventário, guarda). O cliente precisa ter certeza absoluta de quem está contratando antes de iniciar a conversa.",
    strategy: "Landing Pages com forte apelo visual, forte quebra de objeções na própria página, uso de vídeos de retargeting para construir autoridade contínua.",
    color: "#00BAFF"
  },
  {
    icon: <Building2 size={28} color="#10b981" />,
    title: "Direito Empresarial e Tributário (Funil Corporativo de Alto Ticket)",
    behavior: "O tomador de decisão é um CEO, Diretor Executivo ou Diretor Financeiro. Ele busca por blindagem patrimonial, recuperação tributária ou teses específicas.",
    strategy: "Campanhas refinadas por público-alvo de alta renda, termos técnicos de dor corporativa e Landing Pages institucionais de altíssimo padrão visual (Premium).",
    color: "#10b981"
  }
];

export default function HubNiches() {
  return (
    <section className="section bg-[rgba(255,255,255,0.01)] relative border-b border-[rgba(255,255,255,0.05)]">
      <div className="container-page relative z-10">
        
        <div className="max-w-[900px] mx-auto text-center mb-16">
          <span className="section-label">Nicho por Nicho</span>
          <h2 className="section-title">
            A Engenharia de Captação Adaptada para a <span>Sua Área de Atuação</span>
          </h2>
          <p className="section-subtitle">
            Não existe fórmula mágica idêntica para nichos diferentes. Cada área jurídica possui um comportamento de busca e um nível de urgência único no Google. Veja como estruturamos a sua máquina:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {niches.map((niche, idx) => (
            <div 
              key={idx}
              className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden group"
            >
              <div 
                className="absolute top-0 left-0 w-1 h-full opacity-50 group-hover:opacity-100 transition-opacity" 
                style={{ backgroundColor: niche.color }} 
              />
              
              <div className="flex items-center gap-4">
                <div 
                  className="flex items-center justify-center w-14 h-14 rounded-xl" 
                  style={{ backgroundColor: `${niche.color}15`, border: `1px solid ${niche.color}30` }}
                >
                  {niche.icon}
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{niche.title}</h3>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[rgba(255,255,255,0.4)] tracking-widest uppercase mb-1">O Comportamento:</h4>
                  <p className="text-[rgba(255,255,255,0.85)] leading-relaxed m-0">{niche.behavior}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[rgba(255,255,255,0.4)] tracking-widest uppercase mb-1">A Estratégia:</h4>
                  <p className="text-[rgba(255,255,255,0.85)] leading-relaxed m-0">{niche.strategy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
