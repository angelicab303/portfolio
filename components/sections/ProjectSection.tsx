'use client'

import React from 'react';
import WorkItem from './WorkItem';
import FuryReadMore from '../project-details/FuryReadMore';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      title: 'Fury of the Lost Knight',
      subtitle: 'Unity 2D Action Game',
      positions: ['Environment Lead', 'Game Programmer'],
      date: 'Jul 2023 - Aug 2023',
      description: 'A fast-paced 2D action game built in Unity featuring dynamic combat mechanics, procedural level generation, and a custom physics system. Designed and developed all gameplay systems, UI/UX, and visual effects.',
      keyResponsibilities: [
        'Implemented combat system with combo mechanics and hit detection',
        'Designed and built custom level editor for rapid prototyping',
        'Created particle effects and animation systems',
        'Optimized performance for mobile platforms'
      ],
      teamSize: '12',
      technologies: ['Unity', 'C#', 'Photoshop', 'Git'],
      link: {
        url: 'https://dgacornell.itch.io/fury-of-the-lost-knight',
        label: 'itch.io'
      },
      media: [
        {
          src: '/videos/Fury_Level_UIs.mov',
          type: 'video' as const,
          alt: 'Fury Gameplay',
          subtitle: 'Level Select UI'
        },
        {
          src: '/videos/Boss_Arena.mov',
          type: 'video' as const,
          alt: 'Fury Gameplay',
          subtitle: 'Boss Arena Environment'
        },
        {
          src: '/videos/Act3_Demo.mov',
          type: 'video' as const,
          alt: 'Fury Gameplay',
          subtitle: 'Level Design & Gameplay'
        },
      ],
      readMoreContent: <FuryReadMore />
    },
    
  ];

  return (
    <>
      {projects.map((project, index) => (
        <WorkItem
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          positions={project.positions}
          date={project.date}
          description={project.description}
          keyResponsibilities={project.keyResponsibilities}
          technologies={project.technologies}
          link={project.link}
          teamSize={project.teamSize}
          media={project.media}
          reversed={index % 2 !== 0}
          isFirst={index === 0}
          readMoreContent={project.readMoreContent}
          sectionTitle={index === 0 ? "Featured Projects" : undefined}
        />
      ))}
    </>
  );
};

export default ProjectSection;