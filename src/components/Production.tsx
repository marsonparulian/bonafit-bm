
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShrimpGrowthCard } from "./ShrimpGrowthCard";

export const Production = () => {
  const fishData = [
    { month: "Jan", production: 300 },
    { month: "Feb", production: 350 },
    { month: "Mar", production: 400 },
    { month: "Apr", production: 380 },
    { month: "May", production: 420 },
    { month: "Jun", production: 450 },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Production
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monthly production capacity and distribution of our main marine
            products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shrimp Production */}
          <ShrimpGrowthCard />

          {/* Fish Production */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-3xl">🐟</span>
                Mackarel Tuna Fish Production
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Product Details:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center before:content-['•'] before:mr-2 before:text-primary line-through">
                      Tuna (Yellowfin, Skipjack)
                    </li>
                    <li className="flex items-center before:content-['•'] before:mr-2 before:text-primary line-through">
                      Snapper (Red, Crimson)
                    </li>
                    <li className="flex items-center before:content-['•'] before:mr-2 before:text-primary">
                      Grouper varieties
                    </li>
                    <li className="flex items-center before:content-['•'] before:mr-2 before:text-primary">
                      Whole fish & fillets
                    </li>
                    <li className="flex items-center before:content-['•'] before:mr-2 before:text-primary">
                      Monthly capacity: 450+ tons
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">
                    Production Chart (Tons):
                  </h4>
                  <div className="space-y-2">
                    {fishData.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-xs w-8">{item.month}</span>
                        <div className="flex-1 bg-muted rounded">
                          <div
                            className="bg-green-500 h-4 rounded"
                            style={{
                              width: `${(item.production / 450) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-xs w-8">{item.production}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
