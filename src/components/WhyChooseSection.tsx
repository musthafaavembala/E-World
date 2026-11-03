import React from 'react';
import { Home, Award, Wrench, ShieldCheck, Zap, MessageSquare } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const highlights = [
    {
      icon: Home,
      title: 'Convenient Doorstep Visits',
      description: 'We come directly to your home or office in Parappanangadi and Kondotty with complete equipment, saving you hassle.',
    },
    {
      icon: Award,
      title: 'Experienced Field Technicians',
      description: 'Skilled technicians with in-depth practical knowledge across split air conditioning systems and all major washing machines.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Workmanship & Genuine Parts',
      description: 'Every repair uses reliable, high-grade parts and correct manufacturer-compliant techniques for lasting performance.',
    },
    {
      icon: Wrench,
      title: 'Mess-Free Cleaning Standards',
      description: 'Using specialized waterproof service bags during AC water cleaning protects your interior walls, floor, and furniture completely.',
    },
    {
      icon: Zap,
      title: 'Fast Response & Clear Pricing',
      description: 'Honest upfront diagnostic communication with no hidden fees, plus prompt service scheduling when your cooling is down.',
    },
    {
      icon: MessageSquare,
      title: 'Direct WhatsApp Booking',
      description: 'No complicated registration or confusing apps. Chat directly with our local team for quick confirmations and updates.',
    },
  ];

  return (
    <section id="why-us" className="py-14 sm:py-20 lg:py-28 bg-brand-deep/50 relative border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Trust &amp; Reliability
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Homeowners Choose <span className="gradient-text-cool">E WORLD</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-brand-muted">
            Dependable appliance care built on skilled technicians, honest advice, and respectful home service.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl p-5 sm:p-7 flex flex-col justify-between glass-panel-hover"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl gradient-cool flex items-center justify-center text-white shadow-glow-blue mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
