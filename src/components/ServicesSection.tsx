import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../data/servicesData';
import { Wind, Disc, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'ac' | 'washing-machine'>('ac');

  const filteredServices = servicesData.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold text-brand-cyan mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Appliance Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Expert Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted">
            Professional care for the appliances that keep your home comfortable.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-brand-card/90 border border-brand-border backdrop-blur-md">
            <button
              onClick={() => setActiveTab('ac')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === 'ac'
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-glow-blue'
                  : 'text-brand-muted hover:text-white'
              }`}
            >
              <Wind className="w-4 h-4" />
              <span>Air Conditioning ({servicesData.filter((s) => s.category === 'ac').length})</span>
            </button>

            <button
              onClick={() => setActiveTab('washing-machine')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === 'washing-machine'
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-glow-blue'
                  : 'text-brand-muted hover:text-white'
              }`}
            >
              <Disc className="w-4 h-4" />
              <span>Washing Machine ({servicesData.filter((s) => s.category === 'washing-machine').length})</span>
            </button>
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="mt-8 text-center text-xs text-brand-muted max-w-xl mx-auto">
          {activeTab === 'ac' ? (
            <p>
              Complete cooling maintenance and pressure cleaning tailored for coastal Kerala humidity and dust conditions.
            </p>
          ) : (
            <p>
              Front-load and top-load washing machine repairs, drum bearing care, and hard water descaling for all major brands.
            </p>
          )}
        </div>

        {/* Service Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group glass-panel rounded-2xl overflow-hidden flex flex-col justify-between glass-panel-hover"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-deep">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />

                {service.popular && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-cyan text-brand-midnight shadow-md">
                    Most Requested
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mt-4 pt-4 border-t border-brand-border/60 space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-brand-soft/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-brand-blue border border-brand-border hover:border-transparent transition-all duration-200"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
