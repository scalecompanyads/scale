"use client";

import Image from "@/components/legacy-advogados/ui/next-image-shim";
import { useLeadForm } from "@/components/legacy-advogados/contexts/lead-form-context";
import { cn } from "@/components/legacy-advogados/lib/utils";

const AVATAR_SRC = "/images/commercial-avatar.png";

export function CommercialFloatCard() {
  const { open } = useLeadForm();
  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-5 right-5 z-[45] sm:bottom-8 sm:right-8",
        "[padding-bottom:max(0.75rem,env(safe-area-inset-bottom))] [padding-right:max(0.25rem,env(safe-area-inset-right))]"
      )}
    >
      <button
        type="button"
        onClick={() => open()}
        className={cn(
          "pointer-events-auto group flex max-w-[min(100vw-1.5rem,20rem)] flex-row items-center gap-0 overflow-hidden rounded-2xl border border-white/[0.12]",
          "bg-surface-900/95 py-2 pl-2 pr-2 text-left shadow-elevated backdrop-blur-md transition-[gap,padding] duration-200",
          "hover:gap-3 hover:pl-3 hover:pr-3",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
        )}
        aria-label="Fale com nosso time comercial — abrir formulário de contato"
      >
        <span
          className={cn(
            "max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-white opacity-0 transition-[max-width,opacity] duration-200",
            "group-hover:max-w-[240px] group-hover:opacity-100"
          )}
        >
          Fale com nosso time comercial
        </span>

        <span className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white/[0.08]">
          <Image
            src={AVATAR_SRC}
            alt="Consultor do time comercial"
            width={112}
            height={112}
            className="h-full w-full object-cover"
            sizes="56px"
          />
          <span
            className="absolute bottom-0 right-0 z-10 flex h-4 w-4 items-center justify-center"
            aria-hidden
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative h-3 w-3 rounded-full bg-green-500 shadow-[0_0_0_2px_#0c0c10]" />
          </span>
        </span>
      </button>
    </div>
  );
}
