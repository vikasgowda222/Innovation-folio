function Footer() {
  try {
    return (
      <footer 
        className="bg-gray-900 border-t border-gray-800 py-8 relative"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center space-y-8">
            
            {/* Logo */}
            <div className="text-3xl font-bold">
              <span className="text-white">Port</span>
              <span className="gradient-text">Folio</span>
            </div>

            {/* Motivational Message */}
            <div className="max-w-2xl mx-auto">
              <p className="text-2xl font-bold gradient-text mb-4">
                "Dream big, code bigger, and never stop innovating! 🚀"
              </p>
              <p className="text-gray-400">
                Passionate about creating innovative AI solutions and building scalable applications that make a difference.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
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

            {/* Quick Links */}
            <div className="flex justify-center space-x-8 text-gray-400">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-blue-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-blue-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                © 2025 Vikas Gowda S. All rights reserved. | Crafted with ❤️ and code
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}