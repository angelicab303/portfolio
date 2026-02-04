'use client'

import React, { useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

interface LogoScrollerProps {
  side: 'left' | 'right';
}

const LogoScroller: React.FC<LogoScrollerProps> = ({ side }) => {
  const { theme } = useTheme();

  useEffect(() => {
    // Load DevIcon CSS if not already loaded
    if (!document.querySelector('link[href*="devicon"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
      document.head.appendChild(link);
    }
  }, []);

  // Tech stack logos with DevIcon class names
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

  // Duplicate the array to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  // CHANGE THIS VALUE to adjust distance from container edge
  // Smaller values = closer to image, Larger values = further from image
  const distanceFromEdge = '50px';

  return (
    <>
      <div style={{
        position: 'absolute',
        [side]: distanceFromEdge,
        top: '50%',
        transform: 'translateY(-50%)',
        height: '500px',
        width: '100px',
        zIndex: 3,
        overflow: 'hidden',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          animation: side === 'left' ? 'scrollUp 35s linear infinite' : 'scrollDown 35s linear infinite'
        }}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${side}-${index}`}
              className="logo-icon"
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: theme === 'light' 
                  ? 'rgba(255, 255, 255, 0.69)' 
                  : 'rgba(59, 30, 30, 0.8)',
                borderRadius: '8px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: theme === 'light'
                  ? '0 2px 4px rgba(0, 0, 0, 0.1)'
                  : '0 2px 4px rgba(0, 0, 0, 0.3)',
                padding: '8px',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <i 
                className={logo.iconClass}
                style={{
                  fontSize: '76px'
                }}
              />
              <div 
                className="icon-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: theme === 'light'
                    ? 'rgba(154, 152, 152, 0.1)'
                    : 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '8px',
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe animations and hover effects */}
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .logo-icon:hover .icon-overlay {
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default LogoScroller;