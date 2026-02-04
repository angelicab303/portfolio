import React from 'react';
import ProjectCard from './ProjectCard';

interface Hobby {
  id: number;
  title: string;
  timeframe: string;
  image: string;
  description: string;
  modalContent?: React.ReactNode;
  isExternalLink?: boolean;
  externalUrl?: string;
}

const HobbySection: React.FC = () => {
  const hobbies: Hobby[] = [
    {
      id: 1,
      title: 'Hobby 1 Title',
      timeframe: '2024',
      image: '/images/hobby1.jpg',
      description: 'Brief description of hobby 1',
      modalContent: (
        <div>
          <h2>Hobby 1 Title</h2>
          <p>Detailed description of your first hobby project goes here.</p>
          <ul>
            <li>Interesting aspect 1</li>
            <li>Interesting aspect 2</li>
            <li>Interesting aspect 3</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      title: 'Hobby 2 Title',
      timeframe: '2024',
      image: '/images/hobby2.jpg',
      description: 'Brief description of hobby 2',
      modalContent: (
        <div>
          <h2>Hobby 2 Title</h2>
          <p>Detailed description of your second hobby project goes here.</p>
          <ul>
            <li>Interesting aspect 1</li>
            <li>Interesting aspect 2</li>
            <li>Interesting aspect 3</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: 'Hobby 3 Title',
      timeframe: '2023',
      image: '/images/hobby3.jpg',
      description: 'Brief description of hobby 3',
      modalContent: (
        <div>
          <h2>Hobby 3 Title</h2>
          <p>Detailed description of your third hobby project goes here.</p>
          <ul>
            <li>Interesting aspect 1</li>
            <li>Interesting aspect 2</li>
            <li>Interesting aspect 3</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: 'Hobby 4 Title',
      timeframe: '2023',
      image: '/images/hobby4.jpg',
      description: 'Brief description of hobby 4',
      modalContent: (
        <div>
          <h2>Hobby 4 Title</h2>
          <p>Detailed description of your fourth hobby project goes here.</p>
          <ul>
            <li>Interesting aspect 1</li>
            <li>Interesting aspect 2</li>
            <li>Interesting aspect 3</li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      title: 'Hobby 5 Title',
      timeframe: '2023',
      image: '/images/hobby5.jpg',
      description: 'Brief description of hobby 5',
      modalContent: (
        <div>
          <h2>Hobby 5 Title</h2>
          <p>Detailed description of your fifth hobby project goes here.</p>
          <ul>
            <li>Interesting aspect 1</li>
            <li>Interesting aspect 2</li>
            <li>Interesting aspect 3</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      title: 'Hobby 6 Title',
      timeframe: '2022',
      image: '/images/hobby6.jpg',
      description: 'Brief description of hobby 6',
      modalContent: (
        <div>
          <h2>Hobby 6 Title</h2>
          <p>Detailed description of your sixth hobby project goes here.</p>
          <ul>
            <li>Interesting aspect 1</li>
            <li>Interesting aspect 2</li>
            <li>Interesting aspect 3</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="hobby-section">
      <div className="row">
        {hobbies.map((hobby) => (
          <ProjectCard key={hobby.id} {...hobby} />
        ))}
      </div>
    </div>
  );
};

export default HobbySection;
