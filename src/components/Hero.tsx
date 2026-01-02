import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Transformez Votre Propriété en Chef-d'Œuvre";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Cursor blink
  useEffect(() => {
    if (showCursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        
        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-gold/30 opacity-0 animate-fade-in animation-delay-1000" />
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-gold/30 opacity-0 animate-fade-in animation-delay-1000" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-gold/30 opacity-0 animate-fade-in animation-delay-1000" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-gold/30 opacity-0 animate-fade-in animation-delay-1000" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/60 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        {/* Logo/Badge */}
        <div className="mb-8 opacity-0 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold font-montserrat text-sm">
            <span className="w-2 h-2 bg-swiss-red rounded-sm" />
            Précision Suisse, Excellence Garantie
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in animation-delay-300">
          <span className="text-foreground">{displayedText}</span>
          <span className={`text-gold ${displayedText.length < fullText.length ? '' : 'hidden'}`}>|</span>
        </h1>

        {/* Subheadline */}
        <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-600">
          Experts en construction et rénovation premium à Genève depuis 2005
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in animation-delay-800">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('#contact')}
            className="group"
          >
            Demander un Devis Gratuit
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="hero-outline" 
            size="xl"
            onClick={() => scrollToSection('#portfolio')}
          >
            Voir Nos Réalisations
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-muted-foreground font-montserrat text-sm opacity-0 animate-fade-in animation-delay-1000">
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold text-lg">20+</span>
            ans d'expérience
          </div>
          <div className="w-px h-6 bg-border hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold text-lg">500+</span>
            projets réalisés
          </div>
          <div className="w-px h-6 bg-border hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold text-lg">10</span>
            ans de garantie
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1500">
        <button 
          onClick={() => scrollToSection('#services')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
          aria-label="Défiler vers le bas"
        >
          <span className="text-xs font-montserrat uppercase tracking-wider">Découvrir</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-current rounded-full animate-scroll-indicator" />
          </div>
        </button>
      </div>
    </section>
  );
}
