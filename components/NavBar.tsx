interface NavBarProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection }) => {
  const sectionMapping: { [key: string]: string } = {
    Introduction: 'intro',
    'Professional Experience': 'experience',
    Education: 'education',
    Projects: 'projects',
    'Honors & Awards': 'honors',
    'Tech Skills': 'skills',
    'Military Service': 'military',
    'Contact Information': 'contact',
  };

  const handleScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Update active section when button is clicked
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-black/30 rounded-4xl">
      <div className="flex flex-col">
        {/* Navigation Buttons for all sections */}
        {Object.keys(sectionMapping).map((section) => (
          <button
            key={section}
            onClick={() => handleScrollToSection(sectionMapping[section])}
            className={`group flex items-center justify-end py-2 px-4 transition-all duration-300 ${
              activeSection === sectionMapping[section]
                ? 'bg-white/20'
                : 'hover:bg-white/10'
            }`}
            aria-label={`Navigate to ${section}`}
          >
            <span className="text-white text-base mr-2">{section}</span>
            <span
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === sectionMapping[section]
                  ? 'bg-white scale-125'
                  : 'bg-white/50 group-hover:bg-white/75'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
