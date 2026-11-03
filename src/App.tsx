import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './data/servicesData';

export const App: React.FC = () => {
  const [prefilledService, setPrefilledService] = useState<ServiceItem | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('book');
    el?.scrollIntoView({ behavior: 'instant', block: 'start' });
  };

  const handleSelectService = (service: ServiceItem) => {
    setPrefilledService(service);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-brand-midnight text-brand-soft flex flex-col w-full overflow-x-hidden">
      {/* Sticky Top Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow w-full overflow-x-hidden">
        <Hero />
        <ServicesSection onSelectService={handleSelectService} />
        <WhyChooseSection />
        <BookingSection prefilledService={prefilledService} />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
};

export default App;
