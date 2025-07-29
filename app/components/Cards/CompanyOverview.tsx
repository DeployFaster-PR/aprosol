import React from 'react';

const CompanyOverview = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Africa Map */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-none">
              <img
                src="https://res.cloudinary.com/dfwty72r9/image/upload/v1752616979/Africa_Map_qcresj.svg"
                alt="Africa map outline"
                className="w-full h-auto min-h-[500px] lg:min-h-[600px] object-contain"
              />

              {/* Location dots overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                  <div className="absolute top-2/5 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                  <div className="absolute top-1/2 left-2/5 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                  <div className="absolute top-3/5 left-3/5 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our strength lies in blending global standards with local
                know-how.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                From the heart of the Niger Delta to remote offshore sites, we
                navigate complex environments with confidence, thanks to our
                strong community relationships and highly skilled teams.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why work with Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Deep local and cultural insight
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Fast, safe, and efficient project delivery
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Backed by world-class partners like CEIS
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Agile teams and proven results
                  </span>
                </li>
              </ul>
            </div>

            {/* Statistics on the right */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-gray-600">
                  <div className="font-medium">Years of</div>
                  <div className="font-medium">experience</div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-gray-600">
                  <div className="font-medium">Clients</div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  100+
                </div>
                <div className="text-gray-600">
                  <div className="font-medium">Projects</div>
                  <div className="font-medium">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
