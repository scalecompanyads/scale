'use client';

import { useState, useEffect, useCallback } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';

function isContatoHref(anchor: HTMLAnchorElement): boolean {
  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('#')) return false;
  try {
    const u = new URL(href, window.location.origin);
    return u.pathname === '/contato';
  } catch {
    return false;
  }
}

export default function LeadCaptureModal() {
  const [open, setOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (next) setFormKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;
      const t = e.target;
      if (!(t instanceof Node)) return;
      const el = (t as Element).closest?.('a[href]');
      if (!el || !(el instanceof HTMLAnchorElement)) return;
      if (!isContatoHref(el)) return;
      e.preventDefault();
      e.stopPropagation();
      handleOpenChange(true);
    };

    const onCustom = () => handleOpenChange(true);

    document.addEventListener('click', onDocClick, true);
    window.addEventListener('open-lead-modal', onCustom);
    return () => {
      document.removeEventListener('click', onDocClick, true);
      window.removeEventListener('open-lead-modal', onCustom);
    };
  }, [handleOpenChange]);

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[400] bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[401] w-[min(100vw-1.5rem,28rem)] max-h-[min(90vh,calc(100vh-2rem))] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-0 shadow-2xl outline-none">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-6 py-4">
            <div>
              <Dialog.Title className="text-lg font-bold text-slate-900">
                Fale com a Scale
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-slate-600">
                Preencha os dados abaixo. Entraremos em contato em até 24 horas úteis.
              </Dialog.Description>
            </div>
            <Dialog.Close
              type="button"
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              aria-label="Fechar"
            >
              <X size={20} />
            </Dialog.Close>
          </div>
          <div className="px-6 py-5">
            <LeadForm
              key={formKey}
              variant="modal"
              onSuccess={() => handleOpenChange(false)}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
