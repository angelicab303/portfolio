import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  timeframe: string;
  image: string;
  description: string;
  modalContent?: React.ReactNode;
  isExternalLink?: boolean;
  externalUrl?: string;
}

const ProjectSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project 1 Title',
      timeframe: 'Jan 2024 - Present',
      image: '/images/project1.jpg',
      description: 'Brief description of project 1',
      modalContent: (
        <div>
          <h2>Project 1 Title</h2>
          <p>Detailed description of your first project goes here.</p>
          <ul>
            <li>Key achievement 1</li>
            <li>Key achievement 2</li>
            <li>Key achievement 3</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      title: 'Project 2 Title',
      timeframe: 'Jun 2023 - Dec 2023',
      image: '/images/project2.jpg',
      description: 'Brief description of project 2',
      modalContent: (
        <div>
          <h2>Project 2 Title</h2>
          <p>Detailed description of your second project goes here.</p>
          <ul>
            <li>Key achievement 1</li>
            <li>Key achievement 2</li>
            <li>Key achievement 3</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: 'External Project',
      timeframe: '2023',
      image: '/images/project3.jpg',
      description: 'This project links to an external site',
      isExternalLink: true,
      externalUrl: 'https://www.example.com'
    },
    {
      id: 4,
      title: 'Project 4 Title',
      timeframe: 'Mar 2023 - May 2023',
      image: '/images/project4.jpg',
      description: 'Brief description of project 4',
      modalContent: (
        <div>
          <h2>Project 4 Title</h2>
          <p>Detailed description of your fourth project goes here.</p>
          <ul>
            <li>Key achievement 1</li>
            <li>Key achievement 2</li>
            <li>Key achievement 3</li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      title: 'Project 5 Title',
      timeframe: 'Jan 2023 - Mar 2023',
      image: '/images/project5.jpg',
      description: 'Brief description of project 5',
      modalContent: (
        <div>
          <h2>Project 5 Title</h2>
          <p>Detailed description of your fifth project goes here.</p>
          <ul>
            <li>Key achievement 1</li>
            <li>Key achievement 2</li>
            <li>Key achievement 3</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      title: 'External Project 2',
      timeframe: '2022',
      image: '/images/project6.jpg',
      description: 'Another external project link',
      isExternalLink: true,
      externalUrl: 'https://www.example2.com'
    }
  ];

  return (
    <div className="project-section">
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
