
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish, Award, Shield, Truck } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Fish,
      title: "Sustainable Fishing",
      description: "We practice responsible fishing methods to preserve marine ecosystems for future generations."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Our seafood meets the highest international quality standards with rigorous testing and certification."
    },
    {
      icon: Shield,
      title: "Food Safety",
      description: "Advanced cold-chain management and HACCP compliance ensure maximum freshness and safety."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Direct from boat to your business with our efficient logistics network and temperature-controlled transport."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About AquaMarine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over two decades, AquaMarine has been a trusted partner in the marine food industry. 
            We specialize in sourcing, processing, and distributing premium raw seafood to restaurants, 
            distributors, and food service companies worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-scale">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Commitment
              </h3>
              <p className="text-muted-foreground mb-4">
                We believe in the power of the ocean to nourish communities around the world. 
                Our commitment extends beyond just providing exceptional seafood – we're dedicated 
                to sustainable practices that protect marine environments.
              </p>
              <p className="text-muted-foreground">
                From the moment our fishing vessels leave port to the delivery at your doorstep, 
                every step is carefully monitored to ensure the highest quality and freshness.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Cold Chain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
