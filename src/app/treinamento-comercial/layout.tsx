import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treinamento Comercial ao Vivo | Scale Company",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TreinamentoComercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
