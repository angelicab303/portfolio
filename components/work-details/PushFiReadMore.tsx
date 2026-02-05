'use client'

import React from 'react';

const PushFiReadMore: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Key Responsibilities & Achievements
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Redesigned 100% of platform UI/UX for beta launch
          </li>
          <li className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Built agent network and white-label branding features from scratch
          </li>
          <li className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Architected secure document management system with AWS S3
          </li>
          <li className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Solo developer responsible for front-end, back-end, and database architecture
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Technical Deep Dive
        </h3>
        <p className="font-['Rubik'] text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          Led the complete architectural redesign of the platform, implementing a modern React/Next.js stack with 
          TypeScript for type safety. Built a scalable component library with Tailwind CSS that supports dark mode 
          and ensures consistent branding across the platform.
        </p>
        <p className="font-['Rubik'] text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          Developed a robust agent onboarding system that handles multi-step registration, document verification, 
          and white-label branding customization. Integrated AWS S3 for secure document storage with encrypted 
          file uploads and role-based access control.
        </p>
        <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Optimized database queries and implemented caching strategies that reduced page load times by 60%. 
          Built RESTful APIs with proper error handling and validation using Postman for testing.
        </p>
      </div>

      <div>
        <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Impact & Results
        </h3>
        <p className="font-['Rubik'] text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          Successfully launched the beta version on schedule, enabling the company to onboard its first cohort 
          of lending agents. The redesigned platform received positive feedback from early users for its 
          intuitive interface and smooth user experience.
        </p>
        <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          The white-label branding system allows agents to customize their portals, creating a professional 
          experience for their clients while maintaining platform consistency. This feature became a key 
          differentiator in our go-to-market strategy.
        </p>
      </div>
    </div>
  );
};

export default PushFiReadMore;