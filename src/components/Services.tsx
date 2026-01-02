import { useIntersectionObserver } from '@/hooks/useAnimations';
import { ArrowRight, Building2, Check, Home, Shield, TrendingUp, Paintbrush, Hammer, Umbrella } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: 'Couverture',
    description: 'Expertise complète en toiture : tuiles, ardoises, et toitures plates. Nous assurons une protection durable et esthétique de votre bâtiment.',
    features: ['Tuiles & Ardoises', 'Étanchéité', 'Isolation toiture'],
    link: '/services#couverture',
  },
  {
    icon: Umbrella,
    title: 'Zinguerie',
    description: 'Travaux de ferblanterie et zinguerie pour une évacuation optimale des eaux. Finitions soignées en cuivre, zinc et inox.',
    features: ['Gouttières & Chéneaux', 'Habillage de lucarnes', 'Finitions cuivre/zinc'],
    link: '/services#zinguerie',
  },
  {
    icon: Building2,
    title: 'Rénovation',
    description: 'Rénovation globale ou partielle de votre habitat. Nous donnons une seconde vie à votre propriété avec des matériaux de qualité.',
    features: ['Réfection complète', 'Modernisation', 'Valorisation du bien'],
    link: '/services#renovation',
  },
  {
    icon: Shield,
    title: 'Habillage',
    description: 'Solutions d\'habillage de façades et sous-faces de toiture. Protection contre les intempéries et amélioration de l\'esthétique.',
    features: ['Façades ventilées', 'Planches de rive', 'Soffites'],
    link: '/services#habillage',
  },
  {
    icon: Hammer,
    title: 'Charpente',
    description: 'Construction et modification de charpentes traditionnelles. Traitement des bois et renforcement de structures.',
    features: ['Charpente traditionnelle', 'Modification de structure', 'Traitement du bois'],
    link: '/services#charpente',
  },
];

export function Services() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <span className="inline-block text-gold font-montserrat text-sm font-semibold uppercase tracking-wider mb-4">
            Nos Expertises
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Services <span className="text-gradient-gold">d'Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des solutions sur-mesure pour tous vos projets de construction et rénovation
          </p>
          {/* Gold underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  isVisible: boolean;
}

function ServiceCard({ service, index, isVisible }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div
      className={`group relative p-8 rounded-xl glass border border-border/50 premium-card transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 transition-all group-hover:bg-gold/20 group-hover:scale-110">
        <Icon className="w-7 h-7 text-gold" />
      </div>

      {/* Title */}
      <h3 className="font-montserrat text-xl font-bold mb-3 group-hover:text-gold transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        to={service.link}
        className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all"
      >
        En savoir plus
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
