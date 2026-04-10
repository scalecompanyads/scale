'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const lines = [
  'Marketing sem meta',
  'é aposta.',
  'Trabalhamos',
  'com certeza.',
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      style={{
        background: '#010f1c',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Pulsing glow */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(0,186,255,0.14) 0%, rgba(22,48,223,0.08) 50%, transparent 75%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={
                inView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : {}
              }
              transition={{
                type: 'spring',
                bounce: 0.25,
                duration: 1.2,
                delay: i * 0.15,
              }}
              style={{
                fontFamily: 'var(--font-heading, system-ui)',
                fontWeight: 700,
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                lineHeight: 1.05,
                background:
                  'linear-gradient(to bottom, #ffffff 30%, #a1a1aa 75%, transparent 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
        >
          <div
            style={{
              height: '1px',
              width: '60px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15))',
            }}
          />
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)', margin: 0, letterSpacing: '0.08em' }}>
            Scale · Vila Velha, ES
          </p>
          <div
            style={{
              height: '1px',
              width: '60px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.15), transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
