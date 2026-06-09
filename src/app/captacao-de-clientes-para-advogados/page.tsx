import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { FinalCTA, Footer } from "@/components/Footer";

// Hub Components
import HubHero from "@/components/hub/HubHero";
import HubProblem from "@/components/hub/HubProblem";
import HubSolution from "@/components/hub/HubSolution";
import HubNiches from "@/components/hub/HubNiches";
import HubStats from "@/components/hub/HubStats";
import HubOAB from "@/components/hub/HubOAB";
import HubPredictability from "@/components/hub/HubPredictability";
import HubFAQ from "@/components/hub/HubFAQ";
import TesesValidadas from "@/components/TesesValidadas";

export const metadata: Metadata = {
  title: "Captação de Clientes para Advogados: O Guia Definitivo | Scale",
  description: "O guia definitivo sobre captação de clientes para advogados. Descubra como estruturar uma máquina de aquisição previsível e dentro das normas da OAB.",
};

export default function CaptacaoDeClientesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#010f1c] min-h-screen text-white overflow-hidden relative">
        <HubHero />
        <HubProblem />
        <HubSolution />
        <HubNiches />
        <TesesValidadas />
        <HubStats />
        <HubOAB />
        <HubPredictability />
        <HubFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
