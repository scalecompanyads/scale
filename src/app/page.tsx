import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ExpertiseSEO from "@/components/ExpertiseSEO";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import { FinalCTA, Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/data/faqs";

export default function Home() {
  return (
    <>
      <Navbar />
      <JsonLd data={faqSchema(homeFaqs)} />
      <main>
        <Hero />
        <LogosMarquee />
        <Problem />
        <Solution />
        <ExpertiseSEO />
        <Team />
        <Testimonials />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
