import React, { useState, useEffect } from 'react';
import { servicesData, ServiceItem } from '../data/servicesData';
import { Phone, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';

interface BookingSectionProps {
  prefilledService?: ServiceItem | null;
}

const normalizePhone = (value: string) => {
  const digitsOnly = value.replace(/\D/g, '');
  return digitsOnly.length === 12 && digitsOnly.startsWith('91')
    ? digitsOnly.slice(2)
    : digitsOnly;
};

export const BookingSection: React.FC<BookingSectionProps> = ({
  prefilledService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState<'Air Conditioner' | 'Washing Machine'>('Air Conditioner');
  const [service, setService] = useState(servicesData[0].title);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

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

  const availableServices = servicesData.filter((s) =>
    category === 'Air Conditioner' ? s.category === 'ac' : s.category === 'washing-machine'
  );

  const handleCategoryChange = (nextCategory: typeof category) => {
    setCategory(nextCategory);
    const serviceCategory = nextCategory === 'Air Conditioner' ? 'ac' : 'washing-machine';
    const firstService = servicesData.find((item) => item.category === serviceCategory);
    if (firstService) setService(firstService.title);
    if (errors.service) setErrors({ ...errors, service: '' });
  };

  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    const normalizedPhone = normalizePhone(phone);
    if (!/^\d{10}$/.test(normalizedPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!service) {
      newErrors.service = 'Please choose a service';
    }

    if (!location) {
      newErrors.location = 'Please select your service location';
    }

    if (date && date < minDate) {
      newErrors.date = 'Please choose today or a future date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      window.setTimeout(() => {
        document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      }, 0);
      return;
    }

    const formattedDate = date ? date : 'Flexible / Next Available';
    const formattedMessage = message.trim() ? message.trim() : 'Standard service request';
    const normalizedPhone = normalizePhone(phone);

    const whatsappMessage =
      `Hello E WORLD,\n\n` +
      `I would like to book a service.\n\n` +
      `Name: ${name.trim()}\n` +
      `Phone: ${normalizedPhone}\n` +
      `Appliance: ${category}\n` +
      `Service: ${service}\n` +
      `Location: ${location}\n` +
      `Preferred Date: ${formattedDate}\n` +
      `Message: ${formattedMessage}\n\n` +
      `Please contact me regarding this service.\n\n` +
      `Thank you.`;

    const encoded = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918157001618?text=${encoded}`;

    setSubmittedWhatsappUrl(whatsappUrl);
    setSubmitted(true);

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book" className="scroll-mt-20 py-8 sm:py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Booking</h2>

        {/* Booking Card */}
        <div className="mt-4 rounded-2xl border border-white/10 bg-brand-card/70 p-4 sm:p-6">
          {submitted ? (
            <div className="py-8 sm:py-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-5 sm:mb-6">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Opening WhatsApp...</h3>
              <p className="mt-2 text-sm text-brand-muted max-w-md">
                Your enquiry is ready in WhatsApp. Tap send to contact the team.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/10 transition"
                >
                  Book Another Service
                </button>
                <a
                  href={submittedWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white gradient-cool hover:brightness-110 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Open WhatsApp</span>
                </a>
                <a
                  href="tel:+918157001618"
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/10 transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>Call Us Directly</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-brand-soft">
                    Customer Name <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Your name"
                    className={`w-full rounded-lg bg-brand-surface/90 px-3.5 py-2.5 text-sm text-white placeholder-brand-muted/60 border focus:outline-none focus:ring-2 focus:ring-brand-cyan transition ${
                      errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10 focus:border-transparent'
                    }`}
                  />
                  {errors.name && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span id="name-error">{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-brand-soft">
                    Phone Number <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="10-digit number"
                    className={`w-full rounded-lg bg-brand-surface/90 px-3.5 py-2.5 text-sm text-white placeholder-brand-muted/60 border focus:outline-none focus:ring-2 focus:ring-brand-cyan transition ${
                      errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10 focus:border-transparent'
                    }`}
                  />
                  {errors.phone && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span id="phone-error">{errors.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Row 2: Appliance Category Selection */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-brand-soft">
                  Appliance <span className="text-brand-cyan">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange('Air Conditioner')}
                    aria-pressed={category === 'Air Conditioner'}
                    className={`rounded-lg border px-2 py-2.5 text-xs font-semibold transition flex items-center justify-center gap-1.5 ${
                      category === 'Air Conditioner'
                        ? 'bg-brand-blue/20 border-brand-cyan text-white shadow-glow-blue'
                        : 'bg-brand-surface/50 border-white/10 text-brand-muted hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span>Air Conditioner</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCategoryChange('Washing Machine')}
                    aria-pressed={category === 'Washing Machine'}
                    className={`rounded-lg border px-2 py-2.5 text-xs font-semibold transition flex items-center justify-center gap-1.5 ${
                      category === 'Washing Machine'
                        ? 'bg-brand-blue/20 border-brand-cyan text-white shadow-glow-blue'
                        : 'bg-brand-surface/50 border-white/10 text-brand-muted hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span>Washing Machine</span>
                  </button>
                </div>
              </div>

              {/* Row 3: Specific Service & Location */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-brand-soft">
                    Service <span className="text-brand-cyan">*</span>
                  </label>
                  <select
                    id="service"
                    value={service}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (errors.service) setErrors({ ...errors, service: '' });
                    }}
                    className="w-full rounded-lg border border-white/10 bg-brand-surface/90 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition"
                  >
                    {availableServices.map((s) => (
                      <option key={s.id} value={s.title} className="bg-brand-midnight text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span id="service-error">{errors.service}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="location" className="mb-1.5 block text-xs font-semibold text-brand-soft">
                    Location <span className="text-brand-cyan">*</span>
                  </label>
                  <select
                    id="location"
                    value={location}
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={errors.location ? 'location-error' : undefined}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      if (errors.location) setErrors({ ...errors, location: '' });
                    }}
                    className={`w-full rounded-lg bg-brand-surface/90 px-3.5 py-2.5 text-sm text-white border focus:outline-none focus:ring-2 focus:ring-brand-cyan transition ${
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
                      <span id="location-error">{errors.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Row 4: Preferred Date (Optional) */}
              <div>
                <label htmlFor="date" className="mb-1.5 block text-xs font-semibold text-brand-soft">
                  Preferred date <span className="text-brand-muted font-normal">(optional)</span>
                </label>
                <input
                  id="date"
                  type="date"
                  min={minDate}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    if (errors.date) setErrors({ ...errors, date: '' });
                  }}
                  className={`w-full rounded-lg bg-brand-surface/90 px-3.5 py-2.5 text-sm text-white border focus:outline-none focus:ring-2 focus:ring-brand-cyan transition ${
                    errors.date ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10'
                  }`}
                />
                {errors.date && (
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span id="date-error">{errors.date}</span>
                  </div>
                )}
              </div>

              {/* Row 5: Additional Message (Optional) */}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-brand-soft">
                  Problem details <span className="text-brand-muted font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe the issue"
                  className="w-full rounded-lg border border-white/10 bg-brand-surface/90 px-3.5 py-2.5 text-sm text-white placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white gradient-cool shadow-glow-blue hover:brightness-110 active:scale-[0.99] transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};
