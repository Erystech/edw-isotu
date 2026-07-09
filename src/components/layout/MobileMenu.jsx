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
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-[var(--color-primary)]/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className="animate-slide absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-white px-6 py-6 shadow-[var(--shadow-card)]"
      >
        <div className="mb-10 flex items-center justify-between">
          <span className="font-[var(--font-heading)] text-lg font-extrabold text-[var(--color-primary)]">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-lg focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
          >
            <X className="text-[var(--color-primary)]" />
          </button>
        </div>

        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-3 text-base font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-background)] hover:text-[var(--color-accent)]"
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
