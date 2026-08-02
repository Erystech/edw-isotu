import { useEffect, useRef, useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

export default function MobileMenu({ id, open, onClose, links }) {
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const [expanded, setExpanded] = useState({});
  const location = useLocation();

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

  const toggleExpand = (label) => {
    setExpanded((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const isParentActive = (subLinks) => {
    return subLinks?.some((sub) => location.pathname.startsWith(sub.href));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" id={id}>
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-[var(--color-background)]/80 backdrop-blur-sm"
        onClick={onClose}
      />
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
            className="grid h-10 w-10 place-items-center rounded-lg transition-colors hover:bg-[var(--color-surface)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2"
          >
            <X className="text-[var(--color-primary)]" />
          </button>
        </div>
        <ul className="flex w-full flex-col gap-1">
          {links.map((link) => (
            <li key={link.label} className="w-full">
              {link.subLinks ? (
                <>
                  <button
                    onClick={() => toggleExpand(link.label)}
                    aria-expanded={expanded[link.label] || false}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent-light)] ${
                      isParentActive(link.subLinks)
                        ? 'text-[var(--color-accent-light)]'
                        : 'text-[var(--color-text)]'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        expanded[link.label] ? 'rotate-180 text-[var(--color-accent-light)]' : 'text-[var(--color-text-muted)]'
                      }`}
                    />
                  </button>
                  {expanded[link.label] && (
                    <ul className="mt-1 flex w-full flex-col gap-1 pl-4">
                      {link.subLinks.map((sub) => (
                        <li key={sub.href} className="w-full">
                          <NavLink
                            to={sub.href}
                            onClick={onClose}
                            className={({ isActive }) =>
                              `block w-full rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent-light)] ${
                                isActive 
                                  ? 'text-[var(--color-accent-light)] bg-[var(--color-surface)]'
                                  : 'text-[var(--color-text-muted)]'
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.href}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block w-full rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent-light)] ${
                      isActive 
                        ? 'text-[var(--color-accent-light)] bg-[var(--color-surface)]' 
                        : 'text-[var(--color-text)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )}
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