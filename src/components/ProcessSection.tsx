import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Search, FileCheck, Handshake } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Primera Consulta",
      description:
        "Conversamos sobre tu situación legal para entender tus necesidades y objetivos. Esta primera consulta es gratuita y sin compromiso.",
    },
    {
      number: "02",
      icon: Search,
      title: "Análisis del Caso",
      description:
        "Estudiamos en profundidad tu caso, analizamos la documentación y evaluamos las mejores estrategias legales disponibles.",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Planificación y Estrategia",
      description:
        "Desarrollamos un plan de acción personalizado, con cronograma claro y presupuesto transparente para tu caso específico.",
    },
    {
      number: "04",
      icon: Handshake,
      title: "Seguimiento y Resolución",
      description:
        "Te acompañamos durante todo el proceso, manteniéndote informado en cada etapa hasta lograr la mejor resolución posible.",
    },
  ];

  return (
    <section id="proceso" className="py-20 bg-muted/30">
      <div className="section-container section-padding">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un método probado que garantiza la mejor atención y resultados
            óptimos para cada cliente
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`fade-in flex flex-col md:flex-row items-center gap-8 mb-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step card */}
              <div className="flex-1">
                <Card className="card-shadow hover:scale-105 transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-primary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="bg-secondary text-secondary-foreground w-20 h-20 rounded-full flex items-center justify-center">
                  <step.icon className="w-10 h-10" />
                </div>
              </div>

              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-12 bg-border mt-32"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <div className="bg-primary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-muted-foreground mb-6">
              La primera consulta es gratuita y sin compromiso. Contanos tu
              situación y te orientaremos sobre los mejores pasos a seguir.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contacto");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold px-8 py-3 rounded-md transition-smooth button-shadow"
            >
              Iniciar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;