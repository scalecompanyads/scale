import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User, Tag, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case de Sucesso: Dr. Vinício Rodrigues | Scale Marketing",
  description: "Como a Scale Company gerou 5 contratos e mais de R$ 10.500 em honorários no 1º mês para um escritório de Direito de Família.",
};

export default function CaseStudyPage() {
  const caseImages = [
    "/cases/viniciosraider/Captura de tela 2026-06-25 111230.png",
    "/cases/viniciosraider/Captura de tela 2026-06-25 111239.png",
    "/cases/viniciosraider/Captura de tela 2026-06-25 111249.png"
  ];

  return (
    <>
      <Navbar />
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
              Como a Scale gerou 5 contratos e mais de R$ 10.500 em honorários no 1º mês para um escritório de Família
            </h1>

            {/* Ficha Técnica do Case */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10 shadow-sm flex flex-col md:flex-row gap-6 justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Cliente</h4>
                <p className="font-semibold text-slate-800">Dr. Vinício Rodrigues Advocacia</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Nicho</h4>
                <p className="font-semibold text-slate-800">Direito de Família (Divórcio, Guarda e Pensão)</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Canais</h4>
                <p className="font-semibold text-slate-800">Google Ads, Meta Ads e Landing Page</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Período Analisado</h4>
                <p className="font-semibold text-emerald-600">Primeiro mês de operação</p>
              </div>
            </div>

            <div className="w-full h-64 md:h-[450px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative">
              <Image 
                src="/cases/viniciosraider/Captura de tela 2026-06-25 111519.png" 
                alt="Capa da Landing Page de Direito de Família" 
                fill 
                className="object-cover object-top" 
              />
            </div>
          </header>

          {/* Conteúdo */}
          <div className="prose prose-slate prose-lg max-w-none text-slate-700">
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-2">O Desafio: Previsibilidade e Qualificação no Direito de Família</h2>
            <p>
              Quando o Dr. Vinício Rodrigues chegou à Scale Company, o objetivo era claro: implementar uma máquina de aquisição de clientes previsível e constante. No nicho de Direito de Família, o grande desafio não é gerar contatos, mas sim filtrar o "lead curioso" e atrair clientes que realmente possuam uma demanda urgente e capacidade de investimento para contratar um advogado particular.
            </p>
            <p>
              O escritório precisava de uma estratégia que respeitasse integralmente as normas do Provimento 205/2021 da OAB, mas que fosse agressiva o suficiente em performance para gerar retorno sobre o investimento (ROI) já nas primeiras semanas.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">A Solução: O Método Scale de Aquisição Jurídica</h2>
            <p>
              Para garantir a tração imediata do escritório do Dr. Vinício, não apostamos apenas em "fazer anúncios". Estruturamos um funil completo de conversão baseado em três pilares operacionais:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">1. Infraestrutura de Conversão (Landing Page de Alta Performance)</h3>
            <p>O primeiro passo foi desenvolver uma Landing Page voltada exclusivamente para conversão.</p>
            <ul>
              <li><strong>Design e Autoridade:</strong> Utilizamos uma paleta de cores sóbria e uma fotografia profissional do Dr. Vinício, transmitindo confiança e segurança imediata.</li>
              <li><strong>Copy Direta ao Ponto:</strong> Focamos nas dores principais — "Problemas com pensão, guarda ou divórcio? Proteja seus direitos e os de seus filhos com segurança e agilidade."</li>
              <li><strong>Fricção Zero:</strong> O Call to Action (CTA) foi desenhado para levar o cliente diretamente ao WhatsApp do escritório, prometendo sigilo e zero burocracia.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8">2. Google Ads: Capturando a Demanda de Alta Intenção (Fundo de Funil)</h3>
            <p>Com a página pronta, ativamos o tráfego via Google Search. O foco absoluto foi em termos de urgência.</p>
            <ul>
              <li>Negativamos palavras-chave de curiosos (ex: "como fazer divórcio de graça", "advogado gratuito").</li>
              <li>Direcionamos o orçamento para buscas com forte intenção de contratação imediata.</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
              <p className="m-0"><strong>O Resultado Técnico:</strong> Em apenas uma das semanas analisadas, a campanha de pesquisa registrou uma <strong>Taxa de Conversão impressionante de 46,15%</strong>. Ou seja, praticamente metade dos usuários qualificados que clicavam no anúncio iniciavam uma conversa no WhatsApp do Dr. Vinício. O Custo por Lead (CPL) ficou estabilizado em excelentes R$ 45,01.</p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-8">3. Meta Ads: Acelerando Oportunidades</h3>
            <p>
              Para fechar o cerco de presença digital, ativamos campanhas no Meta (Instagram/Facebook) focadas em guarda compartilhada. Com menos de uma semana de campanha ativa na plataforma, o cliente já colheu frutos diretos de pessoas sendo impactadas de forma passiva, mas altamente segmentada.
            </p>

            {/* Galeria de Fotos (Depoimentos) */}
            <div className="my-16 not-prose">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
                Registros e Resultados
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {caseImages.map((src, index) => (
                  <div key={index} className="aspect-[4/5] relative rounded-xl overflow-hidden bg-slate-200 border border-slate-300 shadow-sm flex items-center justify-center group">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-4 text-center z-0">
                      <Image 
                        src={src}
                        alt={`Evidência de resultado ${index + 1}`}
                        fill
                        className="object-cover z-10 transition-opacity duration-300"
                      />
                      <span className="text-sm font-medium z-0">Imagem de evidência<br/>(Adicionar em /cases/viniciosraider)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">Os Resultados Financeiros: A Prova Real do 1º Mês</h2>
            <p>
              No marketing jurídico voltado para performance, cliques e impressões são métricas de vaidade se o telefone não tocar e o contrato não for assinado.
            </p>
            <p>
              Logo no primeiro mês de parceria com a Scale Company, a operação se pagou com ampla margem de lucro. O Dr. Vinício reportou o fechamento de <strong>5 contratos de honorários</strong>:
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 my-8 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">Via Google Ads (4 contratos):</h4>
              <ul className="space-y-2 mt-0 mb-6">
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Contrato 1 (Pensão)</span> <strong className="text-emerald-600">R$ 1.500,00</strong></li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Contrato 2 (Guarda)</span> <strong className="text-emerald-600">R$ 5.000,00</strong></li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Contrato 3</span> <strong className="text-emerald-600">R$ 2.000,00</strong></li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Contrato 4</span> <span className="text-slate-500 italic">Em definição</span></li>
              </ul>
              
              <h4 className="font-bold text-slate-900 mb-4">Via Meta Ads (1 contrato):</h4>
              <ul className="space-y-2 mt-0 mb-6">
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Contrato 5 (Fechado em menos de 7 dias)</span> <strong className="text-emerald-600">R$ 2.000,00</strong></li>
              </ul>

              <div className="mt-4 pt-4 border-t-2 border-slate-800 flex justify-between items-center">
                <span className="font-bold text-lg text-slate-900">Total rastreado no primeiro mês:</span>
                <span className="font-bold text-2xl text-emerald-600">Mais de R$ 10.500,00</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">O Nível de Qualificação do Lead</h2>
            <p>
              Mais importante do que o volume, foi a temperatura dos leads entregues na mão do advogado. Os relatórios internos e os feedbacks do WhatsApp do Dr. Vinício provam a assertividade da segmentação da Scale Company: os clientes já chegavam enviando fotos de intimações, relatando exatamente os problemas (ex: <em>"Dívida, moro em Venda Nova do Imigrante, criança em abrigo"</em>) e prontos para a consulta jurídica.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Conclusão</h2>
            <p>
              O case do Dr. Vinício Rodrigues prova que o Marketing Jurídico ético não precisa ser lento. Quando um escritório alia um atendimento comercial rápido pelo WhatsApp a uma agência de performance que domina o funil de aquisição, os resultados são previsíveis, escaláveis e altamente lucrativos.
            </p>
            <p className="font-bold text-xl text-emerald-600 text-center my-10">
              A Scale Company não apenas gerou leads; entregou uma máquina de previsibilidade de caixa para o escritório.
            </p>
          </div>

          {/* CTA do Artigo */}
          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#021626] to-[#010f1c] text-white text-center shadow-2xl flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Quer ser o próximo Case de Sucesso?</h3>
            <p className="text-[rgba(255,255,255,0.7)] mb-10 max-w-2xl">
              Nossa equipe estrutura desde o seu site até as campanhas de fundo de funil para atrair os melhores clientes da sua região.
            </p>
            <Link href="/google-ads-advogados#contato" className="relative group inline-flex">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-sm md:text-base uppercase tracking-widest rounded-full hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-xl">
                <Calendar className="w-5 h-5" />
                AGENDAR DIAGNÓSTICO COM A SCALE
              </div>
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
