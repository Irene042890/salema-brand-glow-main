
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Award, ThumbsUp, Clock, Heart, DollarSign, Target, Users, Star, Zap, Palette } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load testimonials section
const TestimonialsSection = lazy(() => import("./sections/TestimonialsSection"));

const WhyChooseUsSection = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isClient, setIsClient] = useState(false);

  // Only run on client-side to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
    
    // Load more items as user scrolls
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setVisibleItems(prev => Math.min(prev + 3, reasons.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reasons = [
    {
      title: "Expertise & Experience",
      description:
        "With over 10 years of experience in corporate branding, promotional design, and printing solutions, our team brings unmatched expertise to every project. We understand the nuances of effective brand communication and how to create designs that resonate with target audiences.",
      icon: <Award className="h-8 w-8 text-salema-purple" />,
    },
    {
      title: "Premium Quality",
      description:
        "We use state-of-the-art printing techniques and premium materials to ensure the best results. Our commitment to quality is evident in every product we deliver, from business cards to large format prints. We never compromise on materials or craftsmanship.",
      icon: <Star className="h-8 w-8 text-salema-blue" />,
    },
    {
      title: "Customization & Flexibility",
      description:
        "Tailored branding solutions to fit your business needs and brand personality. We recognize that each business is unique, and we approach every project with fresh eyes, creating customized solutions that align with your specific goals and brand identity.",
      icon: <Target className="h-8 w-8 text-salema-orange" />,
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We value our clients and ensure 100% satisfaction with every project we undertake. Our collaborative process involves you at every step, ensuring that the final product not only meets but exceeds your expectations. Your success is our ultimate goal.",
      icon: <Heart className="h-8 w-8 text-salema-pink" />,
    },
    {
      title: "Competitive Pricing",
      description:
        "Affordable and value-packed branding services without compromising on quality. We offer transparent pricing structures and work with you to find solutions that fit your budget while still delivering exceptional results. We believe effective branding should be accessible to businesses of all sizes.",
      icon: <DollarSign className="h-8 w-8 text-salema-blue" />,
    },
    {
      title: "Fast Turnaround",
      description:
        "We deliver on time, ensuring your brand materials are ready when you need them. Our efficient workflow and dedicated team allow us to handle urgent projects without sacrificing quality. We understand that timing can be crucial for your marketing campaigns and business objectives.",
      icon: <Clock className="h-8 w-8 text-salema-purple" />,
    },
    {
      title: "Comprehensive Solutions",
      description: 
        "From initial concept to final production, we handle all aspects of your branding needs. Our one-stop approach eliminates the need to coordinate between multiple vendors, saving you time and ensuring consistency across all brand materials.",
      icon: <Zap className="h-8 w-8 text-salema-orange" />,
    },
    {
      title: "Creative Excellence",
      description:
        "Our team of talented designers brings fresh perspectives and creative solutions to every project. We stay updated on the latest design trends while focusing on creating timeless brand identities that won't quickly become outdated.",
      icon: <Palette className="h-8 w-8 text-salema-pink" />,
    },
    {
      title: "Dedicated Support Team",
      description:
        "Our relationship doesn't end with project delivery. We provide ongoing support and guidance to help you maximize the impact of your branding materials and adapt as your business grows and evolves.",
      icon: <Users className="h-8 w-8 text-salema-blue" />,
    },
  ];

  const ReasonCard = ({ reason, index }) => (
    <div
      key={index}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 animate-fade-in card-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-salema-softBlue to-salema-softPink rounded-lg flex items-center justify-center mb-6">
        {reason.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
      <p className="text-muted-foreground">{reason.description}</p>
    </div>
  );

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="inline-block bg-gradient-brand bg-clip-text text-transparent mb-4">
          Why Choose Us
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover what makes Salema Supplies the preferred choice for businesses seeking exceptional branding and design solutions. Our commitment to excellence sets us apart in the industry.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isClient ? (
          reasons.slice(0, visibleItems).map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))
        ) : (
          // Skeleton placeholders for SSR
          Array(6).fill(0).map((_, index) => (
            <div key={index} className="p-8 rounded-xl">
              <Skeleton className="w-16 h-16 rounded-lg mb-6" />
              <Skeleton className="w-3/4 h-6 mb-3" />
              <Skeleton className="w-full h-4 mb-2" />
              <Skeleton className="w-full h-4 mb-2" />
              <Skeleton className="w-2/3 h-4" />
            </div>
          ))
        )}
      </div>

      {isClient && visibleItems < reasons.length && (
        <div className="text-center mt-8">
          <button 
            onClick={() => setVisibleItems(prev => Math.min(prev + 3, reasons.length))}
            className="btn-outline"
          >
            Load More
          </button>
        </div>
      )}

      <div className="mt-16 p-8 bg-gradient-to-r from-salema-purple/10 to-salema-blue/10 rounded-xl border border-salema-purple/20">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-salema-purple">Ready to elevate your brand?</h3>
          <p className="text-lg mb-8">
            Partner with Salema Supplies for all your branding and design needs. Our team is dedicated to delivering exceptional results that help your business stand out from the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#get-started"
              className="btn-gradient inline-block"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="btn-outline inline-block"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Suspense fallback={
          <div className="space-y-4">
            <Skeleton className="w-full h-8 mb-6" />
            <div className="grid md:grid-cols-3 gap-6">
              {Array(3).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-64 w-full rounded-xl" />
              ))}
            </div>
          </div>
        }>
          <TestimonialsSection />
        </Suspense>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
