import React from 'react';
import { Clock, MapPin, Phone, Wrench } from 'lucide-react';
import { Logo } from './Logo';
import { servicesData } from '../data/servicesData';

export const Footer: React.FC = () => (
  <footer className="border-t border-brand-border bg-brand-midnight py-6 text-xs text-brand-muted sm:py-8">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        <div>
          <h2 className="mb-2 inline-flex items-center gap-2 font-semibold text-white">
            <Wrench className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
            Services
          </h2>
          <p className="leading-relaxed">{servicesData.map((service) => service.title).join(' · ')}</p>
        </div>
        <div>
          <h2 className="mb-2 inline-flex items-center gap-2 font-semibold text-white">
            <MapPin className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
            Location
          </h2>
          <p>Parappanangadi &amp; Kondotty, Kerala</p>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="mb-2 inline-flex items-center gap-2 font-semibold text-white">
            <Phone className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
            Contact
          </h2>
          <a
            href="tel:+918157001618"
            className="block font-medium text-brand-soft transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
          >
            +91 8157001618
          </a>
          <a
            href="https://www.instagram.com/e_world_cooling__ac_service?vrfl=MW80MWZvZXVkc3VhdA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit E WORLD on Instagram"
            className="mt-2 inline-flex items-center gap-2 rounded-lg text-brand-soft transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-brand-cyan"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
        </div>
        <div>
          <h2 className="mb-2 inline-flex items-center gap-2 font-semibold text-white">
            <Clock className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
            Hours
          </h2>
          <p>Mon–Sat 8 AM–9 PM · Sun 9 AM–6 PM</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-brand-border pt-4 sm:flex-row">
        <Logo size="sm" />
        <span>&copy; 2026 E WORLD</span>
        <a
          href="https://www.instagram.com/e_world_cooling__ac_service?vrfl=MW80MWZvZXVkc3VhdA=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit E WORLD on Instagram"
          className="rounded-lg text-brand-cyan transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="https://devlophic.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
        >
          @devlophic
        </a>
      </div>
    </div>
  </footer>
);
