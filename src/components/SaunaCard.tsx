'use client';

import { useState } from "react";
import { Heart } from "lucide-react";

interface SaunaCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  pricePerHour: number;
  rating: number;
  capacity: number;
  temperature: number;
  tags: string[];
}

const SaunaCard = ({
  id,
  title,
  location,
  image,
  pricePerHour,
  rating,
  capacity,
  temperature,
  tags,
}: SaunaCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <a href={`/sauna/${id}`} className="block">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 hover-brighten"
          />

          {/* Save Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSaved(!isSaved);
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-warm-white/80 backdrop-blur-sm hover:bg-warm-white transition-colors"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isSaved ? "fill-accent text-accent" : "text-charcoal"
              }`}
            />
          </button>

          {/* Hover Details */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium bg-warm-white/20 backdrop-blur-sm text-warm-white rounded-full">
                {capacity} guests
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-warm-white/20 backdrop-blur-sm text-warm-white rounded-full">
                {temperature}°C
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* Info */}
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-sm shrink-0">
            <span className="text-accent">★</span>
            <span className="text-foreground">{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{location}</p>
        <p className="text-sm">
          <span className="font-semibold text-foreground">${pricePerHour}</span>
          <span className="text-muted-foreground"> / hour</span>
        </p>
      </div>

      {/* Tags (visible on hover) */}
      {tags.length > 0 && (
        <div
          className={`flex flex-wrap gap-2 mt-3 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs bg-sage-light text-sage rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default SaunaCard;
