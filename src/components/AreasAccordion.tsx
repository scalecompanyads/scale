"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Area = {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  articles: string[];
};

const areas: Area[] = [
  {
    id: "familia",
    title: "1. Direito de Família e Sucessões",
    description: "Advogados dessa área lidam com pessoas em momentos de forte estresse emocional. A busca é sempre por urgência ou para tirar dúvidas antes de tomar uma decisão.",
    keywords: ["advogado de família", "advogado especialista em divórcio", "advogado para pensão alimentícia", "como fazer inventário extrajudicial"],
    articles: [
      "Quais os documentos necessários para um divórcio no cartório?",
      "Guarda compartilhada: como funciona a pensão alimentícia?",
      "Passo a passo: como dar entrada em um inventário rapidamente."
    ]
  },
  {
    id: "criminal",
    title: "2. Direito Criminal",
    description: "Aqui a busca é quase 100% urgência (fundo de funil pelo celular). O cliente não quer ler um artigo de 2.000 palavras se tem um familiar na delegacia; ele quer um botão de WhatsApp rápido.",
    keywords: ["advogado criminalista 24 horas", "advogado criminalista em Vila Velha", "telefone de advogado criminal", "advogado especialista em flagrante"],
    articles: [
      "Fui intimado para depor na delegacia: preciso ir com advogado?",
      "Qual a diferença entre prisão preventiva e temporária?"
    ]
  },
  {
    id: "trabalhista",
    title: "3. Direito Trabalhista (Reclamante/Empregado)",
    description: "O cliente trabalhista pesquisa pelo problema exato que sofreu na empresa.",
    keywords: ["advogado trabalhista online", "advogado causas trabalhistas", "advogado especialista em assédio moral no trabalho", "calcular rescisão advogado"],
    articles: [
      "Fui demitido sem justa causa: quais são os meus direitos?",
      "Trabalho sem carteira assinada: posso cobrar meus direitos?",
      "Atraso no pagamento das férias: o que a lei diz sobre multas?"
    ]
  },
  {
    id: "previdenciario",
    title: "4. Direito Previdenciário",
    description: "O público previdenciário (geralmente mais velho ou com problemas de saúde) pesquisa muito por 'como conseguir' um benefício específico.",
    keywords: ["advogado previdenciário", "advogado para aposentadoria", "advogado especialista em BPC LOAS", "advogado para revisão de INSS"],
    articles: [
      "Benefício negado pelo INSS: como recorrer judicialmente?",
      "Quem tem direito ao BPC/LOAS em 2026?",
      "Calculadora de Aposentadoria: entenda a regra de transição."
    ]
  }
];

export default function AreasAccordion() {
  const [openId, setOpenId] = useState<string | null>("familia");

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 my-10">
      {areas.map((area) => {
        const isOpen = openId === area.id;
        
        return (
          <div 
            key={area.id} 
            className={`border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#021626] border-blue-500/30' : 'bg-[#010f1c] border-white/10 hover:border-white/20'}`}
          >
            <button
              className="w-full px-6 py-5 flex items-center justify-between text-left"
              onClick={() => setOpenId(isOpen ? null : area.id)}
            >
              <h3 className="text-xl font-bold text-white pr-8">{area.title}</h3>
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                {isOpen ? <Minus size={16} className="text-blue-400" /> : <Plus size={16} className="text-white/50" />}
              </div>
            </button>
            
            <div 
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-0 space-y-6">
                  <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">Melhores Palavras-chave</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.keywords.map(kw => (
                        <span key={kw} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-sm text-blue-200">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3">Ideias de Artigos / Conteúdos</h4>
                    <ul className="space-y-2">
                      {area.articles.map(article => (
                        <li key={article} className="flex items-start gap-2 text-[rgba(255,255,255,0.8)] text-sm md:text-base">
                          <span className="text-emerald-500 mt-1">•</span>
                          {article}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
