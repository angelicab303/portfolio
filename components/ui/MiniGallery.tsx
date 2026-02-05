'use client'

import React, { useState } from 'react';

interface MediaItem {
  src: string;
  alt?: string;
  type: 'image' | 'video';
  subtitle?: string;
}

interface MiniGalleryProps {
  media: MediaItem[];
  reversed?: boolean;
}

const MiniGallery: React.FC<MiniGalleryProps> = ({ media, reversed = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!media || media.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = media[currentIndex];

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Media Display Area */}
        <div className="flex justify-center overflow-visible mb-4 p-4 -mx-4 md:mx-0 md:p-4">
          {currentMedia.type === 'image' ? (
            <img
              src={currentMedia.src}
              alt={currentMedia.alt || `Gallery image ${currentIndex + 1}`}
              className="w-full shadow-lg rounded-lg cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
          ) : (
            <video
              src={currentMedia.src}
              controls
              className="w-full shadow-lg rounded-lg cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center justify-center gap-4 py-3">
          {/* Left Arrow */}
          {media.length > 1 && (
            <button
              onClick={handlePrevious}
              className="p-2 rounded-md transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/10"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Subtitle / Counter */}
          <div className="text-center px-4">
            {currentMedia.subtitle && (
              <p className="font-['Rubik'] text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                {currentMedia.subtitle}
              </p>
            )}
            <p className="font-['Rubik'] text-xs opacity-70" style={{ color: 'var(--text-secondary)' }}>
              {currentIndex + 1} of {media.length}
            </p>
          </div>

          {/* Right Arrow */}
          {media.length > 1 && (
            <button
              onClick={handleNext}
              className="p-2 rounded-md transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/10"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-7xl w-full flex flex-col items-center justify-center gap-2 md:gap-4">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 md:-top-16 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              style={{ color: 'white' }}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Media */}
            <div className="flex items-center justify-center w-full" onClick={(e) => e.stopPropagation()}>
              {currentMedia.type === 'image' ? (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.alt || `Gallery image ${currentIndex + 1}`}
                  className="max-w-full md:max-w-4xl max-h-[60vh] md:max-h-[70vh] object-contain"
                />
              ) : (
                <video
                  src={currentMedia.src}
                  controls
                  className="max-w-full md:max-w-4xl max-h-[60vh] md:max-h-[70vh] object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Modal Navigation */}
            <div className="flex items-center justify-center gap-4 md:gap-6 py-2 md:py-3" onClick={(e) => e.stopPropagation()}>
              {/* Left Arrow */}
              {media.length > 1 && (
                <button
                  onClick={handlePrevious}
                  className="p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/20 bg-white/10"
                  style={{ color: 'white' }}
                  aria-label="Previous"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              {/* Subtitle / Counter */}
              <div className="text-center px-3 md:px-6">
                {currentMedia.subtitle && (
                  <p className="font-['Rubik'] text-sm md:text-base font-medium mb-1 md:mb-2 text-white">
                    {currentMedia.subtitle}
                  </p>
                )}
                <p className="font-['Rubik'] text-xs md:text-sm text-white/70">
                  {currentIndex + 1} of {media.length}
                </p>
              </div>

              {/* Right Arrow */}
              {media.length > 1 && (
                <button
                  onClick={handleNext}
                  className="p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/20 bg-white/10"
                  style={{ color: 'white' }}
                  aria-label="Next"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MiniGallery;