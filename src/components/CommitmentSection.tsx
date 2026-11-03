import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, UserCheck } from 'lucide-react';

export const CommitmentSection: React.FC = () => {
  const commitments = [
    {
      icon: ShieldCheck,
      title: 'Honest Diagnoses',
      description: 'We believe in fixing before replacing. If a simple filter wash or sensor adjustment solves the problem, we will never recommend costly unnecessary part swaps.',
    },
    {
      icon: HeartHandshake,
      title: 'Respect for Your Home',
      description: 'Technicians take off footwear or use clean covers, set up waterproof bags for AC water cleaning, and wipe down appliances after service is completed.',
    },
    {
      icon: Sparkles,
      title: 'Kerala Climate Optimization',
      description: 'Coastal air and humidity create distinct corrosion and fungal challenges. We calibrate equipment to deliver maximum cooling efficiency while reducing electricity draw.',
    },
    {
      icon: UserCheck,
      title: 'Customer-First Communication',
      description: 'Clear explanations in straightforward language. We explain what caused the problem and give you maintenance advice to extend your appliance lifespan.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-brand-surface/40 relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Our Standard of Care
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Commitment to You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted">
            The principles that guide every doorstep service visit we carry out in Kerala.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 flex flex-col justify-between glass-panel-hover"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-cyan border border-brand-cyan/20 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
