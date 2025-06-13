export const VisionList = () => {
  const visions = [
    {
      number: "01",
      title: "Local Growth",
      description:
        "To generate financial profit for the company and the surrounding environment.",
    },
    {
      number: "02",
      title: "Life Focused",
      description:
        "To improve welfare and enhance the quality of life for everyone directly or indirectly involved in the company’s activities",
    },
    {
      number: "03",
      title: "Sustainable Operations",
      description:
        "To create sustainability between the work environment and all resources involved in business operations",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((vision, index) => (
            <div key={index} className="text-center p-8">
              <div className="text-6xl font-bold text-blue-400 mb-6">
                {vision.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{vision.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {vision.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
