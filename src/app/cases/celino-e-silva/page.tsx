import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User, Tag, Briefcase, TrendingUp, Search } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Case de Sucesso: Celino e Silva | Scale Marketing",
  description: "Virada de Jogo no Google Ads, Diagnóstico de Performance e Expansão para Direito de Família: A Estratégia do Escritório Celino e Silva.",
  alternates: { canonical: "/cases/celino-e-silva" },
  openGraph: {
    title: "Case de Sucesso: Celino e Silva | Scale Marketing",
    description: "Virada de Jogo no Google Ads, Diagnóstico de Performance e Expansão para Direito de Família.",
    url: "/cases/celino-e-silva",
    type: "article",
    locale: "pt_BR",
    siteName: "Scale Company",
    images: [{ url: "/cases/celino-e-silva/image.png", width: 1898, height: 990, alt: "Case Celino e Silva" }],
  },
};

export default function CelinoESilvaCaseStudyPage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cases", path: "/cases" },
          { name: "Celino e Silva" },
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
              Virada de Jogo no Google Ads, Diagnóstico de Performance e Expansão para Direito de Família: A Estratégia do Escritório Celino e Silva
            </h1>

            {/* Ficha Técnica do Case */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10 shadow-sm flex flex-col md:flex-row gap-6 justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Cliente</h4>
                <p className="font-semibold text-slate-800">Celino e Silva Advocacia</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Foco</h4>
                <p className="font-semibold text-slate-800">Reestruturação e Novo Nicho</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Canais</h4>
                <p className="font-semibold text-slate-800">Google Ads e Meta Ads</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Resultados</h4>
                <p className="font-semibold text-emerald-600">10 contratos + 40 leads (teste)</p>
              </div>
            </div>

            <div className="w-full h-64 md:h-[450px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative">
              <Image 
                src="/cases/celino-e-silva/image.png" 
                alt="Capa do Case Celino e Silva" 
                fill 
                className="object-cover object-top" 
              />
            </div>
          </header>

          {/* Conteúdo */}
          <div className="prose prose-slate prose-lg max-w-none text-slate-700">
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-2">O Cenário Inicial: O Desafio da Dependência de um Único Canal</h2>
            <p>
              O escritório Celino e Silva vivenciou o melhor dos cenários em fevereiro, impulsionado por campanhas altamente lucrativas no Meta Ads que geravam uma média de 5 contratos fechados por semana. No entanto, como qualquer operação digital madura sabe, depender de uma única plataforma é um risco. Nos meses seguintes, o Meta enfrentou uma queda natural de performance (saturação de criativos e fadiga de público), zerando os fechamentos vindos por ali.
            </p>
            <p>
              Em contrapartida, o Google Ads do escritório era um canal adormecido, que historicamente não gerava resultados expressivos para a banca.
            </p>
            
            <p className="font-semibold mt-6">A Scale Company foi acionada com um triplo desafio:</p>
            <ul>
              <li>Ativar o Google Ads e transformá-lo em uma máquina de tração real.</li>
              <li>Diagnosticar e reestruturar o Meta Ads para recuperar o fôlego histórico.</li>
              <li>Desenhar e validar o funil de captação para um novo nicho: o Direito de Família.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">Pilar 1: A Virada do Google Ads — De Zero a 10 Contratos Fechados</h2>
            <p>
              A primeira grande vitória da reestruturação liderada pela Scale Company foi no Google Search. Implementando uma nova estrutura de campanhas focada em intenção de contratação, o canal que antes não trazia resultados gerou <strong>10 novos fechamentos de contratos</strong> para o escritório.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">O Próximo Passo Operacional: Refinamento de Qualidade</h3>
            <p>
              Embora o volume de vendas tenha saltado significativamente, o tráfego de fundo de funil no Google começou a atrair um alto volume de leads com baixo poder aquisitivo ou buscando demandas de baixa rentabilidade (como consultas simples sobre pensão alimentícia).
            </p>
            
            <p className="font-semibold mt-4">Ações em andamento pela Scale Company:</p>
            <ul>
              <li>Nova rodada de negativação de termos de busca irrelevantes e assistenciais.</li>
              <li>Revisão fina das palavras-chave para concentrar a verba do escritório exclusivamente em causas de maior valor agregado (ex: divórcios complexos, partilha de bens e inventários).</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">Pilar 2: Anatomia do Meta Ads — Diagnóstico e Reengenharia de Criativos</h2>
            <p>
              A ausência de fechamentos no Meta Ads no último período acendeu o alerta da nossa equipe de performance. Identificamos que o público-alvo havia saturado para a abordagem antiga que gerava os 5 contratos semanais em fevereiro.
            </p>
            <p>
              Em vez de insistir no erro, a Scale Company iniciou um processo de reengenharia de comunicação:
            </p>
            <ul>
              <li><strong>Nova abordagem de copy:</strong> Substituição de anúncios genéricos por criativos focados em dores específicas e nível de consciência mais elevado.</li>
              <li><strong>Testes de novos ganchos (Hooks):</strong> Alteração das primeiras linhas e imagens dos anúncios para qualificar o lead antes mesmo de ele clicar no botão do WhatsApp, reduzindo a entrada de "curiosos".</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">Pilar 3: Validação Relâmpago do Novo Nicho (Direito de Família)</h2>
            <p>
              Após a contratação de uma profissional especialista em Direito de Família pelo escritório, o Celino e Silva buscou o direcionamento da Scale Company para iniciar a captação na área. Em vez de queimar verba com suposições, estruturamos uma validação ágil e orientada a dados em ambas as plataformas.
            </p>
            
            <p className="font-semibold mb-6">Os relatórios recentes da Scale Company comprovam o sucesso imediato da validação:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-500" />
                  1. Google Ads (Família)
                </h4>
                <ul className="space-y-2 mt-0 mb-6">
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Investimento</span> <strong className="text-slate-800">R$ 478,41</strong></li>
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Volume Gerado</span> <strong className="text-emerald-600">24 mensagens</strong></li>
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Custo por Lead</span> <strong className="text-slate-800">R$ 19,93</strong></li>
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Taxa de Conversão</span> <strong className="text-emerald-600">19,20%</strong></li>
                </ul>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  <strong>Análise Técnica:</strong> Atingimos uma taxa de conversão excepcional de quase 20% na Landing Page. Na prática, a cada R$ 20 investidos, o escritório ganha uma nova oportunidade real de contratação para Direito de Família no WhatsApp.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                  2. Meta Ads (Família)
                </h4>
                <ul className="space-y-2 mt-0 mb-6">
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Investimento</span> <strong className="text-slate-800">R$ 437,44</strong></li>
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Volume Gerado</span> <strong className="text-emerald-600">16 mensagens</strong></li>
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Custo por Lead</span> <strong className="text-slate-800">R$ 27,34</strong></li>
                </ul>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  <strong>Análise Técnica:</strong> Captação consistente e com custo muito saudável. O foco atual desta campanha é ajustar os criativos para afastar o público de pensão alimentícia, focando em demandas familiares mais estratégicas.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Conclusão: Inteligência em Vez de Cliques</h2>
            <p>
              O caso do escritório Celino e Silva demonstra que o sucesso no marketing jurídico de alta performance não é linear, mas sim adaptável. Enquanto o Google Ads foi estabelecido com sucesso como uma nova fonte de faturamento (10 contratos), a Scale Company demonstrou agilidade para iniciar a correção do Meta Ads e, simultaneamente, abrir uma nova e lucrativa avenida de crescimento em Direito de Família, entregando 40 leads qualificados em fase de testes com custos extremamente competitivos.
            </p>
            <p className="font-bold text-xl text-blue-600 text-center my-10">
              Adaptação rápida e foco em conversão qualificam a diferença entre gastar com anúncios e investir em inteligência jurídica digital.
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
