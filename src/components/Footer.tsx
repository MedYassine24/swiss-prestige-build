import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'À Propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Devis Gratuit', href: '#contact' },
];

const certifications = [
  'ISO 9001 Certified',
  'Garantie Décennale',
  'Association Suisse des Couvreurs',
  'Assurance RC Complète',
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="Swiss Habitat Group" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gold font-montserrat font-medium mb-4">
              Excellence Suisse en Construction
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour tous vos projets de construction 
              et rénovation à Genève.
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
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm gold-underline inline-block"
                  >
                    {link.label}
                  </a>
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
              © {currentYear} Swiss Habitat Group SA. Tous droits réservés.
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
