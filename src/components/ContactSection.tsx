import React from 'react';
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => (
  <section id="contact" className="border-t border-brand-border py-8 sm:py-10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Contact</h2>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <a
          href="tel:+918157001618"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm font-semibold text-white transition hover:border-brand-cyan/40 hover:bg-brand-blue/10"
        >
          <Phone className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
          +91 8157001618
        </a>
        <a
          href="https://wa.me/918157001618?text=Hello%20E%20WORLD%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/15"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <div className="mt-4 flex flex-col gap-2 text-xs text-brand-muted sm:flex-row sm:items-center sm:gap-6">
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-cyan" aria-hidden="true" />
          Parappanangadi &amp; Kondotty, Kerala
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 shrink-0 text-brand-cyan" aria-hidden="true" />
          Mon–Sat 8 AM–9 PM · Sun 9 AM–6 PM
        </span>
      </div>
    </div>
  </section>
);
