import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User, Tag, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Case de Sucesso: Rocha & Sá | Scale Marketing",
  description: "Como a Scale Company gerou 3 contratos em apenas 4 dias no Direito de Família com o poder do follow-up.",
  alternates: { canonical: "/cases/rocha-e-sa" },
  openGraph: {
    title: "Case de Sucesso: Rocha & Sá | Scale Marketing",
    description: "3 contratos em apenas 4 dias no Direito de Família com o poder do follow-up.",
    url: "/cases/rocha-e-sa",
    type: "article",
    locale: "pt_BR",
    siteName: "Scale Company",
    images: [{ url: "/cases/rocha-e-sa/cover-2.png", width: 1004, height: 591, alt: "Case Rocha & Sá" }],
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cases", path: "/cases" },
          { name: "Rocha & Sá" },
        ])}
      />
      <main className="flex flex-col min-h-screen bg-slate-50 text-slate-900 pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header do Post */}
          <header className="mb-12">
            <Link href="/cases" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm font-medium mb-8 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Voltar para Cases
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold text-emerald-600">Estudo de Caso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-blue-500" />
                <span>Direito de Família</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Scale Company</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight text-slate-900">
              Tração Acelerada e o Poder do Follow-up: 3 Contratos Fechados em Apenas 4 Dias no Direito de Família
            </h1>

            {/* Ficha Técnica do Case */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10 shadow-sm flex flex-col md:flex-row gap-6 justify-between flex-wrap">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Cliente</h4>
                <p className="font-semibold text-slate-800">Rocha & Sá | Sociedade de Advogados</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Nicho</h4>
                <p className="font-semibold text-slate-800">Direito de Família (Execução de Alimentos, Guarda e Pensão)</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Foco Estratégico</h4>
                <p className="font-semibold text-slate-800">Volume de captação, gestão de pipeline e recuperação de leads.</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Período Analisado</h4>
                <p className="font-semibold text-emerald-600">Curto prazo (4 dias)</p>
              </div>
            </div>

            <div className="w-full h-64 md:h-[450px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative">
              <Image 
                src="/cases/rocha-e-sa/cover-2.png" 
                alt="Capa do Case Rocha e Sá" 
                fill 
                className="object-cover object-center" 
              />
            </div>
          </header>

          {/* Conteúdo */}
          <div className="prose prose-slate prose-lg max-w-none text-slate-700">
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-2">O Desafio: Converter Volume em Faturamento Rápido</h2>
            <p>
              Muitos escritórios de advocacia travam quando começam a receber um alto volume de contatos diários. O desafio não é apenas gerar o lead, mas garantir que o atendimento acompanhe a velocidade da internet.
            </p>
            <p>
              O escritório Rocha & Sá já possui a máquina de aquisição da Scale Company rodando em alta performance. O nosso objetivo em conjunto neste ciclo semanal era otimizar a triagem e garantir que nenhuma oportunidade esfriasse no WhatsApp.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">Os Resultados: O Raio-X de 4 Dias de Operação</h2>
            <p>
              O relatório de acompanhamento revela o funcionamento de um funil de vendas jurídico extremamente saudável e previsível. Em apenas quatro dias úteis, o escritório apresentou os seguintes números:
            </p>

            <ul className="space-y-4">
              <li><strong>Topo de Funil (Tráfego):</strong> 33 novos contatos qualificados iniciados.</li>
              <li><strong>Meio de Funil (Negociação):</strong> 8 propostas enviadas e pendentes de análise (clientes com a minuta em mãos).</li>
              <li><strong>Fundo de Funil (Fechamento):</strong> 3 contratos assinados.</li>
            </ul>

            {/* Galeria de Fotos (Depoimentos) */}
            <div className="my-16 not-prose">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
                Evidência do Relatório
              </h3>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center">
                <img 
                  src="/cases/rocha-e-sa/WhatsApp%20Image%202026-06-27%20at%2017.19.15.jpeg" 
                  alt="Relatório de resultados Rocha e Sá" 
                  className="w-full max-w-2xl h-auto object-contain"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-10">O Detalhamento dos Honorários Fechados:</h3>
            <p>
              Os contratos firmados demonstram a atração de demandas rentáveis, fugindo do "cliente sem dinheiro":
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 my-8 shadow-sm">
              <ul className="space-y-4 mt-0 mb-0">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4">
                  <span className="font-semibold text-slate-800">2 Contratos de Execução de Alimentos</span> 
                  <span className="text-emerald-600 font-medium mt-2 sm:mt-0">Cobrança estruturada em 30% sobre o valor devido (êxito de alto valor agregado).</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2">
                  <span className="font-semibold text-slate-800">1 Contrato de Acordo de Guarda, Convivência e Pensão</span> 
                  <span className="text-emerald-600 font-medium mt-2 sm:mt-0">Honorários fechados em 14 parcelas de R$ 228,57 (garantindo previsibilidade e fluxo de caixa recorrente).</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">O Grande Diferencial (A Lição de Ouro da Scale): O Dinheiro está no Follow-up</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
              <p className="m-0">
                O detalhe mais importante deste relatório não está nos leads novos, mas na observação final: <strong>O contrato de Guarda e Pensão foi fechado com um lead da semana passada.</strong>
              </p>
            </div>
            <p>
              No marketing jurídico, a jornada de compra nem sempre é imediata. O cliente muitas vezes precisa conversar com a família, organizar as finanças ou reunir documentos. A Scale Company orienta seus parceiros a manterem uma esteira de acompanhamento rigorosa.
            </p>
            <p>
              Neste recorte de 4 dias, o escritório Rocha & Sá manteve 12 pessoas ativas em follow-up. É essa consistência de atendimento (recuperando o chumbado de semanas anteriores) que transforma um CAC (Custo de Aquisição de Cliente) bom em um CAC excelente.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Conclusão: Previsibilidade não é Sorte, é Processo</h2>
            <p>
              Gerar 33 contatos, enviar 8 propostas e fechar 3 contratos em um intervalo de 4 dias prova que o escritório Rocha & Sá não depende mais de indicações. Eles possuem um fluxo de caixa previsível. 
            </p>
            <p className="font-bold text-xl text-emerald-600 text-center my-10">
              Com a Scale Company gerando a demanda e o escritório executando um atendimento comercial implacável, o crescimento deixa de ser uma aposta e se torna matemática.
            </p>
          </div>

          {/* CTA do Artigo */}
          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#021626] to-[#010f1c] text-white text-center shadow-2xl flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Quer ser o próximo Case de Sucesso?</h3>
            <p className="text-[rgba(255,255,255,0.7)] mb-10 max-w-2xl">
              Nossa equipe estrutura desde o seu site até as campanhas de fundo de funil para atrair os melhores clientes da sua região.
            </p>
            <CTAButton className="relative group inline-flex text-left">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-sm md:text-base uppercase tracking-widest rounded-full hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-xl">
                <Calendar className="w-5 h-5" />
                AGENDAR DIAGNÓSTICO COM A SCALE
              </div>
            </CTAButton>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
