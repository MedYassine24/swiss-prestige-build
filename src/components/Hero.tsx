import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Construisons Ensemble Votre Projet Immobilier";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
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
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Construction immobilière de prestige en Suisse"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
        {/* Subtle gold accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-gold/10" />
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
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center pt-20 md:pt-32">

        {/* Main Headline */}
        <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight opacity-0 animate-fade-in animation-delay-300">
          <span className="text-foreground">{displayedText}</span>
          <span className={`text-gold ${displayedText.length < fullText.length ? '' : 'hidden'}`}>|</span>
        </h1>

        {/* Subheadline - Simplified on Mobile */}
        <div className="space-y-4 mb-8 md:mb-10 opacity-0 animate-fade-in animation-delay-600">
          <p className="font-inter text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos compagnons réalisent vos projets de <span className="text-gold font-semibold">construction sur mesure</span> 📐
          </p>
          <p className="font-inter text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto hidden sm:block">
            Découvrez nos <span className="text-gold font-semibold">solutions de rendement à taux fixe</span> pour un investissement sécurisé
          </p>
        </div>

        {/* CTA Buttons - Stacked on mobile */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-16 opacity-0 animate-fade-in animation-delay-800 px-4">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              size="xl"
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-background font-bold text-base md:text-lg px-8 py-4 md:py-6 h-auto shadow-lg hover:shadow-gold/50 transition-all duration-300"
            >
              Démarrer Mon Projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/services" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-base md:text-lg px-8 py-4 md:py-6 h-auto backdrop-blur-sm transition-all duration-300"
            >
              <TrendingUp className="mr-2 w-5 h-5 text-gold" />
              Solutions Rendement
            </Button>
          </Link>
        </div>

        {/* Trust badges - Grid on mobile, Flex on Desktop */}
        <div className="grid grid-cols-2 md:flex justify-center gap-3 md:gap-12 text-muted-foreground font-montserrat text-sm opacity-0 animate-fade-in animation-delay-1000 px-2">
          <div className="flex flex-col md:flex-row items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-3 rounded-lg border border-border/30">
            <span className="text-gold font-bold text-xl">15+</span>
            <span className="text-xs md:text-left leading-tight">ans <br className="hidden md:block" />d'expertise</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-3 rounded-lg border border-border/30">
            <span className="text-gold font-bold text-xl">200+</span>
            <span className="text-xs md:text-left leading-tight">projets <br className="hidden md:block" />réalisés</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-3 rounded-lg border border-border/30">
            <span className="text-gold font-bold text-xl">5%</span>
            <span className="text-xs md:text-left leading-tight">taux fixe <br className="hidden md:block" />garanti</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-3 rounded-lg border border-border/30">
            <span className="text-gold font-bold text-xl">100%</span>
            <span className="text-xs md:text-left leading-tight">clients <br className="hidden md:block" />satisfaits</span>
          </div>
        </div>
      </div>
    </section>
  );
}
