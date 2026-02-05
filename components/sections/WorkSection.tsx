'use client'

import React from 'react';
import WorkItem from './WorkItem';
import PushFiReadMore from '../work-details/PushFiReadMore';
import SimulacrumReadMore from '../work-details/SimulacrumReadMore';

const WorkSection: React.FC = () => {
  const workExperiences = [
    {
      title: 'PushFi',
      subtitle: 'Early Stage Fintech AI Startup', 
      positions: ['Full Stack Engineer', 'UI/UX Designer'],
      date: 'Sep 2025 - Current',
      description: 'Owned the complete front-end redesign of a fintech lending platform. Developed critical features from the ground up, taking the platform from early prototype to beta-ready in 6 months. As one of two developers during this phase, I architected and implemented the entire user-facing platform, agent onboarding system, and built secure backend API with optimized database architecture.',
      keyResponsibilities: [
        'Redesigned 100% of platform UI/UX for beta launch',
        'Built agent network and white-label branding features from scratch',
        'Architected secure document management system with AWS S3',
        'Solo developer responsible for front-end, back-end, and database architecture'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'AWS S3', 'MongoDB', 'Tailwind CSS', 'Postman'],
      media: [
        {
          src: '/images/PushFiLight.png',
          type: 'image' as const,
          alt: 'PushFi Dashboard',
          subtitle: 'Main Dashboard'
        },
        {
          src: '/images/PushFiDark.png',
          type: 'image' as const,
          alt: 'Agent Portal',
          subtitle: 'Agent Onboarding Portal'
        },
        {
          src: '/images/PushFiDark.png',
          type: 'image' as const,
          alt: 'Agent Portal',
          subtitle: 'Agent Onboarding Portal'
        },
        {
          src: '/images/PushFiDark.png',
          type: 'image' as const,
          alt: 'Agent Portal',
          subtitle: 'Agent Onboarding Portal'
        },
      ],
      readMoreContent: <PushFiReadMore />
    },
    {
      title: 'Simulacrum',
      subtitle: 'AI Forecasting Service | Cornell Tech Runway Startup', 
      positions: ['Full Stack Developer Intern', 'Part-Time'],
      date: 'Sep 2025 - Dec 2025',
      description: 'Contributed to an AI-powered forecasting platform during a Cornell Tech Runway accelerator program. Worked on full-stack development, implementing features for market prediction visualization and data analysis.',
      technologies: ['Python', 'FastAPI', 'React', 'MongoDB'],
      media: [
        {
          src: '/images/SimulacrumLanding.png',
          type: 'image' as const,
          alt: 'Simulacrum Landing Page',
          subtitle: 'Landing Page'
        }
      ],
      readMoreContent: <SimulacrumReadMore />
    }
  ];

  return (
    <>
      {workExperiences.map((work, index) => (
        <WorkItem
          key={index}
          title={work.title}
          subtitle={work.subtitle}
          positions={work.positions}
          date={work.date}
          description={work.description}
          keyResponsibilities={work.keyResponsibilities}
          technologies={work.technologies}
          media={work.media}
          reversed={index % 2 !== 0}
          isFirst={index === 0}
          readMoreContent={work.readMoreContent}
        />
      ))}
    </>
  );
};

export default WorkSection;