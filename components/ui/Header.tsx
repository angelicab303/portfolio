'use client'

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['about', 'work', 'projects'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const handleScroll = () => setMobileMenuOpen(false);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 py-5 ${mobileMenuOpen ? '' : 'shadow-[0_2px_20px_var(--card-shadow)]'}`}
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        backdropFilter: 'blur(10px)',
        paddingLeft: isMobile ? '4%' : '2%',
        paddingRight: isMobile ? '4%' : '2%'
      }}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Left Side */}
        <div className="flex items-center gap-[30px]">
          {/* Name */}
          <div className="flex flex-col leading-[1.1]">
            <span className="font-['Rubik'] text-[0.95rem] font-medium tracking-[0.5px] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
              Angelica
            </span>
            <span className="font-['Rubik'] text-[0.95rem] font-medium tracking-[0.5px] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
              Borowy
            </span>
          </div>

          {/* Brand */}
          <div className="font-['Rubik'] text-[1.4rem] font-bold tracking-[-0.5px] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
            Portfolio
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <div className="w-[1.5px] h-7 transition-colors duration-300" style={{ backgroundColor: 'var(--accent-border)' }} />
              <nav className="flex gap-10 items-center">
                {[
                  { id: 'about', label: 'About Me' },
                  { id: 'work', label: 'Work' },
                  { id: 'projects', label: 'Projects' },
                  // { id: 'gallery', label: 'Gallery' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="group font-['Rubik'] text-base font-normal bg-transparent border-none cursor-pointer transition-colors duration-200 p-0 relative pb-1"
                    style={{ color: activeSection === id ? 'var(--text-primary)' : 'var(--text-primary-80)' }}
                  >
                    {label}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 origin-left ${activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'}`}
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                    />
                  </button>
                ))}
              </nav>
            </>
          )}
        </div>

        {/* Desktop Theme Toggle */}
        {!isMobile && (
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 flex-shrink-0 border-2 hover:scale-110"
            style={{ 
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--accent-primary)',
              color: 'var(--text-primary)'
            }}
          >
            {theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="bg-transparent border-none cursor-pointer p-2 z-[1001] relative flex items-center justify-center"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span 
                className={`block h-[2.5px] w-full rounded-sm transition-all duration-300 origin-center ${mobileMenuOpen ? 'translate-y-[9px] rotate-45' : ''}`} 
                style={{ backgroundColor: 'var(--text-primary)' }} 
              />
              <span 
                className={`block h-[2.5px] w-full rounded-sm transition-all duration-300 origin-center ${mobileMenuOpen ? 'opacity-0' : ''}`} 
                style={{ backgroundColor: 'var(--text-primary)' }} 
              />
              <span 
                className={`block h-[2.5px] w-full rounded-sm transition-all duration-300 origin-center ${mobileMenuOpen ? '-translate-y-[9px] -rotate-45' : ''}`} 
                style={{ backgroundColor: 'var(--text-primary)' }} 
              />
            </div>
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <div 
          className={`absolute top-full left-0 right-0 z-[998] transition-all duration-300 shadow-[0_4px_6px_var(--card-shadow)] ${mobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          <nav className="flex flex-col gap-0 py-2.5 px-5 pb-5">
            {[
              { id: 'about', label: 'About Me' },
              { id: 'work', label: 'Work' },
              { id: 'projects', label: 'Projects' },
              // { id: 'gallery', label: 'Gallery' }
            ].map(({ id, label }, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full text-left py-4 px-3 text-[1.1rem] font-['Rubik'] font-normal bg-transparent cursor-pointer transition-colors duration-200 ${index < 3 ? 'border-b' : 'border-none'}`}
                style={{ 
                  color: 'var(--text-primary-80)',
                  borderColor: 'var(--accent-border)'
                }}
              >
                {label}
              </button>
            ))}
            
            <button
              onClick={() => {
                toggleTheme();
                setMobileMenuOpen(false);
              }}
              aria-label="Toggle theme"
              className="mt-2.5 flex items-center gap-3 py-4 px-3 w-full justify-start bg-transparent border-none cursor-pointer font-['Rubik'] text-[1.1rem] transition-colors duration-200 rounded-lg hover:bg-[var(--hover-overlay)]"
              style={{ color: 'var(--text-primary)' }}
            >
              {theme === 'light' ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;