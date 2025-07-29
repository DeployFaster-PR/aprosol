import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import ContactSection from '../components/ContactForm/ContactSection';
import ContactForm from '../components/ContactForm/ContactForm';

const page = () => {
  return (
    <main className="space-y-2">
      <div className="px-8">
        <HeroSection
          title="Contact Us"
          // subtitle="Find your perfect home where comfort meets convenience. Browse our curated collection of premium properties in the most desirable neighborhoods."
          backgroundImage="https://res.cloudinary.com/dfwty72r9/image/upload/v1752528124/ricardo-gomez-angel-MagdWoazARo-unsplash_1_t0vcad.jpg"
          textColor="text-white"
          overlayOpacity={0.4}
          height="h-80"
          borderRadius="rounded-xl"
        />
      </div>
      <ContactSection />
      <ContactForm />
    </main>
  );
};

export default page;
