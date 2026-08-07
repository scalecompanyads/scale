import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User, Tag, CheckCircle2, MapPin, Search, Star, ListChecks, XCircle } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { getPost } from "@/lib/posts";
import { pageOpenGraph } from "@/lib/og";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";

const post = getPost("google-meu-negocio-para-advogados");

const sections = [
  { id: "mina-de-ouro", label: "A Mina de Ouro do Fundo de Funil" },
  { id: "otimizacao-gmn", label: "Otimização do Perfil" },
  { id: "prova-social-reviews", label: "Reviews e Ética da OAB" },
  { id: "citacoes-locais", label: "Citações e Diretórios Locais" },
  { id: "cenario-transformacao", label: "Cenário de Transformação" },
];

const title = post.title;
const description =
  "Descubra como estruturar o Google Meu Negócio para captar clientes de alta intenção nas buscas locais, a etapa mais quente do funil que a maioria dos escritórios ignora.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/google-meu-negocio-para-advogados" },
  openGraph: pageOpenGraph({
    title,
    description,
    path: "/blog/google-meu-negocio-para-advogados",
    type: "article",
  }),
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title },
        ])}
      />
      <main className="flex flex-col min-h-screen bg-slate-50 text-slate-900 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-12 items-start">
        <article className="w-full max-w-none">

          <header className="mb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mb-8 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Voltar para o Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-blue-500" />
                <span>{post.category}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.dateDisplay}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Equipe Scale</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-6 py-2 mb-10">
              Muitos advogados gastam fortunas brigando por palavras-chave amplas no Google Ads ou escrevendo artigos jurídicos densos que atraem estudantes de direito, não clientes. Enquanto isso, a busca mais quente do funil continua praticamente livre: a pessoa na sua própria cidade procurando por "advogado trabalhista perto de mim".
            </p>

            <div className="w-full h-64 md:h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative">
              <Image src={post.image} alt={post.imageAlt} fill unoptimized className="object-cover" />
            </div>
          </header>

          <div className="prose prose-slate prose-lg max-w-none text-slate-700">

            {/* TL;DR */}
            <div className="not-prose bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">Resumo em 30 segundos</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Busca local de fundo de funil converte muito mais que busca informativa de topo de funil.</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Um Google Meu Negócio bem estruturado (categorias, produtos/serviços, postagens) é a base da dominação local.</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Avaliações reais, pedidas no momento certo, são o maior sinal de confiança, mas exigem cuidado com a ética da OAB.</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Citações consistentes (NAP) em diretórios reforçam a relevância no Google Maps.</li>
              </ul>
            </div>

            <h2 id="mina-de-ouro" className="text-2xl font-bold text-slate-900 mt-16 mb-6 scroll-mt-32">A Mina de Ouro Escondida no Fundo do Funil</h2>
            <p>
              Nem toda busca no Google tem a mesma intenção. Quem digita "o que é usucapião" está aprendendo sobre um tema, e provavelmente ainda vai pesquisar por semanas antes de decidir se precisa de um advogado. Quem digita "advogado imobiliário em [Nome da Cidade]" já decidiu contratar, só está escolhendo quem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
              <div className="p-6 rounded-2xl bg-slate-100 border border-slate-300">
                <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-4 flex items-center gap-2"><Search className="w-4 h-4" /> Busca de Topo de Funil</p>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>"o que é usucapião"</li>
                  <li>"direitos do trabalhador demitido"</li>
                  <li>"como funciona um inventário"</li>
                </ul>
                <p className="text-xs text-slate-500 mt-4 mb-0">Intenção: aprender. Ainda não decidiu contratar.</p>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-300">
                <p className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Busca Local de Fundo de Funil</p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li>"advogado trabalhista perto de mim"</li>
                  <li>"advogado especialista em divórcio em [Cidade]"</li>
                  <li>"advogado imobiliário [Cidade]"</li>
                </ul>
                <p className="text-xs text-blue-700 mt-4 mb-0">Intenção: contratar agora. Só falta escolher quem.</p>
              </div>
            </div>

            <p>
              É por isso que a busca local costuma ter a maior taxa de conversão de todo o marketing jurídico: ela combina necessidade imediata com o critério de proximidade, e o Google Meu Negócio é a vitrine que decide quem aparece primeiro nesse momento.
            </p>

            <h2 id="otimizacao-gmn" className="text-2xl font-bold text-slate-900 mt-16 mb-6 scroll-mt-32">Otimização do Google Meu Negócio para Advogados</h2>
            <p>
              Um perfil completo não é sobre preencher campos, é sobre dar ao Google (e a quem pesquisa) sinais claros de que o seu escritório é a opção mais relevante para aquela busca específica.
            </p>

            <ul className="space-y-4 not-prose my-8">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Categoria primária específica:</strong> prefira uma categoria mais específica ("Advogado trabalhista") a uma genérica ("Advogado"), e use categorias secundárias para as demais áreas atendidas.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Seção Produtos/Serviços:</strong> liste as atuações específicas do escritório (inventário e partilha, divórcio consensual e litigioso, compliance trabalhista) com descrições objetivas.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Postagens e fotos regulares:</strong> fotos reais do escritório e da equipe, participação em eventos, conteúdo informativo sobre mudanças na legislação, sinal de atividade que o Google recompensa.</span></li>
            </ul>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl mb-10">
              <h4 className="text-slate-900 font-bold mb-4">O que a OAB permite nas postagens</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-emerald-600 mb-3">Funciona</p>
                  <ul className="space-y-2 text-sm text-slate-600 m-0 p-0 list-none">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Conteúdo informativo e sóbrio sobre a área de atuação</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Fotos reais da equipe e da estrutura do escritório</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-red-500 mb-3">Coloca o registro em risco</p>
                  <ul className="space-y-2 text-sm text-slate-600 m-0 p-0 list-none">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> Linguagem imperativa ("Ligue agora", "Consulta grátis")</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> Promessa de resultado ou prazo de causa</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 id="prova-social-reviews" className="text-2xl font-bold text-slate-900 mt-16 mb-6 scroll-mt-32">Gestão de Prova Social (Reviews) e a Ética da OAB</h2>
            <p>
              Avaliações reais são o sinal de confiança mais forte que um perfil local pode ter, mas a forma de pedir importa tanto quanto o pedido em si. O momento certo é logo após um atendimento em que o cliente já expressou satisfação espontaneamente, como o fim de uma consulta ou a conclusão de uma etapa do caso, pedindo um relato sobre a experiência com o atendimento, nunca sobre o resultado do processo em si, que depende de fatores fora do controle do escritório.
            </p>
            <p>
              Oferecer qualquer tipo de troca de valor (desconto, brinde) por uma avaliação não deve entrar em cogitação: além de ferir o caráter informativo que a publicidade jurídica exige, viola as próprias políticas do Google para avaliações.
            </p>
            <p>
              Responder às avaliações também comunica autoridade institucional. Nas positivas, um agradecimento breve e sóbrio; nas negativas, uma resposta profissional e cordial, sem discutir detalhes do caso protegidos por sigilo, demonstrando abertura ao diálogo em vez de confronto público.
            </p>

            <h2 id="citacoes-locais" className="text-2xl font-bold text-slate-900 mt-16 mb-6 scroll-mt-32">Citações e Diretórios Locais (Local Citations)</h2>
            <p>
              O algoritmo do Google Maps também usa sinais de fora do seu perfil para confirmar que o escritório é real e relevante para a região. Manter o NAP (Nome, Endereço, Telefone) idêntico em diretórios jurídicos, páginas amarelas digitais e redes sociais evita inconsistências que enfraquecem essa confirmação, e ajuda a consolidar a presença local ao longo do tempo.
            </p>

            <div className="not-prose bg-white border border-blue-200 p-6 rounded-2xl mb-10 flex gap-4 items-start">
              <ListChecks className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <p className="text-sm text-slate-600 m-0">
                Isso conecta diretamente com o que já defendemos na <Link href="/captacao-de-clientes-para-advogados" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Consultoria de SEO Local e Google Meu Negócio</Link>: é um ativo que se constrói com consistência, não com uma configuração pontual.
              </p>
            </div>

            <h2 id="cenario-transformacao" className="text-2xl font-bold text-slate-900 mt-16 mb-6 scroll-mt-32">Do Mapa ao Escritório: Um Cenário de Transformação</h2>
            <p>
              Para ilustrar o impacto, um cenário hipotético (não é um caso real de cliente, mas uma projeção didática): imagine um escritório de família que hoje aparece na 4ª página de resultados para "advogado de família [sua cidade]". Praticamente ninguém rola até ali, a atenção de quem busca por proximidade se concentra nas primeiras posições do mapa.
            </p>
            <p>
              Ao reestruturar categorias, a seção de produtos/serviços, postagens regulares e um fluxo consistente de avaliações reais, esse mesmo escritório passa a aparecer entre as 3 primeiras opções do pacote local. O comportamento de quem liga muda: já decidiu contratar, só está escolhendo entre as poucas opções que o Google mostrou primeiro.
            </p>
            <p className="font-bold text-lg text-slate-900 border-l-2 border-blue-500 pl-4">
              Chegar (e principalmente se manter) no Top 3 exige técnica na estrutura do perfil e consistência contínua em postagens, respostas a avaliações e monitoramento de citações, não uma configuração única.
            </p>
            <p>
              É esse acompanhamento contínuo, somado à <Link href="/scale-advogados" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">exclusividade por região</Link> que já praticamos em outras frentes de aquisição, que a Scale Company estrutura para escritórios que querem dominar a busca local da sua cidade.
            </p>

          </div>

          {/* Newsletter */}
          <div className="mt-16">
            <NewsletterSignup source={`blog-post:${post.slug}`} />
          </div>

          <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-blue-200 text-center shadow-2xl shadow-blue-100">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2"><Star className="w-6 h-6 text-blue-500" /> Quer dominar as buscas locais da sua região?</h3>
            <p className="text-slate-600 mb-8">
              Agende um diagnóstico gratuito e veja como estruturar o seu Google Meu Negócio para captar quem já está pronto para contratar.
            </p>
            <CTAButton className="inline-flex px-8 py-4 bg-[#3B82F6] text-white font-bold text-sm md:text-base uppercase tracking-widest rounded hover:bg-[#2563EB] transition-colors items-center justify-center gap-2">
              QUERO ESTRUTURAR MEU GOOGLE MEU NEGÓCIO COM A SCALE
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>

        </article>

        <aside className="hidden lg:block sticky top-32">
          <TableOfContents items={sections} />
        </aside>

        </div>
      </main>
      <Footer />
    </>
  );
}
