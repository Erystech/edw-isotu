import { cn } from '../../lib/cn';
import Quote from '../typography/Quote';
import { Quote as QuoteIcon } from 'lucide-react';

export default function QuoteCard({ quote, cite, className, ...props }) {
  return (
    <div 
      className={cn(
        'card-premium relative flex h-full flex-col justify-center overflow-hidden p-6 transition-all hover:shadow-lg sm:p-8', 
        className
      )} 
      {...props}
    >
      {/* Decorative background icon */}
      <QuoteIcon 
        className="absolute -top-4 -left-4 h-20 w-20 -rotate-12 text-[var(--color-border)] opacity-30" 
        aria-hidden="true" 
      />
      
      <div className="relative z-10">
        {/* Responsive text wrapper to keep quotes smaller on mobile */}
        <div className="text-sm sm:text-base">
          <Quote cite={cite}>{quote}</Quote>
        </div>
      </div>
    </div>
  );
}