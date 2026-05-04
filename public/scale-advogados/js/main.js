/* ============================================
   SCALE COMPANY — Landing Page JS
   Topbar, Reveal animations, Counter, 
   Video click-to-load, Lightbox
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Reveal on Scroll (IntersectionObserver) --- */
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // If reduced motion, make everything visible immediately
    revealElements.forEach(el => {
      el.classList.add('visible');
    });
  }

  /* --- Counter Animation --- */
  const counterElements = document.querySelectorAll('[data-counter]');
  if (counterElements.length > 0) {
    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-counter'), 10);
      const duration = 1200;
      const startTime = performance.now();
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = prefix + current + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      if (prefersReducedMotion) {
        el.textContent = prefix + target + suffix;
      } else {
        requestAnimationFrame(step);
      }
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  /* --- Video Poster Click-to-Load --- */
  const videoCards = document.querySelectorAll('.video-card[data-video-id]');
  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('data-video-id');
      if (!videoId) return;

      // Replace card content with iframe
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      iframe.title = 'Depoimento de advogado — Scale Company';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';

      // Remove poster and play button
      const poster = card.querySelector('.video-card__poster');
      const playBtn = card.querySelector('.video-card__play');
      if (poster) poster.remove();
      if (playBtn) playBtn.remove();

      card.appendChild(iframe);
      card.style.cursor = 'default';
      card.removeAttribute('data-video-id');
    });
  });

  /* --- Lightbox --- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const printItems = document.querySelectorAll('.prints__item');

  if (lightbox && lightboxImg) {
    printItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Depoimento';
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
