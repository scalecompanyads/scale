"use client";

/**
 * Shiny gradient button (emerald-ui style), adapted to use @/lib/utils `cn`.
 */
import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { useLeadForm } from "@/components/legacy-advogados/contexts/lead-form-context";
import { cn } from "@/components/legacy-advogados/lib/utils";

const shinyStyles = cn(
  "inline-flex min-h-12 w-max max-w-full items-center justify-center gap-2 rounded-sm border-none",
  "bg-[linear-gradient(325deg,#0044ff_0%,#2ccfff_55%,#0044ff_90%)] bg-[length:280%_auto] bg-[position:0%_50%]",
  "px-8 py-3.5 font-medium text-white",
  "shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)]",
  "transition-[background-position] duration-700 hover:bg-[position:100%_0%]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950",
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60"
);

export type ShinyButtonProps = {
  className?: string;
  children?: ReactNode;
  href?: string;
  /** Abre o formulário de lead em modal (mesmo fluxo de todas as CTAs). */
  openLeadForm?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export const ShinyButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, ShinyButtonProps>(
  function ShinyButton(
    { className, children = "Shiny Day", href, openLeadForm, type = "button", onClick, ...rest },
    ref
  ) {
    const { open } = useLeadForm();
    const classes = cn(shinyStyles, className);

    if (openLeadForm) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          className={classes}
          onClick={(e) => {
            onClick?.(e);
            open();
          }}
          {...rest}
        >
          {children}
        </button>
      );
    }

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} type={type} className={classes} {...rest}>
        {children}
      </button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";
