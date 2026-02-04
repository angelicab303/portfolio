'use client'

import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import LogoScroller from '@/components/ui/LogoScroller';
import MobileLogoScroller from '@/components/ui/MobileLogoScroller';
import { useTheme } from '@/app/contexts/ThemeContext';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageWidth, setImageWidth] = useState('85%');
  const [heroHeight, setHeroHeight] = useState('60vh');
  const [imageHeight, setImageHeight] = useState('500px');
  const [titleSize, setTitleSize] = useState('3rem');
  const [subtitleSize, setSubtitleSize] = useState('1.2rem');
  const { theme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      
      if (width <= 768) {
        setImageWidth('95%');
        setHeroHeight('80vh');
        setImageHeight('70vh');
        setTitleSize('2.5rem');
        setSubtitleSize('1.1rem');
      } else if (width <= 1000) {
        setImageWidth('60%');
        setHeroHeight('60vh');
        setImageHeight('500px');
        setTitleSize('3rem');
        setSubtitleSize('1.2rem');
      } else if (width <= 1200) {
        setImageWidth('65%');
        setHeroHeight('60vh');
        setImageHeight('500px');
        setTitleSize('3rem');
        setSubtitleSize('1.2rem');
      } else if (width <= 1400) {
        setImageWidth('70%');
        setHeroHeight('60vh');
        setImageHeight('500px');
        setTitleSize('3rem');
        setSubtitleSize('1.2rem');
      } else {
        setImageWidth('75%');
        setHeroHeight('60vh');
        setImageHeight('500px');
        setTitleSize('3rem');
        setSubtitleSize('1.2rem');
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <>
      <div className="hero-container" style={{ height: heroHeight }}>
        <div className="hero-background"></div>

        <div className="hero-content-container">
          {!isMobile && (
            <>
              <LogoScroller side="left" />
              <LogoScroller side="right" />
            </>
          )}
          
          <div className="hero-image-container" style={{ width: imageWidth, maxWidth: '1200px' }}>
            <div style={{ position: 'relative', width: '100%', height: imageHeight }}>
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
          </div>
        </div>
      </div>

      {isMobile && <MobileLogoScroller />}
    </>
  );
};

export default Hero;