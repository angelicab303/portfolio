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
  const [videoTime, setVideoTime] = useState(0);
  const mainVideoRef = React.useRef<HTMLVideoElement>(null);
  const modalVideoRef = React.useRef<HTMLVideoElement>(null);

  if (!media || media.length === 0) {
    return null;
  }

  const currentMedia = media[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    setVideoTime(0); // Reset time when changing videos
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    setVideoTime(0); // Reset time when changing videos
  };

  const handleOpenModal = () => {
    if (mainVideoRef.current && currentMedia.type === 'video') {
      setVideoTime(mainVideoRef.current.currentTime);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current && currentMedia.type === 'video') {
      setVideoTime(modalVideoRef.current.currentTime);
    }
    setIsModalOpen(false);
  };

  // Sync video time when switching between main and modal
  React.useEffect(() => {
    if (currentMedia.type === 'video') {
      if (isModalOpen && modalVideoRef.current) {
        modalVideoRef.current.currentTime = videoTime;
      } else if (!isModalOpen && mainVideoRef.current) {
        mainVideoRef.current.currentTime = videoTime;
      }
    }
  }, [isModalOpen, currentMedia.type, videoTime]);

  return (
    <>
      <div className="flex flex-col w-full relative">
        {/* Media Display Area */}
        <div className="flex justify-center overflow-visible mb-4 p-4 -mx-4 md:mx-0 md:p-4 relative group">
          {currentMedia.type === 'image' ? (
            <img
              src={currentMedia.src}
              alt={currentMedia.alt || `Gallery image ${currentIndex + 1}`}
              className="w-full shadow-lg rounded-lg cursor-pointer"
              onClick={handleOpenModal}
            />
          ) : (
            <video
              ref={mainVideoRef}
              src={currentMedia.src}
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full shadow-lg rounded-lg cursor-pointer"
              onClick={handleOpenModal}
            >
              Your browser does not support the video tag.
            </video>
          )}
          
          {/* Expand Button Overlay */}
          <button
            onClick={handleOpenModal}
            className="absolute top-6 right-6 md:top-8 md:right-8 p-2.5 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
            style={{ color: 'white' }}
            aria-label="Expand to fullscreen"
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
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
        </div>

        {/* Expand Button - Always Visible */}
        <div className="flex justify-end -mt-4 px-4 md:px-4">
          <button
            onClick={handleOpenModal}
            className="flex items-center gap-2 px-4 py-2 mb-2 rounded-md transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/10 opacity-70"
            style={{ color: 'var(--text-primary)' }}
            aria-label="View fullscreen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
            <span className="font-['Rubik'] text-xs">View fullscreen</span>
          </button>
        </div>

        {/* Thumbnail Preview Strip - Only show if more than 1 media item */}
        {media.length > 1 && (
        <div className="flex justify-center mb-2 px-4">
            <div 
            ref={(el) => {
                if (el) {
                const thumbnails = el.querySelectorAll('button');
                const currentThumbnail = thumbnails[currentIndex];
                if (currentThumbnail) {
                    currentThumbnail.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                    });
                }
                }
            }}
            className="relative h-32 md:h-32 w-full max-w-md overflow-x-auto overflow-y-hidden"
            >
            <div className="flex gap-4 px-2 py-1 transition-transform duration-500 ease-in-out">
                {media.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-30 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentIndex
                        ? 'opacity-100 scale-110'
                        : 'opacity-50 hover:opacity-75 scale-100'
                    }`}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.alt || `Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center relative">
                        <video
                          src={item.src}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="white"
                            opacity="0.8"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Bar */}
        <div className="flex items-center justify-between py-3 px-4 md:px-32">
          {/* Left Arrow */}
          {media.length > 1 ? (
            <button
              onClick={handlePrevious}
              className="flex-shrink-0 p-2 rounded-md transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/10"
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
          ) : (
            <div className="flex-shrink-0 w-9"></div>
          )}

          {/* Subtitle / Counter */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center px-4 max-w-lg">
            {currentMedia.subtitle && (
              <p className="font-['Rubik'] text-sm font-medium mb-1 break-words" style={{ color: 'var(--text-primary)' }}>
                {currentMedia.subtitle}
              </p>
            )}
            <p className="font-['Rubik'] text-xs opacity-70" style={{ color: 'var(--text-secondary)' }}>
              {currentIndex + 1} of {media.length}
            </p>
          </div>

          {/* Right Arrow */}
          {media.length > 1 ? (
            <button
              onClick={handleNext}
              className="flex-shrink-0 p-2 rounded-md transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/10"
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
          ) : (
            <div className="flex-shrink-0 w-9"></div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-4"
          onClick={handleCloseModal}
        >
          {/* Close Button - Fixed to viewport */}
          <button
            onClick={handleCloseModal}
            className="fixed top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 z-10"
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

          <div className="relative max-w-7xl w-full flex flex-col items-center justify-center gap-2 md:gap-4 mt-12 md:mt-16">

            {/* Modal Media */}
            <div className="flex items-center justify-center w-full" onClick={(e) => e.stopPropagation()}>
              {currentMedia.type === 'image' ? (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.alt || `Gallery image ${currentIndex + 1}`}
                  className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain"
                  style={{ maxWidth: '90vw' }}
                />
              ) : (
                <video
                  ref={modalVideoRef}
                  src={currentMedia.src}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain"
                  style={{ maxWidth: '90vw' }}
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