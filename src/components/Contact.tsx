import { useIntersectionObserver } from '@/hooks/useAnimations';
import { Button } from '@/components/ui/button';
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
  timeline: string;
  consent: boolean;
};

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: '',
    timeline: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Nom requis';
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Téléphone requis';
    if (!formData.projectType) newErrors.projectType = 'Type de projet requis';
    if (formData.description.length < 20) {
      newErrors.description = 'Description trop courte (min 20 caractères)';
    }
    if (!formData.consent) newErrors.consent = 'Veuillez accepter';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Message envoyé!",
      description: "Nous vous recontacterons sous 24h.",
    });
  };

  const inputClass = (field: keyof FormData) => `
    w-full px-4 py-3 rounded-lg bg-muted border transition-all duration-300
    focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold
    ${errors[field] ? 'border-destructive' : 'border-border'}
  `;

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <span className="inline-block text-gold font-montserrat text-sm font-semibold uppercase tracking-wider mb-4">
            Contact
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Votre Projet <span className="text-gradient-gold">Commence Ici</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Demandez votre devis gratuit et sans engagement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <div className="glass p-8 md:p-10 rounded-2xl border border-border/50">
              <h3 className="font-montserrat text-2xl font-bold mb-2">
                Demandez Votre Devis Gratuit
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Réponse garantie sous 24h • Sans engagement
              </p>

              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="font-montserrat text-xl font-bold mb-2">
                    Message Envoyé!
                  </h4>
                  <p className="text-muted-foreground">
                    Nous vous recontacterons sous 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom et Prénom *
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom complet"
                      className={inputClass('name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        placeholder="votre@email.com"
                        className={inputClass('email')}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        placeholder="+41 XX XXX XX XX"
                        className={inputClass('phone')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type de Projet *</label>
                      <select
                        className={inputClass('projectType')}
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="couverture">Couverture</option>
                        <option value="zinguerie">Zinguerie</option>
                        <option value="renovation">Rénovation</option>
                        <option value="habillage">Habillage</option>
                        <option value="charpente">Charpente</option>
                        <option value="autre">Autre</option>
                      </select>
                      {errors.projectType && <p className="text-destructive text-xs mt-1">{errors.projectType}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Estimé</label>
                      <select
                        className={inputClass('budget')}
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="<10000">&lt; CHF 10'000</option>
                        <option value="10000-30000">CHF 10-30'000</option>
                        <option value="30000-50000">CHF 30-50'000</option>
                        <option value="50000-100000">CHF 50-100'000</option>
                        <option value=">100000">&gt; CHF 100'000</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description du Projet *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Décrivez-nous votre projet en quelques lignes..."
                      className={inputClass('description')}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                    {errors.description && <p className="text-destructive text-xs mt-1">{errors.description}</p>}
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Délai Souhaité</label>
                    <select
                      className={inputClass('timeline')}
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="urgent">Urgent</option>
                      <option value="1-3">1-3 mois</option>
                      <option value="3-6">3-6 mois</option>
                      <option value=">6">+6 mois</option>
                    </select>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 w-4 h-4 accent-gold"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      J'accepte d'être contacté par Swiss Prestige Build *
                    </label>
                  </div>
                  {errors.consent && <p className="text-destructive text-xs">{errors.consent}</p>}

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma Demande
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-400 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
            <h3 className="font-montserrat text-2xl font-bold mb-8">
              Contactez-Nous
            </h3>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p className="text-muted-foreground text-sm">
                    Avenue des grandes communes 8<br />
                    1213 Lancy, Genève, Suisse
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <a
                    href="tel:+41000000000"
                    className="text-gold hover:underline text-sm"
                  >
                    +41 XX XXX XX XX
                  </a>
                  <p className="text-muted-foreground text-xs mt-1">
                    <Clock className="w-3 h-3 inline mr-1" />
                    Lun-Ven: 8h-18h, Sam: 9h-14h
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:contact@swissprestigebuild.ch"
                    className="text-gold hover:underline text-sm"
                  >
                    contact@swissprestigebuild.ch
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-10">
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.8!2d6.1169!3d46.1834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDExJzAwLjIiTiA2wrAwNycwMC44IkU!5e0!3m2!1sen!2sch!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Swiss Prestige Build Location"
              />
            </div>

            {/* CTA to full page */}
            <div className="mt-8 text-center">
              <Link to="/contact" className="text-gold hover:underline text-sm font-medium">
                Voir la page contact complète →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
