import Navbar from "@/components/Navbar";
import Solution from "@/components/Solution";
import { FinalCTA, Footer } from "@/components/Footer";
import { Metadata } from "next";
import { pageOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "Serviços de Marketing Jurídico: Ads, LPs e CRM | Scale",
  description:
    "Conheça o ecossistema Scale: Google Ads, Meta Ads, landing pages, vídeos e CRM jurídico. Operação completa de captação para seu escritório.",
  alternates: { canonical: "/servicos" },
  openGraph: pageOpenGraph({
    title: "Serviços de Marketing Jurídico: Ads, LPs e CRM | Scale",
    description:
      "Conheça o ecossistema Scale: Google Ads, Meta Ads, landing pages, vídeos e CRM jurídico. Operação completa de captação para seu escritório.",
    path: "/servicos",
  }),
};

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Solution />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
