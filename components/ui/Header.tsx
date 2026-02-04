'use client'

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine which section is currently in view
      const sections = ['about', 'work', 'projects', 'gallery'];
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const NavButton: React.FC<{ sectionId: string; label: string }> = ({ sectionId, label }) => {
    const isActive = activeSection === sectionId;

    return (
      <button
        onClick={() => scrollToSection(sectionId)}
        className={`nav-button ${isActive ? 'active' : ''}`}
      >
        {label}
        <span className="nav-button-underline" />
      </button>
    );
  };

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="header-left">
          <div className="header-name">
            <span className="header-name-text">Angelica</span>
            <span className="header-name-text">Borowy</span>
          </div>

          <div className="header-brand">Portfolio</div>

          <div className="header-divider" />

          <nav className="header-nav">
            <NavButton sectionId="about" label="About Me" />
            <NavButton sectionId="work" label="Work" />
            <NavButton sectionId="projects" label="Projects" />
            <NavButton sectionId="gallery" label="Gallery" />
          </nav>
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="theme-toggle"
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
      </div>
    </header>
  );
};

export default Header;