import React from 'react';
import Link from 'next/link';

interface CallToActionSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  onContactClick?: () => void;
  backgroundImage?: string;
  openInNewTab?: boolean;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title = "We provide complete engineering, procurement, project management, construction, and commissioning services for Nigeria's Oil & Gas and industrial projects delivered safely, efficiently, and to global standards.",
  subtitle,
  buttonText = 'Contact',
  buttonHref,
  onContactClick = () => console.log('Contact clicked'),
  backgroundImage = 'https://res.cloudinary.com/dfwty72r9/image/upload/v1752528150/alex-waldbrand-oRIQHQCg3fw-unsplash_pfex67.jpg',
  openInNewTab = false,
}) => {
  return (
    <section className="relative m-4 h-96 w-auto overflow-visible rounded-2xl shadow-xl sm:m-6 md:m-8 md:h-96">
      {/* Background Image */}
      <div
        className="absolute inset-0 rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-black/60" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-5xl">
            {/* Subtitle */}
            {subtitle && (
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-blue-300 sm:mb-4 sm:text-sm md:text-base lg:text-lg">
                {subtitle}
              </p>
            )}

            {/* Main Title */}
            <h1 className="mb-6 text-lg font-medium leading-relaxed text-white sm:mb-7 sm:text-xl md:mb-8 md:text-2xl lg:text-2xl xl:text-3xl">
              {title}
            </h1>

            {/* CTA Button */}
            {buttonHref ? (
              <Link
                href={buttonHref}
                target={openInNewTab ? '_blank' : undefined}
                rel={openInNewTab ? 'noopener noreferrer' : undefined}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-lg"
              >
                <span className="relative z-10">{buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ) : (
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-lg"
              >
                <span className="relative z-10">{buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 rounded-b-2xl bg-gradient-to-t from-black/20 to-transparent sm:h-32" />

      {/* Optional: Industrial Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-br from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
};

export default CallToActionSection;
