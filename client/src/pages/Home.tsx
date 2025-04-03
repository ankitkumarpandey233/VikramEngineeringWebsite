import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { initScrollAnimations } from '@/lib/animations';

const Home = () => {
  // Initialize scroll animations
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="font-[Open_Sans] text-[#1A2B3C] bg-[#F9F9F9]">
      <Header />
      <main>
        <HeroBanner />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
