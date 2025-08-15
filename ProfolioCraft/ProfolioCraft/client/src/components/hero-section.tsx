import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio-data';

const HeroSection = () => {
  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // In a real implementation, this would download an actual CV file
    console.log('Download CV functionality would be implemented here');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary"></div>
      <div className="absolute inset-0 bg-gradient-electric opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-none tracking-tight">
              <span className="block text-white font-light">Hello, I'm</span>
              <span className="block text-gradient-electric font-black uppercase">{personalInfo.name}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 font-medium tracking-wide">
              {personalInfo.title} - <span className="text-gradient-neon font-semibold">{personalInfo.tagline}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleViewWork}
                className="bg-gradient-electric text-dark-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 glow-electric"
                data-testid="button-view-work"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View My Projects
              </Button>
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                className="glassmorphism px-8 py-4 rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 border-white border-opacity-20 text-white"
                data-testid="button-download-cv"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imhlcm9HcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMUZGODg7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBENEZGO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjVDRjY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNoZXJvR3JhZGllbnQpIiAvPgogIDx0ZXh0IHg9IjMwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmb250LXNpemU9IjI4IiBmb250LWZhbWlseT0iQXJpYWwiIGZpbGw9IndoaXRlIj5FbGVjdHJvbmljcyAmIFJvYm90aWNzPC90ZXh0PgogIDx0ZXh0IHg9IjMwMCIgeT0iMjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmb250LXNpemU9IjIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZpbGw9IndoaXRlIj5FbmdpbmVlcmluZyBXb3Jrc3BhY2U8L3RleHQ+Cjwvc3ZnPg=="
                alt="Electronics engineering workspace with Arduino, sensors, and robotics components"
                className="rounded-2xl glassmorphism p-4 glow-electric hover-lift max-w-md w-full"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-electric-blue" data-testid="scroll-indicator" />
      </div>
    </section>
  );
};

export default HeroSection;