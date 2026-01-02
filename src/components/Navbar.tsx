import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'À Propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-strong py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <img 
              src={logo} 
              alt="Swiss Habitat Group" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`gold-underline font-montserrat text-sm font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-gold active'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="gold" 
              size="default"
              onClick={() => scrollToSection('#contact')}
            >
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-card p-8 pt-24 transform transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`font-montserrat text-2xl font-medium transition-all hover:text-gold hover:translate-x-2 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-gold'
                    : 'text-foreground'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 pt-6 border-t border-border">
              <Button 
                variant="gold" 
                size="xl" 
                className="w-full"
                onClick={() => scrollToSection('#contact')}
              >
                Demander un Devis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
