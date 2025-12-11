function Hero() {
  const [currentRole, setCurrentRole] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  
  const roles = [
    'Full-Stack Developer',
    'AI/ML Engineer', 
    'Generative AI Enthusiast'
  ];

  React.useEffect(() => {
    const currentRoleText = roles[currentRole];
    const shouldDelete = isDeleting;
    
    if (!shouldDelete && displayText === currentRoleText) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    
    if (shouldDelete && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (shouldDelete) {
          return currentRoleText.substring(0, prev.length - 1);
        }
        return currentRoleText.substring(0, prev.length + 1);
      });
    }, shouldDelete ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentRole, displayText, isDeleting, roles]);

  try {
    return (
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Avatar Section */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                {/* Rotating border */}
                <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rotate-border glow-pulse"></div>
                
                {/* Avatar container */}
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-2 m-0 rotate-avatar">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-6xl font-bold text-white relative overflow-hidden shadow-2xl">
                    <span className="gradient-text z-10 relative avatar-glow">VGS</span>
                    
                    {/* Floating particles around avatar */}
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="particle absolute"
                        style={{
                          width: Math.random() * 3 + 1 + 'px',
                          height: Math.random() * 3 + 1 + 'px',
                          left: Math.random() * 100 + '%',
                          top: Math.random() * 100 + '%',
                          animationDelay: Math.random() * 6 + 's',
                          animationDuration: (Math.random() * 3 + 4) + 's'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left space-y-6">
              <div className="space-y-2 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
                <h2 className="text-2xl text-blue-400 font-medium">Hello, I'm</h2>
                <h1 className="text-5xl md:text-6xl font-bold gradient-text">
                  Vikas Gowda S
                </h1>
              </div>

              <div className="h-16 flex items-center justify-center md:justify-start opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
                <h3 className="text-2xl md:text-3xl text-gray-300">
                  I'm a <span className="text-blue-400 font-semibold">{displayText}</span>
                  <span className="animate-pulse">|</span>
                </h3>
              </div>

              <p className="text-lg text-gray-400 max-w-2xl opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
                Computer Science Engineering graduate with expertise in developing AI-powered applications and scalable machine learning pipelines. 
                Passionate about creating innovative solutions that bridge technology and real-world impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary transform hover:scale-105 transition-all duration-300"
                >
                  Hire Me
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline transform hover:scale-105 transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-6 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
                <a 
                  href="https://github.com/vikasgowda222" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <div className="icon-github text-xl"></div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/vikas-gowda-s-857591248" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <div className="icon-linkedin text-xl"></div>
                </a>
                <a 
                  href="mailto:vikasgowdas222@gmail.com"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <div className="icon-mail text-xl"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}