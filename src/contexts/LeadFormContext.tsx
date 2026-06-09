"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LeadFormContextData {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const LeadFormContext = createContext<LeadFormContextData | undefined>(undefined);

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    console.log("[LeadFormContext] Abrindo modal");
    setIsOpen(true);
  };
  const close = () => {
    console.log("[LeadFormContext] Fechando modal");
    setIsOpen(false);
  };

  return (
    <LeadFormContext.Provider value={{ isOpen, open, close }}>
      {children}
    </LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const context = useContext(LeadFormContext);
  if (!context) {
    throw new Error("useLeadForm must be used within a LeadFormProvider");
  }
  return context;
}
