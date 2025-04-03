import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Logo from '@/components/Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, navigate] = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    if (sectionId.startsWith('#')) {
      const section = document.querySelector(sectionId);
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;
      
      if (section) {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.pageYOffset - headerHeight,
          behavior: 'smooth'
        });
      }
    } else {
      navigate(sectionId);
    }
  };

  return (
    <header className={`fixed w-full bg-white/95 shadow-md z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo theme="light" />
        
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleNavClick('#home')} className="text-[#1A2B3C] hover:text-[#FF7A00] font-semibold transition-colors">Home</button>
          <button onClick={() => handleNavClick('#services')} className="text-[#1A2B3C] hover:text-[#FF7A00] font-semibold transition-colors">Services</button>
          <button onClick={() => handleNavClick('#projects')} className="text-[#1A2B3C] hover:text-[#FF7A00] font-semibold transition-colors">Projects</button>
          <button onClick={() => handleNavClick('#testimonials')} className="text-[#1A2B3C] hover:text-[#FF7A00] font-semibold transition-colors">Testimonials</button>
          <button onClick={() => handleNavClick('#contact')} className="bg-[#FF7A00] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FFB800] transition-colors">Contact Us</button>
        </nav>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-[#1A2B3C] hover:text-[#FF7A00]"
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <button onClick={() => handleNavClick('#home')} className="text-[#1A2B3C] hover:text-[#FF7A00] font-semibold py-2 border-b border-gray-100 text-left">Home</button>
          <button onClick={() => handleNavClick('#services')} className="text-[#1A2B3C] hover:text-[#FF7A00] font-semibold py-2 border-b border-gray-100 text-left">Services</button>
          <button onClick={() => handleNavClick('#projects')} className="text-[#1A2B3C] hover:text-[#FF7A00] font-semibold py-2 border-b border-gray-100 text-left">Projects</button>
          <button onClick={() => handleNavClick('#testimonials')} className="text-[#1A2B3C] hover:text-[#FF7A00] font-semibold py-2 border-b border-gray-100 text-left">Testimonials</button>
          <button onClick={() => handleNavClick('#contact')} className="bg-[#FF7A00] text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-[#FFB800] transition-colors">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
