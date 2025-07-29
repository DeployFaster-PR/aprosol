import CareersForm from '@/app/components/ContactForm/CareersForm';
import HeroSection from '@/app/components/Hero/HeroSection';
import React from 'react';

const page = () => {
  return (
    <main className="space-y-8">
      <div className="px-8 space-y-4">
        <HeroSection
          title="Careers"
          // subtitle="Find your perfect home where comfort meets convenience. Browse our curated collection of premium properties in the most desirable neighborhoods."
          backgroundImage="https://res.cloudinary.com/dfwty72r9/image/upload/v1753804615/gallery2_cjafjx.png"
          textColor="text-white"
          overlayOpacity={0.4}
          height="h-80"
          borderRadius="rounded-xl"
        />
      </div>
      <CareersForm />
    </main>
  );
};

export default page;
