import React from 'react';
import { Home, Wind, Wrench, MapPin, Phone, MessageSquare } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const highlights = [
    {
      icon: Home,
      title: 'Convenient Doorstep Visits',
      description: 'Request AC or washing machine service at your home in Parappanangadi or Kondotty.',
    },
    {
      icon: Wind,
      title: 'AC & Washing Machine Care',
      description: 'Choose from the listed AC cleaning, inspection, and maintenance services or washing machine repairs.',
    },
    {
      icon: Wrench,
      title: 'Service Options Explained',
      description: 'Describe the issue and ask about diagnosis, repair options, and any parts needed before confirming service.',
    },
    {
      icon: MapPin,
      title: 'Local Service Areas',
      description: 'Doorstep service is listed for Parappanangadi and Kondotty. Contact the team to check nearby areas.',
    },
    {
      icon: Phone,
      title: 'Call to Confirm Availability',
      description: 'Speak with the team about visit timing and service costs for your appliance and location.',
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
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Us
          </h2>
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
