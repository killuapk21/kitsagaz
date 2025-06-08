
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Timer, ShoppingCart, Zap, MessageCircle } from 'lucide-react';

const PricingSection = () => {
  const handleBuyClick = () => {
    window.open('https://www.natura.com.br/p/presente-natura-homem-sagaz-3-produtos/NATBRA-184883?position=1&listTitle=search+results+list+showcase+-+kit+sagaz&consultoria=jeffalvesconsultor', '_blank');
  };

  const handleWhatsAppClick = () => {
    // Substitua 5511999999999 pelo seu número do WhatsApp com código do país
    const phoneNumber = '5511993846894';
    const message = encodeURIComponent('Olá! Tenho interesse no Kit Natura Homem Sagaz com desconto especial.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-natura-red/20 via-red-900/15 to-natura-dark/10 py-8 sm:py-12 border-y-2 border-natura-gold/40">
      <div className="container mx-auto max-w-4xl px-3 sm:px-4">
        <div className="text-center animate-fade-in">
          {/* Badge de Oferta */}
          <Badge className="mb-4 sm:mb-6 bg-natura-gold text-natura-dark hover:bg-natura-gold/90 text-xs sm:text-sm md:text-base font-bold px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 inline-flex items-center animate-pulse-gold shadow-lg">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
            OFERTA LIMITADA - 37% OFF
          </Badge>

          {/* Preços */}
          <div className="bg-gradient-to-br from-white/95 to-red-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 lg:p-10 border-2 border-natura-gold/50 mx-2 sm:mx-0">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-4 sm:mb-6 lg:mb-8">
              {/* Preço Antigo */}
              <div className="text-center">
                <p className="text-natura-dark/60 text-xs sm:text-sm md:text-base mb-1">De:</p>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natura-dark/50 line-through">
                  R$ 316,70
                </p>
              </div>

              {/* Seta/Divider */}
              <div className="hidden sm:block text-natura-red text-xl md:text-2xl lg:text-3xl font-bold">→</div>

              {/* Preço Novo */}
              <div className="text-center">
                <p className="text-natura-red text-xs sm:text-sm md:text-base mb-1 font-semibold">Por apenas:</p>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-natura-red">
                  R$ 199,90
                </p>
              </div>
            </div>

            {/* Economia */}
            <div className="bg-gradient-to-r from-natura-gold/30 to-natura-gold/20 rounded-xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 lg:mb-8 mx-1 sm:mx-0 border border-natura-gold/30">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-natura-dark text-center">
                🎯 Você economiza R$ 116,80!
              </p>
              <p className="text-xs sm:text-sm md:text-base text-natura-dark/70 text-center mt-2">
                Desconto de 37% aplicado automaticamente
              </p>
            </div>

            {/* Elementos de Urgência */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base">
              <div className="flex items-center text-natura-red font-semibold">
                <Timer className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                Oferta por tempo limitado
              </div>
              <div className="hidden sm:block text-natura-dark/30">•</div>
              <div className="text-natura-dark/70">
                Últimas unidades disponíveis
              </div>
            </div>

            {/* CTA Principal */}
            <Button 
              onClick={handleBuyClick}
              className="w-full max-w-sm mx-auto h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg lg:text-xl font-bold luxury-gradient hover:bg-natura-red/90 text-white shadow-xl animate-pulse-gold px-4 sm:px-6 md:px-8 mb-4"
            >
              <ShoppingCart className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              GARANTIR MINHA OFERTA
            </Button>

            {/* CTA WhatsApp */}
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="w-full max-w-sm mx-auto h-12 sm:h-14 text-sm sm:text-base md:text-lg font-semibold border-2 border-green-500 text-green-600 hover:bg-green-50 shadow-lg px-4 sm:px-6 md:px-8"
            >
              <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              FALAR NO WHATSAPP
            </Button>

            <p className="text-2xs sm:text-xs md:text-sm text-natura-dark/60 mt-3 sm:mt-4">
              ✅ Entrega rápida e segura • ✅ Embalagem para presente inclusa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
