import { useState, useEffect, useCallback } from 'react';
import { useIntersectionObserver } from '@/hooks/useAnimations';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Travail impeccable sur notre toiture. L'équipe est professionnelle, ponctuelle et soigneuse. Le résultat dépasse nos attentes. Je recommande vivement!",
    name: 'Marie & Pierre L.',
    location: 'Carouge, Genève',
    initials: 'ML',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Rénovation complète de notre façade. Conseil expert, matériaux de qualité, finitions parfaites. Swiss Habitat Group a transformé notre maison!',
    name: 'Jean-Marc B.',
    location: 'Lancy, Genève',
    initials: 'JB',
    rating: 5,
  },
  {
    id: 3,
    quote: "Charpente refaite à neuf avec une rapidité surprenante. Équipe sympathique et compétente. Prix correct pour une qualité suisse irréprochable.",
    name: 'Sophie T.',
    location: 'Onex, Genève',
    initials: 'ST',
    rating: 5,
  },
  {
    id: 4,
    quote: 'Zinguerie et gouttières installées. Travail soigné, chantier propre. Communication excellente du début à la fin. Bravo!',
    name: 'François M.',
    location: 'Plan-les-Ouates',
    initials: 'FM',
    rating: 5,
  },
  {
    id: 5,
    quote: 'Projet de A à Z géré parfaitement. Devis respecté, délais tenus. On se sent en confiance avec Swiss Habitat Group.',
    name: 'Isabelle & Marc D.',
    location: 'Vernier, Genève',
    initials: 'ID',
    rating: 5,
  },
  {
    id: 6,
    quote: 'La meilleure entreprise de couverture de Genève! Professionnalisme, qualité, ponctualité. Nous sommes ravis du résultat.',
    name: 'Thomas R.',
    location: 'Thônex, Genève',
    initials: 'TR',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const itemsPerView = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-rotate
  useEffect(() => {
    if (isPaused || !isIntersecting) return;
    
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, isIntersecting, next]);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-light-grey text-charcoal overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-gold-dark font-montserrat text-sm font-semibold uppercase tracking-wider mb-4">
            Témoignages
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-charcoal">
            Ils Nous Font <span className="text-gradient-gold">Confiance</span>
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de notre travail
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-charcoal/10 hover:bg-gold hover:text-background flex items-center justify-center transition-all"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-charcoal/10 hover:bg-gold hover:text-background flex items-center justify-center transition-all"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-8 md:mx-16">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full lg:w-[calc(33.333%-1rem)] transition-all duration-500 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-gold mb-4" />

                    {/* Quote */}
                    <p className="text-charcoal/80 leading-relaxed flex-grow mb-6 italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="font-montserrat font-bold text-gold">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-montserrat font-semibold text-charcoal">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-charcoal/60">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-gold w-8' 
                    : 'bg-charcoal/20 hover:bg-charcoal/40'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
