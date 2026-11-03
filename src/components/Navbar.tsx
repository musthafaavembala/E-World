import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Booking', href: '#book' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-midnight/95 backdrop-blur-md border-b border-brand-border py-2.5 shadow-lg shadow-black/20'
          : 'bg-brand-midnight/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a
            href="#home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg transition shrink min-w-0"
            aria-label="E WORLD Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.filter((link) => link.name !== 'Booking').map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-muted hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/918157001618?text=Hello%20E%20WORLD%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-brand-soft bg-white/5 hover:bg-white/10 border border-brand-border transition duration-200"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-green-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white gradient-cool shadow-glow-blue hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Booking</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider text-white gradient-cool shadow-glow-blue whitespace-nowrap"
            >
              Booking
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-brand-border text-brand-muted hover:text-white transition"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div id="mobile-navigation" hidden={!mobileMenuOpen} className="lg:hidden absolute inset-x-0 top-full bg-sky-200/98 backdrop-blur-xl border-b border-sky-300 shadow-2xl px-5 sm:px-6 py-4 transition-all animate-in slide-in-from-top-4 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navLinks.filter((link) => link.name !== 'Booking').map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-900 hover:text-blue-700 transition py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-sky-300 pt-3">
            <a
              href="tel:+918157001618"
              className="flex items-center justify-center gap-2 rounded-lg border border-sky-300 bg-white/70 py-2.5 text-xs font-semibold text-slate-900"
            >
              <Phone className="h-4 w-4 text-blue-700" />
              Call
            </a>
            <a
              href="https://wa.me/918157001618?text=Hello%20E%20WORLD%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-emerald-700/20 bg-white/70 py-2.5 text-xs font-semibold text-emerald-800"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
      </div>
    </header>
  );
};
