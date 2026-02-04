'use client'

import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="section-container">
      <h1 className="page-title">Welcome to My Portfolio</h1>

      <div className="flex-container">
        {/* Text Content */}
        <div className="flex-text-content">
          <div className="divider" />

          <h4 className="subheader">Who I Am</h4>
          <p className="body-text">
            I'm a software developer with a multifaceated background in project management, UI/UX design, entrepreneurship, and game development. Currently, I'm a founding full-stack developer and UI/UX designer at PushFi, an early-stage fintech AI startup. I graduated from Cornell University in 2025 with a B.A. in Computer Science and minors in Game Design and Creative Writing.
          </p>

          <h4 className="subheader">What I Do</h4>
          <p className="body-text">
            I build production-ready applications while bridging engineering, design, and product strategy, translating between technical constraints and user needs to ship cohesive products.
          </p>

          <p className="body-text">
            I have 2+ years of technical leadership experience across multiple game development teams at Cornell, where I served as team lead, level environment lead, and UI lead. I'm excited to continue growing my skillset as a developer and to continue working in environments that blend technical rigor with creativity.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-image-content">
          <img 
            src="/images/profile.jpg" 
            alt="Angelica Borowy"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;