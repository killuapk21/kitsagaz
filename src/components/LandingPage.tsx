
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Gift, Star, Clock, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const LandingPage = () => {
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsapp) {
      toast({
        title: "WhatsApp obrigatório",
        description: "Por favor, insira seu número de WhatsApp",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio
    setTimeout(() => {
      toast({
        title: "Sucesso!",
        description: "Em breve você receberá mais informações no seu WhatsApp",
      });
      setIsSubmitting(false);
      // Redirecionar para WhatsApp
      window.open(`https://wa.me/5511999999999?text=Olá! Tenho interesse no Kit Natura Homem Sagaz para o Dia dos Namorados. WhatsApp: ${whatsapp}`, '_blank');
    }, 1500);
  };

  const benefits = [
    "Fragrância amadeirada intensa e marcante",
    "Frescor e energia que duram o dia todo",
    "Kit completo para cuidados masculinos",
    "Edição exclusiva Dia dos Namorados",
    "Embalagem especial com sacola de presente"
  ];

  const kitItems = [
    { item: "1 Deo Parfum 100ml", description: "Fragrância intensa e duradoura" },
    { item: "1 Desodorante corporal 100ml", description: "Exclusivo da edição especial" },
    { item: "1 Shampoo cabelo e corpo 100ml", description: "Exclusivo da edição especial" },
    { item: "1 Sacola de presente P com laço", description: "Ref: 184883 - Pronta para presentear" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-natura-red via-red-800 to-natura-dark overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-12 lg:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <Badge className="mb-4 bg-natura-gold text-natura-dark hover:bg-natura-gold/90 text-sm font-semibold px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                DIA DOS NAMORADOS 2024
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                O Presente que
                <span className="block text-natura-gold">Marca História</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-red-100 mb-8 leading-relaxed">
                Surpreenda com Natura Homem Sagaz: fragrância amadeirada intensa que proporciona 
                <strong className="text-natura-gold"> frescor e energia</strong> únicos.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <Badge variant="outline" className="border-natura-gold text-natura-gold bg-transparent">
                  <Clock className="w-4 h-4 mr-1" />
                  Edição Limitada
                </Badge>
                <Badge variant="outline" className="border-white text-white bg-transparent">
                  <Gift className="w-4 h-4 mr-1" />
                  Pronto para Presentear
                </Badge>
                <Badge variant="outline" className="border-natura-gold text-natura-gold bg-transparent">
                  <Star className="w-4 h-4 mr-1" />
                  Exclusivo
                </Badge>
              </div>

              {/* CTA Form */}
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl animate-scale-in">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-natura-dark mb-2">
                      Garante o Seu Agora!
                    </h3>
                    <p className="text-gray-600 font-medium">
                      Receba informações exclusivas no seu WhatsApp
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="tel"
                        placeholder="Seu WhatsApp (11) 99999-9999"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="pl-12 h-12 text-lg border-2 border-gray-200 focus:border-natura-red"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-bold luxury-gradient hover:bg-natura-red/90 text-white shadow-lg animate-pulse-gold"
                    >
                      {isSubmitting ? 'Enviando...' : (
                        <>
                          QUERO COMPRAR COM DESCONTO
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    🔒 Seus dados estão seguros conosco
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Image */}
            <div className="relative animate-scale-in lg:animate-fade-in delay-300">
              <div className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/lovable-uploads/3f73cd24-f957-4ea6-9445-ee20cafa65be.png"
                  alt="Kit Presente Natura Homem Sagaz - Dia dos Namorados"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-natura-gold text-natura-dark px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse-gold">
                  OFERTA ESPECIAL!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-natura-dark mb-4">
              Por que Escolher o Kit Natura Homem Sagaz?
            </h2>
            <p className="text-xl text-gray-600">
              Mais que um presente, uma experiência sensorial única
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-natura-red/20">
                <CardContent className="p-0">
                  <CheckCircle2 className="w-12 h-12 text-natura-red mx-auto mb-4" />
                  <p className="font-semibold text-gray-800">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kit Contents */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-natura-dark mb-4">
              O que Inclui no Kit Completo
            </h2>
            <Badge className="bg-natura-red text-white px-6 py-2 text-lg">
              Presente Natura Homem Sagaz
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {kitItems.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-natura-red">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-natura-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-natura-dark mb-1">
                        {item.item}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="bg-natura-dark py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="bg-gradient-to-r from-natura-red to-red-700 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ⏰ Oferta por Tempo Limitado!
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Estoque limitado para o Dia dos Namorados. Garante o seu antes que acabe!
            </p>
            
            <Button 
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-natura-gold text-natura-dark hover:bg-natura-gold/90 text-xl font-bold px-8 py-4 h-auto shadow-lg animate-pulse-gold"
            >
              GARANTIR MEU KIT AGORA
              <Heart className="ml-2 w-6 h-6" />
            </Button>
            
            <p className="text-red-200 text-sm mt-4">
              * Enquanto durarem os estoques
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-natura-dark py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/80">
            © 2024 Natura. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
