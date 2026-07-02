import Navbar from "@/components/Navbar";
import CasesList from "@/components/CasesList";
import { FinalCTA, Footer } from "@/components/Footer";
import { Metadata } from "next";
import { pageOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "Cases: Resultados de Marketing para Advogados | Scale",
  description:
    "Cases reais de escritórios que multiplicaram contratos com a Scale: números, estratégia e ROI de campanhas de captação jurídica.",
  alternates: { canonical: "/cases" },
  openGraph: pageOpenGraph({
    title: "Cases: Resultados de Marketing para Advogados | Scale",
    description:
      "Cases reais de escritórios que multiplicaram contratos com a Scale: números, estratégia e ROI de campanhas de captação jurídica.",
    path: "/cases",
  }),
};

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#010f1c]">
        <CasesList />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
