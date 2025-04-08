
import { useState } from "react";
import { Brush, Palette, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";

import image1 from '../images/branding image 1.jpg'
import image2 from '../images/branding image2.jpg'
import image3 from '../images/branding image3.jpg'
import image4 from '../images/branding image4.jpg'
import image5 from '../images/branding image5.jpg'
import image6 from '../images/branding image6.jpg'



const ServicesSection = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Mock services data
  const services = [
    {
      id: "branding",
      title: "Branding Services",
      description: "Craft a distinctive and memorable brand identity with our comprehensive branding services. From logo design and brand guidelines to visual identity systems, we help you establish a strong brand presence that resonates with your audience.",
      icon: <Palette className="h-6 w-6 text-salema-purple" />,
      images: [
        { url: image1, title: "Corporate Logo Design", description: "Modern and professional logo design for corporate clients." },
        { url: image2, title: "Brand Identity Package", description: "Complete brand identity system including logo, colors, and typography." },
        { url: image3, title: "Brand Guidelines", description: "Comprehensive guide for consistent brand application." },
        { url: image4, title: "Business Card Design", description: "Elegant and professional business card designs." },
        { url: image5, title: "Logo Redesign", description: "Modernizing and refreshing existing brand identities." },
        { url: image6, title: "Packaging Design", description: "Eye-catching packaging that enhances brand recognition." },
        { url: image1, title: "Letterhead Design", description: "Professional letterhead for business correspondence." },
        { url: image2, title: "Signage Design", description: "Impactful signage solutions for physical locations." },
        { url: image5, title: "Brand Mascot Design", description: "Character design to personify your brand values." },
        { url: image4, title: "Branded Merchandise", description: "Custom branded merchandise for marketing and events." }
      ]
    },
    {
      id: "creative",
      title: "Creative Design Services",
      description: "Transform your ideas into stunning visual content with our creative design services. Whether it's digital or print design, we create eye-catching visuals that communicate your message effectively and leave a lasting impression.",
      icon: <Brush className="h-6 w-6 text-salema-blue" />,
      images: [
        { url: image1, title: "Poster Design", description: "Eye-catching posters for events and promotions." },
        { url: image2, title: "Digital Artwork", description: "Custom digital illustrations for various applications." },
        { url: "https://source.unsplash.com/random/800x600?design,banner,3", title: "Banner Design", description: "Attention-grabbing banners for events and websites." },
        { url: "https://source.unsplash.com/random/800x600?design,social,4", title: "Social Media Graphics", description: "Engaging social media content for brand promotion." },
        { url: "https://source.unsplash.com/random/800x600?design,flyer,5", title: "Flyer Design", description: "Informative and appealing flyer designs for marketing." },
        { url: "https://source.unsplash.com/random/800x600?design,menu,6", title: "Menu Design", description: "Attractive menu designs for restaurants and cafes." },
        { url: "https://source.unsplash.com/random/800x600?design,infographic,7", title: "Infographic Design", description: "Visual data representation for effective communication." },
        { url: "https://source.unsplash.com/random/800x600?design,album,8", title: "Album Cover Design", description: "Creative album and music cover designs." },
        { url: "https://source.unsplash.com/random/800x600?design,advertisement,9", title: "Advertisement Design", description: "Persuasive advertising materials for various media." },
        { url: "https://source.unsplash.com/random/800x600?design,photography,10", title: "Product Photography", description: "Professional product photography and retouching." }
      ]
    },
    {
      id: "stationery",
      title: "Stationery Services",
      description: "Make a professional impression with our high-quality stationery services. From business cards and letterheads to envelopes and notepads, we provide customized stationery solutions that reflect your brand's personality and maintain consistency.",
      icon: <FileText className="h-6 w-6 text-salema-orange" />,
      images: [
        { url: image1, title: "Business Cards", description: "Premium business cards with custom finishes." },
        { url: "https://source.unsplash.com/random/800x600?stationery,letterhead,2", title: "Letterhead Design", description: "Professional letterhead for business documents." },
        { url: "https://source.unsplash.com/random/800x600?stationery,envelope,3", title: "Envelope Design", description: "Custom envelopes with brand elements." },
        { url: "https://source.unsplash.com/random/800x600?stationery,folder,4", title: "Presentation Folders", description: "Professional folders for marketing materials." },
        { url: "https://source.unsplash.com/random/800x600?stationery,notepad,5", title: "Custom Notepads", description: "Branded notepads for internal use or client gifts." },
        { url: "https://source.unsplash.com/random/800x600?stationery,stamp,6", title: "Rubber Stamps", description: "Custom rubber stamps with your logo or information." },
        { url: "https://source.unsplash.com/random/800x600?stationery,sticky-note,7", title: "Custom Sticky Notes", description: "Branded sticky notes for everyday office use." },
        { url: "https://source.unsplash.com/random/800x600?stationery,memo,8", title: "Memo Pads", description: "Customized memo pads for internal communications." },
        { url: "https://source.unsplash.com/random/800x600?stationery,invoice,9", title: "Invoice Templates", description: "Professional invoice designs for your billing." },
        { url: "https://source.unsplash.com/random/800x600?stationery,label,10", title: "Custom Labels", description: "Branded labels for products and packaging." }
      ]
    }
  ];

  const getSelectedServiceData = () => {
    return services.find(service => service.id === selectedService);
  };

  const renderContent = () => {
    if (selectedService) {
      const serviceData = getSelectedServiceData();
      if (serviceData) {
        return (
          <ServiceDetail 
            service={serviceData} 
            onBack={() => setSelectedService(null)} 
          />
        );
      }
    }

    // Default services view
    return (
      <>
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="inline-block bg-gradient-brand bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of branding and creative design services tailored to meet your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-fade-in card-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-salema-purple/20 to-salema-blue/20 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {service.description}
              </p>
              <Button
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setSelectedService(service.id)}
              >
                View More <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <section id="services" className="section bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="default"
              className="bg-salema-purple hover:bg-salema-purple/90"
            >
              Services
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/about")}
            >
              About Us
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/why-choose-us")}
            >
              Why Choose Us
            </Button>
          </div>
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default ServicesSection;
