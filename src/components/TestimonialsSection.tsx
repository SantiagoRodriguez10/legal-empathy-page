import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      case: "Derecho de Familia",
      rating: 5,
      text: "Excelente atención y profesionalismo. Me acompañaron durante todo el proceso de divorcio con mucha paciencia y claridad. Recomiendo totalmente sus servicios.",
    },
    {
      name: "Carlos Rodríguez",
      case: "Accidente Laboral",
      rating: 5,
      text: "Gracias a su trabajo pude obtener la indemnización que me correspondía después de un accidente en el trabajo. Muy profesionales y transparentes en todo momento.",
    },
    {
      name: "Ana Martínez",
      case: "Sucesión",
      rating: 5,
      text: "Simplificaron todo el proceso de sucesión de mi padre. Lo que parecía muy complicado, ellos lo resolvieron de manera rápida y eficiente. Muy agradecida.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-secondary fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-section-alt">
      <div className="section-container section-padding">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro y la
            mejor validación de nuestro trabajo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="fade-in card-shadow hover:scale-105 transition-smooth relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client info */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.case}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">
              ¿Querés compartir tu experiencia?
            </h3>
            <p className="text-muted-foreground">
              Tu opinión es muy importante para nosotros y ayuda a otros
              clientes a conocer nuestro trabajo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;