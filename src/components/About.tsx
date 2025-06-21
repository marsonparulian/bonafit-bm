import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fish, Award, Shield, Truck } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Fish,
      title: "Sustainable Fishing",
      description:
        "We practice responsible fishing methods to preserve marine ecosystems for future generations.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        // "Our seafood meets the highest international quality standards with rigorous testing and certification.",
        "Our seafood meets the highest international quality standards.",
    },
    {
      icon: Shield,
      title: "Food Safety",
      description:
        "Advanced cold-chain management and HACCP (on progress) compliance ensure maximum freshness and safety.",
    },
    // {
    //   icon: Truck,
    //   title: "Fast Delivery",
    //   description:
    //     "Direct from boat to your business with our efficient logistics network and temperature-controlled transport.",
    // },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <br />
            Bonafit Bamaraja Marine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Collaborating with the Indonesian Navy (TNI AL) in the government's
            food self-sufficiency program, this initiative was initially known
            as the Maritime Food Estate program. The company was established
            under the name PT BONAFIT BAMARAJA MARINE and is part of the JUMA
            BERLIAN EXIM Group (JBE GROUP).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};
