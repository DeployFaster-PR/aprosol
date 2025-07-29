import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import CompanyOverview from '../components/Cards/CompanyOverview';
import ContentSection from '../components/Cards/ContentSection';
import VisionMissionValues from '../components/Cards/VisionMissionValues';

const page = () => {
  return (
    <main className="space-y-8">
      <div className="px-8 space-y-4">
        <HeroSection
          title="About Us"
          // subtitle="Find your perfect home where comfort meets convenience. Browse our curated collection of premium properties in the most desirable neighborhoods."
          backgroundImage="https://res.cloudinary.com/dfwty72r9/image/upload/v1752528130/female-engineers-working_qg2xyc.jpg"
          textColor="text-white"
          overlayOpacity={0.4}
          height="h-80"
          borderRadius="rounded-xl"
        />
        <ContentSection
          layout="image-left"
          image={{
            src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1753751586/Capture_andymf.png',
            alt: 'About Us',
          }}
          content={{
            subtitle: 'Who we are',
            title: 'About Us',
            paragraph:
              'With extensive experience spanning downstream, upstream, offshore, and onshore projects, we have successfully executed numerous projects nationwide, demonstrating our commitment to delivering world-class solutions that drive operational excellence and sustainable growth for our clients.',
          }}
        />
        <ContentSection
          layout="image-right"
          image={{
            src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'Our Partnership',
          }}
          content={{
            paragraph:
              'Through our partnership with Combined Engineering & Integrated Solutions (CEIS) — a SMEC company based in Pakistan with solid oil & gas expertise, we strengthen our capabilities in engineering design, project management, and commissioning. We specialize in instrumentation and control, system integration, and process simulation, while also providing comprehensive services in process, civil, mechanical, piping, pipeline, and electrical engineering.',
          }}
        />
        <VisionMissionValues />
      </div>
      <CompanyOverview />
    </main>
  );
};

export default page;
