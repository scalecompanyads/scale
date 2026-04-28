import { cn } from "@/components/legacy-advogados/lib/utils";

type ScaleLogoProps = {
  className?: string;
  /** Altura visual; largura segue proporção do SVG (584×182). */
  heightClass?: string;
};

export function ScaleLogo({ className, heightClass = "h-7 md:h-8" }: ScaleLogoProps) {
  return (
    <img
      src="/images/scale-logo.svg"
      alt="Scale Company"
      width={584}
      height={182}
      decoding="async"
      className={cn("w-auto max-w-[min(100%,220px)] object-contain object-left", heightClass, className)}
    />
  );
}
