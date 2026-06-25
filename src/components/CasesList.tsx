"use client";
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';

export default function CasesList() {
  const cases = [
    {
      id: 'viniciosraider',
      title: 'Como a Scale gerou 5 contratos e mais de R$ 10.500 em honorários no 1º mês',
      client: 'Dr. Vinício Rodrigues',
      niche: 'Direito de Família',
      result: '+ R$ 10.500 em 30 dias',
      slug: '/cases/viniciosraider',
      image: '/cases/viniciosraider/Captura%20de%20tela%202026-06-25%20111519.png'
    }
  ];

  return (
    <section className="py-24 bg-[#010f1c] relative z-10 border-t border-white/5">
      <div className="container-page">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Estudos de Caso</h2>
          <p className="text-lg text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
            Resultados reais de escritórios que transformaram sua captação de clientes e previsibilidade de caixa com o Método Scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <Link href={c.slug} key={c.id} className="group flex flex-col bg-[#021626] rounded-2xl border border-blue-900/30 overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full h-48 overflow-hidden border-b border-blue-900/30">
                <img 
                  src={c.image} 
                  alt={`Capa do case ${c.client}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
                  <Briefcase className="w-3.5 h-3.5" />
                  Estudo de Caso
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {c.title}
                </h3>
                <div className="mt-auto space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                    <span className="text-[rgba(255,255,255,0.6)]">Cliente</span>
                    <span className="font-semibold text-[rgba(255,255,255,0.9)]">{c.client}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                    <span className="text-[rgba(255,255,255,0.6)]">Nicho</span>
                    <span className="font-semibold text-[rgba(255,255,255,0.9)]">{c.niche}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[rgba(255,255,255,0.6)]">Resultado</span>
                    <span className="font-bold text-emerald-400">{c.result}</span>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between text-blue-400 font-bold text-sm group-hover:gap-2 transition-all">
                  Ler case completo 
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
