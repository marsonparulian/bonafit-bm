import { Button } from "@/components/ui/button";
import { ArrowDown, FishIcon } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-ocean-gradient overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <FishIcon
          className="absolute text-white/5 h-64 w-64 top-10 left-[-5rem] transform rotate-[-20deg]"
          strokeWidth={1}
        />
        <FishIcon
          className="absolute text-white/5 h-48 w-48 top-1/2 right-[-4rem] transform rotate-[15deg]"
          strokeWidth={1}
        />
        <FishIcon
          className="absolute text-white/5 h-32 w-32 bottom-20 left-[20%] transform rotate-[5deg]"
          strokeWidth={1}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bonafit Bamaraja Marine
            <small>Company Profile</small>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Premium and Sustainable Aquaculture Producer - Delivering the fresh
            and high quality products from our finest ponds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="text-lg px-8 py-3 bg-white text-primary hover:bg-white/90"
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
            >
              View Products
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-white/80" />
      </div>
    </section>
  );
};
