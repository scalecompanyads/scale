import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactTrigger from "@/components/ContactTrigger";
import CornerVignette from "@/components/CornerVignette";
import KeywordMarquee from "@/components/KeywordMarquee";
import ParallaxImage from "@/components/ParallaxImage";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollWordReveal from "@/components/ScrollWordReveal";
import ServiceFaqAccordion from "@/components/ServiceFaqAccordion";
import VideoMarqueeRow from "@/components/VideoMarqueeRow";
import { ArrowUpRightIcon } from "@/components/icons";

type ServiceCard = {
  title: string;
  text: string;
};

type ServiceStep = {
  title: string;
  text: string;
};

type ServiceStat = {
  value: string;
  label: string;
};

type ServiceFaqItem = {
  question: string;
  answer: string;
};

type ServiceImage = {
  src: string;
  alt: string;
};

export type ServiceTemplateProps = {
  number: string;
  category: string;
  title: string;
  description: ReactNode;
  cover: string;
  coverAlt: string;
  keywords: string[];
  intro: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  differentiators: {
    eyebrow: string;
    heading: string;
    intro: string;
    image: ServiceImage;
    items: ServiceCard[];
  };
  areas: {
    eyebrow: string;
    heading: string;
    intro: string;
    image: ServiceImage;
    items: ServiceCard[];
  };
  spotlight: {
    image: ServiceImage;
    quote: string;
  };
  pillars: {
    eyebrow: string;
    heading: string;
    items: ServiceCard[];
  };
  videos?: {
    eyebrow?: string;
    heading: string;
    intro?: string;
    items: { src: string; alt: string }[];
  };
  process: {
    eyebrow: string;
    heading: string;
    items: ServiceStep[];
  };
  proof: {
    eyebrow: string;
    heading: string;
    text: string;
    stats: ServiceStat[];
    caseHref: string;
    caseLabel: string;
    caseTitle: string;
    caseImage: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: ServiceFaqItem[];
  };
};

