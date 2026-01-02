import { useIntersectionObserver } from '@/hooks/useAnimations';
import { Phone, ClipboardCheck, FileText, HardHat, Award } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Prise de Contact',
    description: 'Contactez-nous par téléphone, email ou via notre formulaire. Réponse garantie sous 24h. Premier échange pour comprendre vos besoins et vos attentes.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Visite Sur Place',
    description: 'Déplacement gratuit à votre domicile. Inspection détaillée, prise de mesures, photos. Analyse technique complète de votre projet.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Devis Personnalisé',
    description: 'Proposition détaillée sous 48h. Prix transparent, matériaux spécifiés, délais précis. Aucune surprise, aucun coût caché.',
  },
  {
    number: '04',
    icon: HardHat,
    title: "Travaux d'Excellence",
    description: 'Équipe expérimentée sur site. Respect des délais et du chantier propre. Suivi quotidien et communication constante avec vous.',
  },
  {
    number: '05',
    icon: Award,
    title: 'Satisfaction Garantie',
    description: 'Visite de contrôle qualité. Garantie décennale sur tous travaux. Service après-vente réactif et disponible.',
  },
];

export function Process() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="process" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-gold font-montserrat text-sm font-semibold uppercase tracking-wider mb-4">
            Processus
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Notre Méthode en <span className="text-gradient-gold">5 Étapes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement sur-mesure du premier contact à la livraison finale
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold to-gold/50 md:-translate-x-px" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.number}
                  className={`relative flex items-center gap-8 transition-all duration-700 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Desktop: Alternating layout */}
                  <div className={`hidden md:grid md:grid-cols-2 gap-8 w-full items-center ${
                    isEven ? '' : 'direction-rtl'
                  }`}>
                    {/* Content */}
                    <div className={`${isEven ? 'text-right pr-12' : 'text-left pl-12 order-2'}`}>
                      <span className="font-playfair text-6xl font-bold text-gold/20 block mb-2">
                        {step.number}
                      </span>
                      <h3 className="font-montserrat text-xl font-bold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Icon circle at center */}
                    <div className={`${isEven ? 'order-2' : 'order-1'}`}>
                      <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center z-10 glass">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile: Left-aligned layout */}
                  <div className="md:hidden flex gap-6 pl-4">
                    {/* Icon circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center glass">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <span className="font-playfair text-4xl font-bold text-gold/20 block -mb-2">
                        {step.number}
                      </span>
                      <h3 className="font-montserrat text-lg font-bold mb-2 mt-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
