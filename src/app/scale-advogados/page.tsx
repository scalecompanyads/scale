
"use client";

import React, { useEffect } from 'react';
import './scale-advogados.css';
import { legalAreas, oabCompliance, acquisitionPillars, technologyImpactCards, legalTeam, legalProofAssets, legalOffer } from '@/data/legalSeo';
import ScaleAdvogadosV3Hero from '@/components/legal/ScaleAdvogadosV3Hero';
import { MousePointerClick, Gauge, LineChart, Layers, PlayCircle, Shield, Target, TrendingUp, Users, Scale, MessageCircle, FileText, CheckCircle2, ChevronRight, BarChart3, Smartphone, Zap, Search, Eye, Building2, Briefcase, Calculator, Handshake, Users2, Building, Scale as ScaleIcon, ArrowRight, ShieldCheck, Mail, Key } from 'lucide-react';

const conversionCards = [
  {
    title: 'Verba',
    desc: 'Agência generalista compra volume. No jurídico, volume barato costuma virar triagem cara, WhatsApp lotado e equipe comercial cansada.',
    Icon: MousePointerClick,
  },
  {
    title: 'Filtro',
    desc: 'A campanha já nasce com intenção, negativas e linguagem de qualificação para reduzir curiosos antes do primeiro contato.',
    Icon: Gauge,
  },
  {
    title: 'WhatsApp',
    desc: 'O contato chega com mais contexto, área, urgência e fit comercial. Menos atendimento desperdiçado, mais conversa com chance real.',
    Icon: FileText,
  },
  {
    title: 'Contrato',
    desc: 'A leitura não termina no lead. Acompanhamos origem, qualidade, atendimento e sinais que aproximam mídia de honorários.',
    Icon: LineChart,
  },
];

const badLeadTypes = [
  {
    label: 'Gente curiosa',
    description: 'Que quer informacao gratuita, nao contrato.',
  },
  {
    label: 'Gente sem dinheiro',
    description: 'Que nao tem como pagar os honorarios.',
  },
  {
    label: 'Gente que nunca vai fechar',
    description: 'Que ja decidiu nao contratar, so esta pesquisando.',
  },
];

const agencyFailures = [
  'Nao analisam o atendimento',
  'Nao entendem o funil',
  'Nao acompanham o fechamento',
  'Nao otimizam com base em resultado real',
];

const technologyDifferentials = [
  {
    title: 'Milissegundos valem contratos',
    desc:
      'Desenvolvemos landing pages em Astro e JAMstack para que o clique pago encontre uma página leve, estável e pronta para converter no celular.',
    Icon: Layers,
  },
  {
    title: 'Grafite, silêncio visual e respeito',
    desc:
      'A estética é parte da venda: grafite, contraste limpo e minimalismo institucional criam autoridade sem parecer anúncio desesperado.',
    Icon: Eye,
  },
  {
    title: 'O fim do achismo comercial',
    desc:
      'Mapeamos clique no WhatsApp, formulário, origem da campanha e sinais de qualidade para saber qual palavra-chave trouxe oportunidade real.',
    Icon: BarChart3,
  },
];

const specialtyHighlights = [
  {
    title: 'Advocacia Criminal: urgência e sigilo',
    href: '/trafego-pago-para-advogados/advogados-criminalistas',
    desc:
      'O mercado criminal não perdoa lentidão. Capturamos o momento da dor sem sensacionalismo, com página rápida, mensagem discreta e foco em conversa válida.',
    metrics: ['custo por conversa válida', 'tempo até primeiro atendimento'],
  },
  {
    title: 'Direito Previdenciário: triagem documental',
    href: '/trafego-pago-para-advogados/advogados-previdenciarios',
    desc:
      'Volume vazio quebra a operação previdenciária. O funil separa curiosidade de demanda madura e favorece contatos com documentos e contexto para análise.',
    metrics: ['custo por lead com documento', 'CNIS e laudos prontos'],
  },
  {
    title: 'Tributário e Empresarial: aquisição B2B',
    href: '/trafego-pago-para-advogados/advogados-empresariais',
    secondaryHref: '/trafego-pago-para-advogados/advogados-tributaristas',
    desc:
      'CEO e diretor financeiro não respondem a anúncio amador. O funil filtra porte, cargo, escopo e problema antes da conversa comercial.',
    metrics: ['custo por decisor', 'porte da empresa'],
  },
  {
    title: 'Família e Imobiliário: clareza patrimonial',
    href: '/trafego-pago-para-advogados/advogados-de-familia',
    secondaryHref: '/trafego-pago-para-advogados/advogados-imobiliarios',
    desc:
      'Demandas sensíveis exigem discrição e definição. Segmentamos divórcio, guarda, inventário, locação e bloqueios patrimoniais sem misturar dores diferentes.',
    metrics: ['custo por demanda definida', 'privacidade no contato'],
  },
];

const faqs = [
  {
    question: 'Por que a Scale não trata a aquisição de contratos jurídicos como um marketing comum?',
    answer: 'Porque fechar contratos de alto padrão exige intenção qualificada, confiança técnica e processos ágeis de atendimento. Por isso, nossa assessoria não foca em curtidas ou cliques baratos, mas sim em estruturar uma máquina previsível que une anúncios de intenção, páginas ultrarrápidas, automações inteligentes de qualificação primária e treinamento comercial de fechamento.'
  },
  {
    question: 'Quanto tempo leva para a máquina começar a gerar reuniões e contratos?',
    answer: 'A nossa implementação completa leva até 15 dias para ir ao ar. Logo nas primeiras semanas com os anúncios ativos e o funil comercial alinhado, os primeiros leads qualificados começam a chegar. O tempo até as assinaturas de contrato varia conforme o ticket e a área do escritório, mas o sistema de atração é desenhado para acelerar esse ciclo comercial desde o primeiro dia.'
  },
  {
    question: 'A implementação da máquina de aquisição respeita o Provimento 205/2021 da OAB?',
    answer: 'Absolutamente. Toda a comunicação, design visual dos criativos, landing pages e mensagens automáticas são estruturados seguindo o caráter estritamente informativo e sóbrio exigido pelo código de ética da OAB. Nada vai ao ar sem a prévia validação e aprovação do seu escritório.'
  }
];



