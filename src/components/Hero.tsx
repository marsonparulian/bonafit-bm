
import { Button } from "@/components/ui/button";
import { ArrowDown, FishIcon, Ship } from "lucide-react";
export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-ocean-gradient overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FishIcon className="absolute text-white/5 h-64 w-64 top-10 left-[-5rem] transform rotate-[-20deg]" strokeWidth={1} />
        <FishIcon className="absolute text-white/5 h-48 w-48 top-1/2 right-[-4rem] transform rotate-[15deg]" strokeWidth={1} />
        <FishIcon className="absolute text-white/5 h-32 w-32 bottom-20 left-[20%] transform rotate-[5deg]" strokeWidth={1} />
        <Ship className="absolute text-white/5 h-24 w-24 top-20 right-[25%] transform rotate-[-10deg]" strokeWidth={1} />
        <Ship className="absolute text-white/5 h-80 w-80 bottom-[-8rem] right-[10%] transform rotate-[25deg]" strokeWidth={1} />
        <Ship className="absolute text-white/5 h-32 w-32 top-1/3 left-[10%] transform rotate-[10deg]" strokeWidth={1} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 my-[112px]">
            Bonafit Bamaraja Marine
            <br />
            <small className="text-2xl md:text-4xl font-normal">
              Company Profile
            </small>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mt-4 mb-8 max-w-3xl mx-auto">
            Premium and Sustainable Aquaculture Producer - Delivering the fresh
            and high quality products from our finest ponds.
          </p>
          <p className="text-lg md:text-xl text-white/70 mb-8 font-light italic">
            Bali, Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection("about")} className="text-lg px-8 py-3 bg-white text-primary hover:bg-white/90">
              Learn More
            </Button>
            <Button size="lg" onClick={() => scrollToSection("products")} className="text-lg px-8 py-3 bg-white text-primary hover:bg-white/90">
              View Products
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-white/80" />
      </div>
    </section>;
};
