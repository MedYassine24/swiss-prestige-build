import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Home, Hammer, Wrench, Paintbrush, Triangle, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'couverture',
    icon: Home,
    title: 'Couverture Premium',
    description: 'Toiture en tuiles, ardoises, zinc. Installation et rénovation complète avec garantie décennale. Isolation thermique incluse.',
    features: [
      'Tuiles suisses premium de qualité supérieure',
      'Isolation thermique et phonique renforcée',
      'Garantie décennale sur tous les travaux',
      'Étanchéité parfaite garantie',
      'Ventilation de toiture optimisée',
      'Pose de fenêtres de toit Velux',
    ],
    benefits: 'Protégez votre maison avec une toiture de qualité suisse qui durera des décennies.',
  },
  {
    id: 'zinguerie',
    icon: Hammer,
    title: 'Zinguerie de Précision',
    description: "Gouttières, chéneaux, habillages zinc. Travail artisanal du métal avec finitions impeccables.",
    features: [
      'Zinc naturel ou pré-patiné au choix',
      'Soudure traditionnelle à l\'ancienne',
      'Gouttières et descentes sur-mesure',
      'Habillage de cheminées',
      'Abergement de fenêtres de toit',
      'Entretien minimal garanti',
    ],
    benefits: 'Un travail artisanal qui allie esthétique et durabilité pour une étanchéité parfaite.',
  },
  {
    id: 'renovation',
    icon: Wrench,
    title: 'Rénovation Totale',
    description: 'Transformation complète de votre propriété. De la toiture aux façades, nous gérons tout.',
    features: [
      'Gestion complète du projet',
      'Coordination de tous les corps de métier',
      'Respect strict des délais',
      'Budget maîtrisé et transparent',
      'Suivi quotidien des travaux',
      'Nettoyage de chantier quotidien',
    ],
    benefits: 'Une rénovation clé en main, sans stress, avec un interlocuteur unique.',
  },
  {
    id: 'facade',
    icon: Paintbrush,
    title: 'Habillage Façade',
    description: 'Bardage bois, crépis, parement pierre. Embellissez et protégez votre bâtiment.',
    features: [
      'Matériaux écologiques et durables',
      'Design personnalisé selon vos goûts',
      'Isolation thermique intégrée',
      'Large choix de finitions',
      'Protection contre les intempéries',
      'Valorisation de votre bien',
    ],
    benefits: 'Transformez l\'apparence de votre maison tout en améliorant son isolation.',
  },
  {
    id: 'charpente',
    icon: Triangle,
    title: 'Charpente Traditionnelle',
    description: 'Charpente bois massif, fermettes, extensions. Savoir-faire ancestral.',
    features: [
      'Bois certifié FSC et PEFC',
      'Calculs de charge professionnels',
      'Pose traditionnelle ou moderne',
      'Extensions et surélévations',
      'Traitement anti-parasites',
      'Charpentes apparentes décoratives',
    ],
    benefits: 'Une structure solide et durable, réalisée dans les règles de l\'art.',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block text-gold font-montserrat text-sm font-semibold uppercase tracking-wider mb-4">
            Nos Expertises
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Services <span className="text-gradient-gold">d'Excellence</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Des solutions sur-mesure pour tous vos projets de construction et rénovation à Genève
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <p className="text-gold font-medium mb-8">
                      {service.benefits}
                    </p>
                    <Link to="/contact">
                      <Button variant="gold" size="lg">
                        Demander un Devis
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className={`glass p-8 rounded-2xl border border-border/50 ${!isEven ? 'lg:order-1' : ''}`}>
                    <h3 className="font-montserrat font-bold text-xl mb-6">Ce que nous proposons</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Prêt à Démarrer Votre Projet?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Contactez-nous pour un devis gratuit et sans engagement. Notre équipe vous répondra sous 24h.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl">
              Demander un Devis Gratuit
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
