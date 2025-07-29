'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Industrial Pipeline Systems',
      image:
        'https://res.cloudinary.com/dfwty72r9/image/upload/v1752528184/crystal-kwok-mhUsz2ezlXQ-unsplash_wtic8x.jpg',
      sections: [
        {
          company: 'Addax',
          details: [
            'Supply of Qua Iboe Isolite (QOI) LPG production, PVC conduit, converters and caps, plugs, electromagnetic molding, fuel light, lubricant works USD PS 000 to Addax Petroleum Development Company',
            'Supply of chemical composition chemical work to petroleum pumps, works per various PS-5 NEM 2 used',
            'Structural substation materials and forwarding field instrumentation and control substation materials and forwarding field instrumentation',
            'Provided installation materials and handled field instrumentation and control materials and commissioning operations',
          ],
        },
        {
          company: 'Pan Ocean Oil Corporation',
          details: [
            'Adda-Oki Pipeline Project - Ikata Port Storage facility design and construction supervision',
          ],
        },
        {
          company: 'ExxonMobil',
          details: [
            'Supply of Thomas & Betts Products',
            'Supply of offshore Operation material on several Rigs from Europe and USA',
          ],
        },
        {
          company: 'Seplat Petroleum Development Company',
          details: ['Repair work on fuel Gas skid for Dewatering'],
        },
        {
          company: 'Dumanlong/Orient refinery company',
          details: [
            'Engineering Design, procurement and installation of Field Instrument and Electrical Equipment for the Crude Oil storage facility of the Oriental Oil Refinery',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Offshore Platform Development',
      image:
        'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop',
      sections: [
        {
          company: 'Shell Nigeria',
          details: [
            'Design and installation of offshore platform electrical systems',
            'Supply of marine-grade instrumentation equipment',
            'Commissioning of subsea control systems',
          ],
        },
        {
          company: 'NNPC Limited',
          details: [
            'Maintenance of offshore drilling equipment',
            'Supply of safety and emergency response systems',
          ],
        },
        {
          company: 'Chevron Nigeria',
          details: [
            'Installation of platform communication systems',
            'Supply of explosion-proof electrical equipment',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Refinery Modernization',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      sections: [
        {
          company: 'Warri Refinery',
          details: [
            'Complete electrical system upgrade and modernization',
            'Installation of advanced process control systems',
            'Supply and installation of high-voltage switchgear',
          ],
        },
        {
          company: 'Port Harcourt Refinery',
          details: [
            'Instrumentation calibration and maintenance services',
            'Supply of specialized measurement equipment',
          ],
        },
        {
          company: 'Kaduna Refinery',
          details: [
            'Emergency power system installation',
            'Fire and gas detection system upgrade',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'LNG Terminal Construction',
      image:
        'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop',
      sections: [
        {
          company: 'Nigeria LNG Limited',
          details: [
            'Design and installation of LNG terminal control systems',
            'Supply of cryogenic instrumentation equipment',
            'Installation of safety shutdown systems',
          ],
        },
        {
          company: 'Bonny Gas Transport',
          details: [
            'Marine loading arm electrical systems',
            'Supply of specialized LNG measurement devices',
          ],
        },
        {
          company: 'Total Nigeria',
          details: [
            'Gas processing facility instrumentation',
            'Installation of environmental monitoring systems',
          ],
        },
      ],
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Projects</h2>

          <div className="flex items-center space-x-4">
            {/* Project indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentProject ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex space-x-2">
              <button
                onClick={prevProject}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextProject}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Project content */}
        <div className="space-y-8">
          {/* Project image */}
          <div>
            <img
              src={currentProjectData.image}
              alt={currentProjectData.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
              style={{
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
              }}
            />
          </div>

          {/* Project details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {currentProjectData.title}
            </h3>

            {currentProjectData.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {section.company}
                </h4>
                <ul className="space-y-1">
                  {section.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex justify-center mt-8 lg:hidden">
          <div className="flex items-center space-x-4">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-gray-600 font-medium">
              {currentProject + 1} of {projects.length}
            </span>
            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
