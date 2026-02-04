'use client'

import React from 'react';

interface WorkItemProps {
  title: string;
  subtitle?: string;
  positions: string[];
  date: string;
  description: string;
  keyResponsibilities?: string[]; // New optional prop
  technologies?: string[]; // New optional prop
  imageSrc?: string;
  imageAlt?: string;
  reversed?: boolean;
  isFirst?: boolean;
  onSeeMore?: () => void;
}

const WorkItem: React.FC<WorkItemProps> = ({
  title,
  subtitle,
  positions,
  date,
  description,
  keyResponsibilities,
  technologies,
  imageSrc,
  imageAlt = 'Work image',
  reversed = false,
  isFirst = false,
  onSeeMore
}) => {
  return (
    <>
      {isFirst && (
        <div className="section-container">
          <h1 className="page-title">Work Experience</h1>
        </div>
      )}
      
      <div className="work-item-wrapper" style={{
        backgroundColor: reversed ? 'var(--bg-secondary)' : 'var(--bg-primary)'
      }}>
        <div className="work-item-inner">
          <div className={`work-item-layout ${reversed ? 'reversed' : ''}`}>
            {/* Left side - Text content (40%) */}
            <div className="work-item-info">
              <h2>{title}</h2>
              {subtitle && (
                <p className="body-text" style={{ 
                  marginTop: '0px', 
                  marginBottom: '12px',
                  opacity: 0.8 
                }}>
                  {subtitle}
                </p>
              )}
              <div className="divider" />
              <h4 className="subheader">
                {positions.join(' | ')}
              </h4>
              <p className="body-text" style={{ fontStyle: 'italic', marginBottom: '15px' }}>
                {date}
              </p>
              <p className="body-text">
                {description}
              </p>
              
              {/* Technologies Used Section */}
              {technologies && technologies.length > 0 && (
                <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                  <p className="body-text" style={{ marginBottom: '5px' }}>
                    <strong>Technologies used:</strong> {technologies.join(', ')}
                  </p>
                </div>
              )}
              
              <button className="see-more-button" onClick={onSeeMore}>
                See more
              </button>
            </div>

            {/* Right side - Image (60%) */}
            <div className="work-item-image-section">
              {imageSrc ? (
                <div className="work-item-image-container">
                  <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    className="work-item-actual-image"
                  />
                </div>
              ) : (
                <div className="work-item-image-placeholder">
                  <span>Image</span>
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