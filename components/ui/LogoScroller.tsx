'use client'

import React, { useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

interface LogoScrollerProps {
  side: 'left' | 'right';
  height?: string;
  width?: string;
}

const LogoScroller: React.FC<LogoScrollerProps> = ({ side, height = '500px', width = '100px' }) => {
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
    { id: 10, iconClass: 'devicon-fastapi-plain-wordmark colored', name: 'FastAPI' },
    { id: 11, iconClass: 'devicon-postgresql-plain-wordmark colored', name: 'PostgreSQL' },
    // { id: 12, iconClass: 'devicon-mysql-plain-wordmark colored', name: 'MySQL' },
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

  const duplicatedLogos = [...logos, ...logos];
  const iconSize = `calc(${width} * 0.8)`;
  const iconFontSize = `calc(${width} * 0.6)`;

  return (
    <div className="relative z-[3] overflow-hidden" style={{ height, width, maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)' }}>
      <style jsx>{`
        @keyframes scrollUp { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        @keyframes scrollDown { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
      `}</style>
      <div className="flex flex-col gap-5" style={{ animation: side === 'left' ? 'scrollUp 35s linear infinite' : 'scrollDown 35s linear infinite' }}>
        {duplicatedLogos.map((logo, index) => (
          <div key={`${side}-${index}`} className="rounded-lg flex-shrink-0 flex items-center justify-center p-2 cursor-pointer relative transition-all duration-300" style={{ width: iconSize, height: iconSize, minWidth: iconSize, minHeight: iconSize, backgroundColor: 'var(--icon-bg)', boxShadow: '0 2px 4px var(--card-shadow)' }}>
            <i className={logo.iconClass} style={{ fontSize: iconFontSize, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: 'var(--icon-overlay)' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;