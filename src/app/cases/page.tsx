import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowUpRightIcon } from "@/components/icons";
import NewsletterForm from "@/components/NewsletterForm";
import { siteOgImage } from "@/lib/site-og";

const title = "Cases | Scale Company";
const description =
  "Cases de aquisição jurídica, campanhas e resultados construídos pela Scale Company.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cases" },
  openGraph: { title, description, url: "/cases", images: [siteOgImage] },
};

export default function CasesPage() {
  return (
    <main className="flex-1 bg-white">
      <Header />

      <article>
        <section className="relative overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:px-8 sm:pb-24 lg:px-[5%] lg:pb-28 lg:pt-32">
          <Image
            src="/images/case-vinicio-rodrigues-cover-v2.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                Cases Scale
              </span>
              <h1 className="font-canela mt-5 text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
                Estratégia que sai da tela e chega ao contrato.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Resultados, decisões e aprendizados de operações de aquisição construídas para o
                mercado jurídico.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#ECE7DF] px-6 py-20 sm:px-8 sm:py-24 lg:px-[5%] lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                  Case em destaque
                </span>
                <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
                  Resultado que já dá para medir.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-neutral-600">
                Acompanhe o contexto, a estratégia e os resultados do primeiro mês de operação.
              </p>
            </div>

            <Link
              href="/cases/vinicio-rodrigues"
              className="group mt-12 grid overflow-hidden bg-white lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative aspect-[1.1/1] overflow-hidden bg-neutral-100 lg:aspect-auto lg:min-h-[580px]">
                <Image
                  src="/images/case-vinicio-rodrigues-cover-v2.png"
                  alt="Capa do case do Dr. Vinício Rodrigues"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                    Direito de Família
                  </p>
                  <h2 className="font-canela mt-6 text-4xl leading-[1.08] text-neutral-900 sm:text-5xl">
                    5 contratos e mais de R$ 10,5 mil em honorários no primeiro mês.
                  </h2>
                  <p className="mt-7 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                    Uma operação combinando Google Ads, Meta Ads e landing page para gerar demandas
                    qualificadas para o escritório Dr. Vinício Rodrigues Advocacia.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 border-t border-neutral-200 pt-6">
                  <div>
                    <p className="font-canela text-4xl leading-none text-[#3A43E3]">05</p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">contratos fechados</p>
                  </div>
                  <div className="border-l border-neutral-200 pl-6">
                    <p className="font-canela text-3xl leading-none text-[#3A43E3]">R$ 10,5 mil+</p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">em honorários rastreados</p>
                  </div>
                </div>

                <span className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                  Ver case completo
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-[5%] lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                Próximos resultados
              </span>
              <h2 className="font-canela mt-5 text-4xl leading-tight text-neutral-900 sm:text-5xl">
                Receba os próximos cases da Scale.
              </h2>
            </div>
            <div className="bg-[#3A43E3] p-7 text-white sm:p-9">
              <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                Cases, aprendizados de campanha e bastidores de operações que ajudam escritórios a
                crescer com mais previsibilidade.
              </p>
              <NewsletterForm
                endpoint="/api/lead-cases"
                formClassName="mt-7 flex flex-col gap-3 sm:flex-row"
                label="Seu melhor e-mail"
                labelClassName="sr-only"
                inputClassName="min-w-0 flex-1 border-b border-white/45 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-white"
                buttonClassName="inline-flex items-center justify-center gap-3 bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#3A43E3] transition-opacity hover:opacity-85"
                buttonText="Quero receber"
                successClassName="text-sm leading-relaxed text-white/85"
                errorClassName="mt-3 text-xs leading-relaxed text-red-200"
              />
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
