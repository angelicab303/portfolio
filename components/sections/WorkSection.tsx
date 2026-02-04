'use client'

import React from 'react';
import WorkItem from './WorkItem';

const WorkSection: React.FC = () => {
  const workExperiences = [
    {
      title: 'PushFi',
      positions: ['Project Lead', 'Gameplay & Networking Programmer'],
      date: 'Jan 2025 - May 2025',
      description: 'Jump into the treasure-seeking antics of a sugar-glider in parties of 2-4 players. A competitive mobile game built for iOS and Android devices.',
      imageSrc: '/images/PushFiLight.png', // Put your image in public/images/ folder
      imageAlt: 'PushFi Screenshot'
    },
    {
      title: 'Simulacrum',
      positions: ['Software Engineer', 'UI/UX Designer'],
      date: 'April 2019 - TBD',
      description: 'Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Morbi quis commodo odio aenean sed adipiscing diam. Vitae purus faucibus ornare suspendisse sed. Vitae congue mauris rhoncus aenean vel. Ut ornare lectus sit amet est placerat in. Congue quisque egestas diam in.',
      imageSrc: '/images/PushFiDark.png', // Replace with actual image
      imageAlt: 'Simulacrum screenshot'
    }
  ];

  return (
    <>
      {workExperiences.map((work, index) => (
        <WorkItem
          key={index}
          title={work.title}
          positions={work.positions}
          date={work.date}
          description={work.description}
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