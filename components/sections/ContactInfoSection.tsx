import { FaEnvelope, FaLinkedin, FaGithub, FaArrowLeft } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface ContactInfoSectionProps {
  onBack: () => void;
}

export default function ContactInfoSection({
  onBack,
}: ContactInfoSectionProps) {
  const title = 'Contact Information';
  const content = [
    {
      label: 'Email',
      link: 'mailto:songjeongjun320@gmail.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          style={{
            width: 'clamp(3rem,6vw,5rem)',
            height: 'clamp(3rem,6vw,5rem)',
          }}
        >
          <g>
            <path
              fill="#4285F4"
              d="M43.611 20.083H42V20H24v8h11.303C33.973 32.833 29.373 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.69 0 5.164.957 7.104 2.53l6.062-6.062C33.984 5.16 29.284 3 24 3 12.954 3 4 11.954 4 23s8.954 20 20 20c10.477 0 19.477-7.615 19.477-19.477 0-1.305-.138-2.568-.366-3.773z"
            />
            <path
              fill="#34A853"
              d="M6.306 14.691l6.571 4.819C14.655 16.163 19.004 13 24 13c2.69 0 5.164.957 7.104 2.53l6.062-6.062C33.984 5.16 29.284 3 24 3c-7.732 0-14.41 4.41-17.694 11.691z"
            />
            <path
              fill="#FBBC05"
              d="M24 43c5.205 0 9.963-1.717 13.627-4.60l-6.293-5.146C29.373 36 24 36 24 36c-5.373 0-9.973-3.167-11.303-8H6.306C8.59 38.59 15.268 43 24 43z"
            />
            <path
              fill="#EA4335"
              d="M43.611 20.083H42V20H24v8h11.303c-1.13 3.833-5.73 8-11.303 8-2.69 0-5.164-.957-7.104-2.53l-6.062 6.062C14.016 42.84 18.716 45 24 45c7.732 0 14.41-4.41 17.694-11.691z"
            />
          </g>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/junsong0602',
      icon: (
        <FaLinkedin className="text-[clamp(3rem,6vw,5rem)] text-blue-600" />
      ),
    },
    {
      label: 'GitHub',
      link: 'https://github.com/songjeongjun320',
      icon: <FaGithub className="text-[clamp(3rem,6vw,5rem)] text-gray-800" />,
    },
    {
      label: 'X',
      link: 'https://x.com/jsong132',
      icon: <FaXTwitter className="text-[clamp(3rem,6vw,5rem)] text-black" />,
    },
  ];

  return (
    <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7faff] via-[#e7f0fd] to-[#e3e9fc] px-[clamp(0.5rem,3vw,2.5rem)] py-[clamp(1rem,6vw,4rem)] min-h-screen">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 bg-white shadow-lg rounded-4xl p-3 hover:shadow-xl transition-shadow duration-300 border border-blue-200"
      >
        <FaArrowLeft className="text-blue-600 text-xl" />
      </button>

      <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-[#1877F2] mb-[clamp(2rem,4vw,4rem)] text-center tracking-tight">
        {title}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(1.5rem,3vw,3rem)] w-full max-w-[clamp(50rem,80vw,70rem)] mb-10">
        {content.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-[clamp(1.5rem,3vw,2.5rem)] bg-white/90 rounded-4xl p-[clamp(2rem,4vw,3rem)] shadow-xl hover:scale-105 transition-transform duration-300 border-2 border-blue-100"
          >
            <div className="flex items-center justify-center">{item.icon}</div>
            <div className="flex flex-col">
              <span className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-[#1877F2] mb-2">
                {item.label}
              </span>
              <a
                href={item.link}
                target={item.link.startsWith('mailto') ? '_self' : '_blank'}
                rel={
                  item.link.startsWith('mailto') ? '' : 'noopener noreferrer'
                }
                className="text-blue-500 hover:text-[#1877F2] text-[clamp(1.2rem,2.5vw,1.8rem)] break-all transition-colors duration-300"
              >
                {item.link.startsWith('mailto')
                  ? item.link.replace('mailto:', '')
                  : item.link}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
