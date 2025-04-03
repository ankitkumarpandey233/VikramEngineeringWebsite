export const initScrollAnimations = () => {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkIfInView() {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = windowTopPosition + windowHeight;
    
    animateElements.forEach(function(element) {
      const elementHeight = (element as HTMLElement).offsetHeight;
      const elementTopPosition = (element as HTMLElement).offsetTop;
      const elementBottomPosition = elementTopPosition + elementHeight;
      
      if (
        (elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)
      ) {
        element.classList.add('animated');
      }
    });
  }
  
  // Add CSS for animations
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    
    .animate-slide-up {
      animation: slideUp 0.5s ease-in-out;
    }
    
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
    
    .animated {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
  
  // Run on load
  checkIfInView();
  
  // Run on scroll
  window.addEventListener('scroll', checkIfInView);
  
  return () => {
    window.removeEventListener('scroll', checkIfInView);
    document.head.removeChild(style);
  };
};
