
import React from "react";

const TestimonialsSection = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-6 text-center">Client Testimonials</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            text: "Salema Supplies transformed our brand identity completely. Their attention to detail and creative approach helped us stand out in a competitive market. The team was professional and responsive throughout the entire process.",
            author: "Jane Mwangi",
            company: "Horizon Technologies",
          },
          {
            text: "Working with Salema was a game-changer for our business. Their design team created marketing materials that perfectly captured our brand essence. The quality of their work exceeded our expectations.",
            author: "David Ochieng",
            company: "Savanna Ventures",
          },
          {
            text: "The team at Salema Supplies understood our vision immediately. They delivered a complete brand package that has received countless compliments from our clients. Their pricing was fair and the turnaround time impressive.",
            author: "Sarah Kamau",
            company: "Bloom Boutique",
          },
        ].map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative"
          >
            <div className="text-5xl text-salema-purple/20 font-serif absolute top-4 left-4">❝</div>
            <p className="text-lg mb-4 relative z-10">{testimonial.text}</p>
            <div>
              <p className="font-semibold text-salema-purple">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestimonialsSection;
