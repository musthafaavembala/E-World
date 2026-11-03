import React, { useEffect, useRef, useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

export const OurWorkGallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: '/assets/images/ac-water-service.jpg',
      title: 'AC Indoor High-Pressure Water Jet Service',
      category: 'Air Conditioning',
    },
    {
      id: 2,
      image: '/assets/images/ac-deep-cleaning.jpg',
      title: 'AC Foam Coil Cleaning',
      category: 'Air Conditioning',
    },
    {
      id: 3,
      image: '/assets/images/wm-technician.jpg',
      title: 'Washing Machine Repair & Motor Service',
      category: 'Washing Machine',
    },
    {
      id: 4,
      image: '/assets/images/wm-drum.jpg',
      title: 'Stainless Steel Drum Descaling & Deep Tub Cleaning',
      category: 'Washing Machine',
    },
    {
      id: 5,
      image: '/assets/images/service-equipment.jpg',
      title: 'Precision Diagnostic & Pressure Manifold Tools',
      category: 'Equipment',
    },
    {
      id: 6,
      image: '/assets/images/ac-outdoor-service.jpg',
      title: 'Outdoor Condenser Inspection & Refrigerant Check',
      category: 'Air Conditioning',
    },
  ];

  const closeGallery = () => {
    setSelectedImageIndex(null);
    previouslyFocusedElement.current?.focus();
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowLeft') {
        setSelectedImageIndex((index) =>
          index === null ? null : (index - 1 + galleryItems.length) % galleryItems.length
        );
      }
      if (event.key === 'ArrowRight') {
        setSelectedImageIndex((index) =>
          index === null ? null : (index + 1) % galleryItems.length
        );
      }
      if (event.key === 'Tab') {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button');
        if (!focusableElements?.length) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + galleryItems.length) % galleryItems.length
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
    }
  };

  return (
    <section id="our-work" className="py-14 sm:py-20 lg:py-28 bg-brand-deep/30 relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Service Gallery
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Quality Work. <span className="gradient-text-cool">Professional Care.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-brand-muted">
            Browse AC cleaning, washing machine service, and diagnostic equipment images.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {galleryItems.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={(event) => {
                previouslyFocusedElement.current = event.currentTarget;
                setSelectedImageIndex(index);
              }}
              aria-label={`View ${item.title} full size`}
              className="group relative rounded-2xl overflow-hidden glass-panel cursor-pointer aspect-[4/3] glass-panel-hover p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-midnight"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-brand-midnight/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between">
                <div className="self-end">
                  <div className="p-2 rounded-full bg-brand-midnight/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-brand-cyan" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">
                    {item.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-semibold text-white mt-1 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-brand-muted">
          Select any photograph to view it larger.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          onClick={closeGallery}
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Work gallery image viewer"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={closeGallery}
            ref={closeButtonRef}
            autoFocus
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-8 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-8 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center px-2"
          >
            <img
              src={galleryItems[selectedImageIndex].image}
              alt={galleryItems[selectedImageIndex].title}
              className="max-w-full max-h-[65vh] sm:max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="mt-3 sm:mt-4 text-center px-4">
              <span className="text-[11px] sm:text-xs font-bold text-brand-cyan uppercase tracking-wider">
                {galleryItems[selectedImageIndex].category}
              </span>
              <h4 className="text-sm sm:text-lg font-bold text-white mt-1 leading-snug">
                {galleryItems[selectedImageIndex].title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
