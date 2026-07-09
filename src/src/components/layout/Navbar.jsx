import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '../../lib/cn';
import Container from './Container';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Books', href: '/books' },
  { label: 'Media', href: '/media' },
  { label: 'Insights', href: '/insights' },
];

/**
 * Navbar
 * Sticky header. Turns from transparent-on-hero to a glass surface
 * once the page scrolls, so it reads well over a dark hero image
 * without a permanent heavy bar.
 */
export default function Navbar({ transparent = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isSolid = scrolled || !transparent;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isSolid ? 'glass shadow-[var(--shadow-navbar)]' : 'bg-transparent'
      )}
    >
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Primary"
        >
          <a
            href="/"
            className={cn(
              'font-[var(--font-heading)] text-lg font-extrabold tracking-tight transition-colors',
              isSolid ? 'text-[var(--color-primary)]' : 'text-white'
            )}
          >
            Edwin Isotu
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isSolid
                      ? 'text-[var(--color-text)] hover:text-[var(--color-accent)]'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Book Edwin
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              'grid h-10 w-10 place-items-center rounded-lg lg:hidden',
              'focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2'
            )}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className={isSolid ? 'text-[var(--color-primary)]' : 'text-white'} />
          </button>
        </nav>
      </Container>

      <MobileMenu
        id="mobile-menu"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  );
}
