'use client'

import React from 'react';

const SimulacrumReadMore: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Project Overview
        </h3>
        <p className="font-['Rubik'] text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          Worked with an early-stage AI forecasting startup as part of the Cornell Tech Runway accelerator program. 
          Contributed to building a platform that leverages artificial intelligence to generate market predictions 
          and forecasting insights.
        </p>
      </div>

      <div>
        <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Technical Contributions
        </h3>
        <p className="font-['Rubik'] text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          Developed full-stack features using Python with FastAPI for the backend and React for the frontend. 
          Implemented data visualization components to display complex forecasting models in an intuitive, 
          user-friendly interface.
        </p>
        <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Collaborated with the team to optimize database queries in MongoDB and improve API response times. 
          Participated in weekly sprint planning and code reviews, contributing to the startup's agile 
          development process.
        </p>
      </div>

      <div>
        <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Learning & Growth
        </h3>
        <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Gained valuable experience working in a fast-paced startup environment and contributing to a product 
          at the intersection of AI and financial forecasting. Developed skills in cross-functional collaboration, 
          rapid prototyping, and iterative development within an accelerator program setting.
        </p>
      </div>
    </div>
  );
};

export default SimulacrumReadMore;