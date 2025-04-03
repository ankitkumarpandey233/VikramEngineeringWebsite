import { useEffect } from 'react';

const HeroBanner = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#1A2B3C] overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Engineering workshop with machinery" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B3C] to-[#1A2B3C]/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[Montserrat] font-bold text-white leading-tight mb-4">
              Engineering <span className="text-[#FF7A00]">Excellence</span> in Every Detail
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Precision engineering solutions for the most demanding industrial applications. We transform concepts into reality with expert craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  const servicesSection = document.querySelector('#services');
                  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                  if (servicesSection) {
                    window.scrollTo({
                      top: servicesSection.getBoundingClientRect().top + window.pageYOffset - headerHeight,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-[#FF7A00] hover:bg-[#FFB800] text-white px-6 py-3 rounded-md font-semibold transition-colors inline-flex items-center"
              >
                Our Services
                <i className="fas fa-chevron-right ml-2"></i>
              </button>
              <button 
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-transparent border-2 border-white text-white hover:border-[#FFB800] hover:text-[#FFB800] px-6 py-3 rounded-md font-semibold transition-colors inline-flex items-center"
              >
                Get a Quote
                <i className="fas fa-file-invoice ml-2"></i>
              </button>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-slide-up">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="CNC machining in progress" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-[#FF7A00] text-white px-3 py-1 rounded-full text-sm font-semibold">Precision CNC Machining</span>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#FFB800] flex items-center justify-center shadow-lg border-4 border-white animate-pulse">
              <div className="text-center">
                <span className="block text-sm font-semibold">25+ Years</span>
                <span className="block text-xs">Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#1A2B3C]/40 backdrop-blur-sm p-5 rounded-lg border border-gray-700 animate-on-scroll">
            <div className="text-[#FF7A00] text-3xl mb-2">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-white font-[Montserrat] font-semibold mb-1">Precision</h3>
            <p className="text-gray-300 text-sm">Accuracy down to the micron level</p>
          </div>
          
          <div className="bg-[#1A2B3C]/40 backdrop-blur-sm p-5 rounded-lg border border-gray-700 animate-on-scroll">
            <div className="text-[#FF7A00] text-3xl mb-2">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="text-white font-[Montserrat] font-semibold mb-1">Innovation</h3>
            <p className="text-gray-300 text-sm">Cutting-edge solutions for complex challenges</p>
          </div>
          
          <div className="bg-[#1A2B3C]/40 backdrop-blur-sm p-5 rounded-lg border border-gray-700 animate-on-scroll">
            <div className="text-[#FF7A00] text-3xl mb-2">
              <i className="fas fa-medal"></i>
            </div>
            <h3 className="text-white font-[Montserrat] font-semibold mb-1">Quality</h3>
            <p className="text-gray-300 text-sm">ISO certified production standards</p>
          </div>
          
          <div className="bg-[#1A2B3C]/40 backdrop-blur-sm p-5 rounded-lg border border-gray-700 animate-on-scroll">
            <div className="text-[#FF7A00] text-3xl mb-2">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-white font-[Montserrat] font-semibold mb-1">Reliability</h3>
            <p className="text-gray-300 text-sm">On-time delivery and consistent results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