export default function ScaleAdvogadosPage() {
  useEffect(() => {
    
      (function initSpotlightTestimonials() {
        function run() {
          // Tab switcher logic
          const tabs = document.querySelectorAll('.scale-spotlight-tab');
          const contents = document.querySelectorAll('.scale-spotlight-content');

          tabs.forEach(tab => {
            tab.addEventListener('click', () => {
              const target = (tab as HTMLElement).dataset.target;

              tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
              });
              contents.forEach(c => c.classList.remove('active'));

              tab.classList.add('active');
              tab.setAttribute('aria-selected', 'true');
              const targetContent = document.getElementById(target as string);
              if (targetContent) {
                targetContent.classList.add('active');
              }
            });
          });

          // Lightbox trigger logic
          const triggerElements = document.querySelectorAll('.scale-spotlight-img-trigger');
          const lightbox = document.getElementById('scale-lightbox');
          const lightboxImage = document.getElementById('scale-lightbox-image');

          if (lightbox && lightboxImage) {
            triggerElements.forEach(trigger => {
              trigger.addEventListener('click', () => {
                const img = trigger.querySelector('.scale-spotlight-img');
                if (img) {
                  (lightboxImage as HTMLImageElement).src = (img as HTMLImageElement).src;
                  if(lightbox) lightbox.classList.add('active');
                  if(document.body) document.body.style.overflow = 'hidden';
                }
              });
            });
          }
        }

        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
          window.requestIdleCallback(run, { timeout: 1200 });
          return;
        }

        globalThis.setTimeout(run, 180);
      })();
    


    (function initScaleFormModal() {
      var modal   = document.getElementById('scale-form-modal');
      var closeBtn = document.getElementById('scale-form-modal-close');
      var panel   = document.getElementById('scale-form-panel');
      var success = document.getElementById('scale-form-success');
      var closeSuccessBtn = document.getElementById('sfm-close-success');
      var submitBtn = document.getElementById('sfm-submit');
      var errorEl = document.getElementById('sfm-error');

      var MAKE_URL  = 'https://hook.us1.make.com/bk8vzf7u1d7m0fueemgfqemutft9k6ve';
      var EXCEL_URL = 'https://script.google.com/macros/s/AKfycbwdcXNSA-sUdCtT4JXky5JMTDihkGb1zNL41DLlgFTpOU1aMWs2xw0HmxpWiMIKYIDx/exec';

      var faturamentoLabels = {
        menos_30k: 'Menos de R$ 30 mil',
        '30_50k': 'Entre R$ 30 mil e R$ 50 mil',
        '50_100k': 'Entre R$ 50 mil e R$ 100 mil',
        '100k_plus': 'Mais de R$ 100 mil',
        prefiro_nao_informar: 'Prefiro não informar'
      };

      function stripCC(v: string) {
        // Remove +55 ou 55 do início se o número total tiver 12 ou 13 dígitos (com código do país)
        var d = v.replace(/\D/g, '');
        if ((d.length === 12 || d.length === 13) && d.slice(0, 2) === '55') {
          d = d.slice(2);
        }
        return d;
      }

      function maskPhone(v: string) {
        var d = stripCC(v).slice(0, 11);
        if (d.length <= 2) return d.length ? '(' + d : d;
        if (d.length <= 6) return '(' + d.slice(0,2) + ') ' + d.slice(2);
        if (d.length <= 10) return '(' + d.slice(0,2) + ') ' + d.slice(2,6) + '-' + d.slice(6);
        return '(' + d.slice(0,2) + ') ' + d.slice(2,7) + '-' + d.slice(7);
      }

      function digitsOnly(v: string) { return stripCC(v.replace(/\D/g,'')); }

      function getAttribution() {
        if (typeof window === 'undefined') return {};
        var p = new URLSearchParams(window.location.search);
        return {
          utm_source: p.get('utm_source') || '',
          utm_medium: p.get('utm_medium') || '',
          utm_campaign: p.get('utm_campaign') || '',
          utm_content: p.get('utm_content') || '',
          utm_term: p.get('utm_term') || '',
          gclid: p.get('gclid') || '',
          fbclid: p.get('fbclid') || ''
        };
      }

      function openModal() {
        if (!modal) return;
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';
        if(document.body) document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        if (!modal) return;
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
        if(document.body) document.body.style.overflow = '';
        // Reset form
        if (panel) panel.style.display = 'block';
        if (success) success.style.display = 'none';
        if (errorEl) { errorEl.style.display = 'none'; errorEl.textContent = ''; }
        ['sfm-nome','sfm-tel','sfm-email','sfm-fat'].forEach(function(id) {
          var el = (document.getElementById(id) as HTMLInputElement);
          if (el) el.value = '';
        });
        var arrobaEl = (document.getElementById('sfm-arroba') as HTMLInputElement);
        if (arrobaEl) arrobaEl.value = '@';
        if (submitBtn) { (submitBtn as HTMLButtonElement).disabled = false; }
      }

      (globalThis as any).window.__openScaleModal = openModal;

      if (closeBtn) closeBtn.addEventListener('click', closeModal);
      if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeModal);
      if (modal) modal.addEventListener('mousedown', function(e) {
        if (e.target === modal) closeModal();
      });

      // Phone mask
      var telEl = (document.getElementById('sfm-tel') as HTMLInputElement);
      if (telEl) {
        telEl.addEventListener('input', function() {
          var pos = (this as HTMLInputElement).selectionStart;
          (this as HTMLInputElement).value = maskPhone((this as HTMLInputElement).value);
        });
      }

      // Hero CTA — intercept hash link
      document.querySelectorAll('a[href="#scale-form-modal"]').forEach(function(a) {
        a.addEventListener('click', function(e) {
          e.preventDefault();
          openModal();
        });
      });

      // Keyboard close
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.pointerEvents !== 'none') closeModal();
      });

      if (submitBtn) {
        submitBtn.addEventListener('click', function() {
          if (errorEl) { errorEl.style.display = 'none'; errorEl.textContent = ''; }

          var nome    = ((document.getElementById('sfm-nome') as HTMLInputElement) || {} as HTMLInputElement).value || '';
          var tel     = ((document.getElementById('sfm-tel') as HTMLInputElement) || {} as HTMLInputElement).value || '';
          var email   = ((document.getElementById('sfm-email') as HTMLInputElement) || {} as HTMLInputElement).value || '';
          var arroba  = ((document.getElementById('sfm-arroba') as HTMLInputElement) || {} as HTMLInputElement).value || '';
          var fat     = ((document.getElementById('sfm-fat') as HTMLInputElement) || {} as HTMLInputElement).value || '';

          if (nome.trim().length < 2) { showError('Informe seu nome completo.'); return; }
          if (digitsOnly(tel).length < 10) { showError('Informe um WhatsApp válido com DDD.'); return; }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { showError('Informe um e-mail válido.'); return; }
          if (!fat) { showError('Selecione uma faixa de faturamento.'); return; }

          var handle = arroba.trim();
          if (handle && !handle.startsWith('@')) handle = '@' + handle;

          var leadId = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : ('lead-' + Date.now() + '-' + Math.random().toString(36).slice(2,10));
          var attribution = getAttribution();

          var payload = Object.assign({
            lead_id: leadId,
            nome: nome.trim(),
            email: email.trim(),
            perfilArroba: handle,
            telefone: tel,
            telefoneDigits: digitsOnly(tel),
            faturamento: fat,
            faturamentoLabel: faturamentoLabels[fat as keyof typeof faturamentoLabels] || fat,
            consentiuContato: true,
            origem: 'scale-advogados-modal',
            form_name: 'scale_advogados_lp',
            pagina: '/scale-advogados',
            criadoEm: new Date().toISOString()
          }, attribution);

          // GTM push
          if (typeof window !== 'undefined') {
            var w = window;
            (w as any).dataLayer = (w as any).dataLayer || [];
            (w as any).dataLayer.push({ event: 'lead_submit_success', payload: payload });
          }

          // Show success immediately
          if (panel) panel.style.display = 'none';
          if (success) success.style.display = 'block';

          // Webhooks (fire-and-forget)
          fetch(MAKE_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(function(){});
          fetch(EXCEL_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload), mode: 'no-cors' }).catch(function(){});
        });
      }

      function showError(msg: string) {
        if (!errorEl) return;
        errorEl.textContent = msg;
        errorEl.style.display = 'block';
      }
    })();
  


    (function initScaleSections() {
      function scheduleTask(callback: any) {
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
          window.requestIdleCallback(callback, { timeout: 1500 });
          return;
        }

        globalThis.setTimeout(callback, 250);
      }

      function run() {
        // Videos Lightbox
        const videoLightbox = document.getElementById('scale-video-lightbox');
        const videoContent = document.getElementById('scale-video-lightbox-content');
        const videoClose = document.getElementById('scale-video-lightbox-close');

        function closeVideo() {
          if (!videoLightbox) return;
          videoLightbox.classList.remove('active');
          if (videoContent) videoContent.innerHTML = '';
          if(document.body) document.body.style.overflow = '';
        }

        document.querySelectorAll('.scale-video-wrapper').forEach(function(wrapper) {
          wrapper.addEventListener('click', function() {
            var id = (wrapper as HTMLElement).dataset.videoId;
            if (!id) return;

            var video = wrapper.querySelector('video');
            if (video) {
              var btn = wrapper.querySelector('.scale-video-unmute-btn');
              if (video.muted) {
                video.muted = false;
                video.currentTime = 0;
                video.play();
                if (btn) btn.classList.add('hidden');
              } else {
                if (video.paused) {
                  video.play();
                  if (btn) btn.classList.add('hidden');
                } else {
                  video.pause();
                }
              }
              return;
            }

            var iframe = wrapper.querySelector('iframe');
            if (iframe) {
              var src = iframe.src;
              if (src.indexOf('mute=1') !== -1) {
                iframe.src = src.replace('mute=1', 'mute=0');
              }
              return;
            }
            if (!videoContent) return;
            videoContent.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoPlay=1&rel=0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            if (videoLightbox) videoLightbox.classList.add('active');
            if(document.body) document.body.style.overflow = 'hidden';
          });
        });

        if (videoClose) videoClose.addEventListener('click', closeVideo);
        if (videoLightbox) videoLightbox.addEventListener('click', function(e) {
          if (e.target === videoLightbox) closeVideo();
        });

        // Terminal typing simulation
        var terminalMessages = {
          leads: [
            '→ Lead: Maria Silva · Direito Trabalhista',
            '→ Lead: Carlos Souza · Revisão de Contrato',
            '→ Lead: Ana Oliveira · Divórcio Consensual',
            '→ Lead: Roberto Lima · Holding Familiar',
            '→ Qualificação: 4/4 leads com fit',
            '→ Lead: Fernanda Costa · Direito Imobiliário',
            '→ Lead: Lucas Almeida · Planejamento Sucessório',
          ],
          whatsapp: [
            '📱 "Boa tarde, preciso de um advogado trabalhista"',
            '📱 "Vi o anúncio de vocês, quanto custa uma consulta?"',
            '📱 "Meu caso é urgente, podem me atender hoje?"',
            '📱 "Quero agendar reunião sobre holding familiar"',
            '📱 "Recebi indicação de vocês, como funciona?"',
            '📱 "Preciso revisar um contrato de locação"',
          ],
          contratos: [
            '✓ Contrato #247 · R$ 4.500 · Assinado',
            '✓ Contrato #248 · R$ 12.000 · Assinado',
            '⏳ Pipeline: 8 em negociação',
            '✓ Contrato #249 · R$ 3.200 · Assinado',
            '$ Receita mês: R$ 47.800',
            '✓ Contrato #250 · R$ 8.900 · Assinado',
          ]
        };
        var terminalIndexes = { leads: 0, whatsapp: 0, contratos: 0 };

        function addTerminalLine(key: 'leads' | 'whatsapp' | 'contratos') {
          var el = document.querySelector('[data-terminal="' + key + '"]');
          if (!el) return;
          var msgs = terminalMessages[key];
          var msg = msgs[terminalIndexes[key] % msgs.length];
          terminalIndexes[key]++;
          var p = document.createElement('p');
          p.className = 'scale-terminal__line';
          p.innerHTML = '<span class="scale-terminal__prompt">$</span> ' + msg;
          p.style.animationDelay = '0s';
          el.appendChild(p);
          if (el.children.length > 6) el.removeChild(el.children[0]);
          el.scrollTop = el.scrollHeight;
        }

        setInterval(function() { addTerminalLine('leads'); }, 3200);
        setInterval(function() { addTerminalLine('whatsapp'); }, 2800);
        setInterval(function() { addTerminalLine('contratos'); }, 4000);
        setTimeout(function() { addTerminalLine('leads'); }, 800);
        setTimeout(function() { addTerminalLine('whatsapp'); }, 1200);
        setTimeout(function() { addTerminalLine('contratos'); }, 1600);


        // Prints Infinite Marquee (Legacy) - Lightbox only
        var container = document.getElementById('scale-stagger-testimonials');
        var lightbox = document.getElementById('scale-lightbox');
        var lightboxImage = document.getElementById('scale-lightbox-image');
        var lightboxClose = document.getElementById('scale-lightbox-close');

        function closePrint() {
          if (lightbox) lightbox.classList.remove('active');
          if (lightboxImage) (lightboxImage as HTMLImageElement).src = '';
          if(document.body) document.body.style.overflow = '';
        }

        if (lightboxClose) lightboxClose.addEventListener('click', closePrint);
        if (lightbox) {
          lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) closePrint();
          });
        }

        if (container && lightbox && lightboxImage) {
          var images = [];
          for (var i = 1; i <= 19; i++) {
            images.push('/scale-advogados/depoimentos-whatsapp/testimonial-' + (i < 10 ? '0' + i : i) + '.webp');
          }

          // Double array for seamless loop marquee
          var doubledImages = images.concat(images);

          function renderPrints() {
            var fragment = document.createDocumentFragment();
            doubledImages.forEach(function(src) {
              var card = document.createElement('div');
              card.className = 'scale-print-marquee-card';
              
              card.onclick = function() {
                openPrint(src);
              };

              var img = document.createElement('img');
              img.alt = 'Print de depoimento';
              img.loading = 'lazy';
              img.decoding = 'async';
              (img as HTMLImageElement).src = src;

              card.appendChild(img);
              fragment.appendChild(card);
            });
            if(container) container.appendChild(fragment);
          }

          function openPrint(src: string) {
            (lightboxImage as HTMLImageElement).src = src;
            if(lightbox) lightbox.classList.add('active');
            if(document.body) document.body.style.overflow = 'hidden';
          }

          function mountPrints() {
            if ((container as HTMLElement).dataset.ready === 'true') return;
            (container as HTMLElement).dataset.ready = 'true';
            scheduleTask(renderPrints);
          }

          if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function(entries) {
              var isVisible = entries.some(function(entry) {
                return entry.isIntersecting;
              });

              if (!isVisible) return;
              observer.disconnect();
              mountPrints();
            }, { rootMargin: '320px 0px' });

            observer.observe(container);
          } else {
            mountPrints();
          }
        }
      }
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
      } else {
        run();
      }
    })();
  
  }, []);

  return (
    <>
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KS5L52P9');`,
        }}
      />
      {/* End Google Tag Manager */}

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KS5L52P9"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}

  <div className="paid-advogados">
    <ScaleAdvogadosV3Hero
      eyebrow="Aquisição Jurídica"
      heading="Sua Advocacia com uma máquina"
      headingAccent="previsível e escalável de aquisição de clientes:"
      description="Descubra como implementamos em 15 dias a maior engrenagem de aquisição para escritórios de advocacia."
      primaryCtaHref="#scale-form-modal"
      primaryCtaLabel="Solicitar diagnóstico"
    />

    {/*  PIPELINE ANIMADO + TERMINAIS  */}
    <section className="scale-pipeline-section">
      <div className="scale-pipeline-container">
        {/*  Nós superiores  */}
        <div className="scale-pipeline-nodes">
          <div className="scale-pipeline-node">
            <div className="scale-pipeline-node__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <span className="scale-pipeline-node__label">AQUISIÇÃO</span>
          </div>
          <div className="scale-pipeline-node">
            <div className="scale-pipeline-node__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
            <span className="scale-pipeline-node__label">CRIATIVOS</span>
          </div>
          <div className="scale-pipeline-node">
            <div className="scale-pipeline-node__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <span className="scale-pipeline-node__label">CRM</span>
          </div>
          <div className="scale-pipeline-node">
            <div className="scale-pipeline-node__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span className="scale-pipeline-node__label">COMERCIAL</span>
          </div>
        </div>

        {/*  Linhas dos ícones → hub + hub → terminais  */}
        <div className="scale-pipeline-svg-wrap">
          <svg className="scale-pipeline-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {/*  Linhas verticais de cada ícone (12.5%, 37.5%, 62.5%, 87.5%)  */}
            <line className="scale-pipeline-line-svg" x1="12.5%" y1="0" x2="12.5%" y2="40" />
            <line className="scale-pipeline-line-svg" x1="37.5%" y1="0" x2="37.5%" y2="40" />
            <line className="scale-pipeline-line-svg" x1="62.5%" y1="0" x2="62.5%" y2="40" />
            <line className="scale-pipeline-line-svg" x1="87.5%" y1="0" x2="87.5%" y2="40" />
            {/*  Linha horizontal  */}
            <line className="scale-pipeline-line-svg" x1="12.5%" y1="40" x2="87.5%" y2="40" />
            {/*  Linha central descendo  */}
            <line className="scale-pipeline-line-svg" x1="50%" y1="40" x2="50%" y2="100" />
            {/*  Beams animados descendo dos ícones  */}
            <line className="scale-pipeline-beam-svg scale-pipeline-beam--v" x1="12.5%" y1="0" x2="12.5%" y2="40" />
            <line className="scale-pipeline-beam-svg scale-pipeline-beam--v" x1="37.5%" y1="0" x2="37.5%" y2="40" />
            <line className="scale-pipeline-beam-svg scale-pipeline-beam--v" x1="62.5%" y1="0" x2="62.5%" y2="40" />
            <line className="scale-pipeline-beam-svg scale-pipeline-beam--v" x1="87.5%" y1="0" x2="87.5%" y2="40" />
            {/*  Beam horizontal  */}
            <line className="scale-pipeline-beam-svg scale-pipeline-beam--h" x1="12.5%" y1="40" x2="87.5%" y2="40" />
            {/*  Beam central descendo  */}
            <line className="scale-pipeline-beam-svg scale-pipeline-beam--down" x1="50%" y1="40" x2="50%" y2="100" />
          </svg>
        </div>

        {/*  Nó central (hub)  */}
        <div className="scale-pipeline-hub">
          <div className="scale-pipeline-hub__icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </div>
        </div>

        {/*  Terminais Mac  */}
        <div className="scale-pipeline-terminals">
          <div className="scale-terminal">
            <div className="scale-terminal__bar">
              <span className="scale-terminal__dot scale-terminal__dot--red"></span>
              <span className="scale-terminal__dot scale-terminal__dot--yellow"></span>
              <span className="scale-terminal__dot scale-terminal__dot--green"></span>
              <span className="scale-terminal__title">~/leads · ativos</span>
            </div>
            <div className="scale-terminal__body" data-terminal="leads">
              <p className="scale-terminal__line"><span className="scale-terminal__prompt">$</span> novo lead recebido...</p>
            </div>
          </div>
          <div className="scale-terminal scale-terminal--highlight">
            <div className="scale-terminal__bar">
              <span className="scale-terminal__dot scale-terminal__dot--red"></span>
              <span className="scale-terminal__dot scale-terminal__dot--yellow"></span>
              <span className="scale-terminal__dot scale-terminal__dot--green"></span>
              <span className="scale-terminal__title">~/whatsapp · rec</span>
            </div>
            <div className="scale-terminal__body" data-terminal="whatsapp">
              <p className="scale-terminal__line"><span className="scale-terminal__prompt">$</span> conectando...</p>
            </div>
          </div>
          <div className="scale-terminal">
            <div className="scale-terminal__bar">
              <span className="scale-terminal__dot scale-terminal__dot--red"></span>
              <span className="scale-terminal__dot scale-terminal__dot--yellow"></span>
              <span className="scale-terminal__dot scale-terminal__dot--green"></span>
              <span className="scale-terminal__title">~/contratos</span>
            </div>
            <div className="scale-terminal__body" data-terminal="contratos">
              <p className="scale-terminal__line"><span className="scale-terminal__prompt">$</span> pipeline carregando...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

