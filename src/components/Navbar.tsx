"use client";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

const navLinks = [
  { label: "Serviços", href: "/servicos" },
  { label: "Simulador de Captação", href: "/simulador-captacao" },
  { label: "CRM Jurídico", href: "/crm-advogados" },
  { label: "Depoimentos", href: "/depoimentos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useLeadForm();
  const pathname = usePathname();
  const isHeroPage = pathname === "/" || pathname === "/google-ads-advogados";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler, { passive: true });
    // Trigger handler immediately in case we load scrolled down
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const showNavbar = !isHeroPage || scrolled || mobileOpen;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          backdropFilter: showNavbar ? "blur(24px)" : "none",
          WebkitBackdropFilter: showNavbar ? "blur(24px)" : "none",
          background: showNavbar
            ? "rgba(1, 15, 28, 0.90)"
            : "transparent",
          borderBottom: showNavbar
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
          opacity: showNavbar ? 1 : 0,
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
          pointerEvents: showNavbar ? "auto" : "none",
        }}
      >
      <div className="container-page" style={{ position: "relative", zIndex: 100000 }}>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <a
            href="https://www.scalecompany.com.br/"
            aria-label="Scale Company — início"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src="/images/scale-logo.svg"
              alt="Scale Company"
              width={140}
              height={36}
              priority
              style={{ height: "32px", width: "auto" }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(255,255,255,0.65)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div className="hidden md:flex">
              <button
                onClick={open}
                className="btn-shiny"
                style={{ padding: "0.65rem 1.4rem", fontSize: "0.875rem" }}
              >
  <WhatsAppIcon size={20} />
  Agendar diagnóstico
</button>
            </div>

            <button
              className="flex md:hidden"
              onClick={() => {
                console.log("Menu button clicked", !mobileOpen);
                setMobileOpen(!mobileOpen);
              }}
              aria-label="Menu"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                cursor: "pointer",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                position: "relative",
                zIndex: 999999,
                pointerEvents: "auto"
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      </header>

      {/* Premium Mobile Menu Overlay (Rendered outside header) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(1, 15, 28, 0.98)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          zIndex: 99998, /* Just below the header */
          display: "flex",
          flexDirection: "column",
          padding: "100px 2rem 2rem 2rem",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          opacity: mobileOpen ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
          pointerEvents: mobileOpen ? "auto" : "none"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", flex: 1, justifyContent: "center", alignItems: "center" }}>
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#fff",
                fontSize: "2.5rem",
                fontWeight: 700,
                textDecoration: "none",
                textAlign: "center",
                letterSpacing: "-0.02em",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(15px)",
                transition: `all 0.4s ease ${0.1 + idx * 0.05}s`
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div style={{ paddingBottom: "2rem", width: "100%" }}>
          <button
            onClick={() => {
              setMobileOpen(false);
              open();
            }}
            className="btn-shiny"
            style={{ width: "100%", padding: "1.25rem", fontSize: "1.1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}
          >
  Agendar diagnóstico <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
