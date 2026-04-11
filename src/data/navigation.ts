// =============================================================================
// navigation.ts — Itens do menu principal
// =============================================================================

export interface NavItem {
  label: string;
  href: string;
  /** true = abre dropdown com subitens */
  hasDropdown?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Serviços',
    href: '/#servicos',
  },
  {
    label: 'Cases',
    href: '/#depoimentos',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

/** Item CTA (botão no menu) */
export const ctaNav: NavItem = {
  label: 'Falar com especialista',
  href: '/contato',
};
