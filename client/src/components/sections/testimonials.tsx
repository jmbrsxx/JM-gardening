import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "JM Garden completely transformed our backyard. What was once a weed-filled mess is now our favorite room in the house. Their attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Ross",
    role: "Property Manager",
    content: "Reliable, professional, and incredibly skilled. I've hired many landscaping crews over the years, but JM Garden stands out for their consistency and quality.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Residential Client",
    content: "The team listened to exactly what I wanted—a low-maintenance but colorful garden. They delivered beyond my expectations. Highly recommended!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl opacity-50" />

      <div className="container relative px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Client Love</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-secondary/20 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 text-primary">
                  <Quote className="w-10 h-10 opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
                <p className="text-lg text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="mt-auto">
                  <p className="font-serif font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}