import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-courthouse.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Content */}
      <div className="relative z-10 section-container section-padding text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary">
            Estudio Jurídico <span className="text-secondary">Profesional</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Asesoramiento legal claro, humano y profesional para proteger tus
            derechos y alcanzar tus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contacto")}
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold text-lg px-8 py-4 button-shadow"
            >
              Consulta Gratuita
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("servicios")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-4"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;