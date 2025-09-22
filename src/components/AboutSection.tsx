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
                  Jaren geleden ben ik gegrepen door het schildersvak. De emotie 
                  en liefde die ik in kunst stop, geven mij een gevoel van vrijheid. 
                  Ik ben geboren in Zweden. In de bossen en wilde natuur. Al vroeg 
                  maakte ik kennis met de kracht en pracht van simpel. Puur. Dat zie je
                  terug in mijn werk. 
                </p>
                <p>
                  Met fijn kleurgebruik, warme of juist koele tinten en wilde penseelstreken
                  breng ik het avontuur naar de muur. Om kennis te maken met mijn werk, vraag ik 
                  je de tijd te nemen. Wat is er wel, maar zie je niet? Welk gevoel 
                  krijg je bij het tafereel voor je? Roept het misschien een herinnering op?
                  Maar bovenal: geniet! Want dáár is mijn kunst voor.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-primary p-6 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <div className="text-accent-warm mb-3">
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