{/*  SEÇÃO TESTEMUNHOS DESTAQUES (RESULTADOS REAIS)  */}
        <section className="scale-section scale-section--dark scale-spotlight-section">
      <div className="scale-container">
        {/*  Topo da Seção  */}
        <div className="scale-section-heading">
          <span className="scale-kicker">Resultados reais de operações reais</span>
          <h2>Não são promessas, são honorários mapeados de quem superou a dependência da indicação.</h2>
        </div>

        {/*  Menu de Abas (Tabs)  */}
        <div className="scale-spotlight-tabs-wrapper">
          <div className="scale-spotlight-tabs" role="tablist" aria-label="Casos de sucesso de advogados">
            <button className="scale-spotlight-tab active" role="tab" aria-selected="true" data-target="spotlight-case-01">
              R$ 300k Mapeados
            </button>
            <button className="scale-spotlight-tab" role="tab" aria-selected="false" data-target="spotlight-case-02">
              R$ 14,6k em 2 Contratos
            </button>
            <button className="scale-spotlight-tab" role="tab" aria-selected="false" data-target="spotlight-case-03">
              R$ 8,4k em 5 Dias
            </button>
            <button className="scale-spotlight-tab" role="tab" aria-selected="false" data-target="spotlight-case-04">
              Contrato no 1º Dia
            </button>
          </div>
        </div>

        {/*  Container de Casos Spotlight  */}
        <div className="scale-spotlight-container">
          
          {/*  Caso 01 (R$ 300k)  */}
          <div className="scale-spotlight-content active" id="spotlight-case-01" role="tabpanel">
            <div className="scale-spotlight-visual-side">
              <div className="scale-phone-mockup scale-spotlight-img-trigger">
                <div className="scale-phone-screen">
                  <img src="/scale-advogados/assets/whatsapp-testimonial-02.webp" alt="Testemunho Miranda Advogados - R$ 300k de honorários" className="scale-spotlight-img" />
                  <div className="scale-phone-overlay">
                    <div className="scale-phone-expand-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scale-spotlight-text-side">
              <blockquote className="scale-spotlight-quote">
                <p>
                  "Se tudo der certo, tem uns 300k de honorários engatilhados. E na expectativa para os próximos meses."
                </p>
              </blockquote>
            </div>
          </div>

          {/*  Caso 02 (R$ 14,6k)  */}
          <div className="scale-spotlight-content" id="spotlight-case-02" role="tabpanel">
            <div className="scale-spotlight-visual-side">
              <div className="scale-phone-mockup scale-spotlight-img-trigger">
                <div className="scale-phone-screen">
                  <img src="/scale-advogados/assets/whatsapp-testimonial-01.webp" alt="Testemunho Dra. Ester Souza - R$ 14,6k em contratos" className="scale-spotlight-img" />
                  <div className="scale-phone-overlay">
                    <div className="scale-phone-expand-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scale-spotlight-text-side">
              <blockquote className="scale-spotlight-quote">
                <p>
                  "Nós estamos em contato com todos os leads que chegaram. Todos engajaram. 02 fecharam contrato e estamos em tratativa com os demais. 5750,00 e 8927,00."
                </p>
              </blockquote>
            </div>
          </div>

          {/*  Caso 03 (R$ 8,4k em 5 dias)  */}
          <div className="scale-spotlight-content" id="spotlight-case-03" role="tabpanel">
            <div className="scale-spotlight-visual-side">
              <div className="scale-phone-mockup scale-spotlight-img-trigger">
                <div className="scale-phone-screen">
                  <img src="/scale-advogados/assets/whatsapp-testimonial-04.webp" alt="Testemunho Dra. Thalyta Caline - R$ 8,4k em 5 dias" className="scale-spotlight-img" />
                  <div className="scale-phone-overlay">
                    <div className="scale-phone-expand-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scale-spotlight-text-side">
              <blockquote className="scale-spotlight-quote">
                <p>
                  "Que maravilhhaaa, primeiro contrato de muitos fechado. E olha que só temos 5 dias de campanhas ativas... Fechamos este contrato por R$ 8.400,00."
                </p>
              </blockquote>
            </div>
          </div>

          {/*  Caso 04 (Contrato no 1º Dia)  */}
          <div className="scale-spotlight-content" id="spotlight-case-04" role="tabpanel">
            <div className="scale-spotlight-visual-side">
              <div className="scale-phone-mockup scale-spotlight-img-trigger">
                <div className="scale-phone-screen">
                  <img src="/scale-advogados/assets/whatsapp-testimonial-05.webp" alt="Testemunho Contrato no 1º Dia" className="scale-spotlight-img" />
                  <div className="scale-phone-overlay">
                    <div className="scale-phone-expand-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scale-spotlight-text-side">
              <blockquote className="scale-spotlight-quote">
                <p>
                  "Vocês já têm algum depoimento de contrato fechado em 1 dia de campanha pagando honorários iniciais? Se não, agora vocês tem! Boaaaaa primeiro lead e já veio fechamento."
                </p>
              </blockquote>
            </div>
          </div>

        </div>

        {/*  CTA de Depoimentos  */}
        <div className="scale-spotlight-cta" style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}>
          <button type="button" className="scale-btn-cta" onClick={() => (globalThis as any).window.__openScaleModal()}>
            <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true" focusable="false" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.74.45 3.43 1.31 4.92L2 22l5.32-1.39a9.87 9.87 0 0 0 4.71 1.2h.01c5.46 0 9.9-4.44 9.9-9.9a9.86 9.86 0 0 0-2.89-7ZM12.04 20.14h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.16.83.84-3.08-.2-.32a8.18 8.18 0 0 1-1.26-4.35c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.24.85 5.79 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.13 8.24Zm4.5-6.16c-.25-.13-1.47-.73-1.7-.82-.23-.08-.39-.12-.56.13-.16.24-.64.81-.78.97-.14.16-.28.18-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.24-.01-.37.11-.5.11-.11.25-.28.37-.42.13-.14.17-.24.25-.4.08-.16.04-.3-.02-.42-.07-.13-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.69 2.57 4.09 3.61.57.25 1.02.4 1.37.5.58.18 1.1.15 1.52.09.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29Z"/>
            </svg>
            Ver plano para meu escritório
          </button>
        </div>
      </div>
    </section>

