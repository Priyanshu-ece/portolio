import { personalInfo, skillCategories } from '@/data/portfolio-data';

const About = () => {
  const getSkillWidth = (level: number) => {
    return `${level}%`;
  };

  const getSkillColor = (color: 'electric' | 'neon' | 'purple') => {
    switch (color) {
      case 'electric':
        return 'bg-gradient-electric';
      case 'neon':
        return 'bg-gradient-neon';
      case 'purple':
        return 'bg-gradient-purple';
      default:
        return 'bg-gradient-electric';
    }
  };

  const getTextColor = (color: 'electric' | 'neon' | 'purple') => {
    switch (color) {
      case 'electric':
        return 'text-electric-blue';
      case 'neon':
        return 'text-neon-green';
      case 'purple':
        return 'text-purple-primary';
      default:
        return 'text-electric-blue';
    }
  };

  return (
    <section className="py-20 bg-dark-secondary min-h-screen pt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-neon">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that blend cutting-edge technology with exceptional user experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-gradient-electric mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6" data-testid="about-bio">
                {personalInfo.bio}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 glassmorphism rounded-xl">
                  <div className="text-2xl font-bold text-electric-blue" data-testid="stat-projects">
                    {personalInfo.stats.projectsCompleted}+
                  </div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 glassmorphism rounded-xl">
                  <div className="text-2xl font-bold text-neon-green" data-testid="stat-experience">
                    {personalInfo.stats.yearsExperience}+
                  </div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1581092795442-6644556a4075?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Electronics and robotics workspace with Arduino and components"
              className="rounded-xl glassmorphism p-3 hover-lift glow-neon"
              data-testid="about-image-1"
            />
            
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="PCB design and electronic circuit development"
              className="rounded-xl glassmorphism p-3 hover-lift glow-purple mt-8"
              data-testid="about-image-2"
            />
            
            <img
              src="https://images.unsplash.com/photo-1581092802180-81d8aa17a7ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Robotics competition and RC car racing"
              className="rounded-xl glassmorphism p-3 hover-lift glow-electric -mt-8"
              data-testid="about-image-3"
            />
            
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Microcontroller programming and embedded systems"
              className="rounded-xl glassmorphism p-3 hover-lift glow-neon"
              data-testid="about-image-4"
            />
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient-electric">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div key={category.name} className="glassmorphism rounded-2xl p-6 hover-lift" data-testid={`skill-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <h4 className={`text-xl font-semibold mb-4 ${getTextColor(category.color)}`}>
                  {category.name}
                </h4>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center">
                      <span data-testid={`skill-name-${skill.name.toLowerCase().replace(/[.\s/]+/g, '-')}`}>
                        {skill.name}
                      </span>
                      <div className="w-24 h-2 bg-dark-tertiary rounded-full overflow-hidden">
                        <div 
                          className={`h-2 ${getSkillColor(category.color)} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: getSkillWidth(skill.level) }}
                          data-testid={`skill-bar-${skill.name.toLowerCase().replace(/[.\s/]+/g, '-')}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;