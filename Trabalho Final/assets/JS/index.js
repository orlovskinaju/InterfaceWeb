 document.addEventListener('DOMContentLoaded', function() {

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });


  const testimonialsSlider = document.getElementById('testimonialsSlider');
  const prevTestimonial = document.getElementById('prevTestimonial');
  const nextTestimonial = document.getElementById('nextTestimonial');
  let currentSlide = 0;

  function updateSlider() {
    const slideWidth = testimonialsSlider.children[0].offsetWidth;
    testimonialsSlider.scrollTo({
      left: currentSlide * (slideWidth + 32), // 32px = gap
      behavior: 'smooth'
    });
  }

  prevTestimonial.addEventListener('click', function() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  nextTestimonial.addEventListener('click', function() {
    if (currentSlide < testimonialsSlider.children.length - 1) {
      currentSlide++;
      updateSlider();
    }
  });


  const ctaForm = document.getElementById('ctaForm');
  const ctaEmail = document.getElementById('ctaEmail');
  const emailError = document.getElementById('emailError');

  ctaForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateEmail(ctaEmail.value)) {
      emailError.textContent = 'Por favor, insira um e-mail válido';
      ctaEmail.classList.add('error');
    } else {
      emailError.textContent = '';
      ctaEmail.classList.remove('error');
      alert('Obrigado por se cadastrar! Entraremos em contato em breve.');
      ctaForm.reset();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }


  const themeToggle = document.getElementById('themeToggle');

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
 
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  });

  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }


  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.benefit-card, .hero-content, .testimonial-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  document.querySelectorAll('.benefit-card, .hero-content, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  const ctaButton = document.getElementById('ctaButton');
  
  ctaButton.addEventListener('click', function() {
    document.getElementById('ctaSection').scrollIntoView({
      behavior: 'smooth'
    });
  });
});