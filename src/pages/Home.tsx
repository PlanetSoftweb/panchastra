import HeroSection from '../components/home/HeroSection';
import PartnersSection from '../components/home/PartnersSection';
import VisionSection from '../components/home/VisionSection';
import ProductsShowcase from '../components/home/ProductsShowcase';
import FeaturesSection from '../components/home/FeaturesSection';
import TechnologyStack from '../components/home/TechnologyStack';

function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <PartnersSection />
      <VisionSection />
      <ProductsShowcase />
      <FeaturesSection />
      <TechnologyStack />
    </div>
  );
}

export default Home;