import { useRef } from 'react';

const Services = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    if (contactSection) {
      window.scrollTo({
        top: contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#FF7A00] font-semibold">OUR SPECIALIZATION</span>
          <h2 className="text-3xl md:text-4xl font-[Montserrat] font-bold mt-2 mb-4">Engineering Services</h2>
          <p className="max-w-2xl mx-auto text-[#546E7A]">We offer comprehensive engineering solutions for various industries, combining technical expertise with state-of-the-art equipment.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* CNC Machining Service */}
          <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl animate-on-scroll">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1612986023555-33109315e94d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="CNC Machining" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#FF7A00] text-white px-3 py-1 rounded-full text-sm font-semibold">Core Service</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-[Montserrat] font-bold mb-3 flex items-center">
                <i className="fas fa-tools text-[#FF7A00] mr-2"></i>
                CNC Machining
              </h3>
              <p className="text-[#546E7A] mb-4">Precision manufacturing using computer-controlled equipment for complex parts with tight tolerances.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#FF7A00] mt-1 mr-2"></i>
                  <span>5-axis CNC machining capabilities</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#FF7A00] mt-1 mr-2"></i>
                  <span>Prototype to production quantities</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#FF7A00] mt-1 mr-2"></i>
                  <span>Tolerances up to ±0.001mm</span>
                </li>
              </ul>
              <button 
                onClick={handleContactClick}
                className="inline-flex items-center text-[#FF7A00] hover:text-[#FFB800] font-semibold transition-colors"
              >
                Request Service
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
          
          {/* Welding & Fabrication Service */}
          <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl animate-on-scroll">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1533667586627-9f5ddbd42539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Welding and Fabrication" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#FF7A00] text-white px-3 py-1 rounded-full text-sm font-semibold">Core Service</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-[Montserrat] font-bold mb-3 flex items-center">
                <i className="fas fa-fire text-[#FF7A00] mr-2"></i>
                Welding & Fabrication
              </h3>
              <p className="text-[#546E7A] mb-4">Expert welding and metal fabrication services for custom components and structural assemblies.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#FF7A00] mt-1 mr-2"></i>
                  <span>TIG, MIG and arc welding expertise</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#FF7A00] mt-1 mr-2"></i>
                  <span>Custom metal fabrication solutions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#FF7A00] mt-1 mr-2"></i>
                  <span>Certified welders for critical applications</span>
                </li>
              </ul>
              <button 
                onClick={handleContactClick}
                className="inline-flex items-center text-[#FF7A00] hover:text-[#FFB800] font-semibold transition-colors"
              >
                Request Service
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
          
          {/* Design & Engineering Service */}
          <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl animate-on-scroll">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Design and Engineering" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#FFB800] text-white px-3 py-1 rounded-full text-sm font-semibold">Support Service</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-[Montserrat] font-bold mb-3 flex items-center">
                <i className="fas fa-drafting-compass text-[#FF7A00] mr-2"></i>
                Design & Engineering
              </h3>
              <p className="text-[#546E7A] mb-4">Comprehensive design and engineering services to develop your concepts into manufacturable products.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#FF7A00] mt-1 mr-2"></i>
                  <span>3D CAD design and modeling</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#FF7A00] mt-1 mr-2"></i>
                  <span>Reverse engineering capabilities</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#FF7A00] mt-1 mr-2"></i>
                  <span>Design for Manufacturing (DFM)</span>
                </li>
              </ul>
              <button 
                onClick={handleContactClick}
                className="inline-flex items-center text-[#FF7A00] hover:text-[#FFB800] font-semibold transition-colors"
              >
                Request Service
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <button 
            onClick={handleContactClick}
            className="bg-[#FF7A00] hover:bg-[#FFB800] text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center mx-auto"
          >
            Discuss Your Project
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
