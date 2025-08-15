interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  technologies?: string[];
  color: 'electric' | 'neon' | 'purple';
  position: 'left' | 'right';
}

const TimelineItem = ({ 
  title, 
  subtitle, 
  period, 
  description, 
  technologies, 
  color, 
  position 
}: TimelineItemProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'electric':
        return {
          dot: 'bg-gradient-electric glow-electric',
          period: 'text-electric-blue',
          gradient: 'text-gradient-electric'
        };
      case 'neon':
        return {
          dot: 'bg-gradient-neon glow-neon',
          period: 'text-neon-green',
          gradient: 'text-gradient-neon'
        };
      case 'purple':
        return {
          dot: 'bg-gradient-purple glow-purple',
          period: 'text-purple-primary',
          gradient: 'text-gradient-purple'
        };
      default:
        return {
          dot: 'bg-gradient-electric glow-electric',
          period: 'text-electric-blue',
          gradient: 'text-gradient-electric'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <div className="relative mb-12" data-testid={`timeline-item-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center justify-center">
        <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${colorClasses.dot} z-10`}></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {position === 'left' ? (
          <>
            <div className="md:text-right md:pr-8">
              <div className="glassmorphism rounded-2xl p-6 hover-lift">
                <div className={`font-semibold mb-1 ${colorClasses.period}`} data-testid={`period-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {period}
                </div>
                <h3 className="text-2xl font-bold mb-2" data-testid={`title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {title}
                </h3>
                <h4 className={`text-lg mb-4 ${colorClasses.gradient}`} data-testid={`subtitle-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {subtitle}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4" data-testid={`description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {description}
                </p>
                {technologies && (
                  <div className="flex flex-wrap gap-2" data-testid={`technologies-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {technologies.map((tech, index) => {
                      const techColorClass = index % 3 === 0 ? 'bg-electric-blue bg-opacity-20 text-electric-blue' :
                                           index % 3 === 1 ? 'bg-neon-green bg-opacity-20 text-neon-green' :
                                           'bg-purple-primary bg-opacity-20 text-purple-primary';
                      return (
                        <span key={tech} className={`px-3 py-1 rounded-full text-sm ${techColorClass}`}>
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="md:pl-8"></div>
          </>
        ) : (
          <>
            <div></div>
            <div className="md:pl-8">
              <div className="glassmorphism rounded-2xl p-6 hover-lift">
                <div className={`font-semibold mb-1 ${colorClasses.period}`} data-testid={`period-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {period}
                </div>
                <h3 className="text-2xl font-bold mb-2" data-testid={`title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {title}
                </h3>
                <h4 className={`text-lg mb-4 ${colorClasses.gradient}`} data-testid={`subtitle-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {subtitle}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4" data-testid={`description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {description}
                </p>
                {technologies && (
                  <div className="flex flex-wrap gap-2" data-testid={`technologies-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {technologies.map((tech, index) => {
                      const techColorClass = index % 3 === 0 ? 'bg-electric-blue bg-opacity-20 text-electric-blue' :
                                           index % 3 === 1 ? 'bg-neon-green bg-opacity-20 text-neon-green' :
                                           'bg-purple-primary bg-opacity-20 text-purple-primary';
                      return (
                        <span key={tech} className={`px-3 py-1 rounded-full text-sm ${techColorClass}`}>
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;