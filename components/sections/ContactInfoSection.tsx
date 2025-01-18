export default function ContactInfoSection() {
  const title = 'Contact Information';
  const content = [
    { label: 'Email', link: 'mailto:songjeongjun320@gmail.com' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/junsong0602' },
    { label: 'GitHub', link: 'https://github.com/songjeongjun320' },
    { label: 'Personal Website', link: 'https://junswebsite.vercel.app/' },
  ];

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
        {title}
      </h2>
      <ul className="space-y-4 text-lg md:text-xl text-gray-300">
        {content.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 hover:text-white transition-colors duration-300 "
          >
            <span className="text-xl text-teal-400 font-bold ">•</span> {/* Set the bullet point color to white */}
            <a
              href={item.link}
              target={item.link.startsWith('mailto') ? '' : '_blank'}
              rel="noopener noreferrer"
              className="text-white hover:text-teal-300 transition-colors duration-300"
            >
              {item.label}: {item.link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
