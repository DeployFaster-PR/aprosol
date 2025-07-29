import React from 'react';
import Image from 'next/image';

interface ContentSectionProps {
  layout: 'image-left' | 'image-right';
  image?: {
    src: string;
    alt: string;
    className?: string;
  };
  content: {
    subtitle?: string;
    title?: string;
    paragraph?: string;
    button?: {
      text: string;
      href: string;
      className?: string;
    };
    list?: string[];
  };
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  layout,
  image,
  content,
  className = '',
  imageClassName = '',
  contentClassName = '',
}) => {
  const isImageLeft = layout === 'image-left';

  const ImageComponent = image ? (
    <div className={`w-full lg:w-1/2 ${imageClassName}`}>
      <div className="relative w-full max-w-xs mx-auto aspect-[4/5] rounded-2xl overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-none lg:w-full lg:h-[500px] lg:aspect-auto">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 450px"
          className={`object-cover ${image.className || ''}`}
        />
      </div>
    </div>
  ) : null;

  const ContentComponent = (
    <div
      className={`w-full lg:w-1/2 flex flex-col justify-center ${contentClassName}`}
    >
      {/* Content wrapper with responsive padding */}
      <div
        className={`
        ${isImageLeft ? 'lg:pl-8 xl:pl-12' : 'lg:pr-8 xl:pr-12'}
        max-w-none px-0
      `}
      >
        {content.subtitle && (
          <p className="text-blue-500 text-xs font-medium mb-2 uppercase tracking-wide sm:text-sm">
            {content.subtitle}
          </p>
        )}

        {content.title && (
          <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight sm:text-3xl md:text-4xl sm:mb-6">
            {content.title}
          </h2>
        )}

        {content.paragraph && (
          <p className="text-gray-800 text-sm leading-relaxed mb-4 sm:text-base md:text-lg sm:mb-6">
            {content.paragraph}
          </p>
        )}

        {content.list && content.list.length > 0 && (
          <ul className="space-y-2 mb-4 sm:space-y-3 sm:mb-6">
            {content.list.map((item, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0 sm:w-2 sm:h-2"></div>
                <span className="text-gray-800 text-sm leading-relaxed sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}

        {content.button && (
          <div>
            <a
              href={content.button.href}
              className={`inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 text-sm sm:py-3 sm:px-6 sm:text-base ${
                content.button.className || ''
              }`}
            >
              {content.button.text}
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className={`py-8 md:py-12 lg:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:gap-8 xl:gap-12">
          {isImageLeft ? (
            <>
              {ImageComponent}
              {ContentComponent}
            </>
          ) : (
            <>
              {ContentComponent}
              {ImageComponent}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
