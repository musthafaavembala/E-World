import React from 'react';
import { locationsData } from '../data/locationsData';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';

interface LocationsSectionProps {
  onSelectLocation: (locationName: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectLocation }) => {
  return (
    <section id="locations" className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Local Presence
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Serving Your Neighbourhood
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-brand-muted">
            Fast, reliable doorstep appliance service right where you need it. Book a visit for your home or office.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {locationsData.map((loc) => (
            <div
              key={loc.name}
              className="glass-panel rounded-2xl p-5 sm:p-7 flex flex-col justify-between glass-panel-hover"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-brand-blue/20 text-brand-cyan border border-brand-cyan/20 shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{loc.name}</h3>
                      <p className="text-xs text-brand-cyan mt-0.5">{loc.district}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Active Area
                  </span>
                </div>

                <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-brand-soft/90 leading-relaxed">
                  {loc.coverage}
                </p>

                <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs text-brand-muted">
                  <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>{loc.response}</span>
                </div>

                <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {loc.popularServices.map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[10.5px] sm:text-[11px] font-medium bg-white/5 border border-white/10 text-brand-soft"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-brand-border/60 flex flex-col sm:grid sm:grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  onClick={() => onSelectLocation(loc.name)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white gradient-cool shadow-glow-blue hover:brightness-110 active:scale-95 transition"
                >
                  <span>Book in {loc.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </button>

                <a
                  href="tel:+918157001618"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-brand-soft bg-white/5 hover:bg-white/10 border border-brand-border transition"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-brand-muted">
            Living in a nearby neighbouring locality? Contact us on WhatsApp to verify technician availability for your address.
          </p>
        </div>
      </div>
    </section>
  );
};
