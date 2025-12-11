function Projects() {
  const projects = [
    {
      title: "SkillForge AI – Full Stack AI Mock Interview App",
      description: "Built an AI-driven mock interview platform that boosted mock interview scores by 40%, integrating LLM-based feedback, ATS resume scoring, and coding practice APIs.",
      tech: ["React", "Node.js", "Flask", "AI/ML", "Cloud Deployment"],
      github: "https://github.com/vikasgowda222/SkillForge-AI-Full-Stack-AI-Mock-Interview-App",
      highlights: ["100+ concurrent users", "<200ms response latency", "CI/CD pipelines"]
    },
    {
      title: "Flight Price Forecasting and Sentiment Classification App",
      description: "Led the development of regression and classification models for flight price forecasting (R² = 0.84) and sentiment analysis (96% accuracy).",
      tech: ["Python", "Scikit-learn", "Streamlit", "MLflow"],
      github: "https://github.com/vikasgowda222/Flight-Price-Forecasting-and-Sentiment-Classification-App",
      highlights: ["84% accuracy in price prediction", "96% sentiment accuracy", "Real-time inference"]
    },
    {
      title: "AI-Powered Data Visualization Agent with LLM Integration",
      description: "Built a natural language-driven visualization assistant using Streamlit and TogetherAI to generate dynamic charts and insights.",
      tech: ["Streamlit", "TogetherAI", "Meta-LLaMA", "DeepSeek", "Qwen"],
      github: "https://github.com/vikasgowda222/ai-powered-data-visualizer",
      highlights: ["Natural language queries", "Dynamic chart generation", "Secure E2B sandboxing"]
    },
    {
      title: "AI-Based Intelligent Power Management System",
      description: "Developing a smart automation system using OpenCV to control appliances based on human presence and motion detection.",
      tech: ["OpenCV", "Python", "IoT", "Computer Vision"],
      github: "https://github.com/vikasgowda222",
      highlights: ["25% energy savings", "Real-time control logic", "Motion detection"]
    }
  ];

  try {
    return (
      <section 
        id="projects" 
        className="section-padding bg-gray-900 relative"
        data-name="projects"
        data-file="components/Projects.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions combining AI, full-stack development, and data science
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="card-3d group cursor-pointer scroll-reveal relative overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:project-hover-glow hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="space-y-4 relative z-10">
                  <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm hover:bg-blue-500 hover:bg-opacity-40 hover:scale-110 transition-all duration-300 cursor-pointer"
                        style={{ 
                          animationDelay: `${techIndex * 0.1}s`,
                          animation: 'fadeInUp 0.5s ease-out forwards'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all duration-300 mt-4 group-hover:glow-pulse hover:scale-110 px-3 py-2 rounded-lg hover:bg-blue-500 hover:bg-opacity-10"
                  >
                    <div className="icon-github text-lg group-hover:animate-pulse"></div>
                    <span className="font-medium">View on GitHub</span>
                    <div className="icon-external-link text-sm group-hover:translate-x-1 transition-transform duration-300"></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}