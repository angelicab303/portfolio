'use client'

import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import LogoScroller from '@/components/ui/LogoScroller';
import MobileLogoScroller from '@/components/ui/MobileLogoScroller';
import SocialLinks from '@/components/ui/SocialLinks';
import { useTheme } from '@/app/contexts/ThemeContext';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [titleSize, setTitleSize] = useState('3rem');
  const [subtitleSize, setSubtitleSize] = useState('1.2rem');
  const imageHeight = '83vh';
  const imageWidth = '75vw';
  const sideWidth = '13vw'; // (100vw - 75vw) / 2 = 12.5vw
  const scrollerWidth = `calc(${sideWidth} * 0.7)`; // Icons take 70% of the side width
  const { theme } = useTheme();

  // Replace these with your actual links
  const socialLinks = [
    {
      type: 'linkedin' as const,
      url: 'https://www.linkedin.com/in/angelica-borowy/',
      ariaLabel: 'LinkedIn Profile'
    },
    {
      type: 'github' as const,
      url: 'https://github.com/angelicab303',
      ariaLabel: 'GitHub Profile'
    },
    {
      type: 'email' as const,
      url: 'mailto:angelicaborowy@gmail.com',
      displayType: 'text' as const,
      text: 'angelicaborowy@gmail.com',
      ariaLabel: 'Email Address'
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      
      if (width <= 768) {
        setTitleSize('2.5rem');
        setSubtitleSize('1.1rem');
      } else if (width <= 1200) {
        setTitleSize('3rem');
        setSubtitleSize('1.2rem');
      } else {
        setTitleSize('3.5rem');
        setSubtitleSize('1.3rem');
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <>
      <div className="hero-container" style={{ minHeight: '100vh', position: 'relative' }}>
        <div className="hero-background"></div>

        {!isMobile && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            zIndex: 5
          }}>
            {/* Left Section */}
            <div style={{
              width: sideWidth,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <LogoScroller side="left" height={imageHeight} width={scrollerWidth} />
              </div>
            </div>

            {/* Center Section */}
            <div style={{
              width: imageWidth,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {/* Image will be placed here by hero-content-container */}
            </div>

            {/* Right Section */}
            <div style={{
              width: sideWidth,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <LogoScroller side="right" height={imageHeight} width={scrollerWidth} />
              </div>
            </div>
          </div>
        )}

        <div className="hero-content-container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-image-container" style={{ width: isMobile ? '95%' : imageWidth }}>
            <div style={{ position: 'relative', width: '100%', height: isMobile ? '70vh' : imageHeight }}>
              <img 
                src="/images/CornellBackdrop.jpg" 
                alt="Cornell Campus"
                className="hero-image"
              />
              <div 
                className="hero-overlay"
                style={{
                  background: theme === 'light' 
                    ? 'rgba(46, 46, 46, 0.3)' 
                    : 'rgba(15, 23, 42, 0.5)'
                }}
              />
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title" style={{ fontSize: titleSize }}>
              Angelica Borowy
            </h1>
            <div className="hero-subtitle" style={{ fontSize: subtitleSize }}>
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
            
            <SocialLinks 
              links={socialLinks}
              iconSize={isMobile ? 24 : 28}
              gap={isMobile ? '1rem' : '1.5rem'}
            />
          </div>
        </div>
      </div>

      {isMobile && <MobileLogoScroller />}
    </>
  );
};

export default Hero;