import Navbar from "@/components/Navbar";
import SimuladorHonorarios from "@/components/SimuladorHonorarios";
import { FinalCTA, Footer } from "@/components/Footer";
import { pageOpenGraph } from "@/lib/og";

export const metadata = {
  title: "Simulador de Captação e Honorários | Scale Company",
  description:
    "Descubra o potencial de escala da sua advocacia. Estime contatos, contratos, honorários projetados e o investimento necessário.",
  alternates: { canonical: "/simulador-captacao" },
  openGraph: pageOpenGraph({
    title: "Simulador de Captação e Honorários | Scale Company",
    description:
      "Descubra o potencial de escala da sua advocacia. Estime contatos, contratos, honorários projetados e o investimento necessário.",
    path: "/simulador-captacao",
  }),
};

export default function SimuladorPage() {
  return (
    <>
      <Navbar />
      <main>
        <SimuladorHonorarios />
      </main>
      <Footer />
    </>
  );
}