{/*  Script de Abas e Lightbox dos Depoimentos  */}
    

    {/*  VIDEOS  */}
    <section className="scale-section scale-section--dark scale-section--proof" id="videos" style={{ paddingTop: '0', paddingBottom: '5rem' }}>
      <div className="scale-container">
        <div className="scale-section-heading" style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span className="scale-kicker">Histórias de Sucesso</span>
          <h2>Relatos em vídeo de quem vivenciou a implementação</h2>
        </div>

        <div className="scale-videos__grid">
          <div className="scale-video-wrapper scale-video-card scale-video-card--inline scale-video-card--local" data-video-id="bichara-local">
            <video
              src="/scale-advogados/assets/bichara.mp4"
              autoPlay
              muted
              loop
              playsInline
             
              style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', border: '0' }}
            ></video>
            <button type="button" className="scale-video-unmute-btn" aria-label="Ver depoimento com áudio">
              Clique aqui para ver o depoimento
            </button>
          </div>
          <div className="scale-video-wrapper scale-video-card scale-video-card--inline scale-video-card--local" data-video-id="vitor-local">
            <video
              src="/scale-advogados/assets/depoimento-vitor.mp4"
              autoPlay
              muted
              loop
              playsInline
             
              style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', border: '0' }}
            ></video>
            <button type="button" className="scale-video-unmute-btn" aria-label="Ver depoimento com áudio">
              Clique aqui para ver o depoimento
            </button>
          </div>
        </div>
      </div>
    </section>


