document.addEventListener("DOMContentLoaded", () => {
  // Configurações do GSAP
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    gsap.from('.hero-copy > *', {
      y: 24,
      opacity: 0,
      filter: 'blur(8px)',
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.08
    });

    gsap.from('.hero-img', {
      scale: window.innerWidth > 767 ? 1.04 : 1,
      opacity: 0.92,
      duration: 1.2,
      ease: 'power2.out'
    });

    // Elementos com reveal ao scrollar
    document.querySelectorAll('.soft-card, .method-card, .person-card, .print-tile, .video-card, .pain-card').forEach((el) => {
      gsap.from(el, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true
        }
      });
    });

    // Efeito Parallax sutil na imagem hero no Desktop
    if (window.innerWidth > 1023) {
      gsap.to('.hero-img', {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }

  // Lightbox para os prints
  const dialog = document.getElementById('lightbox');
  const dialogImg = dialog?.querySelector('.lightbox-image');
  
  document.querySelectorAll('.js-lightbox').forEach(btn => {
    btn.addEventListener('click', () => {
      if(dialogImg) {
        dialogImg.src = btn.dataset.full;
        dialogImg.alt = btn.querySelector('img')?.alt || 'Depoimento ampliado';
      }
      dialog?.showModal();
    });
  });
  
  dialog?.addEventListener('click', e => {
    if (e.target === dialog || e.target.classList.contains('lightbox-close')) {
      dialog.close();
    }
  });
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && dialog?.open) {
      dialog.close();
    }
  });

  // Load Iframe under demand para Vídeos
  document.querySelectorAll('.js-yt-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.youtubeId;
      const title = card.dataset.title || 'Depoimento em vídeo';
      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.loading = 'lazy';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.title = title;
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
      iframe.style.border = 'none';
      card.replaceWith(iframe);
    }, { once: true });
  });

  // Popup Form Logic
  const overlay = document.getElementById('popup-overlay');
  const closeBtn = document.getElementById('popup-close');
  const progressBar = document.getElementById('popup-progress-bar');
  const totalSteps = 5;
  let currentStep = 1;

  function openPopup() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    goToStep(1);
  }

  function closePopup() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.js-open-form, .btn-conic').forEach(btn => {
    if (btn.tagName === 'A' && btn.getAttribute('href') === '#diagnostico') {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openPopup();
        });
    } else if (btn.classList.contains('js-open-form')) {
        btn.addEventListener('click', openPopup);
    }
  });

  closeBtn?.addEventListener('click', closePopup);
  overlay?.addEventListener('click', (e) => { if (e.target === overlay) closePopup(); });

  function goToStep(step) {
    currentStep = step;
    document.querySelectorAll('.popup-step').forEach(s => s.classList.remove('active'));
    const target = document.querySelector(`.popup-step[data-step="${step}"]`);
    if (target) target.classList.add('active');
    
    const pct = step <= totalSteps ? (step / totalSteps) * 100 : 100;
    if (progressBar) progressBar.style.width = pct + '%';

    if (step === 2) {
      const nomeFull = document.getElementById('lead-nome').value.trim();
      const nome = nomeFull.split(' ')[0];
      const label = target.querySelector('.popup-label');
      if (label && nome) {
        label.innerHTML = `Prazer, ${nome}! Qual o seu melhor WhatsApp para agendarmos o diagnóstico?`;
      }
    }

    if (step === 5) buildSummary();
  }

  function shakeInput(input) {
    input.style.animation = 'none';
    input.offsetHeight;
    input.style.animation = 'shake 0.4s ease';
    input.focus();
    setTimeout(() => input.style.animation = '', 400);
  }

  for (let i = 1; i <= 4; i++) {
    const nextBtn = document.getElementById(`btn-next-${i}`);
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (i === 1 && !document.getElementById('lead-nome').value.trim()) return shakeInput(document.getElementById('lead-nome'));
        if (i === 2 && !document.getElementById('lead-whatsapp').value.trim()) return shakeInput(document.getElementById('lead-whatsapp'));
        if (i === 4 && !document.querySelector('input[name="faturamento"]:checked')) return;
        goToStep(i + 1);
      });
    }
  }

  for (let i = 2; i <= 5; i++) {
    const backBtn = document.getElementById(`btn-back-${i}`);
    if (backBtn) backBtn.addEventListener('click', () => goToStep(i - 1));
  }

  // Phone Mask
  const phoneInput = document.getElementById('lead-whatsapp');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 11) val = val.slice(0, 11);
      if (val.length > 6) val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
      else if (val.length > 2) val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
      else if (val.length > 0) val = `(${val}`;
      e.target.value = val;
    });
  }

  // Auto-advance on faturamento
  document.querySelectorAll('input[name="faturamento"]').forEach(radio => {
    radio.addEventListener('change', () => setTimeout(() => goToStep(5), 300));
  });

  function buildSummary() {
    const summary = document.getElementById('popup-summary');
    if (!summary) return;
    const nome = document.getElementById('lead-nome').value;
    const whatsapp = document.getElementById('lead-whatsapp').value;
    const instagram = document.getElementById('lead-instagram').value || '—';
    const faturamentoRadio = document.querySelector('input[name="faturamento"]:checked');
    const faturamentoLabel = faturamentoRadio ? faturamentoRadio.getAttribute('data-label') : '—';

    summary.innerHTML = `
      <div class="popup-summary__item"><span class="popup-summary__label">Nome</span><span class="popup-summary__value">${nome}</span></div>
      <div class="popup-summary__item"><span class="popup-summary__label">WhatsApp</span><span class="popup-summary__value">${whatsapp}</span></div>
      <div class="popup-summary__item"><span class="popup-summary__label">Instagram</span><span class="popup-summary__value">${instagram}</span></div>
      <div class="popup-summary__item"><span class="popup-summary__label">Faturamento</span><span class="popup-summary__value">${faturamentoLabel}</span></div>
    `;
  }

  function getUTMs() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || '',
      utm_term: urlParams.get('utm_term') || '',
      gclid: urlParams.get('gclid') || '',
      fbclid: urlParams.get('fbclid') || ''
    };
  }

  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const submitBtn = document.getElementById('btn-submit');
  submitBtn?.addEventListener('click', async () => {
    const consentCheckbox = document.getElementById('lead-consent');
    if (consentCheckbox && !consentCheckbox.checked) {
      consentCheckbox.parentElement.style.animation = 'shake 0.4s ease';
      setTimeout(() => consentCheckbox.parentElement.style.animation = '', 400);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Enviando...';

    const faturamentoRadio = document.querySelector('input[name="faturamento"]:checked');
    const phoneRaw = document.getElementById('lead-whatsapp').value;

    const payload = {
      nome: document.getElementById('lead-nome').value,
      telefone: phoneRaw,
      telefone_limpo: phoneRaw.replace(/\D/g, ''),
      perfilArroba: document.getElementById('lead-instagram').value,
      faturamento: {
        value: faturamentoRadio ? faturamentoRadio.value : '',
        label: faturamentoRadio ? faturamentoRadio.getAttribute('data-label') : ''
      },
      lead_id: generateUUID(),
      origem: "lead-form-modal",
      form_name: "advogados_lp_v2",
      pagina: "/advogados-v2",
      criadoEm: new Date().toISOString(),
      atribuicao: getUTMs()
    };

    // GTM event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_submit_success', lead_data: { faturamento: payload.faturamento.value, origem: payload.origem } });

    try {
      await fetch('https://hook.us1.make.com/bk8vzf7u1d7m0fueemgfqemutft9k6ve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors'
      });
    } catch (err) {
      console.error('Webhook error:', err);
    }

    goToStep(6);
  });
});
