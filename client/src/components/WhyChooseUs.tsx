const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1A2B3C] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#FFB800] font-semibold">OUR ADVANTAGES</span>
          <h2 className="text-3xl md:text-4xl font-[Montserrat] font-bold mt-2 mb-4">Why Choose Vikram Engineering</h2>
          <p className="max-w-2xl mx-auto text-gray-300">We combine technical expertise, state-of-the-art machinery, and a commitment to excellence to deliver superior engineering solutions.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="animate-on-scroll">
            <div className="relative rounded-xl overflow-hidden h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Precision engineering team at work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/90 via-[#1A2B3C]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-[#FF7A00] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <i className="fas fa-star text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-[Montserrat] font-bold">Industry Recognition</h3>
                    <p className="text-gray-300 text-sm">Award-winning engineering excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 animate-on-scroll">
            <div className="flex items-start">
              <div className="bg-[#FF7A00]/20 rounded-lg p-3 mr-4">
                <i className="fas fa-cog text-[#FF7A00] text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-[Montserrat] font-bold mb-2">Advanced Technology</h3>
                <p className="text-gray-300">Our facility is equipped with the latest machinery and technology to ensure precision and efficiency in every project.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#FFB800]/20 rounded-lg p-3 mr-4">
                <i className="fas fa-users text-[#FFB800] text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-[Montserrat] font-bold mb-2">Expert Team</h3>
                <p className="text-gray-300">Our engineers and technicians bring decades of experience and specialized knowledge to every challenge.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#FF7A00]/20 rounded-lg p-3 mr-4">
                <i className="fas fa-certificate text-[#FF7A00] text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-[Montserrat] font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-300">Rigorous quality control processes ensure that every component meets or exceeds industry standards.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#FFB800]/20 rounded-lg p-3 mr-4">
                <i className="fas fa-bolt text-[#FFB800] text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-[Montserrat] font-bold mb-2">Fast Turnaround</h3>
                <p className="text-gray-300">Our efficient workflows and dedicated resources enable us to deliver projects on time, every time.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#1A2B3C]/80 border border-gray-700 p-6 rounded-lg text-center animate-on-scroll">
            <div className="text-4xl font-[Montserrat] font-bold text-[#FF7A00] mb-2">25+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          
          <div className="bg-[#1A2B3C]/80 border border-gray-700 p-6 rounded-lg text-center animate-on-scroll">
            <div className="text-4xl font-[Montserrat] font-bold text-[#FFB800] mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          
          <div className="bg-[#1A2B3C]/80 border border-gray-700 p-6 rounded-lg text-center animate-on-scroll">
            <div className="text-4xl font-[Montserrat] font-bold text-[#FF7A00] mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          
          <div className="bg-[#1A2B3C]/80 border border-gray-700 p-6 rounded-lg text-center animate-on-scroll">
            <div className="text-4xl font-[Montserrat] font-bold text-[#FFB800] mb-2">50+</div>
            <div className="text-gray-300">Industry Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
