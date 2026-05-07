(function () {
  let formReady = false;
  let videoReady = false;
  let printsReady = false;
  let openPopupImpl = null;
  let openVideoImpl = null;

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  function qs(id) {
    return document.getElementById(id);
  }

  function initForm() {
    if (formReady) return;
    formReady = true;

    const overlay = qs('popup-overlay');
    const closeBtn = qs('popup-close');
    const progressBar = qs('popup-progress-bar');
    const totalSteps = 5;
    if (!overlay || !progressBar) return;

    function closePopup() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    function buildSummary() {
      const summary = qs('popup-summary');
      if (!summary) return;
      const nome = qs('lead-nome')?.value || '-';
      const whatsapp = qs('lead-whatsapp')?.value || '-';
      const instagram = qs('lead-instagram')?.value || '-';
      const faturamentoRadio = document.querySelector('input[name="faturamento"]:checked');
      const faturamento = faturamentoRadio?.getAttribute('data-label') || '-';
      summary.innerHTML = `
        <div class="popup-summary__item"><span class="popup-summary__label">Nome</span><span class="popup-summary__value">${escapeHTML(nome)}</span></div>
        <div class="popup-summary__item"><span class="popup-summary__label">WhatsApp</span><span class="popup-summary__value">${escapeHTML(whatsapp)}</span></div>
        <div class="popup-summary__item"><span class="popup-summary__label">Instagram</span><span class="popup-summary__value">${escapeHTML(instagram)}</span></div>
        <div class="popup-summary__item"><span class="popup-summary__label">Faturamento</span><span class="popup-summary__value">${escapeHTML(faturamento)}</span></div>`;
    }

    function goToStep(step) {
      document.querySelectorAll('.popup-step').forEach((item) => item.classList.remove('active'));
      const target = document.querySelector(`.popup-step[data-step="${step}"]`);
      if (target) target.classList.add('active');
      progressBar.style.width = (step <= totalSteps ? (step / totalSteps) * 100 : 100) + '%';

      if (step === 2) {
        const nomeFull = qs('lead-nome')?.value.trim() || '';
        const nome = nomeFull.split(' ')[0];
        const label = target?.querySelector('.popup-label');
        if (label && nome) {
          label.textContent = `Prazer, ${nome}. Qual WhatsApp podemos usar para entrar em contato sobre o diagnostico?`;
        }
      }

      if (step === 5) buildSummary();

      window.setTimeout(() => {
        const input = target?.querySelector('.popup-input');
        if (input) input.focus();
      }, 100);
    }

    function openPopup() {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      goToStep(1);
      window.setTimeout(() => {
        const input = document.querySelector('.popup-step.active .popup-input');
        if (input) input.focus();
      }, 250);
    }

    function shakeInput(input) {
      if (!input) return;
      input.style.animation = 'none';
      input.offsetHeight;
      input.style.animation = 'shake 0.4s ease';
      input.focus();
      window.setTimeout(() => {
        input.style.animation = '';
      }, 400);
    }

    function escapeHTML(str) {
      return String(str).replace(/[&<>'"]/g, (tag) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag]));
    }

    function digitsOnly(str) {
      return String(str || '').replace(/\D/g, '');
    }

    function normalizeArrobaHandle(raw) {
      const handle = String(raw || '').trim().replace(/^@+/, '');
      return handle ? `@${handle}` : '';
    }

    function generateLeadId() {
      if (window.crypto && typeof window.crypto.randomUUID === 'function') {
        return window.crypto.randomUUID();
      }
      return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }

    function getAttributionParams() {
      const params = new URLSearchParams(window.location.search);
      return {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_content: params.get('utm_content') || '',
        utm_term: params.get('utm_term') || '',
        gclid: params.get('gclid') || '',
        fbclid: params.get('fbclid') || ''
      };
    }

    function getCreatedAt() {
      return new Date().toLocaleString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Sao_Paulo'
      }).replace(',', ' as');
    }

    for (let i = 1; i <= 4; i++) {
      const nextBtn = qs(`btn-next-${i}`);
      if (!nextBtn) continue;
      nextBtn.addEventListener('click', () => {
        if (i === 1 && !qs('lead-nome')?.value.trim()) return shakeInput(qs('lead-nome'));
        if (i === 2 && !qs('lead-whatsapp')?.value.trim()) return shakeInput(qs('lead-whatsapp'));
        if (i === 4 && !document.querySelector('input[name="faturamento"]:checked')) return;
        goToStep(i + 1);
      });
    }

    for (let i = 2; i <= 5; i++) {
      const backBtn = qs(`btn-back-${i}`);
      if (backBtn) backBtn.addEventListener('click', () => goToStep(i - 1));
    }

    document.querySelectorAll('.popup-input').forEach((input) => {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          const step = input.closest('.popup-step')?.dataset.step;
          const nextBtn = qs(`btn-next-${step}`);
          if (nextBtn) nextBtn.click();
        }
      });
    });

    qs('lead-whatsapp')?.addEventListener('input', (event) => {
      let val = event.target.value.replace(/\D/g, '');
      if (val.length > 11) val = val.slice(0, 11);
      if (val.length > 6) val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
      else if (val.length > 2) val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
      else if (val.length > 0) val = `(${val}`;
      event.target.value = val;
    });

    document.querySelectorAll('input[name="faturamento"]').forEach((radio) => {
      radio.addEventListener('change', () => window.setTimeout(() => goToStep(5), 260));
    });

    qs('btn-submit')?.addEventListener('click', async () => {
      const consent = qs('lead-consent');
      const consentError = qs('lead-consent-error');
      if (consent && !consent.checked) {
        consentError?.classList.add('is-visible');
        consent.parentElement.style.animation = 'none';
        consent.parentElement.offsetHeight;
        consent.parentElement.style.animation = 'shake 0.4s ease';
        window.setTimeout(() => {
          consent.parentElement.style.animation = '';
        }, 400);
        consent.focus();
        return;
      }
      consentError?.classList.remove('is-visible');

      const submitBtn = qs('btn-submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span style="display:inline-flex;align-items:center;gap:8px;">Enviando...</span>';
      }

      const telefone = qs('lead-whatsapp')?.value || '';
      const faturamentoRadio = document.querySelector('input[name="faturamento"]:checked');
      const payload = {
        lead_id: generateLeadId(),
        nome: qs('lead-nome')?.value.trim() || '',
        perfilArroba: normalizeArrobaHandle(qs('lead-instagram')?.value),
        telefone,
        telefoneDigits: digitsOnly(telefone),
        faturamento: faturamentoRadio?.value || '',
        faturamentoLabel: faturamentoRadio?.getAttribute('data-label') || '',
        consentiuContato: true,
        origem: 'lead-form-modal',
        form_name: 'advogados_lp',
        pagina: '/scale-advogados',
        criadoEm: getCreatedAt(),
        ...getAttributionParams()
      };

      try {
        await fetch('https://hook.us1.make.com/bk8vzf7u1d7m0fueemgfqemutft9k6ve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.error('Webhook error:', err);
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'lead_submit_success', ...payload });
      goToStep(6);
    });

    qs('lead-consent')?.addEventListener('change', (event) => {
      if (event.target.checked) qs('lead-consent-error')?.classList.remove('is-visible');
    });

    closeBtn?.addEventListener('click', closePopup);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closePopup();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && overlay.classList.contains('active')) closePopup();
    });

    openPopupImpl = openPopup;
  }

  function initVideo() {
    if (videoReady) return;
    videoReady = true;

    const lightbox = qs('video-lightbox');
    const content = qs('video-lightbox-content');
    const close = qs('video-lightbox-close');
    if (!lightbox || !content) return;

    function closeVideo() {
      lightbox.classList.remove('active');
      content.innerHTML = '';
      document.body.style.overflow = '';
    }

    openVideoImpl = function openVideo(id) {
      if (!id) return;
      content.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    close?.addEventListener('click', closeVideo);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeVideo();
    });
  }

  function initPrints() {
    if (printsReady) return;
    printsReady = true;

    const container = qs('stagger-testimonials');
    const prevBtn = qs('stagger-prev');
    const nextBtn = qs('stagger-next');
    const lightbox = qs('lightbox');
    const lightboxImage = qs('lightbox-image');
    const lightboxClose = qs('lightbox-close');
    if (!container || !lightbox || !lightboxImage) return;

    const images = [];
    for (let i = 1; i <= 19; i++) {
      images.push(`depoimentos-whatsapp/testimonial-${i.toString().padStart(2, '0')}.webp`);
    }

    let items = images.map((src) => ({ id: Math.random(), src }));
    let cardWidth = window.innerWidth >= 640 ? 300 : 238;

    function render() {
      const fragment = document.createDocumentFragment();
      items.forEach((item, index) => {
        const position = items.length % 2 ? index - (items.length - 1) / 2 : index - items.length / 2;
        const isCenter = position === 0;
        const absPos = Math.abs(position);
        const card = document.createElement('div');
        card.className = `stagger-card ${isCenter ? 'stagger-card--center' : ''}`;
        card.style.width = cardWidth + 'px';
        card.style.height = (cardWidth * 1.85) + 'px';
        card.style.transform = `translate(-50%, -50%) translateX(${(cardWidth / 1.85) * position}px) translateY(${isCenter ? -22 : position % 2 ? 14 : -14}px) rotate(${isCenter ? 0 : position % 2 ? 3 : -3}deg)`;
        card.style.zIndex = isCenter ? 10 : 10 - absPos;
        card.style.opacity = isCenter ? 1 : Math.max(0, 1 - absPos * 0.25);
        card.style.filter = isCenter ? 'blur(0px) brightness(1)' : `blur(${absPos}px) brightness(${1 - absPos * 0.1})`;
        if (absPos < 4) card.onclick = () => isCenter ? openPrint(item.src) : handleMove(position);

        const img = document.createElement('img');
        img.alt = 'Print de depoimento';
        img.loading = 'lazy';
        img.decoding = 'async';
        if (absPos < 4) img.src = item.src;
        else img.dataset.src = item.src;
        card.appendChild(img);
        fragment.appendChild(card);
      });
      container.replaceChildren(fragment);
    }

    function handleMove(steps) {
      if (steps === 0) return;
      const newItems = [...items];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newItems.shift();
          newItems.push({ ...item, id: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newItems.pop();
          newItems.unshift({ ...item, id: Math.random() });
        }
      }
      items = newItems;
      render();
    }

    function openPrint(src) {
      lightboxImage.src = src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closePrint() {
      lightbox.classList.remove('active');
      lightboxImage.src = '';
      document.body.style.overflow = '';
    }

    prevBtn?.addEventListener('click', () => handleMove(-1));
    nextBtn?.addEventListener('click', () => handleMove(1));
    lightboxClose?.addEventListener('click', closePrint);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closePrint();
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        cardWidth = window.innerWidth >= 640 ? 300 : 238;
        render();
      }, 150);
    });

    render();
  }

  const api = {
    openPopup() {
      initForm();
      if (openPopupImpl) openPopupImpl();
    },
    openVideo(id) {
      initVideo();
      if (openVideoImpl) openVideoImpl(id);
    },
    initPrints
  };

  window.ScaleAdvogadosInteractions = api;
  ready(() => {
    initForm();
    initVideo();
  });
})();
