import Navbar from "@/components/Navbar";
import CasesList from "@/components/CasesList";
import { FinalCTA, Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases de Sucesso | Scale Marketing Jurídico",
  description: "Estudos de caso e resultados reais gerados pela Scale Company para escritórios de advocacia em todo o Brasil.",
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
