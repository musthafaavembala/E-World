import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-midnight/95 backdrop-blur-xl border-t border-brand-border/80 px-3 py-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] shadow-[0_-10px_25px_rgba(0,0,0,0.5)]"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Action 1: Call */}
        <a
          href="tel:+918157001618"
          className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl bg-white/5 active:bg-white/10 border border-brand-border text-brand-soft text-[11px] font-bold"
          aria-label="Call E WORLD at +91 8157001618"
        >
          <Phone className="w-4 h-4 text-brand-cyan" />
          <span>Call</span>
        </a>

        {/* Action 2: WhatsApp */}
        <a
          href="https://wa.me/918157001618?text=Hello%20E%20WORLD%2C%20I%20would%20like%20to%20book%20a%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl bg-emerald-500/15 active:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold"
          aria-label="WhatsApp E WORLD"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        {/* Action 3: Book */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl gradient-cool active:brightness-90 text-white text-[11px] font-bold shadow-glow-blue"
          aria-label="Scroll to booking section"
        >
          <Calendar className="w-4 h-4" />
          <span>Book</span>
        </button>
      </div>
    </aside>
  );
};
