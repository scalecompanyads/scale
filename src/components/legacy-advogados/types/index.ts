/** Dados do formulário de lead (modal em passos). */
export interface LeadFormData {
  nome: string;
  perfilArroba: string;
  telefone: string;
  faturamento: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  oab: string;
  area: string;
  initials: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
