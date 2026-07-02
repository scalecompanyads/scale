import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acompanhamento Semanal | Scale Company",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MetricasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
