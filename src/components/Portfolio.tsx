import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useAnimations';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import project images
import project4 from '@/assets/projects/project-4.jpg';
import project5 from '@/assets/projects/project-5.jpg';
import project6 from '@/assets/projects/project-6.jpg';
import project7 from '@/assets/projects/project-7.jpg';
import project8 from '@/assets/projects/project-8.jpg';
import project9 from '@/assets/projects/project-9.jpg';

const categories = ['Tous', 'Couverture', 'Rénovation', 'Zinguerie', 'Façade', 'Charpente'];

const projects = [
  {
    id: 1,
    image: project4,
    title: 'Couverture Tuiles Terra Cotta',
    location: 'Carouge, Genève',
    category: 'Couverture',
    description: 'Réfection complète de toiture avec tuiles premium terra cotta et fenêtres de toit Velux.',
  },
  {
    id: 2,
    image: project5,
    title: 'Zinguerie Architecturale',
    location: 'Lancy, Genève',
    category: 'Zinguerie',
    description: 'Installation de zinguerie sur-mesure avec finitions artisanales et étanchéité parfaite.',
  },
  {
    id: 3,
    image: project6,
    title: 'Rénovation Toiture Complète',
    location: 'Onex, Genève',
    category: 'Rénovation',
    description: 'Transformation totale incluant isolation thermique et double vitrage.',
  },
  {
    id: 4,
    image: project7,
    title: 'Couverture & Zinguerie',
    location: 'Plan-les-Ouates',
    category: 'Couverture',
    description: 'Projet combinant couverture premium et travaux de zinguerie complexes.',
  },
  {
    id: 5,
    image: project8,
    title: 'Lucarne Zinc Premium',
    location: 'Vernier, Genève',
    category: 'Zinguerie',
    description: 'Habillage de lucarne en zinc avec finitions cuivre et étanchéité garantie.',
  },
  {
    id: 6,
    image: project9,
    title: 'Fenêtre de Toit Cuivre',
    location: 'Thônex, Genève',
    category: 'Rénovation',
    description: 'Abergement Velux en cuivre sur couverture tuiles Alpha 10 ardoises grises.',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const filteredProjects = projects.filter(
    project => activeCategory === 'Tous' || project.category === activeCategory
  );

  const currentIndex = selectedProject 
    ? filteredProjects.findIndex(p => p.id === selectedProject.id)
    : -1;

  const navigateProject = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredProjects.length
      : (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-light-grey text-charcoal">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-gold-dark font-montserrat text-sm font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-charcoal">
            Nos <span className="text-gradient-gold">Réalisations</span>
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Découvrez notre savoir-faire à travers nos projets récents
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-montserrat text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gold text-background'
                  : 'bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-gold text-background text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-montserrat text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="flex items-center gap-1 text-white/80 text-sm">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </p>
                </div>
              </div>

              {/* Category badge (always visible) */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-gold text-background text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button 
            variant="gold" 
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discutons de Votre Projet
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-card rounded-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/50 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation */}
            <button
              onClick={() => navigateProject('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/50 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateProject('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/50 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="aspect-square md:aspect-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 bg-gold text-background text-xs font-semibold rounded-full mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                  {selectedProject.title}
                </h3>
                <p className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </p>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                <Button 
                  variant="gold"
                  onClick={() => {
                    setSelectedProject(null);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Demander un Projet Similaire
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
