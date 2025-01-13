export default function DefaultSection({ title, content }: { title: string; content: string[] }) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-white mb-12">{title}</h2>
        <ul className="space-y-3 text-xl md:text-2xl text-white">
          {content.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-2xl">•</span> {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  