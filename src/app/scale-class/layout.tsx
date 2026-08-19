import { Metadata } from "next";
import { Inter_Tight, Manrope } from "next/font/google";
import { pageOpenGraph } from "@/lib/og";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter-tight",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Scale Class | Scale Company",
  description:
    "Scale Class — em breve.",
  alternates: { canonical: "/scale-class" },
  openGraph: pageOpenGraph({
    title: "Scale Class | Scale Company",
    description: "Scale Class — em breve.",
    path: "/scale-class",
  }),
  robots: { index: false, follow: false },
};

export default function ScaleClassLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${interTight.variable} ${manrope.variable}`}>
      {children}
    </div>
  );
}
