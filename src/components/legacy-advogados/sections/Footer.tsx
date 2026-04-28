import { ScaleLogo } from "@/components/legacy-advogados/ui/scale-logo";

const footerLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-950">
      <div className="container-page py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center py-1" aria-label="Scale Company">
              <ScaleLogo heightClass="h-9 md:h-10" className="max-w-[260px]" />
            </a>
            <p className="text-content-disabled text-sm max-w-xs leading-relaxed">
              Marketing digital especializado para escritórios de advocacia que querem crescer com
              previsibilidade.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-content-tertiary text-sm hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="divider my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-content-disabled text-xs">
            {/* TODO: substituir pelo CNPJ real */}
            &copy; {new Date().getFullYear()} Scale Company. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-content-disabled text-xs hover:text-content-secondary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-content-disabled text-xs hover:text-content-secondary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
