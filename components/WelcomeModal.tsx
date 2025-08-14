import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const SECTIONS = [
  {
    title: '👋 Welcome!',
    content: `Welcome to my portfolio! This modal will quickly guide you through each section. You can close this at any time.`
  },
  {
    title: '✨ Intro',
    content:
      'The first section provides a brief introduction about me, my background, and my career aspirations.'
  },
  {
    title: '🏆 Honors & Awards',
    content:
      'Here you can find a list of my achievements and recognitions throughout my academic and professional career.'
  },
  {
    title: '💻 Professional Experience',
    content:
      'This section details my work experience, responsibilities, and key accomplishments in my previous roles.'
  },
  {
    title: '🎖️ Military Service',
    content:
      'This part outlines my mandatory military service in the Republic of Korea Armed Forces.'
  },
  {
    title: '🎓 Education',
    content:
      'You can learn about my academic background, including my degrees and institutions.'
  },
  {
    title: '🛠️ Skills',
    content:
      'A comprehensive list of my technical skills, including programming languages, frameworks, and tools.'
  },
  {
    title: '🚀 Projects',
    content: `This section showcases my personal and professional projects, highlighting my ability to build real-world applications.`
  },
  {
    title: '📝 Development Logs',
    content: `Here I document my development journey, sharing insights, challenges, and solutions from my projects.`
  },
  {
    title: '📞 Contact Info',
    content: `Feel free to reach out! This section contains my contact information for any inquiries or opportunities.`
  }
];

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedPortfolio');
    if (!hasVisited) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasVisitedPortfolio', 'true');
  };

  const handleNext = () => {
    setCurrentSectionIndex(prevIndex => (prevIndex + 1) % SECTIONS.length);
  };

  const handlePrev = () => {
    setCurrentSectionIndex(
      prevIndex => (prevIndex - 1 + SECTIONS.length) % SECTIONS.length
    );
  };

  if (!isOpen) {
    return null;
  }

  const currentSection = SECTIONS[currentSectionIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-xl border border-gray-700 bg-gray-800 p-6 text-white shadow-lg">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-cyan-400">
            {currentSection.title}
          </h2>
          <p className="mt-4 text-gray-300">{currentSection.content}</p>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrev}
            className="rounded-lg bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600"
          >
            Previous
          </button>
          <div className="flex items-center space-x-2">
            {SECTIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSectionIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentSectionIndex ? 'bg-cyan-400' : 'bg-gray-600'
                } transition-colors hover:bg-cyan-300`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="rounded-lg bg-cyan-500 px-4 py-2 text-white transition-colors hover:bg-cyan-400"
          >
            Next
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={handleClose}
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Got it, don't show this again.
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
