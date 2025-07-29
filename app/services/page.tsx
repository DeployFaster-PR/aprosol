import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import CompanyOverview from '../components/Cards/CompanyOverview';
import ContentSection from '../components/Cards/ContentSection';
import CallToActionSection from '../components/Cards/CallToActionSection';
import ServicesSection from '../components/Cards/ServicesSection';

const page = () => {
  return (
    <main className="space-y-8">
      <div className="px-8 space-y-4">
        <HeroSection
          title="Our Services"
          // subtitle="Find your perfect home where comfort meets convenience. Browse our curated collection of premium properties in the most desirable neighborhoods."
          backgroundImage="https://res.cloudinary.com/dfwty72r9/image/upload/v1752528124/ricardo-gomez-angel-MagdWoazARo-unsplash_1_t0vcad.jpg"
          textColor="text-white"
          overlayOpacity={0.4}
          height="h-80"
          borderRadius="rounded-xl"
        />
      </div>
      <ContentSection
        layout="image-left"
        image={{
          src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          alt: 'services image',
        }}
        content={{
          subtitle: 'services',
          title: 'What we are known for',
          paragraph:
            'Absolute Project Solution (Aprosol) Company Nigeria Limited, incorporated in 2003, is a trusted provider of comprehensive Engineering, Procurement, Project Management, Manpower Supply, Installation & Construction (EPC), and Commissioning services to the Oil & Gas industry and industrial infrastructure clients across Nigeria.',
          button: {
            text: 'Contact',
            href: '/contact',
          },
        }}
      />
      <ServicesSection
        showAll={true}
        subtitle="What we do"
        title="Our Services"
      />
      <CallToActionSection
        title="We provide complete engineering, procurement, project management, construction, and commissioning services for Nigeria's Oil & Gas and industrial projects delivered safely, efficiently, and to global standards."
        buttonText="Contact"
        buttonHref="/contact"
        backgroundImage="https://res.cloudinary.com/dfwty72r9/image/upload/v1752528150/alex-waldbrand-oRIQHQCg3fw-unsplash_pfex67.jpg"
      />
      <CompanyOverview />
    </main>
  );
};

export default page;
