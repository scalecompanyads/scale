'use client';

import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
  { num: 50,  prefix: '',    suffix: '+',   label: 'clientes atendidos',      sub: 'Vila Velha e ES' },
  { num: 2,   prefix: 'R$', suffix: 'M+',  label: 'em resultados gerados',   sub: 'para nossos clientes' },
  { num: 4,   prefix: '',    suffix: '+',   label: 'anos de mercado',         sub: 'com foco em resultado' },
  { num: 98,  prefix: '',    suffix: '%',   label: 'satisfação dos clientes', sub: 'em pesquisa interna' },
];

function Counter({ num, prefix = '', suffix = '' }: { num: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, num, { duration: 2, ease: [0.16, 1, 0.3, 1] });
    const unsub = count.on('change', (v) => {
      if (ref.current) ref.current.textContent = prefix + Math.round(v) + suffix;
    });
    return () => { controls.stop(); unsub(); };
  }, [inView, num, prefix, suffix, count]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div style={{ background: '#010f1c', padding: '5rem 0', position: 'relative' }}>
      <div ref={ref} style={{ width: '100%', padding: '0 clamp(1.5rem, 5vw, 5rem)' }}>

        {/* Thin top rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.10) 80%, transparent)', marginBottom: '3rem', transformOrigin: 'left' }}
        />

        {/* Stats row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                flex: '1 1 200px',
                padding: '0 2rem',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-heading, system-ui)',
                fontWeight: 700,
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                lineHeight: 1,
                margin: '0 0 0.5rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                <Counter num={s.num} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(255,255,255,0.80)', margin: '0 0 0.25rem' }}>
                {s.label}
              </p>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)', margin: 0, letterSpacing: '0.04em' }}>
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Thin bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.10) 80%, transparent)', marginTop: '3rem', transformOrigin: 'left' }}
        />
      </div>
    </div>
  );
}
