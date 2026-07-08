import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { posts } from "@/lib/posts";
import { pageOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "Blog de Marketing Jurídico e Captação | Scale",
  description:
    "Estratégias práticas de marketing jurídico: Google Ads, SEO, palavras-chave por área e vendas de honorários. Conteúdo para advogados crescerem.",
  alternates: { canonical: "/blog" },
  openGraph: pageOpenGraph({
    title: "Blog de Marketing Jurídico e Captação | Scale",
    description:
      "Estratégias práticas de marketing jurídico: Google Ads, SEO, palavras-chave por área e vendas de honorários. Conteúdo para advogados crescerem.",
    path: "/blog",
  }),
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-[#010f1c] text-white pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Blog da Scale
            </h1>
            <p className="text-xl text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
              Estratégias avançadas de marketing jurídico, captação de clientes,
              tecnologia e insights para impulsionar o seu escritório.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative bg-[#021626] border border-white/5 hover:border-blue-500/30 rounded-2xl overflow-hidden transition-colors flex flex-col"
              >
                <div className="w-full h-48 sm:h-56 shrink-0 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    unoptimized={post.image.endsWith(".svg")}
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[rgba(255,255,255,0.5)] mb-3">
                    <div className="flex items-center gap-1.5 text-blue-400">
                      <Tag className="w-3 h-3" />
                      <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={post.dateISO}>{post.dateDisplay}</time>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="before:absolute before:inset-0 z-10"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-[rgba(255,255,255,0.7)] text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-blue-500 font-medium text-sm mt-auto relative z-10">
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
