import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AreasAccordion from "@/components/AreasAccordion";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { getPost } from "@/lib/posts";

const post = getPost("palavras-chave-por-area");

export const metadata: Metadata = {
  title: "Palavras-chave e Ideias de Artigos por Área de Atuação | Blog Scale",
  description: "Descubra como estruturar sua produção de conteúdo jurídico mostrando conhecimento profundo em cada área de atuação.",
  alternates: { canonical: "/blog/palavras-chave-por-area" },
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
                <span>Estratégia de Conteúdo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>16 de Junho de 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Equipe Scale</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Palavras-chave e Ideias de Artigos por Área de Atuação na Advocacia
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-6 py-2 mb-10">
              Mostrar as palavras-chave e sugestões de artigos separados por área de atuação funciona como uma "amostra grátis" do seu conhecimento. O advogado que acessar sua página vai pensar: "Eles realmente entendem do meu nicho e sabem o que o meu cliente pesquisa".
            </p>

            <div className="w-full h-64 md:h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
              <img src="/images/blog-keywords.png" alt="Estratégia de Palavras-chave na Advocacia" className="w-full h-full object-cover" />
            </div>
          </header>

          {/* Conteúdo */}
          <div className="prose prose-slate prose-lg max-w-none text-slate-700">
            <p className="mb-8">
              Muitos advogados cometem o erro de criar textos institucionais e genéricos. O cliente, no entanto, sempre busca uma resposta exata para o problema que ele está vivendo. Criar conteúdo específico para o fundo e meio do funil faz toda a diferença na conversão.
            </p>
            <p className="mb-12">
              Abaixo, detalhamos as melhores estratégias e palavras-chave de acordo com as principais áreas de atuação. Para evitar um texto gigantesco, separamos o conteúdo de forma interativa. Clique na área que mais interessa ao seu escritório:
            </p>
            {/* CTA Inline 1 */}
            <div className="not-prose my-12 p-8 rounded-2xl bg-white border border-blue-200 text-center shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Não sabe como encontrar essas palavras para o seu nicho?</h3>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Nossa equipe de marketing jurídico já mapeou as melhores oportunidades de tráfego para a sua área de atuação.
              </p>
              <CTAButton className="inline-flex px-6 py-3 bg-[#3B82F6] text-white font-bold text-sm uppercase tracking-wider rounded hover:bg-[#2563EB] transition-colors items-center justify-center gap-2">
                FALAR COM UM ESPECIALISTA
                <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </div>
            
            {/* Componente Interativo de Abas/Acordeão */}
            <div className="not-prose">
              <AreasAccordion />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">Como aplicar essas ideias na prática?</h2>
            <p className="mb-6">
              Essas ideias de conteúdo e palavras-chave devem ser a espinha dorsal das suas campanhas de <Link href="/google-ads-advogados" className="text-blue-600 hover:text-blue-700 underline underline-offset-2 font-bold">Google Ads para advogados</Link> e do conteúdo da sua <strong>Landing Page</strong>.
            </p>
            <p>
              Em vez de patrocinar a palavra "advogado", anuncie para "advogado especialista em divórcio" e envie o usuário para uma página dedicada ao Direito de Família, contendo as respostas para os artigos acima. Isso aumenta a taxa de conversão drasticamente e reduz o Custo por Clique (CPC).
            </p>
          </div>

          {/* CTA do Artigo */}
          <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-blue-200 text-center">
            <h3 className="text-2xl font-bold mb-4">Precisa de ajuda para estruturar essas campanhas?</h3>
            <p className="text-slate-600 mb-8">
              A Scale Company aplica essa mesma metodologia e segmentação para todos os nossos escritórios parceiros.
            </p>
            <CTAButton className="inline-flex px-8 py-4 bg-[#3B82F6] text-white font-bold rounded hover:bg-[#2563EB] transition-colors items-center justify-center gap-2">
              Quero estruturar meu Marketing Jurídico
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
