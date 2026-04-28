import { cn } from "@/components/legacy-advogados/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className, dark, id }: SectionProps) {
  return (
    <section id={id} className={cn("section", dark && "bg-surface-900", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
