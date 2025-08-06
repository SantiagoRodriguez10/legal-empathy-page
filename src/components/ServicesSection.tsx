import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  BriefcaseBusiness,
  Heart,
  Car,
  Building,
  FileText,
  Shield,
  Home,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Derecho de Familia",
      description:
        "Divorcios, cuota alimentaria, régimen de visitas y adopciones. Te acompañamos en momentos difíciles con sensibilidad y profesionalismo.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Derecho Laboral",
      description:
        "Despidos, accidentes laborales, indemnizaciones y conflictos con empleadores. Defendemos tus derechos en el ámbito del trabajo.",
    },
    {
      icon: FileText,
      title: "Sucesiones",
      description:
        "Tramitación de herencias, testamentos y división de bienes. Simplificamos procesos complejos para tu tranquilidad.",
    },
    {
      icon: Car,
      title: "Accidentes de Tránsito",
      description:
        "Reclamos por daños, lesiones y seguros. Obtenemos la compensación que merecés por accidentes viales.",
    },
    {
      icon: Shield,
      title: "Derecho Previsional",
      description:
        "Jubilaciones, pensiones y trámites ante ANSES. Te ayudamos a acceder a los beneficios que te corresponden.",
    },
    {
      icon: Building,
      title: "Derecho Inmobiliario",
      description:
        "Compraventa, alquileres, escrituras y conflictos de propiedad. Seguridad jurídica en todas tus operaciones inmobiliarias.",
    },
    {
      icon: Users,
      title: "Derecho Civil",
      description:
        "Contratos, responsabilidad civil y daños y perjuicios. Soluciones integrales para conflictos civiles.",
    },
    {
      icon: Home,
      title: "Derecho del Consumidor",
      description:
        "Defensa ante empresas de servicios, bancos y comercios. Protegemos tus derechos como consumidor.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-section-alt">
      <div className="section-container section-padding">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Brindamos asesoramiento integral en diversas áreas del derecho, con
            un enfoque personalizado para cada cliente y situación particular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="fade-in card-shadow hover:scale-105 hover:border-secondary/30 transition-smooth border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-6">
            ¿No encontrás tu caso específico? Cada situación es única y puede
            presentar matices particulares.
          </p>
          <p className="text-primary font-semibold">
            Contanos tu caso y te ofreceremos una solución personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;