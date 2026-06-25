"use client";

import { useLeadForm } from "@/contexts/LeadFormContext";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
}

export function CTAButton({ children, className }: CTAButtonProps) {
  const { open } = useLeadForm();

  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
