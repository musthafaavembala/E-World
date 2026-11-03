import React, { useState, useEffect } from 'react';
import { servicesData, ServiceItem } from '../data/servicesData';
import { Send, Phone, Calendar as CalendarIcon, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';

interface BookingSectionProps {
  prefilledService?: ServiceItem | null;
  prefilledLocation?: string | null;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  prefilledService,
  prefilledLocation,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState<'Air Conditioner' | 'Washing Machine'>('Air Conditioner');
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // When prefilledService changes, update form
  useEffect(() => {
    if (prefilledService) {
      if (prefilledService.category === 'ac') {
        setCategory('Air Conditioner');
      } else {
        setCategory('Washing Machine');
      }
      setService(prefilledService.title);
    }
  }, [prefilledService]);

  // When prefilledLocation changes, update form
  useEffect(() => {
    if (prefilledLocation) {
      setLocation(prefilledLocation);
    }
  }, [prefilledLocation]);

  // Available services based on selected category
  const availableServices = servicesData.filter((s) =>
    category === 'Air Conditioner' ? s.category === 'ac' : s.category === 'washing-machine'
  );

  // Set default service if none selected or if category changed
  useEffect(() => {
    const isCurrentServiceValid = availableServices.some((s) => s.title === service);
    if (!isCurrentServiceValid && availableServices.length > 0) {
      setService(availableServices[0].title);
    }
  }, [category]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!service) {
      newErrors.service = 'Please choose a service';
    }

    if (!location) {
      newErrors.location = 'Please select your service location';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const formattedDate = date ? date : 'Flexible / Next Available';
    const formattedMessage = message.trim() ? message.trim() : 'Standard service request';

    const whatsappMessage =
      `Hello E WORLD,\n\n` +
      `I would like to book a service.\n\n` +
      `Name: ${name.trim()}\n` +
      `Phone: ${phone.trim()}\n` +
      `Appliance: ${category}\n` +
      `Service: ${service}\n` +
      `Location: ${location}\n` +
      `Preferred Date: ${formattedDate}\n` +
      `Message: ${formattedMessage}\n\n` +
      `Please contact me regarding this service.\n\n` +
      `Thank you.`;

    const encoded = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918157001618?text=${encoded}`;

    setSubmitted(true);
    setIsSubmitting(false);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book" className="py-14 sm:py-20 lg:py-28 relative scroll-mt-16 sm:scroll-mt-20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[300px] sm:h-[400px] bg-brand-blue/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Fast Doorstep Booking
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Book Your Service in Seconds
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-brand-muted">
            Tell us what you need. Our team will connect with you through WhatsApp to confirm your appointment.
          </p>
        </div>

        {/* Booking Card */}
        <div className="mt-10 sm:mt-12 glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-white/10 shadow-2xl relative">
          {submitted ? (
            <div className="py-8 sm:py-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-5 sm:mb-6">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Opening WhatsApp...</h3>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-brand-muted max-w-md">
                Your service enquiry details have been pre-filled. Simply tap send in WhatsApp to connect with our team.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/10 transition"
                >
                  Book Another Service
                </button>
                <a
                  href="tel:+918157001618"
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-blue hover:bg-brand-blueHover transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>Call Us Directly</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-brand-soft mb-1.5 sm:mb-2">
                    Customer Name <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Mohammed Riyas"
                    className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-brand-surface/90 border text-xs sm:text-sm text-white placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition ${
                      errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10 focus:border-transparent'
                    }`}
                  />
                  {errors.name && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-soft mb-1.5 sm:mb-2">
                    Phone Number <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-brand-surface/90 border text-xs sm:text-sm text-white placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition ${
                      errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10 focus:border-transparent'
                    }`}
                  />
                  {errors.phone && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Row 2: Appliance Category Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-soft mb-1.5 sm:mb-2">
                  Appliance Category <span className="text-brand-cyan">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setCategory('Air Conditioner')}
                    className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl border text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 ${
                      category === 'Air Conditioner'
                        ? 'bg-brand-blue/20 border-brand-cyan text-white shadow-glow-blue'
                        : 'bg-brand-surface/50 border-white/10 text-brand-muted hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span>❄️ Air Conditioner</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory('Washing Machine')}
                    className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl border text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 ${
                      category === 'Washing Machine'
                        ? 'bg-brand-blue/20 border-brand-cyan text-white shadow-glow-blue'
                        : 'bg-brand-surface/50 border-white/10 text-brand-muted hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span>🧺 Washing Machine</span>
                  </button>
                </div>
              </div>

              {/* Row 3: Specific Service & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-brand-soft mb-1.5 sm:mb-2">
                    Specific Service <span className="text-brand-cyan">*</span>
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (errors.service) setErrors({ ...errors, service: '' });
                    }}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-brand-surface/90 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition"
                  >
                    {availableServices.map((s) => (
                      <option key={s.id} value={s.title} className="bg-brand-midnight text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-brand-soft mb-1.5 sm:mb-2">
                    Location / Area <span className="text-brand-cyan">*</span>
                  </label>
                  <select
                    id="location"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      if (errors.location) setErrors({ ...errors, location: '' });
                    }}
                    className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-brand-surface/90 border text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition ${
                      errors.location ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10'
                    }`}
                  >
                    <option value="" disabled className="bg-brand-midnight text-brand-muted">
                      Select your location
                    </option>
                    <option value="Parappanangadi" className="bg-brand-midnight text-white">
                      Parappanangadi
                    </option>
                    <option value="Kondotty" className="bg-brand-midnight text-white">
                      Kondotty
                    </option>
                    <option value="Nearby Area (Confirm on WhatsApp)" className="bg-brand-midnight text-white">
                      Nearby Area (Confirm on WhatsApp)
                    </option>
                  </select>
                  {errors.location && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Row 4: Preferred Date (Optional) */}
              <div>
                <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-brand-soft mb-1.5 sm:mb-2">
                  Preferred Date <span className="text-brand-muted text-[10px] font-normal">(Optional)</span>
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-brand-surface/90 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition"
                />
              </div>

              {/* Row 5: Additional Message (Optional) */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-brand-soft mb-1.5 sm:mb-2">
                  Additional Details or Problem Description <span className="text-brand-muted text-[10px] font-normal">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Split AC is not cooling properly, or washing machine is vibrating during spin cycle..."
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-brand-surface/90 border border-white/10 text-xs sm:text-sm text-white placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 sm:gap-3 py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white gradient-cool shadow-glow-blue hover:brightness-110 active:scale-[0.99] transition duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-xs text-brand-muted mt-3">
                By clicking, you will be redirected to WhatsApp with your details pre-filled. No account or password required.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
