import ContentSection from './ContentSection';

// Example usage in your page/component

export default function ExamplePage() {
return (

<div>
{/_ 1st Instance: Image left, subtitle, header, paragraph, button _/}
<ContentSection
layout="image-left"
image={{
          src: "https://res.cloudinary.com/dfwty72r9/image/upload/v1753751586/Capture_andymf.png",
          alt: "About Us"
        }}
content={{
          subtitle: "Who we are",
          title: "About Us",
          paragraph: "Absolute Project Solution (Aprosol) Company Nigeria Limited, incorporated in 2003, is a trusted provider of comprehensive Engineering, Procurement, Project Management, Manpower Supply, Installation & Construction (EPC), and Commissioning services to the Oil & Gas industry and industrial infrastructure clients across Nigeria.",
          button: {
            text: "Read More",
            href: "/about"
          }
        }}
/>

      {/* 2nd Instance: Same as first but without button */}
      <ContentSection
        layout="image-left"
        image={{
          src: "https://res.cloudinary.com/dfwty72r9/image/upload/v1753751586/Capture_andymf.png",
          alt: "About Us"
        }}
        content={{
          subtitle: "Who we are",
          title: "About Us",
          paragraph: "With extensive experience spanning downstream, upstream, offshore, and onshore projects, we have successfully executed numerous projects nationwide, demonstrating our commitment to delivering world-class solutions that drive operational excellence and sustainable growth for our clients."
        }}
      />

      {/* 3rd Instance: Paragraph left, image right */}
      <ContentSection
        layout="image-right"
        image={{
          src: "https://res.cloudinary.com/dfwty72r9/image/upload/v1753751586/Capture_andymf.png",
          alt: "Our Partnership"
        }}
        content={{
          paragraph: "Through our partnership with Combined Engineering & Integrated Solutions (CEIS) — a SMEC company based in Pakistan with solid oil & gas expertise, we strengthen our capabilities in engineering design, project management, and commissioning. We specialize in instrumentation and control, system integration, and process simulation, while also providing comprehensive services in process, civil, mechanical, piping, pipeline, and electrical engineering."
        }}
      />

      {/* 4th Instance: Header, paragraph, subtitle, bullet list left, image right */}
      <ContentSection
        layout="image-right"
        image={{
          src: "https://res.cloudinary.com/dfwty72r9/image/upload/v1753751586/Capture_andymf.png",
          alt: "Our Clients"
        }}
        content={{
          subtitle: "They Include:",
          title: "Our Clients",
          paragraph: "We proudly partner with leading organizations delivering tailored solutions that meet their unique project needs.",
          list: [
            "Energil Limited",
            "Deltafrik Nigeria Limited",
            "Owei-Idicia Nigeria Limited",
            "National Engineering and Technical Company(NETCO )",
            "Makon Engineering and Technical Services",
            "Living Faith Church (Winner's Chapel)",
            "Pre-qualified by NIPEX (Nigeria Petroleum Exchange)",
            "Nigeria Gas Corporation(NGC)",
            "Compasco Manifold & Energy Services",
            "Seplat Petroleum Development Company",
            "Dormanlong/Orioni refinery company",
            "Pan Ocean Oil Corporation",
            "Adax"
          ]
        }}
      />

      {/* 5th Instance: Same as 4th but reversed (image left) */}
      <ContentSection
        layout="image-left"
        image={{
          src: "https://res.cloudinary.com/dfwty72r9/image/upload/v1753751586/Capture_andymf.png",
          alt: "Engineering Design"
        }}
        content={{
          subtitle: "Who we are",
          title: "Engineering Design",
          paragraph: "Our Expertise in Engineering Design can be categorized into the following broad capabilities:",
          list: [
            "Brownfield Engineering for Upstream and Downstream",
            "Conceptual Engineering for Upstream and Downstream",
            "Front End Engineering Design for Upstream and Downstream",
            "Detailed Engineering Design for Upstream and Downstream",
            "Process Engineering Design",
            "Pipeline Design",
            "Instrumentation and Equipment sizing using relevant software preferred by our Clients",
            "Detailed Engineering Design for Upstream and Downstream"
          ]
        }}
      />
    </div>

);
}

---

<!-- CallToActionSection Component -->

<CallToActionSection 
        title="We provide complete engineering, procurement, project management, construction, and commissioning services for Nigeria's Oil & Gas and industrial projects delivered safely, efficiently, and to global standards."
        buttonText="Contact"
        buttonHref="/contact"
        backgroundImage="https://res.cloudinary.com/dfwty72r9/image/upload/v1752528150/alex-waldbrand-oRIQHQCg3fw-unsplash_pfex67.jpg"
      />

// Usage Examples for ServicesSection and GallerySection components

// 1. Import the components
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';

// 2. Usage Examples:

// ===== SERVICES SECTION =====

// Full services page (shows all 6 services)
export function ServicesPage() {
return (
<div>
<ServicesSection 
        showAll={true}
        subtitle="What we do"
        title="Our Services"
      />
</div>
);
}

// Homepage version (shows only 3 services with "View More" button)
export function HomePage() {
return (
<div>
<ServicesSection 
        showAll={false}
        subtitle="What we do"
        title="Our Services"
      />
</div>
);
}

// Custom titles
export function CustomServicesSection() {
return (
<div>
<ServicesSection 
        showAll={true}
        subtitle="Our Expertise"
        title="Professional Services"
      />
</div>
);
}

// ===== GALLERY SECTION =====

// Full gallery page (shows all 6 images)
export function GalleryPage() {
return (
<div>
<GallerySection 
        showAll={true}
        title="Our Gallery"
      />
</div>
);
}

// Homepage version (shows only 3 images with "View More" button)
export function HomePageGallery() {
return (
<div>
<GallerySection 
        showAll={false}
        title="Our Gallery"
      />
</div>
);
}

// Custom title
export function CustomGallerySection() {
return (
<div>
<GallerySection 
        showAll={true}
        title="Project Showcase"
      />
</div>
);
}

// ===== COMBINED USAGE ON A PAGE =====

export function CompletePage() {
return (
<div>
{/_ Hero section would go here _/}

      {/* Services Section - showing 3 with view more */}
      <ServicesSection
        showAll={false}
        subtitle="What we do"
        title="Our Services"
      />

      {/* Gallery Section - showing 3 with view more */}
      <GallerySection
        showAll={false}
        title="Our Gallery"
      />

      {/* Other sections would go here */}
    </div>

);
}

// ===== COMPONENT PROPS INTERFACE =====
/\*
ServicesSection Props:

- showAll?: boolean (default: true) - Show all services or just first 3
- subtitle?: string (default: "What we do") - Blue subtitle text
- title?: string (default: "Our Services") - Main heading

GallerySection Props:

- showAll?: boolean (default: true) - Show all images or just first 3
- title?: string (default: "Our Gallery") - Main heading

Features included:
✅ Fully responsive design (1 col mobile, 2 cols tablet, 3 cols desktop)
✅ Smooth hover animations and transitions
✅ Fade-in-up animation on load with staggered delays
✅ Proper TypeScript interfaces
✅ Next.js Image optimization
✅ Tailwind CSS styling
✅ Hover effects on images and cards
✅ Routing to respective pages
✅ View More buttons when showAll={false}
\*/
