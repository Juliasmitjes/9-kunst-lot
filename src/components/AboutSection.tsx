import { Palette, Award, Users, Heart } from 'lucide-react';
import artistPhoto from '../assets/artist-photo.jpg';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "10 jaar",
      description: "Ervaring in de schilderkunst"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "10+ tentoonstellingen",
      description: "Indivudele- en groepstentoonstellingen in en rondom Amsterdam"
    }
  ];

  return (
    <section id="about" className="py-20 gradient-hero">
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
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className=" text-3xl md:text-4xl font-bold text-muted-foreground mb-6">Over mij</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;