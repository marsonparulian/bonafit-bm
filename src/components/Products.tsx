import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Products = () => {
  const products = [
    {
      name: "Fresh Fish",
      description:
        "Premium whole fish and fillets including salmon, tuna, cod, and seasonal catches",
      image: "🐟",
    },
    {
      name: "Shellfish",
      description:
        "Lobsters, crabs, shrimp, and other crustaceans sourced from pristine waters",
      image: "🦞",
    },
    {
      name: "Mollusks",
      description:
        "Oysters, mussels, clams, and scallops harvested from certified aquaculture farms",
      image: "🦪",
    },
    {
      name: "Specialty Items",
      description:
        "Sea urchin, octopus, squid, and other premium marine delicacies",
      image: "🐙",
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our company focuses on the cultivation and production services of
            Vaname crustaceans and Mackarel fish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="hover-scale text-center">
              <CardHeader>
                <div className="text-6xl mb-4">{product.image}</div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Quality Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="font-semibold mb-2">HACCP Certified</h4>
              <p className="text-sm text-muted-foreground">
                Hazard Analysis and Critical Control Points certification for
                food safety
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🌊</div>
              <h4 className="font-semibold mb-2">MSC Certified</h4>
              <p className="text-sm text-muted-foreground">
                Marine Stewardship Council certification for sustainable fishing
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="font-semibold mb-2">ISO 22000</h4>
              <p className="text-sm text-muted-foreground">
                International food safety management system standard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