export default function ServiceTemplate({
  number,
  category,
  title,
  description,
  cover,
  coverAlt,
  keywords,
  intro,
  differentiators,
  areas,
  spotlight,
  pillars,
  videos,
  process,
  proof,
  faq,
}: ServiceTemplateProps) {
  return (
    <main className="flex-1 bg-white">
      <Header />

      <article>
        <header className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black lg:min-h-screen">
          <ParallaxImage
            src={cover}
            alt={coverAlt}
            priority
            range={140}
            wrapperClassName="hero-bg-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/25" />

          <div className="relative z-10 flex flex-1 items-center justify-center lg:mt-auto lg:block lg:flex-none">
            <div className="relative w-full px-6 py-24 sm:px-8 lg:px-[5%] lg:pb-24 lg:pt-40">
              <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-24 hidden select-none lg:block">
                <span className="font-canela text-[18rem] leading-none text-white/[0.05]">
                  {number}
                </span>
              </div>

              <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
                <div className="max-w-3xl lg:flex-1">
                  <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                    {category}
                  </span>
                  <h1 className="font-canela mt-5 text-3xl leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                    {title}
                  </h1>
                  <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:mx-0">
                    {description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center justify-center lg:justify-start">
                  <ContactTrigger className="inline-flex items-center gap-3 rounded-none bg-[#3A43E3] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#2f37c9]">
                    Falar com um especialista
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </ContactTrigger>
                </div>
              </div>
            </div>
          </div>
        </header>

        {videos ? (
          <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
            <div className="space-y-5 sm:space-y-6">
              <VideoMarqueeRow items={videos.items} durationSeconds={26} />
              <VideoMarqueeRow items={videos.items} reverse durationSeconds={30} offset={2} />
              <VideoMarqueeRow items={videos.items} durationSeconds={34} offset={4} />
            </div>

            <CornerVignette side="left" />
            <CornerVignette side="right" />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 65% at center, rgba(0,0,0,0.8), rgba(0,0,0,0.3) 55%, transparent 75%)",
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 lg:px-[5%]">
              <div className="max-w-2xl text-center">
                {videos.eyebrow ? (
                  <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                    {videos.eyebrow}
                  </span>
                ) : null}
                <h2 className="font-canela mt-3 text-2xl leading-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
                  {videos.heading}
                </h2>
                {videos.intro ? (
                  <p className="mt-3 hidden text-base leading-relaxed text-white/85 sm:mt-6 sm:block sm:text-lg">
                    {videos.intro}
                  </p>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        <KeywordMarquee keywords={keywords} />

        <section className="bg-white px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                {intro.eyebrow}
              </span>
              <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
                {intro.heading}
              </h2>
            </div>

            <div className="max-w-3xl space-y-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F1EDE6] px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
              <div>
                <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                  {differentiators.eyebrow}
                </span>
                <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
                  {differentiators.heading}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                  {differentiators.intro}
                </p>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={differentiators.image.src}
                  alt={differentiators.image.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-14 grid border-t border-neutral-300 sm:grid-cols-2 lg:grid-cols-4 lg:border-t-0">
              {differentiators.items.map((item, index) => (
                <div
                  key={item.title}
                  className="border-b border-neutral-300 py-8 pr-6 sm:border-t sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-l lg:border-t-0 lg:first:border-l-0 lg:first:pl-0"
                >
                  <span className="font-canela text-sm text-[#3A43E3]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-canela mt-6 text-2xl leading-tight text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
              <div className="relative order-2 aspect-[4/3] overflow-hidden lg:order-1">
                <Image
                  src={areas.image.src}
                  alt={areas.image.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="order-1 max-w-xl lg:order-2">
                <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                  {areas.eyebrow}
                </span>
                <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
                  {areas.heading}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
                  {areas.intro}
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
              {areas.items.map((item, index) => {
                const isBlue = index % 2 === 1;

                return (
                  <div
                    key={item.title}
                    className={isBlue ? "bg-[#3A43E3] p-7 text-white sm:p-8" : "bg-white p-7 sm:p-8"}
                  >
                    <span
                      className={`font-canela text-sm ${isBlue ? "text-white/65" : "text-[#3A43E3]"}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`font-canela mt-8 text-2xl leading-tight ${
                        isBlue ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        isBlue ? "text-white/80" : "text-neutral-600"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F1EDE6] px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                {pillars.eyebrow}
              </span>
              <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
                {pillars.heading}
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-neutral-300 bg-neutral-300 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.items.map((item, index) => {
                const isBlue = index % 2 === 1;

                return (
                  <div
                    key={item.title}
                    className={isBlue ? "bg-[#3A43E3] p-7 text-white sm:p-8" : "bg-white p-7 sm:p-8"}
                  >
                    <span
                      className={`font-canela text-sm ${isBlue ? "text-white/65" : "text-[#3A43E3]"}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`font-canela mt-8 text-2xl leading-tight ${
                        isBlue ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        isBlue ? "text-white/80" : "text-neutral-600"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[3/1]">
            <ParallaxImage src={spotlight.image.src} alt={spotlight.image.alt} />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 lg:px-[5%]">
              <ScrollWordReveal
                text={`“${spotlight.quote}”`}
                className="font-canela max-w-2xl text-center text-2xl leading-snug text-white sm:text-3xl lg:text-4xl"
              />
            </div>
          </div>
        </section>

        <section
          id="como-funciona"
          className="scroll-mt-24 bg-black px-6 py-20 text-white sm:px-8 lg:px-[5%] lg:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                {process.eyebrow}
              </span>
              <h2 className="font-canela mt-4 text-4xl leading-tight sm:text-5xl">
                {process.heading}
              </h2>
            </div>

            <div className="mt-14 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4 lg:border-t-0">
              {process.items.map((step, index) => (
                <div
                  key={step.title}
                  className="border-b border-white/15 py-8 pr-6 sm:border-t sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-l lg:border-t-0 lg:first:border-l-0 lg:first:pl-0"
                >
                  <span className="font-canela text-sm text-[#588DFF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-canela mt-6 text-2xl leading-tight">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ECE7DF] px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                {proof.eyebrow}
              </span>
              <h2 className="font-canela mt-4 max-w-3xl text-4xl leading-tight text-neutral-900 sm:text-5xl">
                {proof.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                {proof.text}
              </p>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {proof.stats.map((stat) => (
                <div key={stat.label} className="bg-white p-6">
                  <p className="font-canela text-3xl text-neutral-900 sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-xs leading-snug text-neutral-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href={proof.caseHref}
              className="group mt-4 flex flex-col overflow-hidden bg-white sm:flex-row"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 sm:aspect-auto sm:w-2/5">
                <Image
                  src={proof.caseImage}
                  alt=""
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                  Case Scale
                </p>
                <h3 className="font-canela mt-4 text-2xl leading-tight text-neutral-900 sm:text-3xl">
                  {proof.caseTitle}
                </h3>
                <span className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                  {proof.caseLabel}
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
          <div className="mx-auto max-w-4xl">
            <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
              {faq.eyebrow}
            </span>
            <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
              {faq.heading}
            </h2>

            <div className="mt-12">
              <ServiceFaqAccordion items={faq.items} />
            </div>
          </div>
        </section>

      </article>

      <Footer />
    </main>
  );
}
