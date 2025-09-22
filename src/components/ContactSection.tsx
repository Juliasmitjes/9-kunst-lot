import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
  //   toast({
  //     title: "Message Sent!",
  //     description: "Thank you for your interest. Elena will get back to you soon.",
  //   });
  //   setFormData({ name: '', email: '', subject: '', message: '' });
  // };
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "charlottebecker@hotmail.com",
      href: "mailto:charlottebecker@hotmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefoonnummer", 
      details: "06 12345678",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Atelier",
      details: "Amsterdam",
      href: null
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary-glow">
      <div className="container mx-auto px-6">

        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title">Neem contact op</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Wil je een schilderij in opdracht laten maken, een werk kopen of samenwerken?
            Leuk! Ik denk graag met je mee.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-muted-foreground mb-6">Even kennismaken?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Of je nu een schilderij op maat wilt laten maken, een bestaand werk wilt kopen,
                of gewoon over kunst wilt praten: ik vind het altijd leuk om in contact te komen met andere kunstliefhebbers.
              </p>
            </div>

            {/* informatie blokken */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-card rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  {info.href ? (
                    <a href={info.href} className="text-primary hover:text-primary/80 hover:scale-110 transition-all duration-300">
                      {info.icon}
                    </a>
                  ) : (
                    <div className="text-primary">{info.icon}</div>
                  )}

                  <div>
                    <h4 className="font-semibold text-muted-foreground">{info.title}</h4>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* contactformulier */}
          <div className="bg-card p-8 rounded-2xl shadow-artwork">
            <h3 className="text-2xl font-bold text-muted-foreground mb-6">Stuur mij een bericht</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Je naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="jouw@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-mmuted-foreground mb-2">
                  Onderwerp *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Kies een onderwerp</option>
                  <option value="commission">Opdracht aanvragen</option>
                  <option value="purchase">Vraag over kunstwerk</option>
                  <option value="exhibition">Expositie mogelijkheid</option>
                  <option value="other">Anders</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                  placeholder="Wat heb je in gedachten?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground cursor-pointer font-medium py-4 px-6 rounded-lg hover:bg-primary-glow hover:shadow-elegant hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Verstuur bericht</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;