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
                Vaname crustaceans, also known as
                <em>Litopenaeus vannamei</em> or whiteleg shrimp, are one of the
                most popular types of farmed shrimp worldwide. They are
                sometimes referred to as
                <em>Pacific white shrimp</em> or
                <em>king prawn</em>
                in various markets.
              </p>

              <p className="text-muted-foreground">
                People like Vaname shrimp because of their mild flavor, firm
                texture, and versatility in many dishes, from grilled skewers to
                stir-fries. They are also fast-growing and relatively easy to
                farm, making them more affordable and widely available compared
                to other shrimp species. In addition, their pale color and
                consistent size make them visually appealing for both home cooks
                and professional chefs. Their popularity continues to rise as
                demand for sustainable and protein-rich seafood options grows.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8 mb-6 border-2 border-primary/20">
              <div className="text-8xl mb-4">🐟</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Mackarel Tuna Fish
              </h3>
              <p className="text-muted-foreground">
                {/* A wide variety of fresh fish including tuna, salmon, and local
                species. All fish are caught using sustainable methods and
                processed immediately to maintain peak freshness. */}
                Mackerel tuna fish, also known as <em>Euthynnus affinis</em>
                or <em> kawakawa</em>, is a fast-swimming species found in
                tropical and subtropical waters. It is sometimes called{" "}
                <em>little tuna</em> or <em>false albacore</em> in different
                regions.
              </p>

              <p className="text-muted-foreground">
                People enjoy mackerel tuna for its rich, flavorful meat that
                works well in grilling, curries, or canned products. It is a
                good source of protein and omega-3 fatty acids, making it a
                healthy choice for many diets. This fish is also popular among
                local fishermen because it is relatively abundant and easy to
                catch. Its bold taste and firm texture make it a favorite in
                many coastal cuisines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
