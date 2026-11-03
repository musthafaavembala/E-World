import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { MessageCircle, Menu, X, Calendar, Home, Wind, BadgeCheck, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLDivElement>(null);
  const mobileMenuCloseRef = useRef<HTMLButtonElement>(null);
  const restoreFocusAfterCloseRef = useRef(false);

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
    const sectionIds = ['home', 'services', 'why-us', 'book', 'contact'];
    const updateActiveSection = () => {
      const currentSection = sectionIds.reduce((active, id) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 120 ? id : active;
      }, 'home');
      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    mobileMenuCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu(true);
        return;
      }

      if (event.key !== 'Tab') return;
      const focusableElements = mobileNavigationRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const focusIsOutsideMenu = !mobileNavigationRef.current?.contains(document.activeElement);

      if (event.shiftKey && (document.activeElement === firstElement || focusIsOutsideMenu)) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && (document.activeElement === lastElement || focusIsOutsideMenu)) {
        event.preventDefault();
        firstElement.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const openMobileMenu = () => {
    setMobileMenuMounted(true);
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = (restoreFocus = false) => {
    setMobileMenuOpen(false);
    if (restoreFocus) mobileMenuToggleRef.current?.focus();
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const mobileNavLinks = [
    { name: 'Home', href: '#home', section: 'home', Icon: Home },
    { name: 'Services', href: '#services', section: 'services', Icon: Wind },
    { name: 'Why Us', href: '#why-us', section: 'why-us', Icon: BadgeCheck },
    { name: 'Booking', href: '#book', section: 'book', Icon: Calendar },
    { name: 'Contact', href: '#contact', section: 'contact', Icon: MapPin },
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
              ref={mobileMenuToggleRef}
              onClick={() => mobileMenuOpen ? closeMobileMenu() : openMobileMenu()}
              className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-brand-border text-brand-muted hover:text-white transition"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuMounted && (
        <button
          type="button"
          aria-label="Close mobile navigation"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => closeMobileMenu(true)}
          className={`fixed inset-x-0 top-16 bottom-0 z-0 bg-black/40 transition-opacity duration-200 lg:hidden ${
            mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        />
      )}
      {mobileMenuMounted && (
        <div
          id="mobile-navigation"
          ref={mobileNavigationRef}
          aria-label="Mobile navigation"
          aria-hidden={!mobileMenuOpen}
          onAnimationEnd={(event) => {
            if (!mobileMenuOpen && event.animationName === 'mobile-menu-out') {
              setMobileMenuMounted(false);
              if (restoreFocusAfterCloseRef.current) {
                restoreFocusAfterCloseRef.current = false;
                mobileMenuToggleRef.current?.focus({ preventScroll: true });
              }
            }
          }}
          className={`lg:hidden absolute inset-x-0 top-full z-10 max-h-[calc(100vh-4.5rem)] overflow-y-auto rounded-b-2xl border-b border-sky-300 bg-gradient-to-br from-sky-100 via-sky-200 to-blue-200 px-5 py-4 shadow-2xl sm:px-6 ${
            mobileMenuOpen ? 'mobile-menu-enter' : 'mobile-menu-exit'
          }`}
        >
          <div className="mb-3 flex items-center justify-between border-b border-blue-300/70 pb-3">
            <span className="text-sm font-bold text-slate-900">Menu</span>
            <button
              ref={mobileMenuCloseRef}
              type="button"
              onClick={() => closeMobileMenu(true)}
              tabIndex={mobileMenuOpen ? 0 : -1}
              aria-label="Close menu"
              className="rounded-lg border border-blue-300 bg-white/70 p-2 text-slate-900 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {mobileNavLinks.map(({ name, href, section, Icon }) => {
              const isActive = activeSection === section;
              return (
              <a
                key={name}
                href={href}
                tabIndex={mobileMenuOpen ? 0 : -1}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => {
                  setActiveSection(section);
                  restoreFocusAfterCloseRef.current = true;
                  closeMobileMenu();
                }}
                className={`flex min-h-11 items-center gap-3 rounded-xl border-l-4 px-3 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                  isActive
                    ? 'border-cyan-500 bg-white/80 text-blue-950 shadow-sm'
                    : 'border-transparent text-slate-900 hover:border-blue-400 hover:bg-white/50 hover:text-blue-900'
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-blue-700' : 'text-slate-700'}`} aria-hidden="true" />
                {name}
              </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
