import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Gift, Star, Clock, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import PricingSection from './PricingSection';

const LandingPage = () => {
  const handleCTAClick = () => {
    window.open('https://www.natura.com.br/p/presente-natura-homem-sagaz-3-produtos/NATBRA-184883?position=1&listTitle=search+results+list+showcase+-+kit+sagaz&consultoria=jeffalvesconsultor', '_blank');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511993846894';
    const message = encodeURIComponent('Olá! Tenho interesse no Kit Natura Homem Sagaz com desconto especial.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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
      <section className="relative px-3 sm:px-4 py-8 sm:py-12 lg:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
              <Badge className="mb-3 sm:mb-4 bg-natura-gold text-natura-dark hover:bg-natura-gold/90 text-2xs sm:text-xs md:text-sm font-semibold px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 inline-flex items-center">
                <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                DIA DOS NAMORADOS 2025
              </Badge>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                O Presente que
                <span className="block text-natura-gold">Marca História</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-red-100 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                Surpreenda com Natura Homem Sagaz: fragrância amadeirada intensa que proporciona 
                <strong className="text-natura-gold"> frescor e energia</strong> únicos.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center lg:justify-start mb-6 sm:mb-8 px-2 sm:px-0">
                <Badge variant="outline" className="border-natura-gold text-natura-gold bg-transparent text-2xs sm:text-xs md:text-sm px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1" />
                  Edição Limitada
                </Badge>
                <Badge variant="outline" className="border-white text-white bg-transparent text-2xs sm:text-xs md:text-sm px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5">
                  <Gift className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1" />
                  Pronto para Presentear
                </Badge>
                <Badge variant="outline" className="border-natura-gold text-natura-gold bg-transparent text-2xs sm:text-xs md:text-sm px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-1" />
                  Exclusivo
                </Badge>
              </div>

              {/* CTA Buttons */}
              <div className="px-2 sm:px-0 space-y-3 sm:space-y-4">
                <Button 
                  onClick={handleCTAClick}
                  className="w-full max-w-sm mx-auto lg:mx-0 h-11 sm:h-12 md:h-14 text-xs sm:text-sm md:text-base lg:text-lg font-bold luxury-gradient hover:bg-natura-red/90 text-white shadow-lg animate-pulse-gold px-3 sm:px-4 md:px-6"
                >
                  COMPRAR COM DESCONTO ESPECIAL
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </Button>

                <Button 
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="w-full max-w-sm mx-auto lg:mx-0 h-11 sm:h-12 md:h-14 text-xs sm:text-sm md:text-base lg:text-lg font-semibold border-2 border-green-500 text-green-600 hover:bg-green-50 shadow-lg px-3 sm:px-4 md:px-6"
                >
                  <MessageCircle className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  FALAR NO WHATSAPP
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-scale-in lg:animate-fade-in delay-300 order-1 lg:order-2">
              <div className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl mx-2 sm:mx-0">
                <img 
                  src="/lovable-uploads/3f73cd24-f957-4ea6-9445-ee20cafa65be.png"
                  alt="Kit Presente Natura Homem Sagaz - Dia dos Namorados"
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="400"
                />
                <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 bg-natura-gold text-natura-dark px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full font-bold text-2xs sm:text-xs md:text-sm shadow-lg animate-pulse-gold">
                  OFERTA ESPECIAL!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Benefits Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natura-dark mb-3 sm:mb-4 px-2 sm:px-0">
              Por que Escolher o Kit Natura Homem Sagaz?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4 sm:px-0">
              Mais que um presente, uma experiência sensorial única
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow border-2 hover:border-natura-red/20 mx-2 sm:mx-0">
                <CardContent className="p-0">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-natura-red mx-auto mb-2 sm:mb-3 md:mb-4" />
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-natura-dark py-6 sm:py-8 text-center">
        <div className="container mx-auto px-3 sm:px-4">
          <p className="text-white/80 text-xs sm:text-sm md:text-base">
            © 2025 Natura. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
