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
  const sideWidth = '13vw';
  const scrollerWidth = `calc(${sideWidth} * 0.7)`;
  const { theme } = useTheme();

  const socialLinks = [
    { type: 'linkedin' as const, url: 'https://www.linkedin.com/in/angelica-borowy/', ariaLabel: 'LinkedIn Profile' },
    { type: 'github' as const, url: 'https://github.com/angelicab303', ariaLabel: 'GitHub Profile' },
    { type: 'email' as const, url: 'mailto:angelicaborowy@gmail.com', displayType: 'text' as const, text: 'angelicaborowy@gmail.com', ariaLabel: 'Email Address' }
  ];

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      if (width <= 768) { setTitleSize('2.5rem'); setSubtitleSize('1.1rem'); }
      else if (width <= 1200) { setTitleSize('3rem'); setSubtitleSize('1.2rem'); }
      else { setTitleSize('3.5rem'); setSubtitleSize('1.3rem'); }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <>
      <div className="relative w-full flex items-center justify-center overflow-hidden mt-[50px] transition-shadow duration-300" style={{ minHeight: '100vh', boxShadow: '0 4px 6px var(--card-shadow)' }}>
        <div className="absolute top-0 left-0 w-full h-full z-[1] transition-colors duration-300" style={{ background: 'var(--bg-hero)' }} />

        {!isMobile && (
          <div className="absolute top-0 left-0 w-screen h-full flex items-center z-[5]">
            <div className="flex items-center justify-center flex-shrink-0 relative" style={{ width: sideWidth, height: '100%' }}>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <LogoScroller side="left" height={imageHeight} width={scrollerWidth} />
              </div>
            </div>
            <div className="flex items-center justify-center flex-shrink-0" style={{ width: imageWidth, height: '100%' }} />
            <div className="flex items-center justify-center flex-shrink-0 relative" style={{ width: sideWidth, height: '100%' }}>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <LogoScroller side="right" height={imageHeight} width={scrollerWidth} />
              </div>
            </div>
          </div>
        )}

        <div className="relative w-full max-w-[1600px] h-full mx-auto flex items-center justify-center z-[10]" style={{ flexDirection: 'column', padding: isMobile ? '80px 2.5%' : '0' }}>
          <div className="z-[2] rounded overflow-hidden transition-shadow duration-300" style={{ position: isMobile ? 'relative' : 'absolute', top: isMobile ? 'auto' : '50%', left: isMobile ? 'auto' : '50%', transform: isMobile ? 'none' : 'translate(-50%, -50%)', width: isMobile ? '100%' : imageWidth, maxWidth: isMobile ? '100%' : 'none', boxShadow: '4px 0 6px var(--card-shadow), -4px 0 6px var(--card-shadow)' }}>
            <div className="relative w-full" style={{ height: isMobile ? '70vh' : imageHeight }}>
              <img src="/images/CornellBackdrop.jpg" alt="Cornell Campus" className="w-full h-full object-cover block" />
              <div className="absolute top-0 left-0 w-full h-full backdrop-blur-0 transition-colors duration-300" style={{ background: theme === 'light' ? 'rgba(46, 46, 46, 0.3)' : 'rgba(15, 23, 42, 0.5)' }} />
            </div>
          </div>
          
          <div className="z-[3] text-center text-white p-5" style={{ position: isMobile ? 'absolute' : 'absolute', top: isMobile ? '50%' : '50%', left: '50%', transform: 'translate(-50%, -50%)', width: isMobile ? '90%' : 'auto' }}>
            <h1 className="font-bold mb-4 transition-shadow duration-300" style={{ fontSize: titleSize, textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', color: 'white' }}>
              Angelica Borowy
            </h1>
            <div className="font-light transition-shadow duration-300" style={{ fontSize: subtitleSize, textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)', color: 'white' }}>
              <Typewriter options={{ delay: 75 }} onInit={(typewriter) => { typewriter.typeString('Software Engineer. Full Stack & UI/UX Developer. Game Designer.').pauseFor(3000).start(); }} />
            </div>
            <SocialLinks links={socialLinks} iconSize={isMobile ? 24 : 28} gap={isMobile ? '1rem' : '1.5rem'} />
          </div>
        </div>
      </div>

      {isMobile && <MobileLogoScroller />}
    </>
  );
};

export default Hero;