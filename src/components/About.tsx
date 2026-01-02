import { useIntersectionObserver, useAnimatedCounter } from '@/hooks/useAnimations';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { useEffect } from 'react';

const stats = [
  { icon: Award, value: 500, suffix: '+', label: 'Projets Réalisés' },
  { icon: Clock, value: 20, suffix: '+', label: "Années d'Expérience" },
  { icon: Users, value: 100, suffix: '%', label: 'Satisfaction Client' },
  { icon: Shield, value: 10, suffix: ' ans', label: 'Garantie' },
];

const certifications = [
  'ISO 9001 Certified',
  'Entreprise Suisse Certifiée',
  'Garantie Décennale',
  'Association Suisse des Couvreurs',
];

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <span className="inline-block text-gold font-montserrat text-sm font-semibold uppercase tracking-wider mb-4">
              À Propos
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">
              La Précision Suisse au Service de{' '}
              <span className="text-gradient-gold">Votre Habitat</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Depuis plus de 20 ans, Swiss Habitat Group incarne l'excellence dans la 
                construction et la rénovation à Genève. Notre équipe d'artisans passionnés 
                combine savoir-faire traditionnel et technologies modernes pour transformer 
                vos projets en réalité.
              </p>
              <p>
                Basés à Lancy, nous servons toute la région genevoise avec un engagement 
                sans faille : qualité irréprochable, respect des délais et satisfaction 
                garantie. Chaque projet est unique, chaque client est privilégié.
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span 
                  key={cert}
                  className={`px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium transition-all duration-500 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-300 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.label} 
                stat={stat} 
                index={index} 
                isVisible={isIntersecting}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: typeof stats[0];
  index: number;
  isVisible: boolean;
}

function StatCard({ stat, index, isVisible }: StatCardProps) {
  const { count, animate } = useAnimatedCounter(stat.value, 2000);
  const Icon = stat.icon;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        animate();
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, animate, index]);

  return (
    <div 
      className={`p-6 md:p-8 rounded-xl glass border border-border/50 text-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <div className="font-playfair text-4xl md:text-5xl font-bold text-gold mb-2">
        {count}{stat.suffix}
      </div>
      <div className="font-montserrat text-sm text-muted-foreground">
        {stat.label}
      </div>
    </div>
  );
}
