export default function ContactInfoSection() {
  const title = 'Contact Information';
  const content = [
    'Email: songjeongjun320@gmail.com',
    'LinkedIn: www.linkedin.com/in/junsong0602',
    'GitHub: https://github.com/songjeongjun320',
    'Personal Website: https://junswebsite.vercel.app/',
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
