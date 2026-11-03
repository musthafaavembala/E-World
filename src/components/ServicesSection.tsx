import React from 'react';
import { servicesData, ServiceItem } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => (
  <section id="services" className="scroll-mt-20 py-8 sm:py-10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Services</h2>
          <p className="mt-1 text-xs text-brand-muted sm:text-sm">Select a service to book.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {servicesData.map((service) => {
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelectService(service)}
              aria-label={`Book ${service.title}`}
              className="group flex min-w-0 flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3 text-left transition hover:border-brand-cyan/40 hover:bg-brand-blue/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan sm:p-4"
            >
              <img
                src={service.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <span className="min-w-0 break-words rounded-lg bg-brand-blue/15 px-3 py-2 text-center text-sm font-bold leading-snug text-brand-cyan transition-colors group-hover:bg-brand-blue/25 group-hover:text-white sm:text-base">
                {service.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  </section>
);
