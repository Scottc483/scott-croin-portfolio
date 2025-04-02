"use client";
import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import { useModal } from '@/context/ModalContext';
import Image from 'next/image';

interface ProjectImage {
  url: string;
  orientation: 'portrait' | 'landscape';
}

interface ProjectCardProps {
  title: string;
  description: string[];
  githubLink: string;
  otherLink?: string;
  images: ProjectImage[];
  technologies: string[];
  mobile: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  otherLink,
  images,
  technologies,
  mobile,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const { setIsModalOpen } = useModal();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaFullscreenRef, emblaFullscreenApi] = useEmblaCarousel({ 
    loop: true,
    containScroll: 'keepSnaps',
    startIndex: selectedImageIndex || 0
  });

  // Sync carousels in both directions
  useEffect(() => {
    if (!emblaApi || !emblaFullscreenApi) return;

    if (selectedImageIndex !== null) {
      emblaFullscreenApi.scrollTo(selectedImageIndex);
    }

    const onThumbSelect = () => {
      if (selectedImageIndex === null) {
        const currentIndex = emblaApi.selectedScrollSnap();
        emblaFullscreenApi.scrollTo(currentIndex);
      }
    };

    const onFullscreenSelect = () => {
      if (selectedImageIndex !== null) {
        const currentIndex = emblaFullscreenApi.selectedScrollSnap();
        emblaApi.scrollTo(currentIndex);
      }
    };

    emblaApi.on('select', onThumbSelect);
    emblaFullscreenApi.on('select', onFullscreenSelect);
    

    return () => {
      emblaApi.off('select', onThumbSelect);
      emblaFullscreenApi.off('select', onFullscreenSelect);
    };
  }, [emblaApi, emblaFullscreenApi, selectedImageIndex]);

  // Handle ESC key press and body scroll
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImageIndex(null);
        setIsModalOpen(false);
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
      setIsModalOpen(true);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
      setIsModalOpen(false);
    };
  }, [selectedImageIndex, setIsModalOpen]);

  const scrollPrev = useCallback((api: typeof emblaApi) => {
    if (api) api.scrollPrev();
  }, []);

  const scrollNext = useCallback((api: typeof emblaApi) => {
    if (api) api.scrollNext();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        
        {/* Thumbnail Carousel */}
        <div className="relative mb-6">
          <div className="overflow-hidden bg-gray-100 rounded-lg" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`cursor-pointer flex items-center justify-center z-50 ${
                    image.orientation === 'portrait'
                      ? 'flex-[0_0_100%] md:flex-[0_0_33.333%]'
                      : 'flex-[0_0_100%]'
                  }`}
                  onClick={() =>{ 
                    setSelectedImageIndex(index) 
                
                  }
                }
                >
                  <div className={`relative m-4 `}>
                    <Image
                      src={image.url}
                      alt={`${title} screenshot ${index + 1}`}
                      width={500}
                      height={500}
                      className={`w-full h-full object-contain rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300  p-8 ${
                        image.orientation === 'portrait'
                          ? 'bg-slate-800'
                          : 'bg-white'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
            onClick={() => scrollPrev(emblaApi)}
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
            onClick={() => scrollNext(emblaApi)}
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          {description.map((paragraph, index) => (
            <p key={index} className="text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-110"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          {otherLink && (
            <a
              href={otherLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Fullscreen Modal - Keep showing one image at a time */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => {
            setSelectedImageIndex(null);
            setIsModalOpen(false);
          }}
        >
          <button
            onClick={() => {
              setSelectedImageIndex(null);
              setIsModalOpen(false);
            }}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-[100000] bg-black/50 rounded-full p-2 backdrop-blur-sm transition-all duration-200 hover:scale-110"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

          <div 
            className="max-w-[95vw] md:max-w-[80vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Buttons - Moved outside and wider */}
            <button
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-4 rounded-full transition-all duration-200 hover:scale-110 z-[100000]"
              onClick={(e) => {
                e.stopPropagation();
                scrollPrev(emblaFullscreenApi);
              }}
            >
              <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8 text-black" />
            </button>
            <button
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-4 rounded-full transition-all duration-200 hover:scale-110 z-[100000]"
              onClick={(e) => {
                e.stopPropagation();
                scrollNext(emblaFullscreenApi);
              }}
            >
              <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8 text-black" />
            </button>

            {/* Fullscreen Carousel */}
            <div className="relative overflow-hidden" ref={emblaFullscreenRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 flex items-center justify-center px-4"
                  >
                    <div className={`relative ${
                      image.orientation === 'portrait'
                        ? 'h-[90vh] w-auto'
                        : 'h-auto'
                    }`}>
                      <Image
                        src={image.url}
                        alt={`${title} fullscreen ${index + 1}`}
                        width={1200}
                        height={1200}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
