// import { Linkedin, Youtube, Instagram, Twitter, Mail } from 'lucide-react';
import Container from './Container';
import Divider from '../ui/Divider';

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Speaking', href: '/speaking' },
      { label: 'Books', href: '/books' },
      { label: 'Insights', href: '/insights' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Media Kit', href: '/media' },
      { label: 'Speaker One-Sheet', href: '/resources' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
    ],
  },
];

// const SOCIALS = [
//   { label: 'LinkedIn', href: '#', icon: Linkedin },
//   { label: 'X (Twitter)', href: '#', icon: Twitter },
//   { label: 'Instagram', href: '#', icon: Instagram },
//   { label: 'YouTube', href: '#', icon: Youtube },
// ];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-background-alt)] border-t border-[var(--color-border)] text-[var(--color-text-muted)]">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-[var(--font-heading)] text-xl font-extrabold text-[var(--color-primary)]">
              Edwin Isotu
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              Keynote speaker and author helping leaders turn strategy into
              momentum.
            </p>
            <a
              href="mailto:hello@edwinisotu.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-light)]"
            >
              {/* <Mail size={16} aria-hidden="true" /> */}
              hello@edwinisotu.com
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-muted)]">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {/* 
                      Refactored Links:
                      Routed hover states through the accent-light token for consistency.
                    */}
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-light)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider className="my-10 border-[var(--color-border)]" />

        <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Edwin Isotu. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* 
              Refactored Socials (Prepared for uncommenting):
              Updated focus and hover outlines to use accent-light to ensure 
              visibility against the dark background.
            */}
            {/* {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border-light)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent-light)] hover:text-[var(--color-accent-light)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))} */}
          </div>
        </div>
      </Container>
    </footer>
  );
}