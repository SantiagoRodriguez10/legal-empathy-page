import { Button } from "@/components/ui/button";
import {
  Scale,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "proceso", label: "Proceso" },
    { id: "preguntas", label: "FAQ" },
    { id: "contacto", label: "Contacto" },
  ];

  const legalAreas = [
    "Derecho de Familia",
    "Derecho Laboral",
    "Sucesiones",
    "Accidentes de Tránsito",
    "Derecho Previsional",
    "Derecho Inmobiliario",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container section-padding">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand and description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-secondary text-secondary-foreground p-2 rounded-md">
                  <Scale size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Estudio Jurídico</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Profesional
                  </p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Asesoramiento legal claro, humano y profesional. Defendemos tus
                derechos con compromiso y excelencia.
              </p>
              <div className="flex space-x-3">
                <button className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-md transition-fast">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-md transition-fast">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-md transition-fast">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-fast"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Areas */}
            <div>
              <h4 className="font-semibold mb-6">Áreas Legales</h4>
              <ul className="space-y-3">
                {legalAreas.map((area, index) => (
                  <li key={index}>
                    <span className="text-primary-foreground/80">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-primary-foreground">+54 11 1234-5678</p>
                    <p className="text-primary-foreground/80 text-sm">
                      WhatsApp disponible
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-primary-foreground">
                      consultas@estudiojuridico.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-primary-foreground">
                      Av. Corrientes 1234, Piso 5
                    </p>
                    <p className="text-primary-foreground/80 text-sm">
                      CABA, Argentina
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-primary-foreground/20 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitás asesoramiento legal?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              No esperes más. La primera consulta es gratuita y puede ser el
              primer paso para resolver tu situación legal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold px-8 py-3 button-shadow"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Consulta Gratuita
              </Button>
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-3"
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Estudio Jurídico Profesional. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                Política de Privacidad
              </button>
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;