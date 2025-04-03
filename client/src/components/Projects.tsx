import { useState } from 'react';

// Type for project category
type ProjectCategory = 'all' | 'machining' | 'fabrication' | 'design';

// Project data
const projects = [
  {
    id: 1,
    title: 'Aerospace Components',
    category: 'machining',
    description: 'Precision-machined titanium components for the aerospace industry with tolerances of ±0.005mm.',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'CNC Machining'
  },
  {
    id: 2,
    title: 'Industrial Framework',
    category: 'fabrication',
    description: 'Custom steel framework fabrication for a manufacturing facility, including installation and certification.',
    image: 'https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Fabrication'
  },
  {
    id: 3,
    title: 'Automated Systems',
    category: 'design',
    description: 'Complete design and engineering of custom automated production systems for automotive industry.',
    image: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Design'
  },
  {
    id: 4,
    title: 'Medical Devices',
    category: 'machining',
    description: 'High-precision components for medical devices requiring ISO 13485 certification and cleanroom assembly.',
    image: 'https://images.unsplash.com/photo-1605910347035-59a2b94f2061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'CNC Machining'
  },
  {
    id: 5,
    title: 'Oil & Gas Equipment',
    category: 'fabrication',
    description: 'Custom fabricated pressure vessels and piping systems for oil and gas industry with ASME certification.',
    image: 'https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Fabrication'
  },
  {
    id: 6,
    title: 'Robotic Systems',
    category: 'design',
    description: 'Design and development of custom robotic systems for warehousing and logistics applications.',
    image: 'https://images.unsplash.com/photo-1518219870542-8755099e450f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Design'
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  
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

  const filterProjects = () => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#FF7A00] font-semibold">OUR PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-[Montserrat] font-bold mt-2 mb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-[#546E7A]">Explore our diverse range of engineering projects that showcase our capabilities and technical expertise.</p>
        </div>
        
        <div className="mb-8 flex justify-center flex-wrap gap-4 animate-on-scroll">
          <button 
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeFilter === 'all' ? 'bg-[#FF7A00] text-white' : 'bg-gray-200 hover:bg-[#FF7A00] hover:text-white'}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeFilter === 'machining' ? 'bg-[#FF7A00] text-white' : 'bg-gray-200 hover:bg-[#FF7A00] hover:text-white'}`}
            onClick={() => setActiveFilter('machining')}
          >
            CNC Machining
          </button>
          <button 
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeFilter === 'fabrication' ? 'bg-[#FF7A00] text-white' : 'bg-gray-200 hover:bg-[#FF7A00] hover:text-white'}`}
            onClick={() => setActiveFilter('fabrication')}
          >
            Fabrication
          </button>
          <button 
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeFilter === 'design' ? 'bg-[#FF7A00] text-white' : 'bg-gray-200 hover:bg-[#FF7A00] hover:text-white'}`}
            onClick={() => setActiveFilter('design')}
          >
            Design
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterProjects().map((project, index) => (
            <div key={project.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="group relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/90 via-[#1A2B3C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-[#FF7A00] text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">{project.tag}</span>
                  <h3 className="text-xl font-[Montserrat] font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm hidden group-hover:block transition-all duration-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
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

export default Projects;
