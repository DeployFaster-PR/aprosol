import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import GallerySection from '../components/Cards/GallerySection';

const page = () => {
  return (
    <main className="space-y-8">
      <div className="px-8 space-y-4">
        <HeroSection
          title="Gallery"
          // subtitle="Find your perfect home where comfort meets convenience. Browse our curated collection of premium properties in the most desirable neighborhoods."
          backgroundImage="https://res.cloudinary.com/dfwty72r9/image/upload/v1753804208/Capture-construction_iq97pg.png"
          textColor="text-white"
          overlayOpacity={0.4}
          height="h-80"
          borderRadius="rounded-xl"
        />
        <div className="py-4 md:py-12">
          <GallerySection showAll={true} title="Our Gallery" />
        </div>
      </div>
    </main>
  );
};

export default page;
