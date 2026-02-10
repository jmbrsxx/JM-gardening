import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const images = [
  { src: "/images/garden-gallery_1.jpg", alt: "Lush garden pathway", title: "Residential Oasis" },
  { src: "/images/garden-gallery_2.jpg", alt: "Flower bed close-up", title: "Seasonal Blooms" },
  { src: "/images/garden-gallery_3.jpg", alt: "Patio landscaping", title: "Modern Hardscape" },
  { src: "/images/garden-gallery_4.jpg", alt: "Manicured lawn", title: "Estate Maintenance" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-muted-foreground text-lg">
            Explore a selection of our recent projects. From intimate courtyard gardens to expansive estate landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] w-full bg-muted">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-serif text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}