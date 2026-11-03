import React from 'react';
import { Calendar, MessageCircle, ShieldCheck, Clock, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-brand-blue/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Value Propositions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline / Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-brand-border text-xs font-semibold text-brand-cyan mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>Doorstep Service across Parappanangadi &amp; Kondotty, Kerala</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              <span className="gradient-text-cool">AC &amp; Washing Machine Service</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-brand-soft/90 font-medium max-w-2xl leading-relaxed">
              Leave AC &amp; Washing mechine to us, A to Z service
            </p>

            {/* Supporting Text */}
            <p className="mt-3 text-sm sm:text-base text-brand-muted max-w-xl">
              And we will come to your home and do it. Contact us now.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white gradient-cool shadow-glow-blue hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Service</span>
              </button>

              <a
                href="https://wa.me/918157001618?text=Hello%20E%20WORLD%2C%20I%20would%20like%20to%20book%20an%20AC%20or%20Washing%20Machine%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-brand-soft bg-white/5 hover:bg-white/10 border border-brand-border active:scale-95 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-brand-border/60 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-brand-blue/15 text-brand-cyan shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Genuine Parts</div>
                  <div className="text-[11px] text-brand-muted">Quality Workmanship</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-brand-blue/15 text-brand-cyan shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Quick Turnaround</div>
                  <div className="text-[11px] text-brand-muted">Prompt Doorstep Visits</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-brand-blue/15 text-brand-cyan shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Kerala Climate</div>
                  <div className="text-[11px] text-brand-muted">Dedicated Care</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-blue/40 to-brand-cyan/30 blur-xl opacity-70" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-brand-surface shadow-2xl">
                <img
                  src="/assets/images/hero-technician.jpg"
                  alt="E WORLD HVAC technician servicing modern split AC"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11] hover:scale-102 transition duration-700"
                  width="1200"
                  height="800"
                  loading="eager"
                />

                {/* Overlaid Gradient & Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glass Pill */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-3.5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-white">Technicians On Call</div>
                      <div className="text-[11px] text-brand-muted">Parappanangadi &amp; Kondotty</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-cyan px-2.5 py-1 rounded-md bg-brand-blue/20">
                    Mon–Sat 8AM–9PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
