import { Navbar } from "@/components/legacy-advogados/sections/Navbar";
import { Hero } from "@/components/legacy-advogados/sections/Hero";
import { Problem } from "@/components/legacy-advogados/sections/Problem";
import { Solution } from "@/components/legacy-advogados/sections/Solution";
import { Services } from "@/components/legacy-advogados/sections/Services";
import { Results } from "@/components/legacy-advogados/sections/Results";
import { FeaturedVideoCase } from "@/components/legacy-advogados/sections/FeaturedVideoCase";
import { HowItWorks } from "@/components/legacy-advogados/sections/HowItWorks";
import { Testimonials } from "@/components/legacy-advogados/sections/Testimonials";
import { FAQ } from "@/components/legacy-advogados/sections/FAQ";
import { FinalCTA } from "@/components/legacy-advogados/sections/FinalCTA";
import { Footer } from "@/components/legacy-advogados/sections/Footer";

export default function AdvogadosPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <FeaturedVideoCase />
      <Solution />
      <Services />
      <Results />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
