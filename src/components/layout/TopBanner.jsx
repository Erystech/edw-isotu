import { Mail, Phone } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="bg-surface border-b border-border py-2 px-6 lg:px-10 text-xs sm:text-sm">
      <div className="mx-auto max-w-[80rem] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        
        {/* Left Side: Tagline (Hidden on tiny screens to save space) */}
        <p className="hidden md:block text-text-muted font-medium tracking-wide">
          Available Mon-Fri 7am-5pm
        </p>

        {/* Right Side: Contact Info */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
          <a 
            href="mailto:connect@edwinisotu.com" 
            className="flex items-center gap-2 text-text-muted hover:text-accent-light transition-colors duration-300 focus-visible:outline-none"
            aria-label="Email Edwin Isotu"
          >
            <Mail size={14} aria-hidden="true" />
            <span>connect@edwinisotu.com</span>
          </a>
          
          <a 
            href="tel:+2347042566000" 
            className="flex items-center gap-2 text-text-muted hover:text-accent-light transition-colors duration-300 focus-visible:outline-none"
            aria-label="Call Edwin Isotu"
          >
            <Phone size={14} aria-hidden="true" />
            <span>+234 704 256 6000</span>
          </a>
        </div>

      </div>
    </div>
  );
}