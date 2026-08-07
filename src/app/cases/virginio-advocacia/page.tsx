import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User, Tag, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageOpenGraph } from "@/lib/og";

const title = "Case de Sucesso: Virginio Advocacia | Scale Marketing";
const description = "Como a Scale Company gerou 5 contratos em 10 dias no Direito Previdenciário (BPC/LOAS e Auxílio-Acidente) com Meta Ads.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cases/virginio-advocacia" },
  openGraph: pageOpenGraph({
    title,
    description,
    path: "/cases/virginio-advocacia",
    type: "article",
    images: [
      {
        url: "/cases/virginio/capa.png",
        width: 580,
        height: 372,
        alt: "Virginio Advocacia",
      },
    ],
  }),
};

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cases", path: "/cases" },
          { name: "Virginio Advocacia" },
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
                <span>Direito Previdenciário</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Scale Company</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight text-slate-900">
              Como a Scale Gerou 5 Contratos em 10 Dias no Direito Previdenciário com Meta Ads
            </h1>

            {/* Ficha Técnica do Case */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10 shadow-sm flex flex-col md:flex-row gap-6 justify-between flex-wrap">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Cliente</h4>
                <p className="font-semibold text-slate-800">Virginio Advocacia</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Nicho</h4>
                <p className="font-semibold text-slate-800">Direito Previdenciário (BPC/LOAS e Auxílio-Acidente)</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Canal</h4>
                <p className="font-semibold text-slate-800">Meta Ads (Facebook/Instagram → WhatsApp)</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Período Analisado</h4>
                <p className="font-semibold text-emerald-600">Primeiros 10 dias de campanha</p>
              </div>
            </div>

            <div className="w-full h-64 md:h-[350px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative bg-white p-12 md:p-16">
              <Image
                src="/cases/virginio/capa.png"
                alt="Virginio Advocacia"
                fill
                className="object-contain"
              />
            </div>
          </header>

          {/* Conteúdo */}
          <div className="prose prose-slate prose-lg max-w-none text-slate-700">

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-2">O Desafio: Volume com Qualificação em um Nicho Sensível</h2>
            <p>
              O Direito Previdenciário tem uma particularidade que trava a captação de muitos escritórios: o público de BPC/LOAS e Auxílio-Acidente costuma ter baixa familiaridade com anúncios e formulários digitais, e cada uma dessas frentes exige uma abordagem de qualificação diferente.
            </p>
            <p>
              O escritório Virginio Advocacia buscava a Scale Company para validar duas teses de captação ao mesmo tempo, BPC/LOAS e Auxílio-Acidente, sem misturar os públicos e sem perder o controle do custo de cada uma.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">A Solução: Meta Ads Segmentado por Frente de Atuação</h2>
            <p>
              Estruturamos uma campanha de mensagens no Meta Ads (clique direto para o WhatsApp do escritório), dividida em dois conjuntos de anúncios distintos: um para BPC/LOAS e outro para Auxílio-Acidente. Isso permite acompanhar o custo por resultado de cada tese separadamente desde o primeiro dia, em vez de um número único misturando as duas.
            </p>
            <p>
              Nos primeiros 10 dias a campanha ainda estava em fase de aprendizagem do algoritmo do Meta, período em que é natural haver oscilação nas métricas enquanto a plataforma testa públicos e posicionamentos. Mesmo assim, os dois conjuntos já mostravam sinais claros de que o algoritmo estava encontrando as conversões certas, o que orientou a decisão de manter a campanha estável nesse momento em vez de mexer prematuramente na configuração.
            </p>

            {/* Galeria de Fotos (Prova Real) */}
            <div className="my-16 not-prose">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
                Prova Real do Fechamento
              </h3>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex items-center justify-center">
                <img
                  src="/cases/virginio/depoimentos.png"
                  alt="Conversas reais da equipe da Virginio Advocacia fechando contratos de BPC/LOAS e Auxílio-Acidente"
                  className="w-full max-w-2xl h-auto object-contain"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">Os Resultados: O Raio-X dos Primeiros 10 Dias</h2>
            <p>
              Mesmo em fase de aprendizagem, o funil já mostrou uma conversão sólida de conversa para contrato assinado:
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 my-8 shadow-sm">
              <ul className="space-y-4 mt-0 mb-0">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4">
                  <span className="font-semibold text-slate-800">Investimento na campanha</span>
                  <span className="text-emerald-600 font-medium mt-2 sm:mt-0">Pouco mais de R$ 300</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4">
                  <span className="font-semibold text-slate-800">Conversas geradas no WhatsApp</span>
                  <span className="text-emerald-600 font-medium mt-2 sm:mt-0">25 (9 em BPC/LOAS e 16 em Auxílio-Acidente)</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4">
                  <span className="font-semibold text-slate-800">Custo médio por resultado</span>
                  <span className="text-emerald-600 font-medium mt-2 sm:mt-0">Abaixo de R$ 14</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2">
                  <span className="font-bold text-slate-800 text-lg">Contratos fechados</span>
                  <span className="text-2xl font-bold text-emerald-600 mt-2 sm:mt-0">5 em 10 dias</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
              <p className="m-0">
                Isso significa que <strong>1 em cada 5 conversas geradas (20%) virou contrato assinado</strong>, uma taxa de conversão comercial expressiva para uma campanha que ainda nem tinha saído da fase de aprendizagem.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Conclusão: Validação Rápida, Sem Abrir Mão do Controle</h2>
            <p>
              Em 10 dias, a Virginio Advocacia validou duas frentes de captação, BPC/LOAS e Auxílio-Acidente, com custo por resultado sob controle e uma equipe comercial capturando 1 em cada 5 conversas. O próximo passo é incorporar novos criativos em vídeo assim que estiverem disponíveis, mantendo a estrutura de conjuntos separados que já provou funcionar.
            </p>
            <p className="font-bold text-xl text-emerald-600 text-center my-10">
              Validar duas teses previdenciárias ao mesmo tempo, com dados separados por frente, é o que transforma um primeiro mês de campanha em decisão de investimento, não em aposta.
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
