function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  function createFloatingShapes() {
    const colors = [
      'rgba(106, 27, 154, 0.1)',
      'rgba(233, 30, 99, 0.1)',
      'rgba(0, 188, 212, 0.1)'
    ];
  
    for (let i = 0; i < 5; i++) {
      const shape = document.createElement('div');
      shape.className = 'floating-shape';
      const size = Math.random() * 150 + 50;
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      shape.style.background = colors[Math.floor(Math.random() * colors.length)];
      shape.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(shape);
    }
  }
  
  function createParticles() {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 5 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = Math.random();
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(particle);
    }
  }
  
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    initScrollAnimations();
    createFloatingShapes();
    createParticles();
    
    // Initialize skill bars animation
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const level = bar.querySelector('.skill-level');
        const width = level.style.width;
        level.style.width = '0';
        setTimeout(() => {
            level.style.width = width;
        }, 100);
    });

    // Connect boxes to particle system
    const boxes = document.querySelectorAll('.sentence-box, .project-card');
    boxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(p => {
          p.style.animationDuration = `${Math.random() * 2 + 1}s`;
          p.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
        });
      });
    });
  
    document.addEventListener('mousemove', (e) => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => {
        const x = e.clientX;
        const y = e.clientY;
        particle.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`;
      });
    });
  });
  
function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitBtn = form.querySelector('.submit-btn');
  
  // Add loading state
  submitBtn.innerHTML = '<span>Sending...</span>';
  submitBtn.disabled = true;
  
  // Simulate API call with timeout
  setTimeout(() => {
    // Show success animation
    submitBtn.innerHTML = '<span>Sent!</span><div class="submit-icon"><svg viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg></div>';
    
    // Create celebration particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 8 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;
      particle.style.animationDuration = `${Math.random() * 3 + 1}s`;
      document.querySelector('.contact-container').appendChild(particle);
      
      // Remove particles after animation
      setTimeout(() => {
        particle.remove();
      }, 3000);
    }
    
    // Reset form after delay
    setTimeout(() => {
      form.reset();
      submitBtn.innerHTML = '<span>Send Message</span><div class="submit-icon"><svg viewBox="0 0 24 24"><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/></svg></div>';
      submitBtn.disabled = false;
    }, 2000);
  }, 1500);
}
