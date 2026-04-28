import { cn } from "@/components/legacy-advogados/lib/utils";

type BadgeVariant = "blue" | "orange" | "green";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const badgeClass: Record<BadgeVariant, string> = {
  blue: "badge-blue",
  orange: "badge-orange",
  green: "badge-green",
};

export function Badge({ variant = "blue", children, className }: BadgeProps) {
  return <span className={cn(badgeClass[variant], className)}>{children}</span>;
}
