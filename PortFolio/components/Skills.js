function Skills() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const skillCategories = [
    {
      category: "Programming & Scripting",
      icon: "code",
      skills: ["Python", "JavaScript", "Java", "C", "SQL", "HTML", "CSS"]
    },
    {
      category: "Frameworks & Tools",
      icon: "layers",
      skills: ["Django REST Framework", "Flask", "React", "Node.js", "Git", "GitHub"]
    },
    {
      category: "Machine Learning & AI",
      icon: "brain",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "Generative AI", "LLM Integration"]
    },
    {
      category: "Data Analysis & Visualization",
      icon: "chart-bar",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Statistical Analysis"]
    }
  ];

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  try {
    return (
      <section 
        id="skills" 
        className="section-padding bg-gradient-to-b from-gray-900 to-gray-800 relative perspective-1000"
        data-name="skills"
        data-file="components/Skills.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive expertise across full-stack development, AI/ML, and data science
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="card-3d transform-gpu scroll-reveal"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <div className={`icon-${category.icon} text-xl text-white`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="bg-gray-700 bg-opacity-50 rounded-lg p-3 text-center text-gray-300 hover:bg-blue-500 hover:bg-opacity-20 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}
