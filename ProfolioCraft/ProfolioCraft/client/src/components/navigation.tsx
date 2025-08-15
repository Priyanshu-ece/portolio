import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: 'Home', section: 'home' },
    { href: '#about', label: 'About', section: 'about' },
    { href: '#experience', label: 'Experience', section: 'experience' },
    { href: '#education', label: 'Education', section: 'education' },
    { href: '#projects', label: 'Projects', section: 'projects' },
    { href: '#contact', label: 'Contact', section: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section based on scroll position
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset for navbar height
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const isActive = (section: string) => {
    // For single page, check if we're on home route and match active section
    return location === '/' && activeSection === section;
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-2xl font-bold tracking-tight" 
              data-testid="logo-link"
            >
              <span className="text-gradient-electric">PRIYANSHU.dev</span>
            </button>
            
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button 
                  key={link.section}
                  onClick={() => scrollToSection(link.section)}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className={`transition-colors duration-300 hover:text-electric-blue ${
                    isActive(link.section) ? 'text-electric-blue' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-electric-blue"
              onClick={() => setIsMenuOpen(true)}
              data-testid="mobile-menu-button"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 glassmorphism backdrop-blur-sm transform transition-transform duration-300 md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-white hover:text-electric-blue"
            onClick={() => setIsMenuOpen(false)}
            data-testid="close-mobile-menu"
          >
            <X className="h-6 w-6" />
          </Button>
          
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => scrollToSection(link.section)}
              className={`transition-colors duration-300 hover:text-electric-blue ${
                isActive(link.section) ? 'text-electric-blue' : 'text-white'
              }`}
              data-testid={`mobile-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;