import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import artwork1 from '../assets/artwork-1.jpg';
import artwork2 from '../assets/artwork-2.jpg';
import artwork3 from '../assets/artwork-3.jpg';
import artwork4 from '../assets/artwork-4.jpg';

interface Artwork {
  id: number;
  title: string;
  medium: string;
  year: string;
  description: string;
  image: string;
  category: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Emotional Resonance",
    medium: "Oil on Canvas",
    year: "2024",
    description: "An exploration of raw emotion through bold brushstrokes and vibrant color harmonies.",
    image: artwork1,
    category: "Abstract"
  },
  {
    id: 2,
    title: "Serene Horizons", 
    medium: "Acrylic on Canvas",
    year: "2024",
    description: "A contemplative landscape that captures the quiet beauty of nature's gentle transitions.",
    image: artwork2,
    category: "Landscape"
  },
  {
    id: 3,
    title: "Garden Symphony",
    medium: "Oil on Canvas", 
    year: "2023",
    description: "A celebration of life and beauty through the timeless subject of flowers.",
    image: artwork3,
    category: "Still Life"
  },
  {
    id: 4,
    title: "Inner Light",
    medium: "Mixed Media",
    year: "2023", 
    description: "A contemporary portrait exploring the depths of human emotion and connection.",
    image: artwork4,
    category: "Portrait"
  }
];

const GallerySection = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Abstract', 'Landscape', 'Still Life', 'Portrait'];

  const filteredArtworks = filter === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title">Featured Artwork</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated selection of my latest works, each piece representing a unique journey 
            of creative expression and emotional discovery.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-primary-foreground shadow-elegant'
                  : 'bg-accent text-accent-foreground hover:bg-primary/20 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
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

        {/* Modal */}
        {selectedArtwork && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-glow">
              <div className="relative">
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <X className="w-6 h-6" />
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
                    <p className="text-foreground leading-relaxed">
                      {selectedArtwork.description}
                    </p>
                    <button className="btn-gallery mt-6">
                      Inquire About This Piece
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