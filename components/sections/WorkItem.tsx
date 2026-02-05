'use client'

import React from 'react';

interface WorkItemProps {
  title: string;
  subtitle?: string;
  positions: string[];
  date: string;
  description: string;
  keyResponsibilities?: string[];
  technologies?: string[];
  imageSrc?: string;
  imageAlt?: string;
  reversed?: boolean;
  isFirst?: boolean;
  onSeeMore?: () => void;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, subtitle, positions, date, description, keyResponsibilities, technologies, imageSrc, imageAlt = 'Work image', reversed = false, isFirst = false, onSeeMore }) => {
  const [isMobile, setIsMobile] = React.useState(false);

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
      {isFirst && (
        <div className="py-[60px] px-[5%] max-w-[80vw] mx-auto">
          <h1 className="font-['Rubik'] text-[2.0rem] font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
            Work Experience
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
              <p className="font-['Rubik'] text-base mb-[15px] leading-relaxed italic" style={{ color: 'var(--text-secondary)' }}>
                {date}
              </p>
              <p className="font-['Rubik'] text-base mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {description}
              </p>
              
              {technologies && technologies.length > 0 && (
                <div className="mt-[15px] mb-[15px]">
                  <p className="font-['Rubik'] text-base mb-[5px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <strong>Technologies used:</strong> {technologies.join(', ')}
                  </p>
                </div>
              )}
              
              <button onClick={onSeeMore} className="self-start py-3 px-[30px] bg-transparent rounded-lg font-['Rubik'] text-base font-medium cursor-pointer transition-all duration-300 mt-auto border-2 hover:-translate-y-0.5" style={{ color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}>
                See more
              </button>
            </div>

            {/* Right/Left side - Image (60% desktop, 100% mobile) */}
            <div className="flex items-center justify-center p-0" style={{ flex: isMobile ? '1 1 100%' : '0 0 60%' }}>
              {imageSrc ? (
                <div className="w-full rounded-lg overflow-hidden flex items-center justify-center transition-shadow duration-300" style={{ height: isMobile ? '300px' : '500px', backgroundColor: 'var(--bg-secondary)', boxShadow: '0 4px 12px var(--card-shadow)' }}>
                  <img src={imageSrc} alt={imageAlt} className="w-full h-full object-contain block" />
                </div>
              ) : (
                <div className="w-full rounded-lg flex items-center justify-center border-2 border-dashed transition-colors duration-300" style={{ height: isMobile ? '300px' : '500px', backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--accent-border)' }}>
                  <span className="text-[1.2rem] font-medium opacity-50" style={{ color: 'var(--text-secondary)' }}>Image</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkItem;