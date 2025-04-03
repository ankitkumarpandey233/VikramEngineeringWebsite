import ContactForm from '@/components/forms/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#FF7A00] font-semibold">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-[Montserrat] font-bold mt-2 mb-4">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-[#546E7A]">Reach out to discuss your engineering needs or request a quote for your project.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-[Montserrat] font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="mb-8">
              <h3 className="text-2xl font-[Montserrat] font-bold mb-4">Contact Information</h3>
              <p className="text-[#546E7A] mb-6">Feel free to reach out to us through any of these channels:</p>
              
              <div className="flex items-start mb-4">
                <div className="bg-[#FF7A00]/10 rounded-full p-3 mr-4">
                  <i className="fas fa-map-marker-alt text-[#FF7A00]"></i>
                </div>
                <div>
                  <h4 className="font-[Montserrat] font-bold mb-1">Our Location</h4>
                  <p className="text-[#546E7A]">Plot No. 145, GIDC Industrial Estate, Sector 28, Gandhinagar, Gujarat 382028, India</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="bg-[#FF7A00]/10 rounded-full p-3 mr-4">
                  <i className="fas fa-phone-alt text-[#FF7A00]"></i>
                </div>
                <div>
                  <h4 className="font-[Montserrat] font-bold mb-1">Phone Number</h4>
                  <p className="text-[#546E7A]">+91 9876 543 210 (Main)</p>
                  <p className="text-[#546E7A]">+91 7890 123 456 (Support)</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="bg-[#FF7A00]/10 rounded-full p-3 mr-4">
                  <i className="fas fa-envelope text-[#FF7A00]"></i>
                </div>
                <div>
                  <h4 className="font-[Montserrat] font-bold mb-1">Email Address</h4>
                  <p className="text-[#546E7A]">info@vikramengineering.com</p>
                  <p className="text-[#546E7A]">sales@vikramengineering.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FF7A00]/10 rounded-full p-3 mr-4">
                  <i className="fas fa-clock text-[#FF7A00]"></i>
                </div>
                <div>
                  <h4 className="font-[Montserrat] font-bold mb-1">Working Hours</h4>
                  <p className="text-[#546E7A]">Monday to Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-[#546E7A]">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-[#546E7A]">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-[Montserrat] font-bold mb-4">Follow Us</h3>
              <p className="text-[#546E7A] mb-4">Stay updated with our latest projects and news:</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#FF7A00] hover:bg-[#FFB800] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="bg-[#FF7A00] hover:bg-[#FFB800] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-[#FF7A00] hover:bg-[#FFB800] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="bg-[#FF7A00] hover:bg-[#FFB800] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
