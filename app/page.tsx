import CallToActionSection from './components/Cards/CallToActionSection';
import CompanyOverview from './components/Cards/CompanyOverview';
import ContentSection from './components/Cards/ContentSection';
import GallerySection from './components/Cards/GallerySection';
import ServicesSection from './components/Cards/ServicesSection';
import HomepageHero from './components/Hero/HomepageHero';

export default function Home() {
  return (
    <div>
      <HomepageHero />
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
            'Absolute Project Solution (Aprosol) Company Nigeria Limited, incorporated in 2003, is a trusted provider of comprehensive Engineering, Procurement, Project Management, Manpower Supply, Installation & Construction (EPC), and Commissioning services to the Oil & Gas industry and industrial infrastructure clients across Nigeria.',
          button: {
            text: 'Read More',
            href: '/about',
          },
        }}
      />
      <ServicesSection
        showAll={false}
        subtitle="What we do"
        title="Our Services"
      />
      <CallToActionSection
        title="We provide complete engineering, procurement, project management, construction, and commissioning services for Nigeria's Oil & Gas and industrial projects delivered safely, efficiently, and to global standards."
        buttonText="Contact"
        buttonHref="/contact"
        backgroundImage="https://res.cloudinary.com/dfwty72r9/image/upload/v1752528150/alex-waldbrand-oRIQHQCg3fw-unsplash_pfex67.jpg"
      />
      <GallerySection showAll={false} title="Our Gallery" />
      <CompanyOverview />
    </div>
  );
}
