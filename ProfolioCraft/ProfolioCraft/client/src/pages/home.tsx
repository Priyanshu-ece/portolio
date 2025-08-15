import HeroSection from '@/components/hero-section';
import About from './about';
import Experience from './experience';
import Education from './education';
import Projects from './projects';
import Contact from './contact';

const Home = () => {
  return (
    <div className="relative">
      {/* Unified gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b 
          from-slate-900 
          via-slate-800/95 
          via-slate-850/90
          via-slate-800/95
          via-slate-850/90
          via-slate-800/95
          to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br 
          from-blue-900/15 
          via-purple-900/10
          via-blue-900/8
          via-purple-900/12
          via-blue-900/10
          to-purple-900/15"></div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-electric-blue/3 rounded-full blur-2xl floating-particles"></div>
        <div className="absolute top-96 right-20 w-24 h-24 bg-purple-primary/3 rounded-full blur-2xl floating-particles"></div>
        <div className="absolute top-[800px] left-1/3 w-40 h-40 bg-electric-blue/3 rounded-full blur-2xl floating-particles"></div>
        <div className="absolute top-[1200px] right-10 w-28 h-28 bg-purple-primary/3 rounded-full blur-2xl floating-particles"></div>
        <div className="absolute top-[1600px] left-20 w-36 h-36 bg-electric-blue/3 rounded-full blur-2xl floating-particles"></div>
        <div className="absolute top-[2000px] right-1/4 w-32 h-32 bg-purple-primary/3 rounded-full blur-2xl floating-particles"></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 relative">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 relative">
        <Experience />
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen py-20 relative">
        <Education />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative">
        <Contact />
      </section>
    </div>
  );
};

export default Home;