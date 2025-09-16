import { Palette, Award, Users, Heart } from 'lucide-react';
import artistPhoto from '../assets/artist-photo.jpg';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Awards",
      description: "Recognition for contemporary art excellence"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "200+ Collectors",
      description: "Artwork in private collections worldwide"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "8 Years",
      description: "Professional painting experience"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "50+ Exhibitions",
      description: "Solo and group shows internationally"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-artwork">
              <img
                src={artistPhoto}
                alt="Elena Rivera in her studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-coral rounded-full float-gentle opacity-60" />
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent-teal rounded-full float-delayed opacity-50" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-section-title">About Elena</h2>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  Elena Rivera is a contemporary painter whose work bridges the gap between 
                  abstract expressionism and modern realism. Born and raised in California, 
                  she discovered her passion for painting at an early age and has since developed 
                  a distinctive style that captures raw emotion through vibrant color palettes.
                </p>
                <p>
                  Her artistic journey has been shaped by extensive travels and a deep connection 
                  to nature. Elena's work explores themes of human emotion, environmental beauty, 
                  and the subtle relationships between color and feeling. Each painting is a 
                  meditation on the complexity of human experience.
                </p>
                <p>
                  When she's not painting, Elena teaches workshops and mentors emerging artists, 
                  believing that art has the power to heal and connect people across all boundaries.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <div className="text-primary mb-3">
                    {achievement.icon}
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="btn-hero">
                View Full Biography
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;