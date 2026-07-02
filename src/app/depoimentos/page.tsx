import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { FinalCTA, Footer } from "@/components/Footer";
import { Metadata } from "next";
import { pageOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "Depoimentos de Advogados: Resultados Reais | Scale",
  description:
    "Veja o que advogados e escritórios dizem sobre a Scale Company: mais contratos, previsibilidade e captação ética dentro das normas da OAB.",
  alternates: { canonical: "/depoimentos" },
  openGraph: pageOpenGraph({
    title: "Depoimentos de Advogados: Resultados Reais | Scale",
    description:
      "Veja o que advogados e escritórios dizem sobre a Scale Company: mais contratos, previsibilidade e captação ética dentro das normas da OAB.",
    path: "/depoimentos",
  }),
};

export default function DepoimentosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
