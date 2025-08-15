import { X, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { Project } from '@/data/portfolio-data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const handleLiveDemo = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };

  const handleViewCode = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  // Mock project features based on title
  const getProjectFeatures = (title: string) => {
    switch (title) {
      case 'BluCarX – ESP32-Based RC Racing Bot':
        return [
          'Real-time Bluetooth control with 15-meter range',
          'Custom Android app interface',
          'High-torque motor control (2.5 kg-cm)',
          '95% control reliability',
          'Optimized power distribution system'
        ];
      case 'TriBotX – Arduino-Based 3WD RC Vehicle':
        return [
          '3-wheel drive configuration',
          'Under 200ms control latency',
          'PWM-based speed control',
          'Mobile-based operation interface',
          '30% improved turning radius'
        ];
      case 'Formula Student IC Car Electronics':
        return [
          'Digital dashboard integration',
          'Pedal shifter systems',
          'Kill switch safety systems',
          'Complete vehicle wiring',
          'Sensor-actuator coordination'
        ];
      default:
        return [
          'Embedded systems design',
          'Microcontroller programming',
          'Motor control systems',
          'Wireless communication',
          'PCB design and integration'
        ];
    }
  };

  const features = getProjectFeatures(project.title);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glassmorphism max-w-4xl max-h-[90vh] overflow-y-auto border-white border-opacity-10 text-white">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gradient-electric text-left">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full rounded-xl mb-4"
              data-testid="project-modal-image"
            />
            <div className="flex gap-3">
              {project.liveUrl && (
                <Button
                  onClick={handleLiveDemo}
                  className="flex-1 bg-gradient-electric text-dark-primary py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                  data-testid="button-live-demo"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  onClick={handleViewCode}
                  variant="outline"
                  className="glassmorphism py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 border-white border-opacity-20 text-white"
                  data-testid="button-view-code"
                >
                  <Github className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gradient-neon">
              Project Overview
            </h4>
            <p className="text-gray-300 leading-relaxed mb-6" data-testid="project-description">
              {project.description}
            </p>
            
            <h4 className="text-xl font-semibold mb-4 text-gradient-purple">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2 mb-6" data-testid="project-technologies">
              {project.technologies.map((tech, index) => {
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
            
            <h4 className="text-xl font-semibold mb-4 text-gradient-electric">
              Key Features
            </h4>
            <ul className="space-y-2 text-gray-300" data-testid="project-features">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-neon-green flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;