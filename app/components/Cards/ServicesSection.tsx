'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  route: string;
}

interface ServicesSectionProps {
  showAll?: boolean;
  subtitle?: string;
  title?: string;
}

const services: Service[] = [
  {
    id: 'engineering-design',
    title: 'Engineering Design',
    description:
      'Aprosol offers a flexible approach to our clients need. If required, we could quickly mobilize a high quality design office in most locations.',
    image:
      'https://res.cloudinary.com/dfwty72r9/image/upload/v1753751586/Capture_andymf.png',
    route: '/services/engineering-design',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description:
      'Aprosol has a core team of Construction Engineers who have diverse experience throughout the industry.',
    image:
      'https://res.cloudinary.com/dfwty72r9/image/upload/v1752528118/eden-constantino-OXmym9cuaEY-unsplash_umww7a.jpg',
    route: '/services/construction-support',
  },
  {
    id: 'as-built-documentation',
    title: 'As-Built Documentation',
    description:
      'Aprosol Company Nigeria Limited produces drawings of facilities to show how facilities are after the construction or modification.',
    image:
      'https://res.cloudinary.com/dfwty72r9/image/upload/v1752617135/male-manager-reviewing-data-clipboard_kyp6tp.jpg',
    route: '/services/as-built-documentation',
  },
  {
    id: 'procurement',
    title: 'Procurement',
    description:
      'Reliable sourcing and supply of quality materials and equipment.',
    image:
      'https://res.cloudinary.com/dfwty72r9/image/upload/v1753803885/Capture-procurement_atgze7.png',
    route: '/services/procurement',
  },
  {
    id: 'technical-manpower',
    title: 'Technical Manpower Supply',
    description:
      'Aprosol Company Nigeria Limited is fully registered with DPR and Ready to supply technical personnel to support the operations of the IOCs in Nigeria.',
    image:
      'https://res.cloudinary.com/dfwty72r9/image/upload/v1753804076/Capture-tech_hrxdxx.png',
    route: '/services/technical-manpower',
  },
  {
    id: 'installation-construction',
    title: 'Installation & Construction',
    description:
      'Our Engineers are familiar with both new construction and revamping of existing facilities.',
    image:
      'https://res.cloudinary.com/dfwty72r9/image/upload/v1753804208/Capture-construction_iq97pg.png',
    route: '/services/installation-construction',
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({
  showAll = true,
  subtitle = 'What we do',
  title = 'Our Services',
}) => {
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-medium mb-2 uppercase tracking-wide">
            {subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.route}
                  className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="text-center">
            <Link
              href="/services"
              className="my-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200 transform hover:scale-105"
            >
              View More
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
