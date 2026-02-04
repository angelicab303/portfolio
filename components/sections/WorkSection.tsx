'use client'

import React from 'react';
import WorkItem from './WorkItem';

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
      imageSrc: '/images/PushFiLight.png',
      imageAlt: 'PushFi Screenshot'
    },
    {
      title: 'Simulacrum',
      subtitle: 'AI Forecasting Service | Cornell Tech Runway Startup', 
      positions: ['Full Stack Developer Intern', 'Part-Time'],
      date: 'Sep 2025 - Dec 2025',
      description: 'Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Morbi quis commodo odio aenean sed adipiscing diam. Vitae purus faucibus ornare suspendisse sed. Vitae congue mauris rhoncus aenean vel. Ut ornare lectus sit amet est placerat in. Congue quisque egestas diam in.',
      technologies: ['Python', 'FastAPI', 'React', 'MongoDB'],
      imageSrc: '/images/SimulacrumLanding.png',
      imageAlt: 'Simulacrum screenshot'
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
          imageSrc={work.imageSrc}
          imageAlt={work.imageAlt}
          reversed={index % 2 !== 0}
          isFirst={index === 0}
        />
      ))}
    </>
  );
};

export default WorkSection;