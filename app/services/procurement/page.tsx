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
            src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1753803885/Capture-procurement_atgze7.png',
            alt: 'Technical Manpower',
          }}
          content={{
            title: 'Procurement',
            paragraph:
              'Aprosol Engineering Support delivers skilled engineering and technical manpower to meet diverse project requirements across various industries. Our experienced professionals bring expertise in instrumentation, control systems, process engineering, mechanical engineering, electrical systems, and project management. We provide qualified personnel for both short-term assignments and long-term project deployments, ensuring seamless integration with your existing teams and operational excellence throughout project lifecycles.',
          }}
        />
        <ContentSection
          layout="image-right"
          image={{
            src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1753804076/Capture-tech_hrxdxx.png',
            alt: 'Procurement Services',
          }}
          content={{
            // title: 'Procurement',
            paragraph:
              'Aprosol offers comprehensive procurement solutions designed to streamline your supply chain and optimize project costs. Our procurement services include vendor evaluation and selection, competitive bidding processes, quality assurance, logistics coordination, and inventory management. We leverage our extensive network of reliable suppliers and manufacturers to ensure timely delivery of high-quality materials, equipment, and components that meet international standards and project specifications.',
            list: [
              'Material Sourcing & Supply',
              'Equipment Procurement',
              'Vendor Management & Evaluation',
              'Quality Control & Inspection',
              'Logistics & Supply Chain Management',
            ],
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
