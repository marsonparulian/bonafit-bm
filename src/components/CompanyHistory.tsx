export const CompanyHistory = () => {
  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description:
        "Bonafit Bamaraja Marine was established with a vision to become a leading aquaculture food producer.",
    },
    {
      year: "2023",
      title: "Production Milestone",
      description:
        "Achieved significant production increase in Vannamei Shrimp cultivation.",
    },
    // {
    //   year: "2015",
    //   title: "Facility Expansion",
    //   description:
    //     "Major expansion of processing facilities and cold storage capabilities.",
    // },
    // {
    //   year: "2018",
    //   title: "International Certification",
    //   description:
    //     "Achieved HACCP and ISO 22000 certifications for food safety management.",
    // },
    // {
    //   year: "2024",
    //   title: "Sustainable Leadership",
    //   description:
    //     "Recognized as a leader in sustainable marine food production practices.",
    // },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our History
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Responding to the opportunity and efforts to support the
            government's Food Self-Sufficiency program, known as the Food
            Estate, this company was established on July 31, 2021. The
            establishment of the company is part of a collaboration between the
            Indonesian Navy and the local government. Its goal is to benefit the
            company, the surrounding community, and the local government.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                {milestone.year}
              </div>
              <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
              <p className="text-muted-foreground">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
