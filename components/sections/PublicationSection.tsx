export default function PublicationSection() {
  const content = [
    '"ML-based YMS (Yard Management System) Automation: Can Technology Replace Human Labor?" Submitted to arXiv, under review (2024)',
  ];

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b bg-gradient-to-r from-gray-900">
      <h2 className="text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
        Publications
      </h2>
      <div className="space-y-10 w-full md:w-4/5 lg:w-3/5">
        {content.map((publication, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <p className="text-xl text-gray-300 whitespace-pre-line leading-relaxed">
              {publication}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
