import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿La primera consulta tiene algún costo?",
      answer:
        "No, la primera consulta es completamente gratuita y sin compromiso. Durante esta reunión evaluamos tu caso y te orientamos sobre las mejores opciones disponibles.",
    },
    {
      question: "¿Cuánto tiempo demora resolver un caso legal?",
      answer:
        "Los tiempos varían según la complejidad de cada caso y el tipo de procedimiento. En la primera consulta te daremos una estimación aproximada basada en tu situación particular.",
    },
    {
      question: "¿Cómo se calculan los honorarios profesionales?",
      answer:
        "Los honorarios se calculan según la complejidad del caso, el tiempo requerido y los aranceles del Colegio de Abogados. Siempre trabajamos con presupuestos transparentes y acordados previamente.",
    },
    {
      question: "¿Puedo contactarlos fuera del horario de oficina?",
      answer:
        "Sí, entendemos que las urgencias legales no tienen horario. Tenemos disponibilidad para consultas urgentes las 24 horas. Contactanos y te responderemos a la brevedad.",
    },
    {
      question: "¿Trabajan casos en todo el país?",
      answer:
        "Principalmente trabajamos en [Ciudad/Provincia], pero también podemos asesorarte en casos que requieran gestiones en otras jurisdicciones a través de nuestra red de colegas.",
    },
    {
      question: "¿Qué documentación necesito para la primera consulta?",
      answer:
        "Traé toda la documentación relacionada con tu caso: contratos, correspondencia, sentencias previas, etc. Si no tenés algún documento, no te preocupes, te orientaremos sobre cómo obtenerlo.",
    },
    {
      question: "¿Manejan casos de mediación o solo juicios?",
      answer:
        "Trabajamos tanto en mediaciones como en procesos judiciales. Siempre buscamos la solución más eficiente y económica para cada caso, priorizando la mediación cuando es posible.",
    },
    {
      question: "¿Cómo me mantienen informado sobre el avance de mi caso?",
      answer:
        "Mantenemos comunicación constante a través de llamadas, emails y reuniones periódicas. Cada cliente recibe informes regulares sobre el estado y avances de su caso.",
    },
  ];

  return (
    <section id="preguntas" className="py-20 bg-muted/30">
      <div className="section-container section-padding">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Respondemos las dudas más comunes para que tengas toda la
            información necesaria antes de contactarnos
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 card-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary-light transition-fast">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16 fade-in">
          <div className="bg-primary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">
              ¿No encontraste la respuesta que buscabas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contactanos directamente y te responderemos todas tus dudas de
              manera personalizada.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contacto");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-3 rounded-md transition-smooth button-shadow"
            >
              Hacer una Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;