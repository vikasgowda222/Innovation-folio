function Stats() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [counts, setCounts] = React.useState({ projects: 0, technologies: 0, hackathons: 0, cgpa: 0 });

  const stats = [
    { id: 'projects', label: 'Projects Completed', target: 10, suffix: '+', icon: 'code' },
    { id: 'technologies', label: 'Technologies Mastered', target: 10, suffix: '+', icon: 'cpu' },
    { id: 'hackathons', label: 'Hackathon Wins', target: 2, suffix: '+', icon: 'trophy' },
    { id: 'cgpa', label: 'CGPA Academic Excellence', target: 9.02, suffix: '', icon: 'graduation-cap' }
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    stats.forEach(stat => {
      let current = 0;
      const increment = stat.target / 100;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        
        setCounts(prev => ({
          ...prev,
          [stat.id]: stat.id === 'cgpa' ? current.toFixed(2) : Math.floor(current)
        }));
      }, 20);
    });
  }, [isVisible]);

  try {
    return (
      <section 
        id="stats-section"
        className="section-padding bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden"
        data-name="stats"
        data-file="components/Stats.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="text-center card-3d transform-gpu scroll-reveal"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center glow-pulse">
                  <div className={`icon-${stat.icon} text-2xl text-white`}></div>
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {counts[stat.id]}{stat.suffix}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Stats component error:', error);
    return null;
  }
}