
import { ShrimpGrowthCard } from "./ShrimpGrowthCard";
import { TunaProductionCard } from "./TunaProductionCard";

export const Production = () => {
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
          <TunaProductionCard />
        </div>
      </div>
    </section>
  );
};
