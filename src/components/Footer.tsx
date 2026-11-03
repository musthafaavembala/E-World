import React from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-midnight border-t border-brand-border/80 pt-12 sm:pt-16 pb-28 sm:pb-16 text-brand-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-brand-border/60">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4">
            <Logo size="md" />
            <p className="mt-4 text-xs sm:text-sm text-brand-muted leading-relaxed">
              Your Cooling Care Partner. Providing professional AC water service, deep foam cleaning, and washing machine repair with genuine parts and honest pricing in Kerala.
            </p>
            <div className="mt-3.5 sm:mt-4 inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-brand-soft text-[10.5px] sm:text-[11px] font-semibold">
              Tagline: &ldquo;Comfort. Care. Confidence.&rdquo;
            </div>
          </div>

          {/* Column 2: Air Conditioning Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Air Conditioning
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-brand-cyan transition">AC Water Service</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cyan transition">AC Normal Service</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cyan transition">AC Deep Cleaning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cyan transition">AC Maintenance &amp; Diagnostic</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cyan transition">Gas Checking &amp; Leakage Repair</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Washing Machine Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Washing Machine
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-brand-cyan transition">Washing Machine Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cyan transition">Drum Maintenance &amp; Descaling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cyan transition">Water Leakage Troubleshooting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cyan transition">Motor &amp; Drum Vibration Fix</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-cyan transition">Control Board &amp; PCB Service</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verified Working Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact &amp; Working Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">+91 8157001618</div>
                  <div className="text-[11px] text-brand-muted">Call &amp; WhatsApp</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Parappanangadi &amp; Kondotty</div>
                  <div className="text-[11px] text-brand-muted">Malappuram District, Kerala</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div className="text-[11px]">
                  <div>Mon – Sat: 8:00 AM – 9:00 PM</div>
                  <div>Sunday: 9:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-brand-muted">
            &copy; 2026 E WORLD. All rights reserved. Professional AC &amp; Washing Machine Service.
          </p>

          <div className="flex items-center gap-4">
            <span
              onClick={() => window.open('https://devlophic.vercel.app', '_blank', 'noopener,noreferrer')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open('https://devlophic.vercel.app', '_blank', 'noopener,noreferrer');
                }
              }}
              tabIndex={0}
              role="button"
              className="text-brand-muted/50 hover:text-brand-muted/80 transition-colors select-none cursor-default text-[11px]"
            >
              @devlophic
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-brand-muted hover:text-white transition"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
