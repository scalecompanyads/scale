"use client";

import { useState } from "react";
import Image from "@/components/legacy-advogados/ui/next-image-shim";
import { cn } from "@/components/legacy-advogados/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Leonardo Carmo",
    role: "CMO",
    image: "/images/image 60.png",
  },
  {
    id: "2",
    name: "Matheus Malaquias",
    role: "Supervisor do time de cria├º├úo",
    image: "/images/image 61.png",
  },
  {
    id: "3",
    name: "Isabela Trannin",
    role: "Account Manager",
    image: "/images/image 62.png",
  },
  {
    id: "4",
    name: "Pedro Henrique",
    role: "Supervisor de Projetos",
    image: "/images/image 63.png",
  },
  {
    id: "5",
    name: "Hyandra Oliveira",
    role: "Account Manager",
    image: "/images/image 64.png",
  },
  {
    id: "6",
    name: "Pedro Henryque",
    role: "Supervisor de Projetos",
    image: "/images/image_65.png",
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="mx-auto flex w-full max-w-7xl select-none flex-col items-center gap-8 px-4 py-8 font-sans md:flex-row md:items-center md:justify-center md:gap-10 md:px-6 lg:gap-14">
      <div className="flex w-full max-w-full flex-shrink-0 justify-center gap-2 overflow-x-auto pb-1 md:w-auto md:justify-start md:gap-3 md:pb-0">
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="aspect-square w-[148px] sm:w-[172px] md:w-[200px] lg:w-[220px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="mt-[52px] flex flex-col gap-2 sm:mt-[60px] md:mt-[72px] md:gap-3">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="aspect-square w-[162px] sm:w-[188px] md:w-[218px] lg:w-[240px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="mt-[26px] flex flex-col gap-2 sm:mt-[30px] md:mt-[38px] md:gap-3">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="aspect-square w-[154px] sm:w-[178px] md:w-[206px] lg:w-[228px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
          <PlusProfessionalsCard />
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 pt-0 sm:grid sm:grid-cols-2 md:flex md:w-auto md:max-w-xl md:flex-col md:gap-5 md:pt-2">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

function PlusProfessionalsCard() {
  return (
    <div
      className={cn(
        "relative flex aspect-[5/4] w-[108px] flex-shrink-0 flex-col items-center justify-center self-center overflow-hidden rounded-lg border border-white/[0.05] bg-surface-800/30 px-2 py-2.5 text-center sm:w-[120px] md:w-[132px] lg:w-[142px]"
      )}
    >
      <p className="max-w-[7rem] font-display text-[10px] font-medium leading-snug tracking-wide text-content-tertiary sm:text-[11px] md:text-xs">
        <span className="text-content-secondary/90">+30</span>{" "}
        <span className="font-normal text-content-tertiary/80">Profissionais</span>
      </p>
    </div>
  );
}

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-surface-800/60 transition-opacity duration-300",
        className,
        isDimmed ? "opacity-60" : "opacity-100"
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
        className={cn(
          "object-contain object-center transition-[filter] duration-500",
          isActive ? "brightness-100" : "brightness-[0.77] grayscale"
        )}
      />
    </div>
  );
}

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300",
        isDimmed ? "opacity-50" : "opacity-100"
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "h-3 w-4 flex-shrink-0 rounded-[5px] transition-all duration-300",
            isActive ? "w-5 bg-white" : "bg-white/25"
          )}
        />
        <span
          className={cn(
            "text-base font-semibold leading-none tracking-tight transition-colors duration-300 md:text-[18px]",
            isActive ? "text-white" : "text-content-secondary"
          )}
        >
          {member.name}
        </span>
      </div>

      <p className="mt-1.5 pl-[27px] text-[7px] font-medium uppercase tracking-[0.2em] text-content-tertiary md:text-[10px]">
        {member.role}
      </p>
    </div>
  );
}
