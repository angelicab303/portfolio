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
      const scrollPosition = window.scrollY + 150; // Offset for header

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
    handleScroll(); // Check initial position
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
    const [isHovered, setIsHovered] = useState(false);
    const isActive = activeSection === sectionId;

    return (
      <button
        onClick={() => scrollToSection(sectionId)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          fontFamily: 'Rubik, sans-serif',
          fontSize: '1rem',
          fontWeight: 400,
          color: theme === 'light' ? '#333' : '#cbd5e1',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'color 0.2s ease',
          padding: 0,
          position: 'relative',
          paddingBottom: '4px'
        }}
      >
        {label}
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            backgroundColor: theme === 'light' ? '#3D348B' : '#a78bfa',
            width: isActive || isHovered ? '100%' : '0%',
            transition: 'width 0.3s ease',
            transformOrigin: 'left'
          }}
        />
      </button>
    );
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: theme === 'light' 
        ? (scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)')
        : (scrolled ? 'rgba(42, 15, 15, 0.95)' : 'rgba(42, 15, 15, 0.98)'),
      backdropFilter: 'blur(10px)',
      boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.05)',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: '20px 2%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Left side - Name, Portfolio, Divider, Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px'
        }}>
          {/* Name stacked vertically */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '1.1'
          }}>
            <span style={{
              fontFamily: 'Rubik, sans-serif',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: theme === 'light' ? '#333' : '#f1f5f9',
              letterSpacing: '0.5px',
              transition: 'color 0.3s ease'
            }}>
              Angelica
            </span>
            <span style={{
              fontFamily: 'Rubik, sans-serif',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: theme === 'light' ? '#333' : '#f1f5f9',
              letterSpacing: '0.5px',
              transition: 'color 0.3s ease'
            }}>
              Borowy
            </span>
          </div>

          {/* Portfolio Brand */}
          <div style={{
            fontFamily: 'Rubik, sans-serif',
            fontSize: '1.4rem',
            fontWeight: 700,
            color: theme === 'light' ? '#000' : '#f1f5f9',
            letterSpacing: '-0.5px',
            transition: 'color 0.3s ease'
          }}>
            Portfolio
          </div>

          {/* Vertical Divider */}
          <div style={{
            width: '1.5px',
            height: '28px',
            backgroundColor: theme === 'light' ? '#d1d5db' : '#334155',
            transition: 'background-color 0.3s ease'
          }} />

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center'
          }}>
            <NavButton sectionId="about" label="About Me" />
            <NavButton sectionId="work" label="Work" />
            <NavButton sectionId="projects" label="Projects" />
            <NavButton sectionId="gallery" label="Gallery" />
          </nav>
        </div>

        {/* Right side - Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{
            background: theme === 'light' ? '#f9fafb' : '#1e293b',
            border: `2px solid ${theme === 'light' ? '#d1d5db' : '#334155'}`,
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {theme === 'light' ? (
            // Moon icon for light mode
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: theme === 'light' ? '#333' : '#f1f5f9' }}>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            // Sun icon for dark mode
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: theme === 'light' ? '#333' : '#f1f5f9' }}>
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