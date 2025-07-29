'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-blue-500">aprosol</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              An indigenous engineering company providing trusted EPC and
              project solutions across Nigeria's Oil & Gas and industrial
              sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about/careers"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">
                <a
                  href="mailto:info@emaill.com"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  info@emaill.com
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                <a
                  href="tel:123456789"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  123456789
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                <a
                  href="tel:234567891"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  234567891
                </a>
              </p>
            </div>
          </div>

          {/* Head Office */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Head Office</h3>
            <div className="text-gray-600 text-sm space-y-2">
              <p>123 Avenue Street, Suite 456</p>
              <p>Cityname, State/Province, ZIP Code</p>
              <p>Country</p>
            </div>

            <h3 className="text-gray-800 font-semibold mb-4 mt-6">
              Branch Office
            </h3>
            <div className="text-gray-600 text-sm space-y-2">
              <p>123 Avenue Street, Suite 456</p>
              <p>Cityname, State/Province, ZIP Code</p>
              <p>Country</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">Copyright © Aprosol 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
