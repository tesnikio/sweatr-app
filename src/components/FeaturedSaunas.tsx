'use client';

import SaunaCard from "./SaunaCard";

const featuredSaunas = [
  {
    id: "1",
    title: "Nordic Forest Retreat",
    location: "Helsinki, Finland",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=1000&fit=crop",
    pricePerHour: 45,
    rating: 4.9,
    capacity: 4,
    temperature: 85,
    tags: ["Eucalyptus Scent", "Wood-fired", "Lake View"],
  },
  {
    id: "2",
    title: "Urban Zen Sanctuary",
    location: "Stockholm, Sweden",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=1000&fit=crop",
    pricePerHour: 65,
    rating: 4.8,
    capacity: 2,
    temperature: 90,
    tags: ["Silent Space", "Infrared", "Rooftop"],
  },
  {
    id: "3",
    title: "Lakeside Cedar Haven",
    location: "Oslo, Norway",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop",
    pricePerHour: 55,
    rating: 4.95,
    capacity: 6,
    temperature: 80,
    tags: ["Cold Plunge", "Private Dock", "Sunset Views"],
  },
  {
    id: "4",
    title: "Mountain Mist Cabin",
    location: "Åre, Sweden",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=1000&fit=crop",
    pricePerHour: 75,
    rating: 5.0,
    capacity: 8,
    temperature: 88,
    tags: ["Mountain View", "Dimmable Lights", "Herbal Steam"],
  },
  {
    id: "5",
    title: "Minimalist Glass Box",
    location: "Copenhagen, Denmark",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=1000&fit=crop",
    pricePerHour: 85,
    rating: 4.85,
    capacity: 4,
    temperature: 92,
    tags: ["Panoramic Glass", "Sound System", "Private"],
  },
  {
    id: "6",
    title: "Traditional Smoke Sauna",
    location: "Tampere, Finland",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    pricePerHour: 40,
    rating: 4.9,
    capacity: 10,
    temperature: 75,
    tags: ["Authentic", "Historic", "Group Friendly"],
  },
];

const FeaturedSaunas = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-3">
            Featured escapes
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Our most loved saunas, selected for their exceptional experience and glowing reviews
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {featuredSaunas.map((sauna, index) => (
            <div
              key={sauna.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SaunaCard {...sauna} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <a
            href="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all"
          >
            View all saunas
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSaunas;
