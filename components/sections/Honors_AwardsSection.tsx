export default function Leadership_PrizeSection() {
    const title = 'Leadership & Prize';
    const content = [
      'ASU Dean’s List (2023 - 2024)',
      'ASU NamU Scholarship (2023 - 2025)',
      '2nd Prize, Ethical Hackathon (2024)',
      'Furi Research Presentation (2024)',
      'Participant of Amazon’s Campus Summer Series (2024)',
    ];
  
    return (
      <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b bg-gradient-to-r from-gray-900">
        <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
          {title}
        </h2>
        <ul className="space-y-4 text-lg md:text-xl text-gray-300">
          {content.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 hover:text-white transition-colors duration-300"
            >
              <span className="text-xl text-teal-400 font-bold">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  