import { ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-accent-coral rounded-full float-gentle opacity-60" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-accent-teal rounded-full float-delayed opacity-40" />
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-accent-purple rounded-full float-gentle opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-artist-signature mb-6 leading-tight">
            Elena Rivera
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Contemporary Painter & Visual Artist
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of emotion and color through abstract expressionism 
            and contemporary realism. Each piece tells a story of human experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="btn-hero"
              onClick={scrollToGallery}
            >
              View My Work
            </button>
            <button 
              className="btn-gallery"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Commission a Piece
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToGallery}
            className="p-2 rounded-full bg-primary/10 backdrop-blur-sm hover:bg-primary/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;