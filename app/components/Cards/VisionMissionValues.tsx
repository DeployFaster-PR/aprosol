import React from 'react';

interface VisionItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const VisionMissionValues: React.FC = () => {
  const visionItems: VisionItem[] = [
    {
      id: 'vision',
      title: 'Our Vision',
      description:
        'To set the standard for indigenous engineering in Nigeria through quality, innovation, and community-focused solutions.',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      id: 'mission',
      title: 'Our Mission',
      description:
        'Building a reputable Engineering Team to produce top quality Technical deliverables to our Clients always',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 'values',
      title: 'Our Values',
      description:
        'At Aerosol, we value excellence, integrity, safety, local expertise, innovation, collaboration, and community commitment — guiding every project we deliver across Nigeria.',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 9a2 2 0 114 0 2 2 0 01-4 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl p-8 text-center transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white cursor-pointer transform hover:-translate-y-1"
              style={{
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="text-blue-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-6 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 group-hover:text-white leading-relaxed transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
