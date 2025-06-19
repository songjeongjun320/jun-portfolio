import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe, FaArrowLeft } from 'react-icons/fa';

interface ContactInfoSectionProps {
  onBack: () => void;
}

export default function ContactInfoSection({ onBack }: ContactInfoSectionProps) {
  const title = 'Contact Information';
  const content = [
    { label: 'Email', link: 'mailto:songjeongjun320@gmail.com', icon: <FaEnvelope className="text-teal-400 text-2xl" /> },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/junsong0602', icon: <FaLinkedin className="text-blue-400 text-2xl" /> },
    { label: 'GitHub', link: 'https://github.com/songjeongjun320', icon: <FaGithub className="text-gray-200 text-2xl" /> },
    { label: 'Personal Website', link: 'https://junswebsite.vercel.app/', icon: <FaGlobe className="text-green-400 text-2xl" /> },
  ];

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7faff] via-[#e7f0fd] to-[#e3e9fc]">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-white shadow-lg rounded-4xl p-3 hover:shadow-xl transition-shadow duration-300 border border-blue-200"
      >
        <FaArrowLeft className="text-blue-600 text-xl" />
      </button>
      
      <h2 className="text-5xl font-extrabold text-[#1877F2] mb-16 text-center tracking-tight">
        {title}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-10">
        {content.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-6 bg-white/90 rounded-4xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 border-2 border-blue-100"
          >
            {item.icon}
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-[#1877F2]">{item.label}</span>
              <a
                href={item.link}
                target={item.link.startsWith('mailto') ? '' : '_blank'}
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-[#1877F2] text-lg break-all transition-colors duration-300"
              >
                {item.link}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-10 w-full flex flex-col items-center justify-center">
        <span className="text-[#1877F2] text-2xl font-bold tracking-wide mb-2">2025. Designed by Jun</span>
                      <div className="bg-white/80 rounded-4xl px-8 py-4 border-2 border-blue-100">
          <span className="text-blue-700 text-lg italic text-center block max-w-xl">
            "You can not connect the dots looking forward, you can only connect them looking backward."
          </span>
        </div>
      </div>
    </div>
  );
}
