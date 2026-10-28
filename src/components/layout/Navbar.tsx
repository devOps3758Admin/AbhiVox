"use client";

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Products', href: '/products' },
  { name: 'Work', href: '/case-studies' },
  { name: 'About', href: '/about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080A09]/95 backdrop-blur-md border-b border-white/10 shadow-xl'
          : 'bg-[#080A09]/60 backdrop-blur-sm border-b border-white/5'
      }`}
      role="banner"
    >
      <nav className="container-width" aria-label="Main navigation">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 text-lg lg:text-xl font-bold tracking-tight text-[#F4F5F1] hover:text-white transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B6A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A09]"
            aria-label="ABHIVOX TECHNOLOGIES home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-[#101211] border border-[#20B6A5]/40 shadow-[0_0_12px_rgba(32,182,165,0.25)]">
              <svg
                className="w-5 h-5 text-[#20B6A5]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h11" />
                <path d="M4 18h7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold tracking-tight">ABHIVOX</span>
              <span className="text-[9px] font-mono font-medium tracking-widest text-[#20B6A5] uppercase -mt-0.5">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <div className="flex items-center gap-6">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative py-1.5 px-1 text-sm font-medium transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B6A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A09] ${
                      isActive
                        ? 'text-[#20B6A5] font-semibold'
                        : 'text-[#A9B0AC] hover:text-[#F4F5F1]'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#20B6A5] rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link
              to="/contact"
              className="btn btn-primary-teal btn-md group ml-2 shadow-[0_0_15px_rgba(32,182,165,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B6A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A09]"
            >
              <span>Discuss Your Project</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#080A09]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="btn btn-primary-teal btn-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B6A5]"
            >
              Contact
            </Link>
            <button
              type="button"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#F4F5F1] hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B6A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A09] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 pb-5 pt-2' : 'max-h-0 opacity-0 pb-0 pt-0'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="py-2 space-y-1.5 border-t border-white/10">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMenu}
                  className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#20B6A5]/10 text-[#20B6A5] font-semibold border-l-2 border-[#20B6A5]'
                      : 'text-[#A9B0AC] hover:text-[#F4F5F1] hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="btn btn-primary-teal btn-md w-full justify-center"
              >
                <span>Discuss Your Project</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
