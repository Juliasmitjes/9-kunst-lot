import heroBg from '../assets/hero-bg.jpg';
import {Button} from "../components/ui/button";

const HeroSection = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* achtergrondafbeelding */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/50 to-background/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-artist-signature mb-6 leading-tight">
            Charlotte Becker
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Schilder en kunstenares
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Mijn werken bestaan uit portretten, landschappen en kleurrijke taferelen. Ik exposeer regelmatig op verschillende locaties in Amsterdam. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="opps"
              size="lg"
              onClick={scrollToGallery}
            >
              Bekijk mijn werk
            </Button>
            <button 
              className="btn-gallery cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Neem contact op
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;