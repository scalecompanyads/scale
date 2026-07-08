import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User, Tag, CheckCircle2, ShieldCheck, RefreshCw, HeartHandshake, AlertTriangle } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { getPost } from "@/lib/posts";

const post = getPost("autoridade-institucional-marketing-juridico");

export const metadata: Metadata = {
  title: "Performance e Autoridade Não Se Excluem: Por Que Marca Também Fecha Contratos na Advocacia",
  description:
    "Marca institucional e performance de tráfego não competem entre si. Entenda por que a autoridade percebida reduz o custo de aquisição no longo prazo.",
  alternates: { canonical: "/blog/autoridade-institucional-marketing-juridico" },
  openGraph: {
    title: "Performance e Autoridade Não Se Excluem: Por Que Marca Também Fecha Contratos na Advocacia",
    description:
      "Marca institucional e performance de tráfego não competem entre si. Entenda por que a autoridade percebida reduz o custo de aquisição no longo prazo.",
    url: "/blog/autoridade-institucional-marketing-juridico",
    type: "article",
    locale: "pt_BR",
    siteName: "Scale Company",
    images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance e Autoridade Não Se Excluem: Por Que Marca Também Fecha Contratos na Advocacia",
    description:
      "Marca institucional e performance de tráfego não competem entre si. Entenda por que a autoridade percebida reduz o custo de aquisição no longo prazo.",
  },
};

