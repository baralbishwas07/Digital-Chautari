import HeroSection from "@/components/sections/HeroSection";
import FeatureStrip from "@/components/sections/FeatureStrip";
import WhoWeAre from "@/components/sections/WhoWeAre";
import DarkStatsBanner from "@/components/sections/DarkStatsBanner";
import ProductsTeaser from "@/components/sections/ProductsTeaser";
import SectorsSection from "@/components/sections/SectorsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogTeaser from "@/components/sections/BlogTeaser";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <FeatureStrip />
      <WhoWeAre />
      <DarkStatsBanner />
      <ProductsTeaser />
      <SectorsSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogTeaser />
      <ClosingCTA />
    </main>
  );
}
