import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clientes Satisfechos",
    },
    {
      icon: Award,
      number: "15+",
      label: "Años de Experiencia",
    },
    {
      icon: CheckCircle,
      number: "95%",
      label: "Casos Exitosos",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Disponibilidad",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre el Estudio
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nuestro estudio jurídico se caracteriza por brindar un servicio
                legal integral, combinando la sólida experiencia profesional con
                un trato humano y cercano que marca la diferencia.
              </p>
              <p>
                Creemos firmemente que cada cliente merece una atención
                personalizada y un asesoramiento claro, sin tecnicismos
                innecesarios. Nuestro compromiso es acompañarte en cada paso del
                proceso legal, explicándote todas las opciones disponibles para
                que puedas tomar las mejores decisiones.
              </p>
              <p>
                La transparencia, la comunicación constante y la búsqueda de
                soluciones eficientes son los pilares que sostienen nuestro
                trabajo diario. Entendemos que los problemas legales pueden
                generar incertidumbre, por eso nos esforzamos en brindar
                tranquilidad a través de un servicio profesional y confiable.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Nuestros Valores
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                  Transparencia en cada proceso
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                  Comunicación clara y constante
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                  Atención personalizada
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                  Compromiso con la excelencia
                </li>
              </ul>
            </div>
          </div>

          {/* Image placeholder and stats */}
          <div className="fade-in">
            <div className="bg-muted rounded-lg p-8 mb-8 text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Dr./Dra. [Nombre]
              </h3>
              <p className="text-muted-foreground">
                Abogado/a especializado/a en múltiples áreas del derecho
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="fade-in card-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;