import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import TesesValidadas from "@/components/TesesValidadas";
import { FinalCTA, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogosMarquee />
        <Problem />
        <Solution />
        <TesesValidadas />
        <Testimonials />
        <Team />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
