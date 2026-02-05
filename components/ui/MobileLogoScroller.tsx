'use client'

import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { useTheme } from '@/app/contexts/ThemeContext';

const MobileLogoScroller: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (!document.querySelector('link[href*="devicon"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
      document.head.appendChild(link);
    }
  }, []);

  const logos = [
    { id: 1, iconClass: 'devicon-react-original-wordmark colored', name: 'React' },
    { id: 2, iconClass: 'devicon-typescript-plain colored', name: 'TypeScript' },
    { id: 3, iconClass: 'devicon-javascript-plain colored', name: 'JavaScript' },
    { id: 4, iconClass: 'devicon-nodejs-plain-wordmark colored', name: 'Node.js' },
    { id: 5, iconClass: 'devicon-python-plain-wordmark colored', name: 'Python' },
    { id: 6, iconClass: 'devicon-cplusplus-plain-wordmark colored', name: 'C++' },
    { id: 7, iconClass: 'devicon-csharp-plain-wordmark colored', name: 'C#' },
    { id: 8, iconClass: 'devicon-tailwindcss-plain-wordmark colored', name: 'Tailwind CSS' },
    { id: 9, iconClass: 'devicon-express-original-wordmark', name: 'Express' },
    { id: 10, iconClass: 'devicon-fastapi-plain-wordmark colored', name: 'FastAPI' },
    { id: 11, iconClass: 'devicon-postgresql-plain-wordmark colored', name: 'PostgreSQL' },
    { id: 12, iconClass: 'devicon-mysql-plain-wordmark colored', name: 'MySQL' },
    { id: 13, iconClass: 'devicon-mongodb-plain-wordmark colored', name: 'MongoDB' },
    { id: 14, iconClass: 'devicon-firebase-plain-wordmark colored', name: 'Firebase' },
    { id: 15, iconClass: 'devicon-amazonwebservices-plain-wordmark colored', name: 'AWS' },
    { id: 16, iconClass: 'devicon-googlecloud-plain-wordmark colored', name: 'GCP' },
    { id: 17, iconClass: 'devicon-docker-plain-wordmark colored', name: 'Docker' },
    { id: 18, iconClass: 'devicon-git-plain-wordmark colored', name: 'Git' },
    { id: 19, iconClass: 'devicon-nextjs-plain-wordmark', name: 'Next.js' },
    { id: 20, iconClass: 'devicon-postman-plain colored', name: 'Postman' },
    { id: 21, iconClass: 'devicon-unity-plain-wordmark', name: 'Unity' },
    { id: 22, iconClass: 'devicon-unrealengine-original-wordmark', name: 'Unreal' },
    { id: 23, iconClass: 'devicon-blender-original-wordmark colored', name: 'Blender' },
  ];

  const iconSize = '60px';
  const iconFontSize = '45px';

  return (
    <div className="relative w-full h-[120px] overflow-hidden z-[4] flex items-center transition-colors duration-300" style={{ backgroundColor: 'var(--bg-hero)' }}>
      <Marquee speed={50} gradient={false} pauseOnHover={false}>
        {logos.map((logo, index) => (
          <div key={index} className="mr-[15px] rounded-lg flex-shrink-0 flex items-center justify-center p-2 cursor-pointer relative transition-all duration-300" style={{ width: iconSize, height: iconSize, minWidth: iconSize, minHeight: iconSize, backgroundColor: 'var(--icon-bg)', boxShadow: '0 2px 4px var(--card-shadow)' }}>
            <i className={logo.iconClass} style={{ fontSize: iconFontSize, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: 'var(--icon-overlay)' }} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MobileLogoScroller;