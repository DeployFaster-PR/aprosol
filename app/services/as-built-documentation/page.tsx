import CompanyOverview from '@/app/components/Cards/CompanyOverview';
import ContentSection from '@/app/components/Cards/ContentSection';
import React from 'react';

const page = () => {
  return (
    <main className="space-y-8">
      <div>
        <div className="px-8 space-y-4">
          <ContentSection
            layout="image-left"
            image={{
              src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
              alt: 'construction support',
            }}
            content={{
              subtitle: 'Who we are',
              title: 'As-Built Documentation',
              paragraph:
                'Aprosol company Nigeria - Engineering Support delivers skilled engineering and technical manpower to meet diverse project requirements across various industries. Our experienced professionals bring expertise in instrumentation, control systems, process engineering, mechanical engineering, electrical systems, and project management. We provide qualified personnel for both short-term assignments and long-term project deployments, ensuring seamless integration with your existing teams and operational excellence throughout project lifecycles.',
            }}
          />
        </div>
        <CompanyOverview />
      </div>
    </main>
  );
};

export default page;
