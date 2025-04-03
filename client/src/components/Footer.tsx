import Logo from '@/components/Logo';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleFooterLinkClick = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;
    
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.pageYOffset - headerHeight,
        behavior: 'smooth'
      });
    }
  };
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-[#1A2B3C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo theme="dark" />
            </div>
            <p className="text-gray-400 mb-6">Delivering precision engineering solutions with a commitment to quality and innovation.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-[Montserrat] font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleFooterLinkClick('#services')} className="text-gray-400 hover:text-[#FF7A00] transition-colors">CNC Machining</button></li>
              <li><button onClick={() => handleFooterLinkClick('#services')} className="text-gray-400 hover:text-[#FF7A00] transition-colors">Welding & Fabrication</button></li>
              <li><button onClick={() => handleFooterLinkClick('#services')} className="text-gray-400 hover:text-[#FF7A00] transition-colors">Design & Engineering</button></li>
              <li><button onClick={() => handleFooterLinkClick('#services')} className="text-gray-400 hover:text-[#FF7A00] transition-colors">Prototype Development</button></li>
              <li><button onClick={() => handleFooterLinkClick('#services')} className="text-gray-400 hover:text-[#FF7A00] transition-colors">Quality Testing</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-[Montserrat] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleFooterLinkClick('#home')} className="text-gray-400 hover:text-[#FF7A00] transition-colors">Home</button></li>
              <li><button onClick={() => handleFooterLinkClick('#services')} className="text-gray-400 hover:text-[#FF7A00] transition-colors">Services</button></li>
              <li><button onClick={() => handleFooterLinkClick('#projects')} className="text-gray-400 hover:text-[#FF7A00] transition-colors">Projects</button></li>
              <li><button onClick={() => handleFooterLinkClick('#testimonials')} className="text-gray-400 hover:text-[#FF7A00] transition-colors">Testimonials</button></li>
              <li><button onClick={() => handleFooterLinkClick('#contact')} className="text-gray-400 hover:text-[#FF7A00] transition-colors">Contact Us</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-[Montserrat] font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to receive updates on our latest projects and industry insights.</p>
            <form className="mb-4" onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-[#FF7A00]" 
                  placeholder="Your email address"
                  required
                />
                <button type="submit" className="bg-[#FF7A00] hover:bg-[#FFB800] text-white px-4 py-2 rounded-r-md transition-colors">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Vikram Engineering Works. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#FF7A00] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-[#FF7A00] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-[#FF7A00] text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
