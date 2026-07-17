import { useEffect, useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';
import Container from './Container';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Books', href: '/books' },
  { label: 'Articles', href: '/articles' },
  { 
    label: 'Mentorship', 
    href: '#',
    subLinks: [
      { label: 'Executive Masterclass', href: '/mentorship/executive-masterclass' },
      { label: 'Clearlift Africa Mentorship', href: '/mentorship/clearlift-africa' }
    ]
  },
  { label: 'Insights', href: '/insights' },
];
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
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b',
        isSolid 
          ? 'bg-[var(--color-background)] border-[var(--color-border)] shadow-[var(--shadow-soft)]' 
          : 'bg-transparent border-transparent'
      )}
    >
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Primary"
        >
          <a
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <img 
              src='/Isotu-logo.svg'
              alt="Edwin Isotu" 
              className="h-9 w-auto object-contain"
            />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative group">
                {link.subLinks ? (
                  <>
                    <button
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium transition-colors py-2',
                        isSolid
                          ? 'text-[var(--color-text)] hover:text-[var(--color-accent-light)]'
                          : 'text-white/90 hover:text-[var(--color-accent-light)]'
                      )}
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </button>
                    {/* Dropdown Menu */}
                    <ul className="absolute left-0 top-full hidden w-64 flex-col gap-1 rounded-lg bg-[var(--color-surface-elevated)] p-2 shadow-[var(--shadow-card)] border border-[var(--color-border)] group-hover:flex">
                      {link.subLinks.map((sub) => (
                        <li key={sub.href}>
                          <a
                            href={sub.href}
                            className="block rounded-md px-3 py-2 text-sm text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent-light)]"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors py-2',
                      isSolid
                        ? 'text-[var(--color-text)] hover:text-[var(--color-accent-light)]'
                        : 'text-white/90 hover:text-[var(--color-accent-light)]'
                    )}
                  >
                    {link.label}
                  </a>
                )}
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
              'transition-colors hover:bg-[var(--color-surface)]',
              'focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2'
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