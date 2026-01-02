import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Shield, Phone, ClipboardCheck, FileText, HardHat } from 'lucide-react';
import { useIntersectionObserver, useAnimatedCounter } from '@/hooks/useAnimations';

const stats = [
  { icon: Award, value: 500, suffix: '+', label: 'Projets Réalisés' },
  { icon: Clock, value: 20, suffix: '+', label: "Années d'Expérience" },
  { icon: Users, value: 100, suffix: '%', label: 'Satisfaction Client' },
  { icon: Shield, value: 10, suffix: ' ans', label: 'Garantie' },
];

const steps = [
  { number: '01', icon: Phone, title: 'Prise de Contact', description: 'Contactez-nous par téléphone, email ou formulaire. Réponse garantie sous 24h.' },
  { number: '02', icon: ClipboardCheck, title: 'Visite Sur Place', description: 'Déplacement gratuit à votre domicile. Inspection détaillée et prise de mesures.' },
  { number: '03', icon: FileText, title: 'Devis Personnalisé', description: 'Proposition détaillée sous 48h. Prix transparent, aucune surprise.' },
  { number: '04', icon: HardHat, title: 'Travaux d\'Excellence', description: 'Équipe expérimentée sur site. Respect des délais et chantier propre.' },
  { number: '05', icon: Award, title: 'Satisfaction Garantie', description: 'Visite de contrôle qualité. Garantie décennale sur tous travaux.' },
];

const certifications = [
  'ISO 9001 Certified',
  'Entreprise Suisse Certifiée',
  'Garantie Décennale',
  'Association Suisse des Couvreurs',
  'Assurance RC Complète',
];

function StatCard({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const { count, animate } = useAnimatedCounter(stat.value, 2000);
  const Icon = stat.icon;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => animate(), index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, animate, index]);

  return (
    <div className="p-6 md:p-8 rounded-xl glass border border-border/50 text-center">
      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <div className="font-playfair text-4xl md:text-5xl font-bold text-gold mb-2">
        {count}{stat.suffix}
      </div>
      <div className="font-montserrat text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
}

export default function AboutPage() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block text-gold font-montserrat text-sm font-semibold uppercase tracking-wider mb-4">
            À Propos
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            La Précision <span className="text-gradient-gold">Suisse</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Au service de votre habitat depuis plus de 20 ans
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                <p>
                  Notre philosophie est simple : nous traitons chaque maison comme si c'était 
                  la nôtre. Cette approche nous a permis de bâtir une réputation d'excellence 
                  et de fidéliser des centaines de clients satisfaits.
                </p>
              </div>
            </div>
            <div ref={ref} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} isVisible={isIntersecting} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Notre Méthode en <span className="text-gradient-gold">5 Étapes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un accompagnement sur-mesure du premier contact à la livraison finale
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <span className="font-playfair text-4xl font-bold text-gold/20">{step.number}</span>
                  <h3 className="font-montserrat font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
            Nos Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span 
                key={cert}
                className="px-6 py-3 rounded-full border border-gold/30 bg-gold/5 text-gold font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Prêt à Nous Faire Confiance?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Rejoignez nos centaines de clients satisfaits et transformez votre habitat.
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
