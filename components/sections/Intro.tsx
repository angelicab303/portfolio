'use client'

import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="py-[60px] px-[5%] max-w-[80vw] mx-auto">
      <h1 className="font-['Rubik'] text-[2.0rem] font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
        Welcome to My Portfolio
      </h1>

      <div className="flex gap-[60px] items-start flex-wrap">
        <div className="flex-1 min-w-[300px]" style={{ flexBasis: '600px' }}>
          <div className="w-full h-px mb-[30px] transition-colors duration-300" style={{ backgroundColor: 'var(--accent-border)' }} />

          <h4 className="font-['Rubik'] text-[1.3rem] font-semibold mb-[15px] mt-2.5" style={{ color: 'var(--text-primary-90)' }}>
            Who I Am
          </h4>
          <p className="font-['Rubik'] text-base mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I'm a software engineer with a background in project management, UI/UX design, entrepreneurship, and game development. Currently, I'm a full stack developer at PushFi, an early-stage fintech AI startup. I graduated from Cornell University in 2025 with a B.A. in Computer Science and minors in Game Design and Creative Writing.
          </p>

          <h4 className="font-['Rubik'] text-[1.3rem] font-semibold mb-[15px] mt-2.5" style={{ color: 'var(--text-primary-90)' }}>
            What I Do
          </h4>
          <p className="font-['Rubik'] text-base mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I build applications and user interfaces while bridging engineering, design, and product management, translating between technical constraints and user needs to ship cohesive products.
          </p>

          <p className="font-['Rubik'] text-base mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I have 2+ years of technical leadership experience across multiple game development teams at Cornell, where I served as team lead, level environment lead, and UI lead. I'm passionate about advancing my engineering skills in spaces where technical depth and creative innovation intersect.
          </p>
        </div>

        <div className="flex-shrink-0 min-w-[280px]" style={{ flexBasis: '350px' }}>
          {/* <img src="/images/profile.jpg" alt="Angelica Borowy" className="w-full h-auto rounded-[20px] object-cover" /> */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;