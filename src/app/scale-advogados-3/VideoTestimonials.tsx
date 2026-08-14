"use client";

import { useRef, useState } from "react";

const videos = [
  { src: "/scale-advogados/assets/bichara.mp4", id: "bichara" },
  { src: "/scale-advogados/assets/depoimento-vitor.mp4", id: "vitor" },
];

export function VideoTestimonials() {
  const [activated, setActivated] = useState<Record<string, boolean>>({});
  const refs = useRef<Record<string, HTMLVideoElement | null>>({});

  function activate(id: string) {
    const video = refs.current[id];
    if (!video) return;
    video.muted = false;
    video.currentTime = 0;
    video.play();
    setActivated((prev) => ({ ...prev, [id]: true }));
  }

  return (
    <div className="mx-auto mt-6 flex max-w-xs flex-col gap-5">
      {videos.map((v) => (
        <div
          key={v.id}
          onClick={() => activate(v.id)}
          className="relative aspect-[9/16] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#050505] shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
        >
          <video
            ref={(el) => {
              refs.current[v.id] = el;
            }}
            src={v.src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          {!activated[v.id] && (
            <button
              type="button"
              aria-label="Ver depoimento com áudio"
              className="cta-pulse-blue absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0077ff] px-6 py-3.5 text-[14px] font-semibold text-white"
            >
              Clique aqui para ver o depoimento
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
