import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Neuromarketing Jurídico: A Ciência por trás da Venda de Honorários",
  description: "Descubra como usar a Economia Comportamental (Ancoragem, Aversão à Perda e Efeito Halo) para dobrar a taxa de fechamento de contratos do seu escritório de advocacia.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-slate-50 text-slate-900 pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header do Post */}
          <header className="mb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mb-8 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Voltar para o Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-blue-500" />
                <span>Vendas & Fechamento</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>24 de Junho de 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Equipe Scale</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Neuromarketing Jurídico: A Ciência Comportamental por trás do "Sim" na Assinatura de Honorários
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-6 py-2 mb-10">
              O marketing atrai, mas a inteligência de negócios é o que fecha o contrato. Descubra como estruturar sua comunicação para que o cérebro do seu cliente diga "sim" antes mesmo de ler a última página.
            </p>

            <div className="w-full h-64 md:h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative">
              <Image 
                src="/images/blog/neuromarketing-juridico/hero_capa_v2.png" 
                alt="Advogado apresentando contrato a cliente empresarial em escritório sofisticado" 
                fill 
                className="object-cover" 
              />
            </div>
          </header>

          {/* Conteúdo */}
          <div className="prose prose-slate prose-lg max-w-none text-slate-700">
            <p>
              Você investiu milhares de reais em Google Ads. O marketing fez o trabalho dele e colocou um lead qualificado na sua mesa de reunião (ou na sua sala do Zoom). Vocês conversam por uma hora, você entrega uma verdadeira aula de direito, demonstra profundo conhecimento técnico e apresenta a proposta.
            </p>
            <p>
              E então, ouve a frase mais temida da advocacia: <em>"Doutor, gostei muito. Vou analisar com calma e te dou um retorno."</em>
            </p>
            <p className="font-bold text-xl text-slate-900 my-8 border-l-2 border-red-500 pl-4">O retorno quase nunca vem. Onde o processo falhou?</p>
            <p>
              A resposta não está na jurisprudência que você citou, mas na neurociência. Advogados são treinados para apelar para o Neocórtex (a parte lógica e analítica do cérebro). No entanto, 95% das decisões de compra – incluindo a contratação de um escritório de advocacia – são tomadas pelo Sistema Límbico (a parte emocional e instintiva), sendo apenas justificadas pela lógica depois.
            </p>
            <p>
              Neste artigo, vamos desconstruir o momento do fechamento usando princípios validados da Economia Comportamental. Descubra como estruturar sua comunicação e sua proposta de honorários para que o cérebro do seu cliente diga "sim" antes mesmo de ler a última página do contrato.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">1. Aversão à Perda: O Medo de Perder é Maior que o Desejo de Ganhar</h2>
            <div className="bg-white border border-blue-200 p-6 rounded-2xl mb-8">
              <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">🧠 A Ciência</h4>
              <p className="text-sm m-0">O Prêmio Nobel Daniel Kahneman e Amos Tversky, criadores da Teoria da Perspectiva (Prospect Theory), comprovaram que a dor psicológica de perder R$ 10.000 é duas vezes mais intensa do que a alegria de ganhar os mesmos R$ 10.000. O cérebro humano é programado para evitar ameaças.</p>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900">A Aplicação na Advocacia:</h3>
            <p>
              Muitos advogados tentam vender o "ganho" da ação. Exemplo comum: <em>"Nós vamos revisar esses contratos para garantir mais segurança para a sua empresa"</em>. Isso não gera urgência.
            </p>
            <p>Para acionar a conversão, você deve focar no que o cliente tem a perder se não agir agora.</p>
            
            <blockquote className="border-l-4 border-emerald-500 bg-emerald-500/10 p-4 rounded-r-lg my-6 not-prose">
              <p className="text-slate-900 font-medium italic m-0"><strong>O jeito neuromarketing:</strong> "Atualmente, com a estrutura atual dos seus contratos, seu patrimônio pessoal está exposto a um risco trabalhista estimado em R$ 500 mil no próximo ano. Nosso trabalho é blindar essa brecha imediatamente."</p>
            </blockquote>

            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 my-10 relative h-[400px]">
              <Image 
                src="/images/blog/neuromarketing-juridico/aversao_perda_v2.png" 
                alt="Advogado mostrando risco jurídico e cenário de proteção em tela para cliente empresarial" 
                fill 
                className="object-cover" 
              />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">2. Ancoragem de Preços: Como Fazer Seus Honorários Parecerem um Investimento</h2>
            <div className="bg-white border border-blue-200 p-6 rounded-2xl mb-8">
              <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">🧠 A Ciência</h4>
              <p className="text-sm m-0">O pesquisador Dan Ariely, em seu livro <em>Previsivelmente Irracional</em>, demonstra o viés da Ancoragem. O cérebro não sabe avaliar o valor absoluto das coisas; ele precisa de um ponto de comparação (uma âncora). O primeiro número que o cliente ouve molda a percepção de todos os números seguintes.</p>
            </div>

            <h3 className="text-xl font-bold text-slate-900">A Aplicação na Advocacia:</h3>
            <p>
              Nunca apresente o valor dos seus honorários antes de ancorar o risco do problema ou o valor de uma alternativa mais cara. Se você cobra R$ 30.000 de honorários e simplesmente joga esse número, ele pode parecer caro.
            </p>
            
            <ul className="space-y-4">
              <li><strong>A Estratégia do Risco:</strong> Calcule o tamanho do problema. <em>"O risco financeiro desta autuação é de R$ 3 milhões. Nossos honorários para evitar essa execução são de R$ 30.000 (ou seja, 1% do risco)."</em></li>
              <li><strong>A Estratégia de Múltiplas Opções (Decoy Effect):</strong> Apresente três opções de planos na sua proposta comercial.
                <ul className="mt-2 text-slate-700 space-y-2">
                  <li><span className="font-bold text-amber-500">Plano Ouro</span> (Muito caro, serviço ultracompleto premium) - R$ 80.000.</li>
                  <li><span className="font-bold text-slate-700">Plano Prata</span> (O que você realmente quer vender) - R$ 35.000.</li>
                  <li><span className="font-bold text-amber-700">Plano Bronze</span> (Básico demais, pouco atraente) - R$ 25.000.</li>
                </ul>
              </li>
            </ul>

            <p className="font-bold text-emerald-400 mt-6 p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
              Resultado: O plano de R$ 80.000 ancora o preço lá no alto. De repente, os R$ 35.000 parecem extremamente razoáveis e seguros.
            </p>

            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 my-10 relative h-[400px]">
              <Image 
                src="/images/blog/neuromarketing-juridico/ancoragem_precos_v2.png" 
                alt="Proposta de honorários em tablet com três opções visuais e destaque para o plano estratégico" 
                fill 
                className="object-cover object-top" 
              />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">3. O Paradoxo da Escolha: A Clareza Vende, a Confusão Paralisa</h2>
            <div className="bg-white border border-blue-200 p-6 rounded-2xl mb-8">
              <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">🧠 A Ciência</h4>
              <p className="text-sm m-0">O psicólogo Barry Schwartz cunhou o termo <em>O Paradoxo da Escolha</em>. Ele provou que, embora acreditemos que ter mais opções seja bom, dar opções demais ao consumidor causa "paralisia de análise" e ansiedade, derrubando drasticamente as taxas de conversão.</p>
            </div>

            <h3 className="text-xl font-bold text-slate-900">A Aplicação na Advocacia:</h3>
            <p>
              Um erro clássico do advogado é querer ser transparente demais, jogando o peso da decisão no cliente: <em>"Podemos tentar uma liminar, ou podemos ir por via administrativa, ou quem sabe notificar extrajudicialmente. O que o senhor prefere?"</em>
            </p>
            <p>
              O cérebro do cliente entra em pânico. Ele não é advogado; ele procurou você justamente para não ter que escolher. Assuma a autoridade. Reduza a fricção cognitiva.
            </p>

            <blockquote className="border-l-4 border-emerald-500 bg-emerald-500/10 p-4 rounded-r-lg my-6 not-prose">
              <p className="text-slate-900 font-medium italic m-0"><strong>O jeito neuromarketing:</strong> "Analisamos todos os cenários. A estratégia número 1, que eu recomendo para o seu caso específico, é a via administrativa pelo motivo X. Existe o caminho B, mas ele é mais arriscado e demorado. Portanto, vamos seguir com a via administrativa. Concorda?"</p>
            </blockquote>

            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 my-10 relative h-[400px]">
              <Image 
                src="/images/blog/neuromarketing-juridico/paradoxo_escolha_v2.png" 
                alt="Advogada indicando um caminho estratégico claro em meio a múltiplas opções jurídicas" 
                fill 
                className="object-cover" 
              />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">4. Efeito Halo: O Design da Sua Proposta "Julga" a Qualidade da Sua Peça</h2>
            <div className="bg-white border border-blue-200 p-6 rounded-2xl mb-8">
              <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">🧠 A Ciência</h4>
              <p className="text-sm m-0">O Efeito Halo, identificado pelo psicólogo Edward Thorndike, é um viés cognitivo onde a nossa impressão geral sobre algo (ex: "é bonito e bem cuidado") influencia nosso julgamento sobre características específicas que não podemos ver (ex: "deve ser tecnicamente excelente").</p>
            </div>

            <h3 className="text-xl font-bold text-slate-900">A Aplicação na Advocacia:</h3>
            <p>
              O serviço jurídico é um ativo intangível. O cliente não sabe avaliar se a sua petição inicial é uma obra-prima ou um modelo copiado da internet. Portanto, como ele avalia a sua competência antes de assinar o contrato? Pelos elementos tangíveis.
            </p>
            <p>
              Se a sua proposta de honorários for um documento de Word mal formatado, com fonte Times New Roman tamanho 12 e margens desalinhadas, o subconsciente do cliente diz: <em>"Se ele é descuidado com a própria proposta, será descuidado com o meu processo."</em>
            </p>
            <p>
              Invista em uma identidade visual impecável, propostas enviadas via softwares de assinatura digital, apresentações em PDF com design limpo e espaço em branco. O design premium justifica o preço premium.
            </p>

            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 my-10 relative h-[400px]">
              <Image 
                src="/images/blog/neuromarketing-juridico/efeito_halo_v2.png" 
                alt="Comparativo entre documentos desorganizados e proposta jurídica premium em tablet" 
                fill 
                className="object-cover" 
              />
            </div>

            <hr className="border-slate-300 my-16" />

            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusão: Neuromarketing não é Manipulação, é Facilitação</h2>
            <p>
              Aplicar a ciência comportamental nas suas reuniões de fechamento não significa manipular o cliente. Significa remover os obstáculos cognitivos que o impedem de tomar a melhor decisão para o negócio dele – que é contratar o seu escritório.
            </p>
            <p>
              Quando você une uma estratégia de captação de clientes implacável (marketing jurídico avançado) a uma técnica de fechamento baseada em ciência, a escala do seu escritório deixa de ser uma possibilidade e passa a ser uma questão de tempo.
            </p>
            
            {/* Referências */}
            <div className="mt-16 pt-8 border-t border-slate-300 text-sm text-slate-500 bg-slate-100 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-4">Referências e Base Científica</h3>
              <ul className="space-y-4">
                <li><strong>Kahneman, Daniel.</strong> <em>Rápido e Devagar: Duas Formas de Pensar (Thinking, Fast and Slow).</em> Base para a aplicação da Teoria da Perspectiva e o princípio da Aversão à Perda na comunicação de riscos.</li>
                <li><strong>Ariely, Dan.</strong> <em>Previsivelmente Irracional: Como as Situações do Dia a Dia Influenciam as Nossas Decisões.</em> Estudo aprofundado sobre o Efeito de Ancoragem e como o cérebro precifica serviços intangíveis.</li>
                <li><strong>Schwartz, Barry.</strong> <em>O Paradoxo da Escolha: Por que Mais é Menos.</em> Pesquisa fundamental que explica a paralisia de análise e a necessidade de simplificar opções na hora do fechamento.</li>
                <li><strong>Thorndike, Edward L.</strong> <em>A Constant Error in Psychological Ratings (1920).</em> Estudo empírico fundacional que identificou o Efeito Halo, justificando o impacto de um design premium na percepção de competência técnica.</li>
              </ul>
            </div>
          </div>

          {/* CTA do Artigo */}
          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-blue-200 text-center shadow-2xl shadow-blue-100 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Como está a taxa de conversão das reuniões no seu escritório hoje?</h3>
            <p className="text-slate-600 mb-10 max-w-2xl">
              O marketing atrai, mas a inteligência de negócios é o que fecha o contrato. Se o seu escritório precisa de uma arquitetura de crescimento de ponta a ponta, a Scale pode ajudar.
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
