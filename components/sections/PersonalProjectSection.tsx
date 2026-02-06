'use client'

import React from 'react';
import WorkItem from './WorkItem';
import FuryReadMore from '../project-details/FuryReadMore';

const PersonalProjectSection: React.FC = () => {
  const projects = [
    {
      title: 'Unreal Engine Prototype',
      subtitle: 'Unreal Engine 5 Interior Environment and Player Control Prototype',
      positions: ['Solo Developer'],
      date: 'June 2024 - July 2024',
      description: 'A fast-paced 2D action game built in Unity featuring dynamic combat mechanics, procedural level generation, and a custom physics system. Designed and developed all gameplay systems, UI/UX, and visual effects. Winner of the 2025 GDIAC Judges Choice Award.',
      keyResponsibilities: [
        'Implemented combat system with combo mechanics and hit detection',
        'Designed and built custom level editor for rapid prototyping',
        'Created particle effects and animation systems',
        'Optimized performance for mobile platforms'
      ],
      technologies: ['Unreal Engine', 'Blender', 'AccuRIG'],
      media: [
        {
          src: '/videos/UnrealDemo.mp4',
          type: 'video' as const,
          alt: 'Unreal Demo',
          subtitle: 'Environment Interactions and First Person Animations'
        },
      ],
      readMoreContent: <FuryReadMore />
    },
    {
      title: '3D Modeling Showcase',
      subtitle: 'Game Environments and Assets made in Blender',
      positions: [''],
      date: '',
      description: 'A fast-paced 2D action game built in Unity featuring dynamic combat mechanics, procedural level generation, and a custom physics system. Designed and developed all gameplay systems, UI/UX, and visual effects. Winner of the 2025 GDIAC Judges Choice Award.',
      keyResponsibilities: [
        'Implemented combat system with combo mechanics and hit detection',
        'Designed and built custom level editor for rapid prototyping',
        'Created particle effects and animation systems',
        'Optimized performance for mobile platforms'
      ],
      technologies: ['Blender'],
      media: [
        {
          src: '/images/dungeonWhole.png',
          type: 'image' as const,
          alt: 'Dungeon Environment',
          subtitle: 'Low-Poly Dungeon Environment'
        },
        {
          src: '/images/boxes_and_barrels.png',
          type: 'image' as const,
          alt: 'Dungeon Environment',
          subtitle: 'Crates and Barrel Closeup'
        },
        {
          src: '/images/modeling1.png',
          type: 'image' as const,
          alt: 'Dungeon Environment',
          subtitle: 'Base Mesh Render'
        },
        {
          src: '/images/modeling2.png',
          type: 'image' as const,
          alt: 'Dungeon Environment',
          subtitle: 'Material Preview Render'
        },
        {
          src: '/images/modeling3.png',
          type: 'image' as const,
          alt: 'Dungeon Environment',
          subtitle: 'Final Lighting Render'
        },
      ],
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
        //   link={project.link}
          media={project.media}
          reversed={index % 2 !== 0}
          isFirst={index === 0}
          readMoreContent={project.readMoreContent}
          sectionTitle={index === 0 ? "Personal Projects" : undefined}
        />
      ))}
    </>
  );
};

export default PersonalProjectSection;