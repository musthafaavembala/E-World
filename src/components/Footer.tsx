import React from 'react';
import { MapPin, Phone, Wrench } from 'lucide-react';
import { Logo } from './Logo';
import { servicesData } from '../data/servicesData';

export const Footer: React.FC = () => (
  <footer className="border-t border-brand-border bg-brand-midnight py-6 text-xs text-brand-muted sm:py-8">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        <div>
          <Logo size="sm" />
          <p className="mt-3 leading-relaxed">
            AC and washing machine service in Parappanangadi &amp; Kondotty.
          </p>
        </div>
        <div>
          <h2 className="mb-2 inline-flex items-center gap-2 font-semibold text-white">
            <Wrench className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
            Services
          </h2>
          <ul className="space-y-1 leading-relaxed">
            {servicesData.map((service) => <li key={service.id}>{service.title}</li>)}
          </ul>
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
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href="tel:+918157001618"
              className="font-medium text-brand-soft transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
            >
              +91 8157001618
            </a>
            <a
              href="https://www.instagram.com/e_world_cooling__ac_service?vrfl=MW80MWZvZXVkc3VhdA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit E WORLD on Instagram"
              className="inline-flex items-center gap-1.5 rounded-lg font-medium text-brand-soft transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
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
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-brand-border pt-4 sm:flex-row">
        <span>&copy; 2026 E WORLD</span>
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
