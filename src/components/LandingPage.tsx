
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Gift, Star, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const handleCTAClick = () => {
    // TODO: Replace this URL with your affiliate link
    window.open('https://www.natura.com.br/p/presente-natura-homem-sagaz-3-produtos/NATBRA-184883?position=1&listTitle=search+results+list+showcase+-+kit+sagaz&consultoria=jeffalvesconsultor', '_blank');
  };

  const benefits = [
    "Fragrância amadeirada intensa e marcante",
    "Frescor e energia que duram o dia todo",
    "Kit completo para cuidados masculinos",
    "Edição exclusiva Dia dos Namorados",
    "Embalagem especial com sacola de presente"
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
                DIA DOS NAMORADOS 2025
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

              {/* CTA Button */}
              <Button 
                onClick={handleCTAClick}
                className="w-full h-14 text-lg font-bold luxury-gradient hover:bg-natura-red/90 text-white shadow-lg animate-pulse-gold"
              >
                COMPRAR COM DESCONTO ESPECIAL
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
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

      {/* Footer */}
      <footer className="bg-natura-dark py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/80">
            © 2025 Natura. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
