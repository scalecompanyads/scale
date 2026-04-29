"use client";

import { useEffect, useState } from "react";
import { cn } from "@/components/legacy-advogados/lib/utils";
import { ScaleLogo } from "@/components/legacy-advogados/ui/scale-logo";
import { ShinyButton } from "@/components/legacy-advogados/ui/shiny-button";

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 hidden transition-all duration-300 lg:block",
        scrolled
          ? "border-b border-white/[0.08] bg-surface-950/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container-page">
        <nav className="flex h-[92px] items-center justify-between pt-5">
          <a href="#" className="inline-flex py-1" aria-label="Scale Company">
            <ScaleLogo heightClass="h-8 md:h-9" className="max-w-[200px] sm:max-w-[240px]" />
          </a>

          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-content-secondary transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ShinyButton openLeadForm className="h-10 px-5 text-sm">
            Falar com Especialista
          </ShinyButton>
        </nav>
      </div>
    </header>
  );
}
