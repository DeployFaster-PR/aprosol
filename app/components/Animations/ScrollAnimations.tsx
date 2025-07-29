'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Add initial styles
    const addInitialStyles = () => {
      const style = document.createElement('style');
      style.id = 'scroll-animations-style';
      style.textContent = `
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Conservative stagger delays */
        .fade-up:nth-of-type(1) { transition-delay: 0.05s; }
        .fade-up:nth-of-type(2) { transition-delay: 0.1s; }
        .fade-up:nth-of-type(3) { transition-delay: 0.15s; }
        .fade-up:nth-of-type(4) { transition-delay: 0.2s; }
        .fade-up:nth-of-type(n+5) { transition-delay: 0.25s; }
      `;

      const existingStyle = document.getElementById('scroll-animations-style');
      if (existingStyle) {
        existingStyle.remove();
      }

      document.head.appendChild(style);
    };

    const initializeAnimations = () => {
      addInitialStyles();

      // Create intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      // Only target main content elements - be very conservative
      const elementsToAnimate = document.querySelectorAll(`
        main section,
        main h1,
        main h2,
        main h3,
        main p,
        main img:not(button img):not([role] img):not(.lucide):not([class*="icon"]),
        main .content-block,
        main .text-block,
        main article
      `);

      elementsToAnimate.forEach((el) => {
        // Skip if element contains buttons, SVGs, or interactive elements
        if (
          el.querySelector(
            'button, svg, input, select, textarea, [role="button"], .lucide'
          ) ||
          el.closest('button, [role="button"], nav, header') ||
          el.classList.contains('lucide') ||
          el.hasAttribute('role') ||
          el.tagName === 'BUTTON' ||
          el.tagName === 'SVG'
        ) {
          return;
        }

        // Skip very small elements
        const rect = el.getBoundingClientRect();
        if (rect.height < 20 || rect.width < 20) return;

        el.classList.add('fade-up');
        observer.observe(el);
      });

      return observer;
    };

    const observer = initializeAnimations();

    // Trigger animations for elements already in viewport
    setTimeout(() => {
      const elementsInView = document.querySelectorAll('.fade-up');
      elementsInView.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        }
      });
    }, 100);

    return () => {
      if (observer) observer.disconnect();
      const style = document.getElementById('scroll-animations-style');
      if (style) style.remove();
    };
  }, [pathname]);

  return null;
}
