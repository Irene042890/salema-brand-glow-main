
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageItem {
  url: string;
  title: string;
  description?: string;
}

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    images: ImageItem[];
  };
  onBack: () => void;
}

const ServiceDetail = ({ service, onBack }: ServiceDetailProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="ghost"
          className="text-salema-purple hover:bg-salema-purple/10 flex items-center gap-2"
          onClick={onBack}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Services
        </Button>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 inline-block bg-gradient-brand bg-clip-text text-transparent">
          {service.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {service.description}
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6">Our {service.title} Portfolio</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {service.images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all card-hover"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-white rounded-xl overflow-hidden max-w-5xl max-h-[90vh] w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain" 
              />
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/80"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
            <div className="p-4 bg-white">
              <h4 className="text-xl font-semibold">{selectedImage.title}</h4>
              {selectedImage.description && (
                <p className="text-muted-foreground mt-2">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
