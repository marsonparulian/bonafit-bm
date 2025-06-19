
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CompanyHistory } from "@/components/CompanyHistory";
import { Facility } from "@/components/Facility";
import { VisionHero } from "@/components/VisionHero";
import { VisionList } from "@/components/VisionList";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { Production } from "@/components/Production";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { ThankYou } from "@/components/ThankYou";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <CompanyHistory />
      <Facility />
      <VisionHero />
      <VisionList />
      <ProductsShowcase />
      <Production />
      <Team />
      <Contact />
      <ThankYou />
      <Footer />
    </div>
  );
};

export default Index;
