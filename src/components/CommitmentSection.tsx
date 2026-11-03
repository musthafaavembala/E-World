import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, UserCheck } from 'lucide-react';

export const CommitmentSection: React.FC = () => {
  const commitments = [
    {
      icon: ShieldCheck,
      title: 'Start with the Issue',
      description: 'Share the symptoms and appliance details so the team can discuss possible checks and next steps.',
    },
    {
      icon: HeartHandshake,
      title: 'At-Home Service',
      description: 'Request an AC or washing machine service visit for your home in the listed coverage areas.',
    },
    {
      icon: Sparkles,
      title: 'AC & Washing Machine Options',
      description: 'Explore AC cleaning, inspection, and maintenance or washing machine repair and descaling.',
    },
    {
      icon: UserCheck,
      title: 'Talk to the Team',
      description: 'Call or start a WhatsApp enquiry to share your appliance, location, and preferred visit date.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-brand-surface/40 relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Our Standard of Care
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Commitment to You
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-brand-muted">
            The principles that guide every doorstep service visit we carry out in Kerala.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {commitments.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between glass-panel-hover"
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
