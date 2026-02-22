import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import ThemeCustomization from "@/components/ThemeCustomization";
import RichComponents from "@/components/RichComponents";
import DesignFramework from "@/components/DesignFramework";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
        <ThemeCustomization />
        <RichComponents />
        <DesignFramework />
      </main>
      <Footer />
    </>
  );
}
