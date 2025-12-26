'use client';

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-sauna.jpg";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Serene wooden sauna with forest view"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground mb-6 leading-tight">
            Find your place to{" "}
            <span className="italic text-primary">breathe</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Discover unique saunas and book your perfect escape by the hour
          </p>
        </div>

        {/* Natural Language Search */}
        <div className="max-w-3xl mx-auto fade-in-delay-1">
          <div className="glass rounded-2xl p-6 md:p-8">
            <p className="text-center text-lg md:text-xl text-foreground mb-6 font-light">
              I want to relax in{" "}
              <span className="inline-block">
                <input
                  type="text"
                  placeholder="any location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent border-b-2 border-primary/30 focus:border-primary outline-none text-center text-primary font-medium placeholder:text-muted-foreground/50 w-32 md:w-40 transition-colors"
                />
              </span>{" "}
              on{" "}
              <span className="inline-block">
                <input
                  type="text"
                  placeholder="any day"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-transparent border-b-2 border-primary/30 focus:border-primary outline-none text-center text-primary font-medium placeholder:text-muted-foreground/50 w-24 md:w-32 transition-colors"
                />
              </span>{" "}
              for{" "}
              <span className="inline-block">
                <input
                  type="text"
                  placeholder="2 guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent border-b-2 border-primary/30 focus:border-primary outline-none text-center text-primary font-medium placeholder:text-muted-foreground/50 w-24 md:w-28 transition-colors"
                />
              </span>
            </p>

            {/* Search Hints */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Date</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>Guests</span>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-8 text-center">
              <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]">
                Search saunas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-delay-3">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
