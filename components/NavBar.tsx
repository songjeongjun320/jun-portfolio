interface NavBarProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection }) => {
  const handleScrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId); // Update active section when button is clicked
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-black/30 rounded-lg">
      <div className="flex flex-col">
        {/* Navigation Buttons for all sections */}
        {['Introduction', 'Education', 'Professional Experience', 'Research Interests', 'Publication', 'Projects', 'Honors & Awards', 'Tech Skills', 'Military Service', 'Contact Information'].map((section) => (
          <button
            key={section}
            onClick={() => handleScrollToSection(section)}
            className={`group flex items-center justify-end py-2 px-4 transition-all duration-300 ${
              activeSection === section ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
            aria-label={`Navigate to ${section.charAt(0).toUpperCase() + section.slice(1)}`}
          >
            <span className="text-white text-base mr-2">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
            <span
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section ? 'bg-white scale-125' : 'bg-white/50 group-hover:bg-white/75'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
