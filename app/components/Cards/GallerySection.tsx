'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface GallerySectionProps {
  showAll?: boolean;
  title?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1753804615/gallery2_cjafjx.png',
    alt: 'Construction worker celebrating',
  },
  {
    id: 'gallery-2',
    src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    alt: 'Team collaboration',
  },
  {
    id: 'gallery-3',
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1753804615/gallery1_xxhhgx.png',
    alt: 'Professional woman working',
  },
  {
    id: 'gallery-4',
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    alt: 'Team meeting',
  },
  {
    id: 'gallery-5',

    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    alt: 'Technical work',
  },
  {
    id: 'gallery-6',
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    alt: 'Business handshake',
  },
];

const GallerySection: React.FC<GallerySectionProps> = ({
  showAll = true,
  title = 'Our Gallery',
}) => {
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 3);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="text-center">
            <Link
              href="/gallery"
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

export default GallerySection;
