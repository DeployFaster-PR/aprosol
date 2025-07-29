'use client';
import React from 'react';

const ClientsSection: React.FC = () => {
  const clients = [
    {
      id: 1,
      name: 'ExxonMobil',
      logo: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1753807985/ExxonMobil-Logo_uflloi.jpg',
    },
    {
      id: 2,
      name: 'Chevron',
      logo: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1753807983/chevron_logo_sezzcm.jpg',
    },
    {
      id: 3,
      name: 'Total',
      logo: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1753807982/Total_S.A.-Logo_c8qzg2.jpg',
    },
    // Placeholder for future clients
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Other Clients
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="rounded-lg p-6 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
