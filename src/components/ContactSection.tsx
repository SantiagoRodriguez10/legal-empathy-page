import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consulta enviada",
        description:
          "Hemos recibido tu consulta. Te responderemos a la brevedad.",
      });
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+54 11 1234-5678", "WhatsApp disponible"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["consultas@estudiojuridico.com", "info@estudiojuridico.com"],
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Av. Corrientes 1234, Piso 5", "Ciudad Autónoma de Buenos Aires"],
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun a Vie: 9:00 - 18:00", "Urgencias 24/7"],
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="section-container section-padding">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contactanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte. La primera consulta es gratuita y sin
            compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MessageSquare className="w-5 h-5" />
                  Enviar Consulta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nombre completo *
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+54 11 1234-5678"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensaje *
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Contanos brevemente sobre tu situación legal..."
                      rows={5}
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground button-shadow"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Consulta
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obligatorios. Te responderemos dentro de las 24
                    horas.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="fade-in space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground">
                Elegí el medio que más te convenga para contactarnos. Estamos
                disponibles para atenderte.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="card-shadow hover:scale-105 transition-smooth"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-muted-foreground text-sm"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency contact */}
            <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20">
              <h4 className="font-semibold text-primary mb-3">
                Consultas Urgentes
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                Para situaciones que requieren atención inmediata, contactanos
                vía WhatsApp o llamada telefónica.
              </p>
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contacto de Urgencia
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;