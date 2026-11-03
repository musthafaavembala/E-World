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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Brands', href: '#brands' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Locations', href: '#locations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-midnight/90 backdrop-blur-md border-b border-brand-border py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg transition"
            aria-label="E WORLD Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
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
          <div className="hidden sm:flex items-center gap-3">
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
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white gradient-cool shadow-glow-blue hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Service</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white gradient-cool shadow-glow-blue"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-brand-border text-brand-muted hover:text-white transition"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-brand-midnight/98 backdrop-blur-xl border-b border-brand-border shadow-2xl px-6 py-6 transition-all animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-brand-soft hover:text-brand-cyan transition py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-6 mt-4 border-t border-brand-border flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white gradient-cool shadow-glow-blue"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Service</span>
            </button>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="tel:+918157001618"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-brand-soft bg-white/5 border border-brand-border"
              >
                <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918157001618?text=Hello%20E%20WORLD%2C%20I%20would%20like%20to%20book%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-brand-soft bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
