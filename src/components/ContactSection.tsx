import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, Mail, Calendar } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Get in Touch
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Direct &amp; Fast Contact
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-brand-muted">
            Have questions about your air conditioner or washing machine? We’re just one tap away.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Phone */}
          <div className="glass-panel rounded-2xl p-5 sm:p-7 flex flex-col justify-between glass-panel-hover text-center sm:text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center mb-5 mx-auto sm:mx-0">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Call Us Directly</h3>
              <p className="text-xs text-brand-muted mt-1">Speak directly with our technician team</p>
              <div className="mt-4 font-extrabold text-lg sm:text-xl text-white">
                +91 8157001618
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60">
              <a
                href="tel:+918157001618"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-brand-blue border border-brand-border hover:border-transparent transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="glass-panel rounded-2xl p-5 sm:p-7 flex flex-col justify-between glass-panel-hover text-center sm:text-left border-brand-cyan/20">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 mx-auto sm:mx-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">WhatsApp Chat</h3>
              <p className="text-xs text-brand-muted mt-1">Quick text enquiries and photo sharing</p>
              <div className="mt-4 font-extrabold text-lg sm:text-xl text-white">
                +91 8157001618
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60">
              <a
                href="https://wa.me/918157001618?text=Hello%20E%20WORLD%2C%20I%20have%20an%20enquiry%20regarding%20appliance%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white gradient-cool shadow-glow-blue hover:brightness-110 transition"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Working Hours & Areas */}
          <div className="glass-panel rounded-2xl p-5 sm:p-7 flex flex-col justify-between glass-panel-hover text-center sm:text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center mb-5 mx-auto sm:mx-0">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Service Hours</h3>
              <div className="mt-3 space-y-2 text-xs text-brand-soft">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-brand-muted">Mon – Sat:</span>
                  <span className="font-semibold text-white">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-brand-muted">Sunday:</span>
                  <span className="font-semibold text-white">9:00 AM – 6:00 PM</span>
                </div>
                <div className="pt-2 text-[11px] text-brand-cyan flex items-center gap-1 justify-center sm:justify-start">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>Parappanangadi &amp; Kondotty, Kerala</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60">
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-brand-blue border border-brand-border hover:border-transparent transition"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
