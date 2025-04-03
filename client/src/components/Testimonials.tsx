import { useState, useRef, useEffect } from 'react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Rahul Mehta',
    position: 'Director, AeroTech Solutions',
    content: '"Vikram Engineering delivered exactly what we needed for our aerospace project. The precision of their machining work was exceptional, and they met our tight deadlines without compromising quality."',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    date: 'June 2023'
  },
  {
    id: 2,
    name: 'Sanjana Patel',
    position: 'COO, Gujarat Petrochemicals',
    content: '"We\'ve worked with many engineering firms, but Vikram Engineering stands out for their attention to detail. Their welding work on our pressure vessels was flawless, and their team was responsive throughout the entire project."',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    date: 'April 2023'
  },
  {
    id: 3,
    name: 'Vikash Singh',
    position: 'CTO, AutomateX',
    content: '"When we needed custom robotic components for our automation project, Vikram Engineering not only delivered high-quality parts but also provided valuable design input that improved the final product. Their engineering expertise is truly impressive."',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    rating: 4.5,
    date: 'March 2023'
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
  };
  
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

  // Calculate translate value based on current slide and device type
  const getTranslateValue = () => {
    return isMobile ? -currentSlide * 100 : -currentSlide * 33.333;
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#FF7A00] font-semibold">CLIENT FEEDBACK</span>
          <h2 className="text-3xl md:text-4xl font-[Montserrat] font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-[#546E7A]">Hear from businesses that have partnered with us for their engineering needs.</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(${getTranslateValue()}%)` }}
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className={`min-w-full md:min-w-[33.333%] px-4 animate-on-scroll`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                    <div className="flex items-center mb-4">
                      <div className="text-[#FF7A00]">
                        {renderStars(testimonial.rating)}
                      </div>
                      <div className="ml-auto text-gray-400 text-sm">{testimonial.date}</div>
                    </div>
                    <p className="text-[#546E7A] italic mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                        <img src={testimonial.avatar} alt={`${testimonial.name} portrait`} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-[Montserrat] font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-[#546E7A]">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-2 md:-left-5 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#FF7A00] hover:text-[#FFB800] transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-2 md:-right-5 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#FF7A00] hover:text-[#FFB800] transition-colors z-10"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <button 
            onClick={handleContactClick}
            className="border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center mx-auto"
          >
            Become Our Next Success Story
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
