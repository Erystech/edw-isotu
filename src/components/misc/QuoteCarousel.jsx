import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { QuoteCard } from '../cards';

/**
 * QuoteCarousel
 * Same Embla + autoplay interaction model as TestimonialCarousel,
 * scaled down for quote-only slides.
 *
 * @param {{ quote: string, cite?: string }[]} quotes
 */
export default function QuoteCarousel({ quotes }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: true, skipSnaps: false },
    [Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((api) => setScrollSnaps(api.scrollSnapList()), []);
  const onSelect = useCallback((api) => setSelectedIndex(api.selectedScrollSnap()), []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative mx-auto mt-10 max-w-7xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex touch-pan-y backface-hidden sm:-ml-6">
          {quotes.map((item, index) => (
            <div
              key={index}
              className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-1/2 sm:pl-6 lg:basis-1/3"
            >
              <QuoteCard quote={item.quote} cite={item.cite} />
            </div>
          ))}
        </div>
      </div>

      {/* Added flex-wrap, gap-4, and pr-4/sm:pr-6 to prevent layout bleeding */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pl-4 pr-4 sm:pl-6 sm:pr-6">
        {/* Added flex-wrap to the dots container */}
        <div className="flex flex-wrap gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
                index === selectedIndex
                  ? 'w-6 bg-[var(--color-primary)]'
                  : 'w-2 bg-[var(--color-border)] hover:bg-[var(--color-border-light)]'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={scrollPrev}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface-elevated)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            aria-label="Previous quote"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface-elevated)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            aria-label="Next quote"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}