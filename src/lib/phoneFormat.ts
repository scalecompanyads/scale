/**
 * Máscara BR: (XX) XXXXX-XXXX (11 dígitos) ou (XX) XXXX-XXXX (10).
 * Usado no formulário e no JSON enviado ao webhook (value / rawValue).
 */
export function formatPhoneBR(digits: string): string {
  const d = digits.replace(/\D/g, '').slice(0, 11);
  if (d.length === 0) return '';
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
