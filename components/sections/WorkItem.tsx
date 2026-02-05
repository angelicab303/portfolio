'use client'

import React from 'react';
import MiniGallery from '../ui/MiniGallery';

interface WorkItemProps {
  title: string;
  subtitle?: string;
  positions: string[];
  date?: string;
  description: string;
  keyResponsibilities?: string[];
  technologies?: string[];
  teamSize?: string;
  link?: {
    url: string;
    label: string;
  };
  media?: Array<{
    src: string;
    alt?: string;
    type: 'image' | 'video';
    subtitle?: string;
  }>;
  imageSrc?: string;
  imageAlt?: string;
  reversed?: boolean;
  isFirst?: boolean;
  onSeeMore?: () => void;
  readMoreContent?: React.ReactNode;
  sectionTitle?: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ 
  title, 
  subtitle, 
  positions, 
  date, 
  description, 
  keyResponsibilities, 
  technologies,
  teamSize,
  link,
  media,
  imageSrc, 
  imageAlt = 'Work image', 
  reversed = false, 
  isFirst = false, 
  onSeeMore,
  readMoreContent,
  sectionTitle
}) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {isFirst && sectionTitle && (
        <div className="py-[60px] px-[5%] max-w-[80vw] mx-auto">
          <h1 className="font-['Rubik'] text-[2.0rem] font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
            {sectionTitle}
          </h1>
        </div>
      )}
      
      <div className="w-full py-[60px] transition-colors duration-300" style={{ backgroundColor: reversed ? 'var(--bg-secondary)' : 'var(--bg-primary)' }}>
        <div className="max-w-[80vw] mx-auto px-[5%]">
          <div className={`flex gap-10 items-stretch ${isMobile ? 'flex-col' : reversed ? 'flex-row-reverse' : ''}`}>
            {/* Left/Right side - Text content (40% desktop, 100% mobile) */}
            <div className="flex flex-col" style={{ flex: isMobile ? '1 1 100%' : '0 0 40%' }}>
              <h2 className="font-['Rubik'] text-[2.0rem] font-medium mb-[15px]" style={{ color: 'var(--text-primary)' }}>
                {title}
              </h2>
              {subtitle && (
                <p className="font-['Rubik'] text-base mt-0 mb-3 leading-relaxed opacity-80" style={{ color: 'var(--text-secondary)' }}>
                  {subtitle}
                </p>
              )}
              <div className="w-full h-px mb-5 transition-colors duration-300" style={{ backgroundColor: 'var(--accent-border)' }} />
              <h4 className="font-['Rubik'] text-[1.3rem] font-semibold mb-[15px] mt-2.5" style={{ color: 'var(--text-primary-90)' }}>
                {positions.join(' | ')}
              </h4>
              {date && (
                <p className="font-['Rubik'] text-base mb-[15px] leading-relaxed italic" style={{ color: 'var(--text-secondary)' }}>
                  {date}
                </p>
              )}
              <p className="font-['Rubik'] text-base mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {description}
              </p>
              
              {teamSize && (
                <div className="mt-[15px] mb-[15px]">
                  <p className="font-['Rubik'] text-base mb-[5px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <strong>Team size:</strong> {teamSize}
                  </p>
                </div>
              )}
              
              {technologies && technologies.length > 0 && (
                <div className={`mb-[15px] ${!teamSize ? 'mt-[15px]' : ''}`}>
                  <p className="font-['Rubik'] text-base mb-[5px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <strong>Technologies used:</strong> {technologies.join(', ')}
                  </p>
                </div>
              )}
              
              {link && (
                <div className="mb-[15px]">
                  <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <strong>{link.label}:</strong>{' '}
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:underline"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {link.url}
                    </a>
                  </p>
                </div>
              )}
              
              {readMoreContent && (
                <button 
                  onClick={() => setIsExpanded(!isExpanded)} 
                  className="self-start py-3 px-[30px] bg-transparent rounded-lg font-['Rubik'] text-base font-medium cursor-pointer transition-all duration-300 mt-auto border-2 hover:-translate-y-0.5 flex items-center gap-2" 
                  style={{ color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
                >
                  Read More
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Right/Left side - MiniGallery (60% desktop, 100% mobile) */}
            <div className="flex flex-col justify-top" style={{ flex: isMobile ? '1 1 100%' : '0 0 60%' }}>
              {media && media.length > 0 && <MiniGallery media={media} reversed={reversed} />}
            </div>
          </div>

          {/* Expandable Details Section - Full Width */}
          {readMoreContent && (
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-[600px] opacity-100 mt-10' : 'max-h-0 opacity-0'
              }`}
            >
              <div 
                className="rounded-2xl p-6 overflow-y-auto"
                style={{ 
                  backgroundColor: 'var(--bg-tertiary)',
                  maxHeight: '500px',
                  border: '1px solid var(--accent-border)'
                }}
              >
                {readMoreContent}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkItem;