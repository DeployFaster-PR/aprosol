'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setExpandedMenu(null);
  };

  const toggleSubmenu = (menuName: string) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      href: '/about',
      label: 'About Us',
      submenu: [
        { href: '/about/clients', label: 'Our Clients' },
        { href: '/about/careers', label: 'Careers' },
      ],
    },
    {
      href: '/services',
      label: 'Services',
      submenu: [
        { href: '/services/engineering-design', label: 'Engineering Design' },
        { href: '/services/procurement', label: 'Procurement' },
        {
          href: '/services/technical-manpower',
          label: 'Technical Manpower Supply',
        },
        {
          href: '/services/construction-support',
          label: 'Construction Support',
        },
        {
          href: '/services/as-built-documentation',
          label: 'As-Built Documentation',
        },
        {
          href: '/services/installation-construction',
          label: 'Installation & Construction',
        },
      ],
    },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xl'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              isScrolled ? 'h-12 lg:h-14' : 'h-16 lg:h-20'
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                aprosol
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`font-medium transition-all duration-300 flex items-center hover:scale-105 ${
                      link.href === '/'
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                    {link.submenu && (
                      <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  {link.submenu && (
                    <div
                      className={`absolute top-full left-0 mt-3 ${
                        link.label === 'Services' ? 'w-64' : 'w-52'
                      } bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50`}
                    >
                      <div className="p-3">
                        {link.submenu.map((sublink, index) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className={`block px-4 py-3 text-sm rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:scale-105 hover:shadow-md ${
                              index === 0 && link.label === 'About Us'
                                ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                                : 'text-gray-600'
                            }`}
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-blue-600"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative p-3 rounded-2xl text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl transition-all duration-1000 ${
              isMenuOpen ? 'animate-pulse' : ''
            }`}
          ></div>
          <div
            className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
              isMenuOpen ? 'animate-pulse' : ''
            }`}
          ></div>
        </div>

        {/* Menu Content */}
        <div className="relative z-10 flex flex-col h-full pt-20 px-6">
          {/* Navigation - Centered when collapsed, scrollable when expanded */}
          <nav
            className={`flex-1 flex flex-col transition-all duration-500 ${
              expandedMenu
                ? 'justify-start overflow-y-auto pb-20'
                : 'justify-center'
            }`}
          >
            <div className="space-y-0.5">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  className={`transition-all duration-700 ${
                    isMenuOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Main Menu Item */}
                  {link.submenu ? (
                    <>
                      <Link
                        href={link.href}
                        className="block p-3 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {link.label}
                        </span>
                      </Link>
                      <button
                        onClick={() => toggleSubmenu(link.label)}
                        className="w-full group flex items-center justify-center py-1"
                      >
                        <span className="text-xs text-white/60 group-hover:text-white transition-all duration-300 mr-2">
                          View {link.label} submenu
                        </span>
                        <svg
                          className={`w-4 h-4 text-white/60 transition-all duration-500 group-hover:text-blue-400 ${
                            expandedMenu === link.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block p-3 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {link.label}
                      </span>
                    </Link>
                  )}

                  {/* Mobile Submenu */}
                  {link.submenu && (
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        expandedMenu === link.label
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-6 space-y-0.5 pb-1">
                        {link.submenu.map((sublink, subIndex) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className={`block p-2 group transition-all duration-500 ${
                              expandedMenu === link.label
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-4'
                            }`}
                            style={{ transitionDelay: `${subIndex * 50}ms` }}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setExpandedMenu(null);
                            }}
                          >
                            <span className="text-base text-white/80 group-hover:text-white group-hover:text-lg transition-all duration-300">
                              {sublink.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Contact Button - Dynamic positioning based on expansion state */}
          <div
            className={`transition-all duration-700 delay-500 ${
              expandedMenu
                ? 'absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent'
                : 'pb-8'
            } ${
              isMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Link
              href="/contact"
              className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
