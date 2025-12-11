function Certificates() {
  const [selectedCert, setSelectedCert] = React.useState(null);

  const certificates = [
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      description: "Comprehensive course covering data analysis techniques using Python",
      link: "https://courses.cognitiveclass.ai/certificates/0a318a7ced874c27b6da0706a7fb95ef"
    },
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      description: "Digital marketing analytics and web analytics expertise",
      link: "https://skillshop.credential.net/4d523ff0-d3b5-4055-b8ec-e75aa90dbcff#acc.Zme7NRjJ"
    },
    {
      title: "Software Engineering Virtual Experience",
      issuer: "Accenture",
      description: "Hands-on software engineering practices and methodologies",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_XXuZM7oX7o8WhDDwQ_1752342120005_completion_certificate.pdf"
    },
    {
      title: "Full Stack Skill Certification",
      issuer: "OneRoadmap.io",
      description: "Complete full-stack development certification program",
      link: "https://oneroadmap.io/skills/fs/certificate/CERT-FC9656C4"
    },
    {
      title: "Python Pro Bootcamp",
      issuer: "Udemy",
      description: "Advanced Python programming and development bootcamp",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d801af64-cc43-4ef5-a99a-9b6f8acf684a.pdf"
    }
  ];

  try {
    return (
      <section 
        id="certificates" 
        className="section-padding bg-gradient-to-b from-gray-800 to-gray-900 relative"
        data-name="certificates"
        data-file="components/Certificates.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Certifications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional certifications validating expertise across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="card-3d cursor-pointer group scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <div className="icon-award text-2xl text-white"></div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-purple-400 font-medium">{cert.issuer}</p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm">View Certificate</span>
                    <div className="icon-external-link text-sm"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate Modal */}
          {selectedCert && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedCert(null)}
            >
              <div 
                className="bg-gray-800 rounded-xl p-6 max-w-md w-full"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-blue-400">{selectedCert.title}</h3>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <div className="icon-x text-xl"></div>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <p className="text-purple-400 font-medium">Issued by: {selectedCert.issuer}</p>
                  <p className="text-gray-300">{selectedCert.description}</p>
                  
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center inline-block"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Certificates component error:', error);
    return null;
  }
}