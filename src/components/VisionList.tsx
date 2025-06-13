
export const VisionList = () => {
  const visions = [
    {
      number: "01",
      title: "Sustainable Excellence",
      description: "To be the global leader in sustainable marine food production, setting industry standards for environmental responsibility and quality."
    },
    {
      number: "02", 
      title: "Innovation & Technology",
      description: "Continuously innovate our processes and embrace new technologies to improve efficiency, quality, and sustainability in marine food production."
    },
    {
      number: "03",
      title: "Global Partnership",
      description: "Build lasting partnerships worldwide, delivering premium marine products that nourish communities and support local economies."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((vision, index) => (
            <div key={index} className="text-center p-8">
              <div className="text-6xl font-bold text-blue-400 mb-6">
                {vision.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{vision.title}</h3>
              <p className="text-gray-300 leading-relaxed">{vision.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
