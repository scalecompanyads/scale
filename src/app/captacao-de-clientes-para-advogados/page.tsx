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
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { hubFaqs } from "@/data/faqs";
import { pageOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "Captação de Clientes para Advogados: Guia 2026 | Scale",
  description:
    "Guia completo de captação de clientes na advocacia: tráfego pago, SEO e CRM dentro das normas da OAB. Monte sua máquina previsível de honorários.",
  alternates: { canonical: "/captacao-de-clientes-para-advogados" },
  openGraph: pageOpenGraph({
    title: "Captação de Clientes para Advogados: Guia 2026 | Scale",
    description:
      "Guia completo de captação de clientes na advocacia: tráfego pago, SEO e CRM dentro das normas da OAB. Monte sua máquina previsível de honorários.",
    path: "/captacao-de-clientes-para-advogados",
  }),
};

export default function CaptacaoDeClientesPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={faqSchema(hubFaqs)} />
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
