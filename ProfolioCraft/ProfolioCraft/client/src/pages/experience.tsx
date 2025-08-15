import TimelineItem from '@/components/timeline-item';
import { experiences } from '@/data/portfolio-data';

const Experience = () => {
  return (
    <section className="py-20 bg-dark-primary min-h-screen pt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-electric">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey through innovative robotics societies and exciting engineering projects
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line rounded-full"></div>
            
            {/* Experience Items */}
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                title={experience.position}
                subtitle={experience.company}
                period={experience.period}
                description={experience.description}
                technologies={experience.technologies}
                color={experience.color}
                position={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;