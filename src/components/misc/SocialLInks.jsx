import { cn } from '../../lib/cn'; //

const SocialIcons = {
  Facebook: ({ size = 24, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Twitter: ({ size = 24, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Instagram: ({ size = 24, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Youtube: ({ size = 24, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
      <polygon points="10 15 15 12 10 9" />
    </svg>
  ),
  Linkedin: ({ size = 24, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

// 2. Updated data array pointing to the local inline components
const DEFAULT_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/edisotu/', icon: SocialIcons.Facebook }, //[cite: 2]
  { label: 'X (Twitter)', href: 'https://twitter.com/profisotu', icon: SocialIcons.Twitter }, //[cite: 2]
  { label: 'Instagram', href: 'https://www.instagram.com/profisotu/', icon: SocialIcons.Instagram }, //[cite: 2]
  { label: 'YouTube', href: 'https://youtube.com/profIsotu', icon: SocialIcons.Youtube }, //[cite: 2]
  { label: 'LinkedIn', href: '#', icon: SocialIcons.Linkedin }, //[cite: 2]
];

/**
 * SocialLinks
 * Row of circular icon links. Built standalone[cite: 2]
 */
export default function SocialLinks({ links = DEFAULT_LINKS, className, ...props }) { //[cite: 2]
  return (
    <div className={cn('flex items-center gap-4', className)} {...props}> {/*[cite: 2] */}
      {links.map(({ label, href, icon: Icon }) => ( //[cite: 2]
        <a
          key={label} //[cite: 2]
          href={href} //[cite: 2]
          target="_blank" //[cite: 2]
          rel="noopener noreferrer" //[cite: 2]
          aria-label={label} //[cite: 2]
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent-light)] hover:text-[var(--color-accent-light)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2" //[cite: 2]
        >
          <Icon size={16} aria-hidden="true" /> 
        </a>
      ))}
    </div>
  );
}