import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';

/**
 * Accordion
 * Accessible expanding panel system. Contrast tokens refactored 
 * to pass dark mode legibility standards.
 */
export default function Accordion({ items, allowMultiple = false, className, ...props }) {
  const baseId = useId();
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={cn('divide-y divide-[var(--color-border)]', className)} {...props}>
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={panelId}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2"
              >
                <span className="font-[var(--font-heading)] text-base font-semibold text-[var(--color-primary)] lg:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={cn(
                    'shrink-0 text-[var(--color-accent-light)] transition-transform duration-300',
                    isOpen && 'rotate-180'
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid overflow-hidden transition-all duration-300 ease-[var(--ease-premium)]',
                isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <p className="min-h-0 text-sm leading-relaxed text-[var(--color-text-muted)] lg:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}