import React, { useState, useRef, useEffect, useCallback, type CSSProperties } from 'react';

export interface Testimonial {
  id: string | number;
  initials: string;
  name: string;
  role: string;
  quote: string;
  tags: { text: string; type: 'featured' | 'default' }[];
  avatarGradient: string;
}

export interface TestimonialStackProps {
  testimonials: Testimonial[];
  visibleBehind?: number;
}

export const TestimonialStack = ({ testimonials, visibleBehind = 2 }: TestimonialStackProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartRef = useRef(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalCards = testimonials.length;

  const navigate = useCallback((newIndex: number) => {
    setActiveIndex((newIndex + totalCards) % totalCards);
  }, [totalCards]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, index: number) => {
    if (index !== activeIndex) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartRef.current = clientX;
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStartRef.current);
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    if (Math.abs(dragOffset) > 50) {
      navigate(activeIndex + (dragOffset < 0 ? 1 : -1));
    }
    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset, activeIndex, navigate]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // Auto-play
  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % totalCards);
    }, 5000);
    return () => clearInterval(timer);
  }, [isDragging, totalCards]);

  if (!testimonials?.length) return null;

  return (
    <div className="ts-root">
      <div className="ts-stack">
        {testimonials.map((testimonial, index) => {
          const displayOrder = (index - activeIndex + totalCards) % totalCards;

          const style: CSSProperties = {};
          if (displayOrder === 0) {
            style.transform = `translateX(${dragOffset}px)`;
            style.opacity = 1;
            style.zIndex = totalCards;
          } else if (displayOrder <= visibleBehind) {
            const scale = 1 - 0.05 * displayOrder;
            const translateY = -2 * displayOrder;
            style.transform = `scale(${scale}) translateY(${translateY}rem)`;
            style.opacity = 1 - 0.25 * displayOrder;
            style.zIndex = totalCards - displayOrder;
          } else {
            style.transform = 'scale(0)';
            style.opacity = 0;
            style.zIndex = 0;
          }

          return (
            <div
              ref={el => { cardRefs.current[index] = el; }}
              key={testimonial.id}
              className="ts-card"
              style={style}
              onMouseDown={(e) => handleDragStart(e, index)}
              onTouchStart={(e) => handleDragStart(e, index)}
            >
              <div className="ts-card-inner">
                <div className="ts-header">
                  <div className="ts-avatar" style={{ background: testimonial.avatarGradient }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="ts-name">{testimonial.name}</h3>
                    <p className="ts-role">{testimonial.role}</p>
                  </div>
                </div>

                <blockquote className="ts-quote">"{testimonial.quote}"</blockquote>

                <div className="ts-footer">
                  <div className="ts-tags">
                    {testimonial.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`ts-tag ${tag.type === 'featured' ? 'ts-tag-featured' : ''}`}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ts-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            aria-label={`Ir para depoimento ${index + 1}`}
            onClick={() => navigate(index)}
            className={`ts-dot ${activeIndex === index ? 'ts-dot-active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

// Pre-configured Scale testimonials
const scaleTestimonials: Testimonial[] = [
  {
    id: 1,
    initials: 'EM',
    name: 'Eduardo Macedo',
    role: 'CEO — Boxcar Motorsport',
    quote: 'Levamos a empresa de zero a R$ 70 mil de faturamento em menos de três meses investindo menos de R$ 2 mil/mês. São grandes incentivadores do seu negócio.',
    tags: [{ text: 'DESTAQUE', type: 'featured' }, { text: 'Tráfego Pago', type: 'default' }],
    avatarGradient: 'linear-gradient(135deg, #1630DF, #00BAFF)',
  },
  {
    id: 2,
    initials: 'R',
    name: 'Rafael',
    role: 'Proprietário — Bike Center',
    quote: 'Tivemos um aumento de 30% a 40% no faturamento. O tráfego pago é muito importante para a minha empresa e para todas que querem crescer.',
    tags: [{ text: 'Crescimento', type: 'default' }, { text: 'Tráfego Pago', type: 'default' }],
    avatarGradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    id: 3,
    initials: 'CÂ',
    name: 'Carlos Ângelo',
    role: 'CEO — Agência BRTM',
    quote: 'O diferencial que vejo na Scale é ela comprar o meu propósito e entender que, se queremos escalar, podemos contar com eles.',
    tags: [{ text: 'Escala', type: 'featured' }, { text: 'Propósito', type: 'default' }],
    avatarGradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
  },
];

export default function ScaleTestimonials() {
  return <TestimonialStack testimonials={scaleTestimonials} />;
}
