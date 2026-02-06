'use client';

import React from 'react';

const SSBReadMore: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-4">
        <div>
          <h3
            className="font-['Rubik'] text-lg font-semibold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Overview
          </h3>
          <p
            className="font-['Rubik'] text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Led a semester-long mobile game development project built with Cornell’s CUGL game engine. 
            Served as team lead for a cross-disciplinary group of developers and designers, owning project 
            planning, coordination, and technical direction while contributing hands-on across core systems.
          </p>
        </div>

        <div>
          <h3
            className="font-['Rubik'] text-lg font-semibold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Key Responsibilities
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li
              className="font-['Rubik'] text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Managed a team of developers and designers, tracked tasks, outlined sprint schedules, and facilitated regular meetings
            </li>
            <li
              className="font-['Rubik'] text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Provided technical guidance and feedback to ensure alignment across gameplay, systems, and design
            </li>
            <li
              className="font-['Rubik'] text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Architected and implemented the multiplayer networking system to synchronize player state and physics
            </li>
            <li
              className="font-['Rubik'] text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Contributed to general game programming and UI/UX implementation throughout development
            </li>
          </ul>
        </div>

        {/* <div>
          <h3
            className="font-['Rubik'] text-lg font-semibold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Technical Overview
          </h3>
          <p
            className="font-['Rubik'] text-base leading-relaxed mb-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            Designed the core multiplayer architecture responsible for syncing player data and physics across clients,
            ensuring consistent gameplay state in a real-time mobile environment.
          </p>
          <p
            className="font-['Rubik'] text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Worked across gameplay systems and UI/UX layers within the CUGL engine, collaborating closely with designers
            to translate game mechanics into a polished, player-facing experience.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SSBReadMore;
