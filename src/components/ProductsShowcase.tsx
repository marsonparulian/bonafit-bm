
export const ProductsShowcase = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Product Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium selection of fresh marine products, 
            carefully harvested and processed to deliver exceptional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-8 mb-6 border-2 border-accent/20">
              <div className="text-8xl mb-4">🦐</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Premium Shrimp</h3>
              <p className="text-muted-foreground">
                Fresh, sustainably sourced shrimp available in various sizes. 
                Known for their sweet taste and firm texture, perfect for 
                restaurants and food service operations.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 mb-6 border-2 border-primary/20">
              <div className="text-8xl mb-4">🐟</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Fresh Fish</h3>
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
