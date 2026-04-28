import { cn } from "@/components/legacy-advogados/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "cta" | "cta-lg" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  arrow?: boolean;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  cta: "btn-cta",
  "cta-lg": "btn-cta-lg",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", arrow, children, className, ...props }, ref) => (
    <button ref={ref} className={cn(variantClass[variant], className)} {...props}>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </button>
  )
);

Button.displayName = "Button";
