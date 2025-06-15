import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Factory,
  Thermometer,
  Package,
  CheckCircle,
  TestTube,
  FishIcon,
} from "lucide-react";

export const Facility = () => {
  const facilityFeatures = [
    {
      icon: FishIcon,
      title: "Our Ponds",
      description:
        "IPAL Pond and 36 Cultivation Pond guarantee our sustainable production",
    },
    {
      icon: Factory,
      title: "Feed Warehouse & Workshop",
      description:
        "High standard of feed warehouse to ensure the quality of our production",
    },
    {
      icon: TestTube,
      title: "Laboratory Harvest Hall",
      description: "Our finest laboratory hall directly after harvest",
    },
    {
      icon: Thermometer,
      title: "Cold Storage Systems",
      description:
        "Advanced refrigeration and freezing systems maintaining optimal temperatures throughout the supply chain.",
    },
    {
      icon: Package,
      title: "Packaging & Distribution",
      description:
        "Hygienic packaging facilities with vacuum sealing and modified atmosphere packaging capabilities.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance Lab",
      description:
        "On-site laboratory for comprehensive quality testing and microbiological analysis.",
    },
  ];

  const facilityItems = [
    "IPAL Pond",
    "36 Cultivation Pond",
    "Feed Warehouse & Workshop",
    "Laboratory Harvest Hall",
    "Blower Pump House",
    "Marine Pump House",
    "Security Post Office",
    "Generator & Mechanic Room",
    "Prayer Room (Musholah)",
    "Employee Mess Kitchen & Dining Room",
  ];

  return (
    <section id="facility" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Facility
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our world-class processing facility combines cutting-edge technology
            with stringent quality controls to ensure the highest standards in
            marine food production.
          </p>
          {/* <p className="text-lg max-w-3xl mx-auto">Our facilities include:</p> */}
          <ul className="text-lg max-w-3xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {facilityItems.map((item, index) => (
              <li
                key={index}
                className="text-center border border-primary/50 rounded-lg px-4 py-2 text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {facilityFeatures.map((feature, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50,000</div>
              <div className="text-sm text-muted-foreground">Sqm Facility</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5,000</div>
              <div className="text-sm text-muted-foreground">
                Tons/Month Capacity
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">-20°C</div>
              <div className="text-sm text-muted-foreground">
                Storage Temperature
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                Quality Monitoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
