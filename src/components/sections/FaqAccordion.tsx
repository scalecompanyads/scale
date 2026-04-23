'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FaqEntry = { q: string; a: string };

const defaultFaqs: FaqEntry[] = [
  {
    q: 'Já tive experiência ruim com agência. Por que a Scale seria diferente?',
    a: 'Antes de qualquer proposta, fazemos um diagnóstico gratuito e honesto. Se não for o momento certo, dizemos isso. Nossa cultura é transparência total: você acompanha cada decisão e cada resultado em linguagem de negócio.',
  },
  {
    q: 'Quanto preciso investir por mês?',
    a: 'Depende do objetivo e do canal. O orçamento de mídia é definido com base na sua meta de resultado, não em pacote fixo. No diagnóstico gratuito mapeamos o investimento ideal para o seu caso.',
  },
  {
    q: 'Em quanto tempo começo a ver resultado?',
    a: 'Tráfego pago pode gerar leads em 2 a 4 semanas. SEO leva de 3 a 6 meses para resultados consistentes. Site: 20 a 30 dias úteis. Somos transparentes sobre prazos desde o início, sem promessa irreal.',
  },
  {
    q: 'A Scale atende o meu segmento?',
    a: 'Atendemos empresas de diversos segmentos em todo o Brasil. No diagnóstico avaliamos o fit e te dizemos com clareza o que podemos entregar.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. Contratos mensais, sem fidelidade forçada. Retenção vem de resultado, não de cláusula contratual.',
  },
  {
    q: 'Como é o acompanhamento após o diagnóstico?',
    a: 'Alinhamos próximos passos, canais e prazos. Na execução, você acompanha resultados com relatórios em linguagem de negócio e reuniões quando fizer sentido para o seu time.',
  },
];

function FaqItem({ faq, index, isOpen, onToggle }: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="flex h-full min-h-0 flex-col"
      style={{
        borderRadius: '10px',
        border: `1px solid ${isOpen ? 'rgba(0,186,255,0.28)' : 'rgba(255,255,255,0.08)'}`,
        background: isOpen ? 'rgba(0,186,255,0.04)' : 'rgba(255,255,255,0.03)',
        transition: 'border-color 0.3s, background 0.3s',
        overflow: 'hidden',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.25rem 1.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            minWidth: 0,
            flex: 1,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading, system-ui)',
              fontWeight: 700,
              fontSize: '0.7rem',
              color: 'rgba(0,186,255,0.50)',
              letterSpacing: '0.08em',
              flexShrink: 0,
              lineHeight: 1.5,
              paddingTop: '0.2em',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'white',
              lineHeight: 1.45,
              flex: 1,
              minWidth: 0,
            }}
          >
            {faq.q}
          </span>
        </div>
        <span
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            marginTop: '0.15em',
            borderRadius: '6px',
            border: `1px solid ${isOpen ? 'rgba(0,186,255,0.40)' : 'rgba(255,255,255,0.18)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            lineHeight: 1,
            color: '#00BAFF',
            transition: 'border-color 0.3s, transform 0.25s',
            transform: isOpen ? 'rotate(45deg)' : 'none',
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                padding: '0 1.5rem 1.25rem 3.5rem',
                fontSize: '0.875rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.50)',
                margin: 0,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion({ items, title }: { items?: FaqEntry[]; title?: string }) {
  const faqs = items && items.length > 0 ? items : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-20 overflow-hidden home-section-dark home-bg-grid pt-10 pb-16 md:pt-12 md:pb-20"
    >
      <div className="home-ambient-tl opacity-80" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-site px-6">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center md:mb-14"
        >
          <span className="home-label-caps mb-4">Dúvidas frequentes</span>
          <h2 className="heading-display-dark">{title ?? 'Dúvidas Frequentes.'}</h2>
        </motion.div>

        {/* Mobile: lista simples; desktop: 2 colunas pareadas */}
        <div className="flex flex-col gap-3 md:hidden">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
        <div className="hidden flex-col gap-3 md:flex">
          {Array.from({ length: Math.ceil(faqs.length / 2) }, (_, row) => (
            <div
              key={row}
              className="grid grid-cols-2 items-stretch gap-x-8 gap-y-0"
            >
              <FaqItem
                faq={faqs[row]}
                index={row}
                isOpen={openIndex === row}
                onToggle={() => setOpenIndex((prev) => (prev === row ? null : row))}
              />
              {faqs[row + Math.ceil(faqs.length / 2)] ? (
                <FaqItem
                  faq={faqs[row + Math.ceil(faqs.length / 2)]}
                  index={row + Math.ceil(faqs.length / 2)}
                  isOpen={openIndex === row + Math.ceil(faqs.length / 2)}
                  onToggle={() => setOpenIndex((prev) => (prev === row + Math.ceil(faqs.length / 2) ? null : row + Math.ceil(faqs.length / 2)))}
                />
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