{/*  SEÇÃO PORTFÓLIO — TUDO QUE FAZEMOS  */}
    <section className="scale-section scale-section--dark scale-portfolio-section">
      <div className="scale-portfolio-heading">
        <h2>Ecosistema 360°</h2>
        <p>Cada peça de uma máquina de aquisição funcionando.</p>
      </div>

      <div className="scale-bento">
        <div className="scale-bento__item" style={{ gridArea: 'trafego' }}>
          <span className="scale-bento__label">Tráfego</span>
          <img src="/scale-advogados/assets/google-meta-dashboard-dark.webp" alt="Dashboard de tráfego pago" decoding="async" />
        </div>
        <div className="scale-bento__item" style={{ gridArea: 'landing' }}>
          <span className="scale-bento__label">Landing Page</span>
          <video src="/scale-advogados/assets/landing-page-demo.mp4" autoPlay muted loop playsInline></video>
        </div>
        <div className="scale-bento__item" style={{ gridArea: 'artes' }}>
          <span className="scale-bento__label">Artes</span>
          <img src="/scale-advogados/assets/arte-social-damas-lima.png" alt="Arte para redes sociais" decoding="async" />
        </div>
        <div className="scale-bento__item" style={{ gridArea: 'video' }}>
          <span className="scale-bento__label">Edição de Vídeo</span>
          <video src="/scale-advogados/assets/video-editing-bg.mp4" autoPlay muted loop playsInline style={{ objectPosition: 'left center' }}></video>
        </div>
        <div className="scale-bento__item" style={{ gridArea: 'crm' }}>
          <span className="scale-bento__label">Comercial</span>
          <video src="/scale-advogados/assets/comercial-gabriel.mp4" autoPlay muted loop playsInline></video>
        </div>
        <div className="scale-bento__item" style={{ gridArea: 'comercial' }}>
          <span className="scale-bento__label">CRM</span>
          <video src="/scale-advogados/assets/crm-demo.mp4" autoPlay muted loop playsInline style={{ objectPosition: 'center top' }}></video>
        </div>
      </div>
    </section>