const trustFactors = [
  {
    icon: ShieldCheck,
    name: "Credibilidade",
    desc: "O que pode ser verificado: nome, formação, registro na OAB, tempo de atuação, credenciais reais. Um site que esconde quem o mantém já perde essa dimensão inteira.",
    color: "text-blue-500",
  },
  {
    icon: RefreshCw,
    name: "Confiabilidade",
    desc: "Consistência ao longo do tempo: resultados que se repetem, processos documentados, discurso que não muda a cada campanha.",
    color: "text-blue-500",
  },
  {
    icon: HeartHandshake,
    name: "Intimidade",
    desc: "Segurança para compartilhar algo sensível. Comunicação específica para a área de direito reduz a barreira emocional do primeiro contato.",
    color: "text-blue-500",
  },
  {
    icon: AlertTriangle,
    name: "Autointeresse",
    desc: "O fator que divide, e reduz, tudo o resto. Quanto mais a comunicação soa \"eu quero vender\" em vez de \"eu quero ajudar\", menor a confiança gerada.",
    color: "text-amber-500",
  },
];

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
              No mercado jurídico, quem pesquisa por um advogado avalia credibilidade antes de clicar em qualquer anúncio. Marca e performance não competem: a primeira sustenta a segunda.
            </p>

            <div className="w-full h-64 md:h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative">
              <Image src={post.image} alt={post.imageAlt} fill className="object-cover" />
            </div>
          </header>

          <div className="prose prose-slate prose-lg max-w-none text-slate-700">

            {/* TL;DR */}
            <div className="not-prose bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">Resumo em 30 segundos</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> O Google trata conteúdo jurídico como YMYL e pesa mais forte critérios de autoridade (E-E-A-T) para decidir o que recomendar.</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> A Equação da Confiança explica autoridade em 4 partes: Credibilidade, Confiabilidade, Intimidade e Autointeresse.</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Autoridade não substitui tráfego, ela reduz a fricção do lead que o tráfego já trouxe.</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Na prática, isso reduz o CAC no longo prazo e aumenta indicação espontânea.</li>
              </ul>
            </div>

            <p>
              Existe uma falsa dicotomia no marketing jurídico: de um lado, agências de "performance", vendidas pelo lead barato; de outro, assessorias de "marca", vendidas pela estética institucional. A conclusão implícita é que só uma das duas entrega retorno de verdade.
            </p>
            <p>
              Na prática, essa separação não se sustenta, e existe uma razão documentada para isso, não só intuição.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">O mito do "ou marca, ou performance"</h2>
            <p>
              Tráfego pago e SEO colocam o escritório na frente de quem já está procurando. O que essa pessoa encontra ao clicar (site sem histórico, sem equipe visível, sem sinal de quem está por trás) pesa direto na decisão de continuar ou fechar a aba.
            </p>
            <p className="font-bold text-lg text-slate-900 border-l-2 border-blue-500 pl-4">
              Tráfego traz volume. Autoridade decide quanto desse volume vira conversa real.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">Por que o jurídico exige mais confiança que quase qualquer outro nicho</h2>
            <p>
              O Google não trata todo conteúdo do mesmo jeito. Nas suas diretrizes públicas de qualidade de busca, ele classifica saúde, direito e finanças como <strong>YMYL</strong> ("Your Money or Your Life"): páginas cuja qualidade pode afetar a segurança, o patrimônio ou o bem-estar de quem pesquisa.
            </p>

            <div className="not-prose flex flex-wrap gap-3 my-8">
              {["E — Experience", "E — Expertise", "A — Authoritativeness", "T — Trustworthiness"].map((label) => (
                <span key={label} className="bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
                  {label}
                </span>
              ))}
            </div>

            <div className="bg-white border border-blue-200 p-6 rounded-2xl mb-8">
              <h4 className="text-blue-500 font-bold mb-2">🔍 O Conceito</h4>
              <p className="text-sm m-0">
                Para conteúdo YMYL, o critério que mais pesa é o E-E-A-T. Um site que não mostra quem o mantém, qual a formação da equipe e que credenciais sustentam o que promete sai em desvantagem justamente onde a decisão do usuário é mais sensível, seja para o Google, seja para um assistente de IA que resume e recomenda serviços.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">A Equação da Confiança aplicada ao marketing jurídico</h2>
            <p>
              Charles Green, Robert Galford e David Maister, no livro <em>The Trusted Advisor</em>, decompõem confiança em componentes mensuráveis:
            </p>
            <div className="bg-white border border-blue-200 p-6 rounded-2xl mb-10 not-prose">
              <p className="text-center font-bold text-slate-900 text-lg mb-2">Confiança = (Credibilidade + Confiabilidade + Intimidade) / Autointeresse</p>
              <p className="text-sm text-slate-600 text-center m-0">Quanto maiores os três primeiros fatores, e quanto menor o autointeresse percebido, maior a confiança gerada.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 not-prose mb-10">
              {trustFactors.map((factor) => (
                <div key={factor.name} className="p-6 rounded-2xl bg-white border border-slate-200">
                  <factor.icon className={`w-7 h-7 ${factor.color} mb-3`} />
                  <h4 className="font-bold text-slate-900 mb-2">{factor.name}</h4>
                  <p className="text-sm text-slate-600 m-0 leading-relaxed">{factor.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">Como isso se traduz em CAC menor no longo prazo</h2>
            <p>
              Um lead que já reconhece a marca antes do primeiro contato converte com menos esforço comercial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
              <div className="p-6 rounded-2xl bg-slate-100 border border-slate-300">
                <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-4">Sem autoridade percebida</p>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Lead frio, sem contexto prévio</li>
                  <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Mais objeções na negociação</li>
                  <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Ciclo de venda mais longo</li>
                  <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> CAC mais alto</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-300">
                <p className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-4">Com autoridade percebida</p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Lead já reconhece a marca</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Menos objeções, mais confiança</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Ciclo de venda mais curto</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> CAC mais baixo + indicação espontânea</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Em um mercado historicamente movido a indicação como o jurídico, autoridade percebida tende a gerar recomendação espontânea: o canal de aquisição com o menor custo possível, zero.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">Checklist: sinais de credibilidade que todo escritório deveria ter no site</h2>
            <ul className="space-y-3 not-prose my-8">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Credibilidade:</strong> página própria de "Quem Somos" com a equipe real, e registro oficial da empresa visível (CNPJ, sede, contato)</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Confiabilidade:</strong> credenciais reais, sem inflar o que não pode ser comprovado, e conteúdo que mostra metodologia</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Intimidade:</strong> comunicação específica para a área de direito e para a dor real de quem pesquisa</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Baixo autointeresse aparente:</strong> conteúdo educativo antes da oferta, sem urgência artificial</span></li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">Onde a Scale Company se posiciona nesse espectro</h2>
            <p>
              Construímos a nossa operação em cima de tráfego pago, landing pages e CRM porque é isso que gera o volume de contatos que um escritório precisa todo mês. Mas essa entrega, sozinha, não fecha o ciclo de confiança que o mercado jurídico exige. Por isso também deixamos visível quem somos e como trabalhamos, direto na <Link href="/#sobre" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">seção Sobre a Scale</Link>.
            </p>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-blue-200 text-center shadow-2xl shadow-blue-100">
            <h3 className="text-2xl font-bold mb-4">Quer unir performance e autoridade no seu escritório?</h3>
            <p className="text-slate-600 mb-8">
              Agende um diagnóstico gratuito e veja como estruturar captação e credibilidade institucional juntas.
            </p>
            <CTAButton className="inline-flex px-8 py-4 bg-[#3B82F6] text-white font-bold text-sm md:text-base uppercase tracking-widest rounded hover:bg-[#2563EB] transition-colors items-center justify-center gap-2">
              QUERO AGENDAR UM DIAGNÓSTICO GRATUITO COM A SCALE COMPANY
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
