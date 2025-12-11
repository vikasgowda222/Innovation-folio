function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  try {
    return (
      <section 
        id="contact" 
        className="section-padding bg-gray-900 relative"
        data-name="contact"
        data-file="components/Contact.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's create something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="icon-mail text-xl text-blue-400"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400">vikasgowdas222@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="icon-phone text-xl text-blue-400"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-400">+91 9380877917</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="icon-map-pin text-xl text-blue-400"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-400">Mysuru, Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
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
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-3d">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white placeholder-gray-400 transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white placeholder-gray-400 transition-all duration-300"
                />
                
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white placeholder-gray-400 resize-none transition-all duration-300"
                ></textarea>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}