import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Button from '../ui/Button';

export default function MobileMenu({ id, open, onClose, links }) {
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    triggerRef.current = document.activeElement;

    const getFocusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])') ?? []
      );

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    getFocusable()[0]?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      triggerRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" id={id}>
      {/* 
        Refactored Backdrop: 
        Swapped primary (white) for background (black) to reduce glare and properly dim the UI behind the menu.
      */}
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-[var(--color-background)]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 
        Refactored Panel: 
        Swapped hardcoded bg-white for your design system's bg-[var(--color-surface-elevated)] to ensure text legibility.
      */}
      <div
        ref={panelRef}
        className="animate-slide absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-[var(--color-surface-elevated)] border-l border-[var(--color-border)] px-6 py-6 shadow-[var(--shadow-card)]"
      >
        <div className="mb-10 flex items-center justify-between">
          <span className="font-[var(--font-heading)] text-lg font-extrabold text-[var(--color-primary)]">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-lg transition-colors hover:bg-[var(--color-surface)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
          >
            <X className="text-[var(--color-primary)]" />
          </button>
        </div>

        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              {/* 
                Refactored Hover State: 
                Changed hover background to var(--color-surface) for a subtle interaction that doesn't clash with the elevated surface.
              */}
              <a
                href={link.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-3 text-base font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent-light)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <Button href="/contact" className="w-full justify-center">
            Book Edwin
          </Button>
        </div>
      </div>
    </div>
  );
}