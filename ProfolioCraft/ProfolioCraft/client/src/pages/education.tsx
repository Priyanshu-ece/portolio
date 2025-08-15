import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '@/data/portfolio-data';

const Education = () => {
  const getCertificationIcon = (iconType: string) => {
    switch (iconType) {
      case 'aws':
        return '🏆';
      case 'google':
        return '🎯';
      case 'react':
        return '⚛️';
      case 'code':
        return '💻';
      default:
        return '📜';
    }
  };

  const getCertificationGradient = (index: number) => {
    const gradients = ['bg-gradient-electric', 'bg-gradient-neon', 'bg-gradient-purple'];
    return gradients[index % 3];
  };

  return (
    <section className="py-20 bg-dark-secondary min-h-screen pt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-neon">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formal Education */}
          <div className="glassmorphism rounded-2xl p-8 hover-lift">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-electric rounded-full flex items-center justify-center mx-auto mb-4 glow-electric">
                <GraduationCap className="h-8 w-8 text-dark-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-electric">Formal Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className={`border-l-4 pl-6 ${
                    index === 0 ? 'border-electric-blue' : 'border-neon-green'
                  }`}
                  data-testid={`education-${edu.id}`}
                >
                  <div className={`font-semibold ${
                    index === 0 ? 'text-electric-blue' : 'text-neon-green'
                  }`}>
                    {edu.period}
                  </div>
                  <h4 className="text-xl font-bold mb-2" data-testid={`education-degree-${edu.id}`}>
                    {edu.degree}
                  </h4>
                  <p className="text-gray-400 mb-2" data-testid={`education-institution-${edu.id}`}>
                    {edu.institution}
                  </p>
                  <p className="text-gray-300" data-testid={`education-description-${edu.id}`}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications & Learning */}
          <div className="glassmorphism rounded-2xl p-8 hover-lift">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-4 glow-neon">
                <Award className="h-8 w-8 text-dark-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-neon">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className="glassmorphism rounded-xl p-4"
                  data-testid={`certification-${cert.id}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${getCertificationGradient(index)} rounded-full flex items-center justify-center text-2xl`}>
                      {getCertificationIcon(cert.icon)}
                    </div>
                    <div>
                      <h4 className="font-semibold" data-testid={`certification-name-${cert.id}`}>
                        {cert.name}
                      </h4>
                      <p className="text-gray-400 text-sm" data-testid={`certification-issuer-${cert.id}`}>
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Additional Achievements */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-gradient-purple mb-4">Key Achievements</h4>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                    <span>Top 3 positions in multiple RC bot racing competitions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                    <span>Conducted 3+ hands-on robotics workshops for 80+ students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
                    <span>Mentored 30+ juniors in embedded systems and robotics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                    <span>Campus-wide IoT workshop facilitator under Phoenix Robotics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;