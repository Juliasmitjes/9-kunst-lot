import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import artwork1 from '../assets/artwork-1.jpg';
import artwork2 from '../assets/artwork-2.jpg';
import artwork3 from '../assets/artwork-3.jpg';
import artwork4 from '../assets/artwork-4.jpg';
import artwork5 from '../assets/artwork-5.jpg';
import artwork6 from '../assets/artwork-6.jpg';
import artwork7 from '../assets/artwork-7.png';

interface Artwork {
  id: number;
  title: string;
  medium: string;
  year: string;
  description: string;
  image: string;
  category: string;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  }
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Fantasie",
    medium: "Olieverf",
    year: "2024",
    description: "Warme tinten geven dit vrolijke tafereel een gezellige sfeer.",
    image: artwork1,
    category: "Landschap",
    dimensions: {
      height: '180 cm',
      width: '120 cm', 
      depth: '120 cm'
  }
  },

  {
    id: 2,
    title: "minus 17 gr. C", 
    medium: "Acryl",
    year: "2025",
    description: "Een woest werk dat mooi staat in een rustige ruimte.",
    image: artwork2,
    category: "Landschap",
    dimensions: {
      height: '180 cm',
      width: '120 cm', 
      depth: '120 cm'
  }
  },

  {
    id: 3,
    title: "Bloemen",
    medium: "Olieverf", 
    year: "2019",
    description: "Mooie bloemen vullen de kamer met vrolijkheid.",
    image: artwork3,
    category: "Stilleven",
     dimensions: {
      height: '180 cm',
      width: '120 cm', 
      depth: '120 cm'
  }
  },

  {
    id: 4,
    title: "Zweden",
    medium: "Mixed Media",
    year: "2023", 
    description: "Een stilleven, dat doet denken aan het Zweden van vroeger.",
    image: artwork4,
    category: "Portrtret",
     dimensions: {
      height: '180 cm',
      width: '120 cm', 
      depth: '120 cm'
  }
  },

    {
    id: 5,
    title: "Zweden",
    medium: "Mixed Media",
    year: "2023", 
    description: "Een stilleven, dat doet denken aan het Zweden van vroeger.",
    image: artwork5,
    category: "Portrtret",
     dimensions: {
      height: '180 cm',
      width: '120 cm', 
      depth: '120 cm'
  }
  },

    {
    id: 6,
    title: "Zweden",
    medium: "Mixed Media",
    year: "2023", 
    description: "Een stilleven, dat doet denken aan het Zweden van vroeger.",
    image: artwork6,
    category: "Portrtret",
     dimensions: {
      height: '180 cm',
      width: '120 cm', 
      depth: '120 cm'
  }
  },

    {
    id: 7,
    title: "Zweden",
    medium: "Mixed Media",
    year: "2023", 
    description: "Een stilleven, dat doet denken aan het Zweden van vroeger.",
    image: artwork7,
    category: "Portrtret",
     dimensions: {
      height: '180 cm',
      width: '120 cm', 
      depth: '120 cm'
  }
  }
];

const GallerySection = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState('Alle');

  const categories = ['Alle', 'Abstract', 'Landschap', 'Stilleven', 'Portret'];

  const filteredArtworks = filter === 'Alle' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === filter);
    

  return (

    // bg-gradient-to-b from-background to-accent/5
    <section id="gallery" className="py-20 bg-accent-coral">
      <div className="container mx-auto px-6">
        {/* header*/}
        <div className="text-center mb-16">
          <h2 className=" text-3xl md:text-4xl font-bold mb-6 text-muted-foreground">Schilderijen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bekijk een selectie van mijn schilderijen. Ik schilder in opdracht, maar zelfverzonnen taferelen. Mijn kleurgerbuik is rustig, ... 
          </p>
        </div>

        {/* filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer duration-300 ${
                filter === category
                  ? 'bg-primary text-primary-foreground shadow-elegant'
                  : 'bg-accent text-accent-foreground hover:bg-accent/60 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* gallerij grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="artwork-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">{artwork.title}</h3>
                  <p className="text-sm opacity-90">{artwork.medium} • {artwork.year}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ingezoomd */}
        {selectedArtwork && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-glow">
              <div className="relative">
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <X className="w-6 h- cursor-pointer" />
                </button>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={selectedArtwork.image}
                      alt={selectedArtwork.title}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                        {selectedArtwork.category}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {selectedArtwork.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {selectedArtwork.medium} • {selectedArtwork.year}
                      </p>
                    </div>
                    <p className="text-foreground leading-relaxed mb-4">
                      {selectedArtwork.description}
                    </p>
                     <p className="text-muted-foreground text-sm mb-4">
                      {selectedArtwork.dimensions.height} × {selectedArtwork.dimensions.width}
                    </p>
                    <button
                    className="btn-gallery mt-6 cursor-pointer"
                    onClick={() => {
                      setSelectedArtwork(null); 
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Informeer naar dit stuk
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;