import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FeaturedSaunas from "@/components/FeaturedSaunas";
import HostCTA from "@/components/HostCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Collections />
      <FeaturedSaunas />
      <HostCTA />
      <Footer />
    </main>
  );
};

export default Index;
