import CompanyOverview from '@/app/components/Cards/CompanyOverview';
import ContentSection from '@/app/components/Cards/ContentSection';
import React from 'react';

const page = () => {
  return (
    <main className="space-y-8">
      <div className="px-8 space-y-4">
        <ContentSection
          layout="image-left"
          image={{
            src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1753804076/Capture-tech_hrxdxx.png',
            alt: 'technical manpower',
          }}
          content={{
            subtitle: 'What we do',
            title: 'Technical Manpower',
            paragraph:
              'Aprosol—With extensive experience spanning downstream, upstream, offshore, and onshore projects, we have successfully executed numerous projects nationwide, demonstrating our commitment to delivering world-class solutions that drive operational excellence and sustainable growth for our clients.',
          }}
        />
      </div>
      <div>
        <CompanyOverview />
      </div>
    </main>
  );
};

export default page;
