import { Heart, Instagram, Mail, Palette } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-current rounded-full" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-current rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-current rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-2xl font-bold hover:text-secondary-glow transition-colors"
            >
              <Palette className="w-8 h-8" />
              <span>Elena Rivera</span>
            </button>
            <p className="mt-2 text-primary-foreground/70">
              Contemporary Painter & Visual Artist
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="mailto:elena@elenarivera.art" 
              className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Elena Rivera. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-1 flex items-center justify-center md:justify-end space-x-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 fill-current" />
              <span>for art lovers</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-primary-foreground/60">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
            </div>
            <p>San Francisco, California</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;