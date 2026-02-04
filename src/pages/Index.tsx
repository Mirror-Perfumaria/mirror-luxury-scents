import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ShopifyFeaturedProducts } from '@/components/ShopifyFeaturedProducts';
import { BenefitsSection } from '@/components/BenefitsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ShopifyFeaturedProducts />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
