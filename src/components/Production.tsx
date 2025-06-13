
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Production = () => {
  const shrimpData = [
    { month: 'Jan', production: 400 },
    { month: 'Feb', production: 450 },
    { month: 'Mar', production: 500 },
    { month: 'Apr', production: 480 },
    { month: 'May', production: 520 },
    { month: 'Jun', production: 600 }
  ];

  const fishData = [
    { month: 'Jan', production: 300 },
    { month: 'Feb', production: 350 },
    { month: 'Mar', production: 400 },
    { month: 'Apr', production: 380 },
    { month: 'May', production: 420 },
    { month: 'Jun', production: 450 }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Production
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monthly production capacity and distribution of our main marine products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shrimp Production */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-3xl">🦐</span>
                Shrimp Production
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Product Details:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• White Leg Shrimp (Litopenaeus vannamei)</li>
                    <li>• Sizes: 16/20, 21/25, 26/30, 31/40</li>
                    <li>• Head-on, Headless, PDTO</li>
                    <li>• Fresh & Frozen options</li>
                    <li>• Monthly capacity: 500+ tons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Production Chart (Tons):</h4>
                  <div className="space-y-2">
                    {shrimpData.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-xs w-8">{item.month}</span>
                        <div className="flex-1 bg-muted rounded">
                          <div 
                            className="bg-blue-500 h-4 rounded"
                            style={{width: `${(item.production / 600) * 100}%`}}
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

          {/* Fish Production */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-3xl">🐟</span>
                Fish Production
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Product Details:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Tuna (Yellowfin, Skipjack)</li>
                    <li>• Snapper (Red, Crimson)</li>
                    <li>• Grouper varieties</li>
                    <li>• Whole fish & fillets</li>
                    <li>• Monthly capacity: 450+ tons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Production Chart (Tons):</h4>
                  <div className="space-y-2">
                    {fishData.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-xs w-8">{item.month}</span>
                        <div className="flex-1 bg-muted rounded">
                          <div 
                            className="bg-green-500 h-4 rounded"
                            style={{width: `${(item.production / 450) * 100}%`}}
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