{/*  VIDEO LIGHTBOX  */}
    <div className="scale-video-lightbox" id="scale-video-lightbox">
      <button className="scale-video-lightbox__close" id="scale-video-lightbox-close" aria-label="Fechar">&times;</button>
      <div className="scale-video-lightbox__content" id="scale-video-lightbox-content"></div>
    </div>

    {/*  LIGHTBOX PRINTS (REUTILIZADA PELOS PRINTS DO WHATSAPP)  */}
    <div className="scale-lightbox" id="scale-lightbox" role="dialog" aria-modal="true" aria-label="Visualizar depoimento">
      <button className="scale-lightbox__close" id="scale-lightbox-close" aria-label="Fechar">&times;</button>
      <img alt="Print de depoimento ampliado" className="scale-lightbox__image" id="scale-lightbox-image" />
    </div>

    <section id="faq" className="scale-section scale-section--light">
      <div className="scale-container scale-container--narrow">
        <div className="scale-section-heading">
          <span className="scale-kicker">FAQ</span>
          <h2>Dúvidas reais de sócios e gestores.</h2>
        </div>

        <div className="scale-faq">
          {faqs.map((item) => (
            <details key={item.question} className="scale-faq__item">
              <summary>
                {item.question}
                <span>+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="scale-section scale-section--dark scale-final">
      <div className="scale-container scale-container--narrow">
        <span className="scale-kicker">Diagnóstico</span>
        <h2>Advogados que crescem de verdade pensam como empresários.</h2>
        <p>
          Pare de depender apenas de indicações instáveis ou de ações isoladas de marketing. Implemente um ecossistema integrado de atração, qualificação e vendas, e assuma o controle definitivo sobre o crescimento do seu escritório.
        </p>
        <div className="scale-final__cta">
          <button type="button" className="scale-btn-cta" onClick={() => (globalThis as any).window.__openScaleModal()}>
            <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true" focusable="false" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.74.45 3.43 1.31 4.92L2 22l5.32-1.39a9.87 9.87 0 0 0 4.71 1.2h.01c5.46 0 9.9-4.44 9.9-9.9a9.86 9.86 0 0 0-2.89-7ZM12.04 20.14h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.16.83.84-3.08-.2-.32a8.18 8.18 0 0 1-1.26-4.35c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.24.85 5.79 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.13 8.24Zm4.5-6.16c-.25-.13-1.47-.73-1.7-.82-.23-.08-.39-.12-.56.13-.16.24-.64.81-.78.97-.14.16-.28.18-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.24-.01-.37.11-.5.11-.11.25-.28.37-.42.13-.14.17-.24.25-.4.08-.16.04-.3-.02-.42-.07-.13-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.69 2.57 4.09 3.61.57.25 1.02.4 1.37.5.58.18 1.1.15 1.52.09.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29Z"/>
            </svg>
            Construir minha Máquina de Aquisição
          </button>
        </div>
      </div>
    </section>
  </div>

  {/*  ===== LEAD FORM MODAL =====  */}
  <div id="scale-form-modal" role="dialog" aria-modal="true" aria-labelledby="scale-form-modal-title" style={{ position: 'fixed', inset: '0', zIndex: '10000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(12px)', opacity: '0', pointerEvents: 'none', transition: 'opacity .25s ease' }}>
    <div style={{ position: 'relative', width: '100%', maxWidth: '480px', maxHeight: '90vh', overflowY: 'auto', background: '#0d0d14', border: '1px solid rgba(255,255,255,.1)', borderRadius: '20px', boxShadow: '0 32px 80px rgba(0,0,0,.7)' }} onMouseDown={(event) => { if(event) event.stopPropagation() }}>

      {/*  Close  */}
      <button type="button" id="scale-form-modal-close" aria-label="Fechar" style={{ position: 'absolute', right: '14px', top: '14px', background: 'rgba(255,255,255,.08)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: '18px', lineHeight: '1', zIndex: '2' }}>&#x2715;</button>

      <div id="scale-form-panel" style={{ padding: '2rem 2rem 1.5rem' }}>
        <h2 id="scale-form-modal-title" style={{ margin: '0 0 .35rem', color: '#fff', fontSize: '1.25rem', fontWeight: '700', lineHeight: '1.25', textAlign: 'center', paddingRight: '1.5rem' }}>Você está a poucos passos de tomar a decisão certa.</h2>
        <p style={{ margin: '0 0 1.5rem', textAlign: 'center', color: 'rgba(255,255,255,.6)', fontSize: '.875rem' }}>Preencha abaixo e nosso time entra em contato rapidamente.</p>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {/*  Nome  */}
          <div>
            <label htmlFor="sfm-nome" style={{ display: 'block', marginBottom: '.35rem', color: 'rgba(255,255,255,.7)', fontSize: '.8125rem', fontWeight: '500' }}>Nome completo</label>
            <input id="sfm-nome" type="text" autoComplete="name" placeholder="Seu nome" style={{ width: '100%', padding: '.75rem 1rem', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: '10px', color: '#fff', fontSize: '.9375rem', outline: 'none', boxSizing: 'border-box', transition: 'border-color .2s' }} />
          </div>

          {/*  WhatsApp  */}
          <div>
            <label htmlFor="sfm-tel" style={{ display: 'block', marginBottom: '.35rem', color: 'rgba(255,255,255,.7)', fontSize: '.8125rem', fontWeight: '500' }}>WhatsApp</label>
            <input id="sfm-tel" type="tel" inputMode="numeric" autoComplete="tel" placeholder="(11) 99999-9999" style={{ width: '100%', padding: '.75rem 1rem', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: '10px', color: '#fff', fontSize: '.9375rem', outline: 'none', boxSizing: 'border-box', transition: 'border-color .2s' }} />
          </div>

          {/*  Email  */}
          <div>
            <label htmlFor="sfm-email" style={{ display: 'block', marginBottom: '.35rem', color: 'rgba(255,255,255,.7)', fontSize: '.8125rem', fontWeight: '500' }}>E-mail</label>
            <input id="sfm-email" type="email" autoComplete="email" inputMode="email" placeholder="seuemail@exemplo.com" style={{ width: '100%', padding: '.75rem 1rem', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: '10px', color: '#fff', fontSize: '.9375rem', outline: 'none', boxSizing: 'border-box', transition: 'border-color .2s' }} />
          </div>

          {/*  Instagram  */}
          <div>
            <label htmlFor="sfm-arroba" style={{ display: 'block', marginBottom: '.35rem', color: 'rgba(255,255,255,.7)', fontSize: '.8125rem', fontWeight: '500' }}>@ do Instagram (advogado ou escritório)</label>
            <input id="sfm-arroba" type="text" autoComplete="off" inputMode="text" defaultValue="@" placeholder="@seuescritorio" style={{ width: '100%', padding: '.75rem 1rem', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: '10px', color: '#fff', fontSize: '.9375rem', outline: 'none', boxSizing: 'border-box', transition: 'border-color .2s' }} />
          </div>

          {/*  Faturamento  */}
          <div>
            <label htmlFor="sfm-fat" style={{ display: 'block', marginBottom: '.35rem', color: 'rgba(255,255,255,.7)', fontSize: '.8125rem', fontWeight: '500' }}>Faturamento mensal aproximado</label>
            <select id="sfm-fat" style={{ width: '100%', padding: '.75rem 1rem', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: '10px', color: '#fff', fontSize: '.9375rem', outline: 'none', boxSizing: 'border-box', transition: 'border-color .2s', appearance: 'none', cursor: 'pointer' }}>
              <option value="" style={{ background: '#0d0d14' }}>Selecione...</option>
              <option value="menos_30k" style={{ background: '#0d0d14' }}>Menos de R$ 30 mil</option>
              <option value="30_50k" style={{ background: '#0d0d14' }}>Entre R$ 30 mil e R$ 50 mil</option>
              <option value="50_100k" style={{ background: '#0d0d14' }}>Entre R$ 50 mil e R$ 100 mil</option>
              <option value="100k_plus" style={{ background: '#0d0d14' }}>Mais de R$ 100 mil</option>
              <option value="prefiro_nao_informar" style={{ background: '#0d0d14' }}>Prefiro não informar</option>
            </select>
          </div>
        </div>

        {/*  Error  */}
        <p id="sfm-error" style={{ display: 'none', margin: '.75rem 0 0', color: '#f87171', fontSize: '.8125rem', textAlign: 'center' }}></p>

        {/*  Submit  */}
        <button type="button" id="sfm-submit" style={{ marginTop: '1.25rem', width: '100%', padding: '.9rem 1rem', background: 'linear-gradient(135deg,#0f6fff 0%,#0954c8 100%)', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', transition: 'opacity .2s,transform .15s', boxShadow: '0 8px 24px rgba(15,111,255,.28)' }}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.74.45 3.43 1.31 4.92L2 22l5.32-1.39a9.87 9.87 0 0 0 4.71 1.2h.01c5.46 0 9.9-4.44 9.9-9.9a9.86 9.86 0 0 0-2.89-7ZM12.04 20.14h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.16.83.84-3.08-.2-.32a8.18 8.18 0 0 1-1.26-4.35c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.24.85 5.79 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.13 8.24Zm4.5-6.16c-.25-.13-1.47-.73-1.7-.82-.23-.08-.39-.12-.56.13-.16.24-.64.81-.78.97-.14.16-.28.18-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.24-.01-.37.11-.5.11-.11.25-.28.37-.42.13-.14.17-.24.25-.4.08-.16.04-.3-.02-.42-.07-.13-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.69 2.57 4.09 3.61.57.25 1.02.4 1.37.5.58.18 1.1.15 1.52.09.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29Z"/></svg>
          Enviar
        </button>

        <p style={{ margin: '.75rem 0 0', textAlign: 'center', color: 'rgba(255,255,255,.38)', fontSize: '.72rem', lineHeight: '1.5' }}>Ao clicar em Enviar você concorda com nossos Termos de Uso e Política de Privacidade.</p>
      </div>

      {/*  Success Panel  */}
      <div id="scale-form-success" style={{ display: 'none', padding: '2.5rem 2rem', textAlign: 'center' }}>
        <div style={{ margin: '0 auto 1.25rem', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16,185,129,.15)', border: '1px solid rgba(16,185,129,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <p style={{ margin: '0', color: '#fff', fontSize: '1.1rem', fontWeight: '700' }}>Entraremos em contato em até 30 minutos.</p>
        <p style={{ margin: '.5rem 0 0', color: 'rgba(255,255,255,.5)', fontSize: '.8125rem' }}>*Válido em horário comercial, dias úteis.</p>
        <button type="button" id="sfm-close-success" style={{ marginTop: '1.5rem', padding: '.65rem 2rem', border: '1px solid rgba(255,255,255,.15)', borderRadius: '8px', background: 'transparent', color: 'rgba(255,255,255,.7)', fontSize: '.875rem', cursor: 'pointer' }}>Fechar</button>
      </div>
    </div>
  </div>

  <footer style={{ padding: '2rem 1rem', background: '#0d0d14', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
      <p>© {new Date().getFullYear()} Scale Company. Todos os direitos reservados.</p>
      <p>CNPJ: 44.021.911/0001-70</p>
    </div>
  </footer>

    </>
  );
}
