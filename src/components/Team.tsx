
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Target, Heart } from "lucide-react";

export const Team = () => {
  const teamValues = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals bring decades of experience in marine food production and quality management."
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Every team member is committed to maintaining the highest standards of quality and food safety."
    },
    {
      icon: Target,
      title: "Innovation Driven",
      description: "We continuously improve our processes and embrace new technologies for better efficiency."
    },
    {
      icon: Heart,
      title: "Customer Dedicated",
      description: "Our team is passionate about serving our customers and building long-term partnerships."
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated professionals behind Bonafit Bamaraja Marine. 
            Our experienced team ensures excellence in every aspect of marine food production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamValues.map((value, index) => (
            <Card key={index} className="text-center hover-scale">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Certified Staff</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
