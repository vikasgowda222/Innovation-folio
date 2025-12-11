function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  try {
    return (
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg border-b border-blue-500 border-opacity-20' 
            : 'bg-transparent'
        }`}
        data-name="navbar"
        data-file="components/Navbar.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span className="text-white">Port</span>
              <span className="gradient-text glow-pulse">Folio</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-2 font-medium transition-all duration-300 hover:text-blue-400 ${
                    activeSection === link.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                      activeSection === link.id ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </button>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1O-LCUs1mhcrk1DZifAaLciXNDjFUD52Q/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg glow-pulse flex items-center"
            >
              <div className="icon-download text-sm mr-1"></div>
              Resume
            </a>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}