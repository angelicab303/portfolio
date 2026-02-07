'use client'

import React from 'react';

const PushFiReadMore: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-4">
        <div>
          <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            Key Responsibilities
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Redesigned 100% of platform UI/UX for beta launch
            </li>
            <li className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Built agent onboarding flow, agent network system, and white-label branding features from scratch
            </li>
            <li className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Architected secure document management system with AWS S3
            </li>
            <li className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Responsible for building core features throughout the front end, back end, and database architecture
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            Broad Overview
          </h3>
          <p className="font-['Rubik'] text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
            Co-led the complete architectural redesign of the platform, and took responsibility for redesigning the user experience and UI/UX. Built a scalable component library with Tailwind CSS that utilizes light/dark theming 
            and ensures consistent branding across the platform.
          </p>
          <p className="font-['Rubik'] text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
            Developed a robust agent onboarding system that handles multi-step registration, document verification, 
            and white-label branding customization. Integrated AWS S3 for secure document storage with encrypted 
            file uploads and role-based access control.
          </p>
          <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Cleaned up database schema organization and eliminated code duplication by extracting repeated definitions into reusable enums and centralized constants, transforming a codebase with scattered redundant definitions into a DRY architecture.
            Built RESTful APIs with proper error handling and validation using Postman for testing.
          </p>
        </div>

        <div>
          {/* <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            Impact & Results
          </h3>
          <p className="font-['Rubik'] text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
            Successfully set up the foundation for a beta release on schedule, enabling the company to onboard a new cohort 
            of lending agents. 
            The redesigned platform received positive feedback from early users for its 
            intuitive interface and smooth user experience. 
          </p>
          <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            The white-label branding system allows agents to customize their portals, creating a professional 
            experience for their clients while maintaining platform consistency.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default PushFiReadMore;