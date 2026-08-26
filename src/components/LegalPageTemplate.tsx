import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type LegalSection = {
  id: string;
  heading: string;
  paragraphs: ReactNode[];
  list?: string[];
};

export type LegalPageTemplateProps = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPageTemplate({
  eyebrow,
  title,
  updatedAt,
  intro,
  sections,
}: LegalPageTemplateProps) {
  return (
    <main className="flex-1 bg-white">
      <Header theme="light" />

      <article className="px-6 pb-20 pt-28 sm:px-8 sm:pb-24 lg:px-[5%] lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-3xl">
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
            {eyebrow}
          </span>
          <h1 className="font-canela mt-5 text-4xl leading-tight text-neutral-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-neutral-500">Última atualização: {updatedAt}</p>
          <p className="mt-8 text-base leading-relaxed text-neutral-600 sm:text-lg">{intro}</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-canela text-2xl leading-tight text-neutral-900 sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                {section.list ? (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3A43E3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
