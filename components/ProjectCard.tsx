'use client'

import React, { useState } from 'react';
import Modal from './Modal';
import { asset } from '@/app/lib/asset';

interface ProjectCardProps {
  title: string;
  timeframe: string;
  image: string;
  description: string;
  modalContent?: React.ReactNode;
  isExternalLink?: boolean;
  externalUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  timeframe, 
  image, 
  description, 
  modalContent,
  isExternalLink = false,
  externalUrl = ''
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (isExternalLink) {
      window.open(externalUrl, '_blank');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="col">
        <div className="project-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <img src={asset(image)} alt={title} className="rounded-corners" />
          <div className="time-text">
            <span>{title}</span>
            <span className="date">{timeframe}</span>
          </div>
          <p>{description}</p>
        </div>
      </div>

      {!isExternalLink && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {modalContent}
        </Modal>
      )}
    </>
  );
};

export default ProjectCard;
