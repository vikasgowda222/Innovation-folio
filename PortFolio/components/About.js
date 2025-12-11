function About() {
  const [isVisible, setIsVisible] = React.useState(false);

  const education = {
    institution: "Maharaja Institute Of Technology – Mysuru",
    university: "Visvesvaraya Technological University",
    degree: "Bachelor of Engineering (B.E.) in Computer Science",
    period: "Dec 2022 – Jun 2026",
    cgpa: "9.02"
  };

  const achievements = [
    "Academic Excellence for maintaining a 9.0+ CGPA across semesters",
    "Runner-Up in a national-level hackathon for building a real-time technical solution", 
    "Automated data collection workflows, reducing task time by 60%",
    "Developed Python applications enhancing workflow efficiency by 30%",
    "Executed 5+ Python coding missions with 100% successful deployment"
  ];

  const internship = {
    title: "Python Programming Intern",
    company: "Codingmissions IT Solutions",
    period: "Mar 2025 – Apr 2025",
    description: "Developed Python applications and automation scripts, implementing OOP modules and reducing redundant code by 25%.",
    certificate: "https://drive.google.com/file/d/1aeUD80kKzqdS5rEIcfhZL7IEpzsViomo/view?usp=drivesdk"
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  try {
    return (
      <section 
        id="about" 
        className="section-padding bg-gray-900 relative"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about creating innovative AI solutions and building scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Professional Summary */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Computer Science Engineering graduate with expertise in developing AI-powered applications 
                and scalable machine learning pipelines. Skilled in Full-Stack Development with proficiency 
                in Python, Java, C, JavaScript, and SQL.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Experienced in frameworks such as Django, Flask, and OpenCV. Familiar with RESTful/GraphQL APIs, 
                microservices, and cloud-native concepts, with hands-on experience implementing CI/CD pipelines, 
                Agile/Scrum methodologies, and version control using Git.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Strong background in data visualization, predictive analytics, and collaborative, 
                cross-functional projects with a focus on innovation and efficiency.
              </p>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-8">
              
              {/* Education */}
              <div className="card-3d">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Education</h3>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-blue-400">{education.degree}</h4>
                  <p className="text-gray-300">{education.institution}</p>
                  <p className="text-gray-400">{education.university}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">{education.period}</span>
                    <span className="text-green-400 font-bold">CGPA: {education.cgpa}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="card-3d">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Key Achievements</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internship Experience */}
              <div className="card-3d">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Experience</h3>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-blue-400">{internship.title}</h4>
                  <p className="text-gray-300">{internship.company}</p>
                  <p className="text-gray-400 text-sm">{internship.period}</p>
                  <p className="text-gray-300 leading-relaxed">{internship.description}</p>
                  <a
                    href={internship.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <div className="icon-award text-sm"></div>
                    <span className="text-sm">View Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}