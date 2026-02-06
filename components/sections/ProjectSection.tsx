'use client'

import React from 'react';
import WorkItem from './WorkItem';
import FuryReadMore from '../project-details/FuryReadMore';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      title: 'Sweet, Sweet Betrayal',
      subtitle: 'iOS & Android Mobile Party Game | CS 4152: Advanced Game Architecture - Cornell University',
      positions: ['Team Lead', 'Game Programmer', 'Network Engineer'],
      date: 'Jan 2025 - May 2025',
      description: 'A fast-paced 2D action game built in Unity featuring dynamic combat mechanics, procedural level generation, and a custom physics system. Designed and developed all gameplay systems, UI/UX, and visual effects. Winner of the 2025 GDIAC Judges Choice Award.',
      keyResponsibilities: [
        'Implemented combat system with combo mechanics and hit detection',
        'Designed and built custom level editor for rapid prototyping',
        'Created particle effects and animation systems',
        'Optimized performance for mobile platforms'
      ],
      teamSize: '10',
      technologies: ['CUGL Game Engine', 'C++', 'Xcode', 'Photoshop', 'Git'],
      link: [
        {
          url: 'https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/sweetsweetbetrayal/',
          label: 'Game Page'
        },
        {
          url: 'https://gdiac.cs.cornell.edu/gdiac/announcement/showcase-2025-results/',
          label: 'GDIAC 2025 Award'
        },
        {
          url: 'https://bowers.cornell.edu/news-stories/students-got-game-annual-video-game-showcase',
          label: 'Showcase Article'
        },
      ],
      media: [
        {
          src: '/videos/SSB_Menu_UI.mp4',
          type: 'video' as const,
          alt: 'SSB Menus',
          subtitle: 'Menu UI'
        },
        {
          src: '/videos/SSB_Demo.mp4',
          type: 'video' as const,
          alt: 'SSB Gameplay',
          subtitle: 'Multiplayer Gameplay'
        },
        {
          src: '/images/SSB_Wind_Level.png',
          type: 'image' as const,
          alt: 'Level Screenshot',
          subtitle: 'Wild Winds Level'
        },
        {
          src: '/images/SSB_Playground.png',
          type: 'image' as const,
          alt: 'Level Screenshot',
          subtitle: 'Party Playground Level'
        },
        {
          src: '/images/SSB_Gorge.png',
          type: 'image' as const,
          alt: 'Level Screenshot',
          subtitle: 'Gorgeous Gorges Level'
        },
      ],
      readMoreContent: <FuryReadMore />
    },
    {
      title: 'Grub Bug',
      subtitle: 'Unity 2D Delivery Game | DGA @ Cornell Project Team',
      positions: ['UI Lead'],
      date: 'Aug 2024 - May 2025',
      description: 'A fast-paced 2D action game built in Unity featuring dynamic combat mechanics, procedural level generation, and a custom physics system. Designed and developed all gameplay systems, UI/UX, and visual effects.',
      keyResponsibilities: [
        'Implemented combat system with combo mechanics and hit detection',
        'Designed and built custom level editor for rapid prototyping',
        'Created particle effects and animation systems',
        'Optimized performance for mobile platforms'
      ],
      teamSize: '20',
      technologies: ['Unity', 'C#', 'Photoshop', 'Git'],
      link: [
        {
          url: 'https://dgacornell.itch.io/grubbug',
          label: 'itch.io'
        }
      ],
      media: [
        {
          src: '/images/Grub_MainMenu.png',
          type: 'image' as const,
          alt: 'Main Menu Screenshot',
          subtitle: ''
        },
        {
          src: '/videos/Grub_Gameplay.mov',
          type: 'video' as const,
          alt: 'Grub Gameplay',
          subtitle: 'UI Overview'
        },
        {
          src: '/videos/Grub_Hotbar.mov',
          type: 'video' as const,
          alt: 'Grub Hotbar',
          subtitle: 'Hotbar UI'
        },
      ],
    },
    {
      title: 'Fury of the Lost Knight',
      subtitle: 'Unity 2D Action Game | DGA @ Cornell Summer Team',
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
      technologies: ['Unity', 'C#', 'Aseprite', 'Photoshop', 'Git'],
      link: [
        {
          url: 'https://dgacornell.itch.io/fury-of-the-lost-knight',
          label: 'itch.io'
        }
      ],
      media: [
        {
          src: '/videos/Fury_Level_UIs.mov',
          type: 'video' as const,
          alt: 'Fury Gameplay',
          subtitle: 'Level Select UI'
        },
        {
          src: '/videos/Swamp_Level.mov',
          type: 'video' as const,
          alt: 'Fury Gameplay',
          subtitle: 'Level Design & Environment Interactions'
        },
        {
          src: '/videos/Act1_Gameplay.mov',
          type: 'video' as const,
          alt: 'Fury Gameplay',
          subtitle: 'Environment Interactions'
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
        {
          src: '/images/Act3_Full.png',
          type: 'image' as const,
          alt: 'Full UI Screenshot',
          subtitle: ''
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