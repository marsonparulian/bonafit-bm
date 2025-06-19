export const ProductsShowcase = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Product Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium selection of fresh marine products, carefully
            harvested and processed to deliver exceptional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-6 border-2 border-primary/20">
              <div className="text-8xl mb-4">🦐</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Vaname crustaceans
              </h3>
              <p className="text-muted-foreground">
                {/* Fresh, sustainably sourced shrimp available in various sizes.
                Known for their sweet taste and firm texture, perfect for
                restaurants and food service operations. */}
                <p>
                  Vaname crustaceans, also known as{" "}
                  <strong>Litopenaeus vannamei</strong> or whiteleg shrimp, are
                  one of the most popular types of farmed shrimp worldwide. They
                  are sometimes referred to as{" "}
                  <strong>Pacific white shrimp</strong> or
                  <strong>king prawn</strong>
                  in various markets.
                </p>

                <p>
                  People like Vaname shrimp because of their mild flavor, firm
                  texture, and versatility in many dishes, from grilled skewers
                  to stir-fries. They are also fast-growing and relatively easy
                  to farm, making them more affordable and widely available
                  compared to other shrimp species. In addition, their pale
                  color and consistent size make them visually appealing for
                  both home cooks and professional chefs. Their popularity
                  continues to rise as demand for sustainable and protein-rich
                  seafood options grows.
                </p>
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8 mb-6 border-2 border-primary/20">
              <div className="text-8xl mb-4">🐟</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Fresh Fish
              </h3>
              <p className="text-muted-foreground">
                A wide variety of fresh fish including tuna, salmon, and local
                species. All fish are caught using sustainable methods and
                processed immediately to maintain peak freshness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
