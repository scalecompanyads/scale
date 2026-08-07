import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plano Estratégico Comercial | Scale Company",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PlanoComercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
