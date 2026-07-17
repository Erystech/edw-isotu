// import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
// import { cn } from '../../lib/cn';

// const DEFAULT_LINKS = [
//   { label: 'Facebook', href: 'https://www.facebook.com/edisotu/', icon: Facebook },
//   { label: 'X (Twitter)', href: 'https://twitter.com/profisotu', icon: Twitter },
//   { label: 'Instagram', href: 'https://www.instagram.com/profisotu/', icon: Instagram },
//   { label: 'YouTube', href: 'https://youtube.com/profIsotu', icon: Youtube },
//   { label: 'LinkedIn', href: '#', icon: Linkedin },
// ];

// /**
//  * SocialLinks
//  * Row of circular icon links. Built standalone (not inside Footer,
//  * whose socials are currently commented out) so it can be reused there
//  * later without duplicating the icon-link markup.
//  *
//  * @param {{ label: string, href: string, icon: Function }[]} links
//  */
// export default function SocialLinks({ links = DEFAULT_LINKS, className, ...props }) {
//   return (
//     <div className={cn('flex items-center gap-4', className)} {...props}>
//       {links.map(({ label, href, icon: Icon }) => (
//         <a
//           key={label}
//           href={href}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={label}
//           className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent-light)] hover:text-[var(--color-accent-light)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2"
//         >
//           <Icon size={18} aria-hidden="true" />
//         </a>
//       ))}
//     </div>
//   );
// }