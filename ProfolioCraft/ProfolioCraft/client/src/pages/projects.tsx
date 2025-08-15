import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectModal from '@/components/project-modal';
import { projects, type Project } from '@/data/portfolio-data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projects.filter(p => p.featured);
  const allProjects = projects;

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleLiveDemo = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };

  const handleGithub = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  const getProjectGlow = (index: number) => {
    const glows = ['glow-electric', 'glow-neon', 'glow-purple'];
    return glows[index % 3];
  };

  const getProjectGradient = (index: number) => {
    const gradients = ['bg-gradient-electric', 'bg-gradient-neon', 'bg-gradient-purple'];
    return gradients[index % 3];
  };

  return (
    <>
      <section className="py-20 bg-dark-primary min-h-screen pt-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient-purple">Hardware Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing my latest robotics and embedded systems projects
            </p>
          </div>
          
          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div
                key={project.id}
                className={`glassmorphism rounded-2xl overflow-hidden hover-lift cursor-pointer ${getProjectGlow(index)}`}
                onClick={() => handleProjectClick(project)}
                data-testid={`project-card-${project.id}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-testid={`project-image-${project.id}`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gradient-electric" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4" data-testid={`project-technologies-${project.id}`}>
                    {project.technologies.map((tech, techIndex) => {
                      const techColorClass = techIndex % 3 === 0 ? 'bg-electric-blue bg-opacity-20 text-electric-blue' :
                                           techIndex % 3 === 1 ? 'bg-neon-green bg-opacity-20 text-neon-green' :
                                           'bg-purple-primary bg-opacity-20 text-purple-primary';
                      return (
                        <span key={tech} className={`px-2 py-1 rounded text-xs ${techColorClass}`}>
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button
                        className={`flex-1 ${getProjectGradient(index)} text-dark-primary py-2 px-4 rounded-lg text-sm font-semibold hover:scale-105 transition-all duration-300`}
                        onClick={(e) => handleLiveDemo(project, e)}
                        data-testid={`button-live-demo-${project.id}`}
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      className="glassmorphism py-2 px-4 rounded-lg text-sm hover:bg-white hover:bg-opacity-10 transition-all duration-300 border-white border-opacity-20 text-white"
                      onClick={(e) => handleGithub(project, e)}
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="glassmorphism px-8 py-4 rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 glow-electric border-white border-opacity-20 text-white"
              data-testid="button-view-all-projects"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects;