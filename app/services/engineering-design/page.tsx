import CompanyOverview from '@/app/components/Cards/CompanyOverview';
import ContentSection from '@/app/components/Cards/ContentSection';
import React from 'react';

const page = () => {
  return (
    <div>
      <ContentSection
        layout="image-left"
        image={{
          src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1753751586/Capture_andymf.png',
          alt: 'Engineering Design',
        }}
        content={{
          subtitle: 'Who we are',
          title: 'Engineering Design',
          paragraph:
            'Our Expertise in Engineering Design can be categorized into the following broad capabilities:',
          list: [
            'Brownfield Engineering for Upstream and Downstream',
            'Conceptual Engineering for Upstream and Downstream',
            'Front End Engineering Design for Upstream and Downstream',
            'Detailed Engineering Design for Upstream and Downstream',
            'Process Engineering Design',
            'Pipeline Design',
            'Instrumentation and Equipment sizing using relevant software preferred by our Clients',
            'Detailed Engineering Design for Upstream and Downstream',
          ],
        }}
      />
      <CompanyOverview />
    </div>
  );
};

export default page;
