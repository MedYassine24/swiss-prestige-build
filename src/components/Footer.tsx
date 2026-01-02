import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/portfolio' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

const certifications = [
  'Entreprise Suisse Certifiée',
  'Membre USPI',
  'Garantie Financière',
  'Assurance RC Pro',
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="lg" />
            </div>
            <p className="text-sm text-gold font-montserrat font-medium mb-4">
              Excellence Immobilière Suisse
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour la construction sur mesure
              et les solutions de rendement à taux fixe en Suisse.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/swisshabitatgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm gold-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Avenue des grandes communes 8<br />
                  1213 Lancy, Genève
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+41000000000" className="text-muted-foreground hover:text-gold text-sm">
                  +41 XX XXX XX XX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:contact@swisshabitat.ch" className="text-muted-foreground hover:text-gold text-sm">
                  contact@swisshabitat.ch
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Certifications</h4>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-muted-foreground text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Swiss Prestige Build SA. Tous droits réservés. <span className="hidden md:inline">|</span> <span className="block md:inline mt-2 md:mt-0">Réalisé par <a href="https://ty-dev.site" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-medium">TY Dev</a></span>
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-gold text-sm">
                Mentions Légales
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold text-sm">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold text-sm">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
