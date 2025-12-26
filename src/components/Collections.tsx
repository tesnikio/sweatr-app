'use client';

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Collection {
  id: string;
  title: string;
  image: string;
  count: number;
}

const collections: Collection[] = [
  {
    id: "forest",
    title: "Forest Cabins",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=800&fit=crop",
    count: 24,
  },
  {
    id: "urban",
    title: "Urban Retreats",
    image: "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?w=600&h=800&fit=crop",
    count: 18,
  },
  {
    id: "lakeside",
    title: "Lakeside Views",
    image: "https://images.unsplash.com/photo-1523357585206-175e971f2ad9?w=600&h=800&fit=crop",
    count: 12,
  },
  {
    id: "mountain",
    title: "Mountain Escapes",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=800&fit=crop",
    count: 15,
  },
  {
    id: "minimal",
    title: "Minimalist Spaces",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=800&fit=crop",
    count: 21,
  },
];

const Collections = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-background" id="explore">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-2">
              Curated collections
            </h2>
            <p className="text-muted-foreground">
              Handpicked experiences for every mood
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {collections.map((collection) => (
            <a
              key={collection.id}
              href={`#collection-${collection.id}`}
              className="flex-shrink-0 group snap-start"
            >
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {collection.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {collection.count} saunas
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
