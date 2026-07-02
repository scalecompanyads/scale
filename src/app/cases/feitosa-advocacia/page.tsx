import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Briefcase, User, Tag, TrendingUp, Search } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "Case de Sucesso: Feitosa Advocacia | Scale Marketing",
  description: "Captação B2B na Advocacia: Como Geramos Reuniões com Médias e Grandes Empresas e Dobramos o Investimento do Cliente.",
  alternates: { canonical: "/cases/feitosa-advocacia" },
  openGraph: pageOpenGraph({
    title: "Case de Sucesso: Feitosa Advocacia | Scale Marketing",
    description: "Captação B2B na Advocacia: reuniões com médias e grandes empresas e o dobro do investimento de volta.",
    path: "/cases/feitosa-advocacia",
    type: "article",
  }),
};

export default function FeitosaAdvocaciaCaseStudyPage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cases", path: "/cases" },
          { name: "Feitosa Advocacia" },
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
                <span>Direito Empresarial (B2B)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Scale Company</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight text-slate-900">
              Captação B2B na Advocacia: Como Geramos Reuniões com Médias e Grandes Empresas e Dobramos o Investimento do Cliente
            </h1>

            {/* Ficha Técnica do Case */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10 shadow-sm flex flex-col md:flex-row gap-6 justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Cliente</h4>
                <p className="font-semibold text-slate-800">Feitosa Advocacia</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Foco</h4>
                <p className="font-semibold text-slate-800">Captação B2B (Corporativo)</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Canais</h4>
                <p className="font-semibold text-slate-800">Google Ads e Meta Ads</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Resultados</h4>
                <p className="font-semibold text-emerald-600">Alta conversão em reuniões e Upsell</p>
              </div>
            </div>

            <div className="w-full h-64 md:h-[450px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative">
              <Image 
                src="/cases/feitosa-adv/CRIATIVO 4 - Feitosa Advocacia.png" 
                alt="Capa do Case Feitosa Advocacia" 
                fill 
                className="object-cover object-top" 
              />
            </div>
          </header>

          {/* Conteúdo */}
          <div className="prose prose-slate prose-lg max-w-none text-slate-700">
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-2">O Desafio: Furar a Bolha do Corporativo (B2B)</h2>
            <p>
              Vender serviços jurídicos para o consumidor final (B2C) exige lidar com urgência e emoção. Vender para o mercado corporativo (B2B) exige precisão cirúrgica. O decisor de uma média ou grande empresa não contrata um advogado por impulso; ele busca parceiros estratégicos.
            </p>
            <p>
              O desafio da operação com o escritório Feitosa Advocacia era estruturar uma campanha capaz de atrair CNPJs qualificados, gerar reuniões produtivas e iniciar a construção de uma base de contratos recorrentes (planos de assessoria).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">Os Resultados: O Funil Corporativo em Ação</h2>
            <p>
              Em nossa reunião de alinhamento estratégico, validamos a eficiência da esteira de captação rodando furos no mercado empresarial. Analisando um recorte de apenas 7 dias de operação, os números provam que o tráfego pago focado em B2B, quando bem executado, gera tração rápida:
            </p>
            
            <ul className="space-y-4 my-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-1.5 rounded-full"><TrendingUp className="w-5 h-5 text-emerald-600" /></div>
                <div>
                  <strong>Geração de Demanda (Leads):</strong> 11 leads qualificados (CNPJs e decisores).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-1.5 rounded-full"><Search className="w-5 h-5 text-blue-600" /></div>
                <div>
                  <strong>Meio de Funil (Taxa de Agendamento):</strong> 3 reuniões realizadas.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-purple-100 p-1.5 rounded-full"><Briefcase className="w-5 h-5 text-purple-600" /></div>
                <div>
                  <strong>Conversão de Reunião:</strong> Uma impressionante taxa de agendamento de 27,27%. Em um mercado corporativo onde o ciclo de vendas costuma ser longo e complexo, converter quase um terço dos contatos da internet em reuniões de negócios é um indicativo de altíssima qualificação de público.
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">O Fechamento: Construindo Receita Recorrente (MRR)</h2>
            <p>
              Essas reuniões não ficaram apenas na conversa. O escritório Feitosa avançou e consolidou os dois primeiros contratos (ambos no modelo "Plano 2", no valor de R$ 790,00 cada).
            </p>
            <p>
              O grande diferencial deste case está no Perfil Ideal de Cliente (ICP) que conseguimos colocar na mesa de negociação do advogado:
            </p>
            <ul>
              <li>Um contrato fechado com uma <strong>Clínica</strong>.</li>
              <li>Um contrato fechado com uma <strong>Empresa de Materiais de Construção</strong> (Média/Grande empresa).</li>
            </ul>
            <p>
              Estamos falando de contratos que geram previsibilidade de caixa (assessoria mensal) vindos diretamente de campanhas digitais.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm my-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">O Sinal de Validação Máxima: O Upsell de Orçamento</h3>
              <p className="text-center mb-6">
                No marketing de performance, a maior prova de que o cliente está satisfeito não é o elogio, é o "bolso".
              </p>
              <p className="mb-4">
                Com a validação imediata do funil e o retorno sobre o investimento (ROI) garantido pelos novos contratos, o escritório decidiu, na mesma reunião, aumentar e diversificar o orçamento de mídia para R$ 2.000,00 mensais.
              </p>
              <p className="font-semibold mt-4">A nova distribuição estratégica:</p>
              <ul className="mt-2">
                <li><strong>R$ 1.300,00</strong> focados em escalar a aquisição de Direito Empresarial (aproveitando o sucesso com médias/grandes empresas).</li>
                <li><strong>R$ 700,00</strong> alocados para abrir uma nova frente de captação em Direito Previdenciário.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 border-b border-slate-200 pb-2">Conclusão: Advocacia Corporativa também se escala na Internet</h2>
            <p>
              O case da Feitosa Advocacia quebra o mito de que "empresa grande não procura advogado no Google/Meta". Com a segmentação correta de ponta a ponta e o alinhamento em reuniões estratégicas semanais para refinar o funil, a Scale Company conseguiu colocar decisores corporativos de frente para o escritório, resultando em fechamentos e na duplicação imediata da verba de marketing.
            </p>
          </div>

          {/* CTA do Artigo */}
          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#021626] to-[#010f1c] text-white text-center shadow-2xl flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Quer atrair clientes corporativos?</h3>
            <p className="text-[rgba(255,255,255,0.7)] mb-10 max-w-2xl">
              Nossa equipe estrutura campanhas de alta performance focadas em atrair os melhores clientes B2B para o seu escritório.
            </p>
            <CTAButton className="relative group inline-flex text-left">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-sm md:text-base uppercase tracking-widest rounded-full hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-xl">
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
