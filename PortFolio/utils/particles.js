function initParticles() {
  const container = document.getElementById('particles-background');
  if (!container) return;

  // Clear existing particles
  container.innerHTML = '';

  // Create particles
  const particleCount = 100;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 3 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 5;
    
    // Styling
    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1;
      animation: float ${duration}s ease-in-out infinite ${delay}s;
    `;
    
    container.appendChild(particle);
  }

  // Add mouse interaction
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create temporary mouse particles
    if (Math.random() < 0.1) {
      createMouseParticle(mouseX, mouseY);
    }
  });
}

function createMouseParticle(x, y) {
  const container = document.getElementById('particles-background');
  if (!container) return;

  const particle = document.createElement('div');
  particle.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    width: 4px;
    height: 4px;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 2;
    animation: fadeOut 2s ease-out forwards;
  `;

  // Add fadeOut animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeOut {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(0) translateY(-50px);
      }
    }
  `;
  
  if (!document.querySelector('#particle-styles')) {
    style.id = 'particle-styles';
    document.head.appendChild(style);
  }

  container.appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 2000);
}

// Reinitialize particles on window resize
window.addEventListener('resize', () => {
  setTimeout(initParticles, 100);
});