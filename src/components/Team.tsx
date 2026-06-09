"use client";

import Image from "next/image";
import { useState } from "react";

const squad = [
  {
    name: "Gabriel Dias",
    role: "Chief Organization Officer",
    image: "/images/hero-squad-1-480.webp",
    bg: "#f5a8bc",
  },
  {
    name: "Pedro Clark",
    role: "Chief Executive Officer",
    image: "/images/hero-squad-2-480.webp",
    bg: "#1630DF",
  },
  {
    name: "Vitor Escocard",
    role: "Sócio da Scale Company",
    image: "/images/hero-squad-3-480.webp",
    bg: "#4ecdc4",
  },
];

export default function Team() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section relative" style={{ background: "rgba(255,255,255,0.015)" }}>
      <div className="container-page">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="section-title">
            Aqui Não Existe <span>Amadorismo</span>
          </h2>
          <p className="section-subtitle">
            A Scale Company foi desenhada para profissionalizar o mercado. Você terá acesso a uma equipe executiva dedicada exclusivamente ao crescimento e controle do seu escritório.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "1rem",
            boxShadow: "0 8px 64px rgba(0,0,0,0.6)",
            maxWidth: "900px",
            margin: "0 auto",
            height: "400px",
          }}
        >
          {squad.map((person, i) => (
            <div
              key={person.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                flex: hovered === i ? 2.6 : 1,
                overflow: "hidden",
                transition: "flex 0.5s cubic-bezier(0.22,1,0.36,1)",
                cursor: "pointer",
              }}
            >
              {/* BG color fallback */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: person.bg,
                  zIndex: 0,
                }}
              />
              {/* Photo */}
              <Image
                src={person.image}
                alt={`${person.name}, ${person.role}`}
                fill
                sizes="(max-width: 768px) 34vw, 28vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                  zIndex: 1,
                  transition: "transform 0.5s ease",
                  transform: hovered === i ? "scale(1.04)" : "scale(1)",
                }}
                priority={i === 1}
              />
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                  zIndex: 2,
                }}
              />
              {/* Name badge */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  bottom: 0,
                  zIndex: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                  opacity: hovered === i ? 1 : 0.7,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#fff",
                    lineHeight: 1.3,
                  }}
                >
                  {person.name}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: "0.25rem",
                  }}
                >
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
