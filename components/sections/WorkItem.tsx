'use client'

import React from 'react';

interface WorkItemProps {
  title: string;
  positions: string[]; // Array of positions to be joined by |
  date: string;
  description: string;
  imageSrc?: string; // Optional image source
  imageAlt?: string; // Optional image alt text
  reversed?: boolean; // Optional: reverse layout for alternating items
  isFirst?: boolean; // Optional: is this the first item (to add section header)
  onSeeMore?: () => void; // Optional: callback for See More button
}

const WorkItem: React.FC<WorkItemProps> = ({
  title,
  positions,
  date,
  description,
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