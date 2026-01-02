import { useIntersectionObserver, useAnimatedCounter } from '@/hooks/useAnimations';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import { useEffect } from 'react';

const stats = [
  { icon: Award, value: 200, suffix: '+', label: 'Projets Livrés' },
  { icon: TrendingUp, value: 5, suffix: '%', label: 'Taux Fixe Garanti' },
  { icon: Users, value: 100, suffix: '%', label: 'Clients Satisfaits' },
  { icon: Shield, value: 15, suffix: ' ans', label: "D'Expertise" },
];

const certifications = [
  'Entreprise Suisse Certifiée',
  'Membre USPI',
  'Garantie Financière',
  'Assurance RC Pro',
];

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-gold/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <span className="inline-block text-gold font-montserrat text-sm font-semibold uppercase tracking-wider mb-4">
              À Propos
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">
              L'Excellence Immobilière{' '}
              <span className="text-gradient-gold">À Votre Service</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Depuis plus de 15 ans, Swiss Prestige Build accompagne ses clients dans la réalisation
                de leurs projets immobiliers en Suisse. Notre équipe d'experts passionnés
                allie savoir-faire traditionnel et innovation pour concrétiser vos ambitions.
              </p>
              <p>
                Que vous souhaitiez <strong className="text-foreground">construire sur mesure</strong> votre résidence de rêve
                ou <strong className="text-foreground">investir avec un rendement garanti</strong>, nous vous accompagnons
                à chaque étape avec rigueur, transparence et professionnalisme.
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={cert}
                  className={`px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium transition-all duration-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-300 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
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
      className={`p-6 md:p-8 rounded-xl glass border border-border/50 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
