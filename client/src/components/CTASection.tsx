import QuickInquiryForm from '@/components/forms/QuickInquiryForm';

const CTASection = () => {
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
    <section className="py-16 md:py-24 bg-[#1A2B3C] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/30 to-[#FFB800]/30 mix-blend-multiply"></div>
        <img 
          src="https://images.unsplash.com/photo-1581093458791-9d23598da8e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Engineering workshop background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-[Montserrat] font-bold mb-4">Ready to Transform Your Engineering Project?</h2>
            <p className="text-gray-300 mb-8">Our team of expert engineers and state-of-the-art facilities are ready to bring your vision to life. Contact us today to discuss your requirements and get a customized quote.</p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleContactClick}
                className="bg-[#FF7A00] hover:bg-[#FFB800] text-white px-6 py-3 rounded-md font-semibold transition-colors inline-flex items-center"
              >
                Contact Us Now
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <a 
                href="tel:+919876543210" 
                className="bg-transparent border-2 border-white text-white hover:border-[#FFB800] hover:text-[#FFB800] px-6 py-3 rounded-md font-semibold transition-colors inline-flex items-center"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                Call +91 9876 543 210
              </a>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-2xl font-[Montserrat] font-bold mb-4">Quick Inquiry</h3>
              <QuickInquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
