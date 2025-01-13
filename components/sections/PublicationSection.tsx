export default function PublicationSection({ content }: { content: string[] }) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Publication</h2>
        <div className="space-y-8">
          {content.map((publication, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-[70%] mx-auto"
            >
              <p className="text-2xl text-white whitespace-pre-line">{publication}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  