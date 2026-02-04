'use client'

import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import LogoScroller from '@/components/ui/LogoScroller';
import MobileLogoScroller from '@/components/ui/MobileLogoScroller';
import { useTheme } from '@/app/contexts/ThemeContext';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageWidth, setImageWidth] = useState('85%');
  const { theme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      
      // Adjust image width based on screen size to prevent logo cutoff
      if (width <= 768) {
        setImageWidth('95%');
      } else if (width <= 1000) {
        setImageWidth('60%');
      } else if (width <= 1200) {
        setImageWidth('65%');
      } else if (width <= 1400) {
        setImageWidth('70%');
      } else {
        setImageWidth('75%');
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <>
      <div style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '80vh' : '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: theme === 'light' 
          ? '0 4px 6px rgba(0, 0, 0, 0.1)' 
          : '0 4px 6px rgba(0, 0, 0, 0.3)',
        marginTop: '75px',
        transition: 'box-shadow 0.3s ease'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: theme === 'light' ? '#efefefff' : '#3b1e1eff',
          zIndex: 1,
          transition: 'background 0.3s ease'
        }}></div>

        {/* Container to constrain logo positioning */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1600px',
          height: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Scrolling logos - Desktop only */}
          {!isMobile && (
            <>
              <LogoScroller side="left" />
              <LogoScroller side="right" />
            </>
          )}
          
          {/* Image container with rounded corners and blur overlay */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: imageWidth,
            maxWidth: '1200px',
            zIndex: 2
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: isMobile ? '70vh' : '500px',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: theme === 'light'
                ? '4px 0 6px rgba(0, 0, 0, 0.1), -4px 0 6px rgba(0, 0, 0, 0.1)'
                : '4px 0 6px rgba(0, 0, 0, 0.3), -4px 0 6px rgba(0, 0, 0, 0.3)',
              transition: 'box-shadow 0.3s ease'
            }}>
              <img 
                src="/images/CornellBackdrop.jpg" 
                alt="Cornell Campus"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: theme === 'light' 
                  ? 'rgba(46, 46, 46, 0.3)' 
                  : 'rgba(15, 23, 42, 0.5)',
                backdropFilter: 'blur(0px)',
                transition: 'background 0.3s ease'
              }}></div>
            </div>
          </div>
          
          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            marginTop: '-50px'
          }}>
            <h1 style={{
              fontSize: isMobile ? '2.5rem' : '3rem',
              fontWeight: 700,
              marginBottom: '1rem',
              textShadow: theme === 'light'
                ? '2px 2px 8px rgba(0, 0, 0, 0.5)'
                : '2px 2px 8px rgba(0, 0, 0, 0.8)',
              color: 'white',
              transition: 'text-shadow 0.3s ease'
            }}>Angelica Borowy</h1>
            <div id="typewriter" style={{
              fontSize: isMobile ? '1.1rem' : '1.2rem',
              fontWeight: 300,
              textShadow: theme === 'light'
                ? '1px 1px 4px rgba(0, 0, 0, 0.5)'
                : '1px 1px 4px rgba(0, 0, 0, 0.8)',
              color: 'white',
              transition: 'text-shadow 0.3s ease'
            }}>
              <Typewriter
                options={{
                  delay: 75,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Software Engineer. Fullstack & UI/UX Developer. Game Designer.')
                    .pauseFor(3000)
                    .start();
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile horizontal scroller - renders below hero */}
      {isMobile && <MobileLogoScroller />}
    </>
  );
};

export default Hero;