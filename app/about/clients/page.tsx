import ClientsSection from '@/app/components/Cards/ClientsSection';
import CompanyOverview from '@/app/components/Cards/CompanyOverview';
import ContentSection from '@/app/components/Cards/ContentSection';
import ProjectsSection from '@/app/components/Cards/ProjectsSection';
import HeroSection from '@/app/components/Hero/HeroSection';
import React from 'react';

const page = () => {
  return (
    <main className="space-y-8">
      <div className="px-8 space-y-4">
        <HeroSection
          title="Our clients"
          // subtitle="Find your perfect home where comfort meets convenience. Browse our curated collection of premium properties in the most desirable neighborhoods."
          backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          textColor="text-white"
          overlayOpacity={0.4}
          height="h-80"
          borderRadius="rounded-xl"
        />
        <ContentSection
          layout="image-right"
          image={{
            src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'Our Clients',
          }}
          content={{
            title: 'Our Clients',
            paragraph:
              'We proudly partner with leading organizations delivering tailored solutions that meet their unique project needs.',
            list: [
              'Energil Limited',
              'Deltafrik Nigeria Limited',
              'Owei-Idicia Nigeria Limited',
              'National Engineering and Technical Company(NETCO )',
              'Makon Engineering and Technical Services',
              "Living Faith Church (Winner's Chapel)",
              'Pre-qualified by NIPEX (Nigeria Petroleum Exchange)',
              'Nigeria Gas Corporation(NGC)',
              'Compasco Manifold & Energy Services',
              'Seplat Petroleum Development Company',
              'Dormanlong/Orioni refinery company',
              'Pan Ocean Oil Corporation',
              'Adax',
            ],
          }}
        />
        <ClientsSection />
        <ProjectsSection />
      </div>
      <CompanyOverview />
    </main>
  );
};

export default page;
