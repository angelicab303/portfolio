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
      description: 'Owned the complete front-end redesign of a fintech lending platform. Developed critical features from the ground up, taking the platform from early prototype to beta-ready. As one of two developers during this phase, I architected and implemented the entire user-facing platform, agent onboarding system, and built secure backend API with optimized database architecture.',
      keyResponsibilities: [
        'Redesigned 100% of platform UI/UX for beta launch',
        'Built agent network and white-label branding features from scratch',
        'Architected secure document management system with AWS S3',
        'Solo developer responsible for front-end, back-end, and database architecture'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'AWS S3', 'MongoDB', 'Tailwind CSS', 'Postman'],
      media: [
        {
          src: '/videos/PushFi_Landing_Loop.mov',
          type: 'video' as const,
          alt: 'PushFi Landing Page',
          subtitle: 'PushFi Landing page'
        },
        {
          src: '/images/PushFiLight.png',
          type: 'image' as const,
          alt: 'PushFi Dashboard',
          subtitle: 'Light Theme'
        },
        {
          src: '/images/PushFiDark.png',
          type: 'image' as const,
          alt: 'Agent Portal',
          subtitle: 'Dark Theme'
        },
      ],
      readMoreContent: <PushFiReadMore />
    },
    {
      title: 'Simulacrum',
      subtitle: 'AI Forecasting Service | Cornell Tech Runway Startup', 
      positions: ['Full Stack Developer Intern', 'Part-Time'],
      date: 'Sep 2025 - Dec 2025',
      description: 'Interned at an AI-powered forecasting startup in the Cornell Tech Runway accelerator program. Created an interactive animation for forecasting visualization and developed full stack features for their web-app platform. Built custom Python package for improved development flow and created an optimized database to manage metadata queries for their internal training data website.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Python', 'FastAPI', 'React', 'Firebase', 'SQL', "Google Cloud Platform", 'Docker'],
      link: [{
        url: 'https://tech.cornell.edu/built/simulacrum/',
        label: 'Cornell Tech Runway Page'
      },],
      media: [
        {
          src: '/videos/Simulacrum_LandingPage_Animation_Showcase.mov',
          type: 'video' as const,
          alt: 'Simulacrum Landing Page',
          subtitle: 'Interactive Landing Page'
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
          link={work.link}
          media={work.media}
          reversed={index % 2 !== 0}
          isFirst={index === 0}
          readMoreContent={work.readMoreContent}
          sectionTitle={index === 0 ? "Work Experience" : undefined}
        />
      ))}
    </>
  );
};

export default WorkSection;