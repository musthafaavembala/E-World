import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BrandsSection } from './components/BrandsSection';
import { OurWorkGallery } from './components/OurWorkGallery';
import { LocationsSection } from './components/LocationsSection';
import { CommitmentSection } from './components/CommitmentSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { ServiceItem } from './data/servicesData';

export const App: React.FC = () => {
  const [prefilledService, setPrefilledService] = useState<ServiceItem | null>(null);
  const [prefilledLocation, setPrefilledLocation] = useState<string | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('book');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus on customer name input for instant interaction
      setTimeout(() => {
        const input = document.getElementById('name');
        if (input) input.focus();
      }, 500);
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setPrefilledService(service);
    scrollToBooking();
  };

  const handleSelectLocation = (locationName: string) => {
    setPrefilledLocation(locationName);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-brand-midnight text-brand-soft flex flex-col w-full overflow-x-hidden">
      {/* Sticky Top Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow w-full overflow-x-hidden">
        <Hero onOpenBooking={scrollToBooking} />
        <ServicesSection onSelectService={handleSelectService} />
        <WhyChooseSection />
        <BrandsSection />
        <OurWorkGallery />
        <LocationsSection onSelectLocation={handleSelectLocation} />
        <CommitmentSection />
        <BookingSection
          prefilledService={prefilledService}
          prefilledLocation={prefilledLocation}
        />
        <ContactSection onOpenBooking={scrollToBooking} />
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Floating Bottom Action Bar for Mobile */}
      <FloatingMobileBar onOpenBooking={scrollToBooking} />
    </div>
  );
};

export default App;
