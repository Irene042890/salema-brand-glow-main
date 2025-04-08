
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import GetStartedSection from "@/components/GetStartedSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const getStartedRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (section: string) => {
    if (section === "hero" && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && getStartedRef.current) {
      getStartedRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "services" && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about") {
      navigate("/about");
    } else if (section === "why") {
      navigate("/why-choose-us");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavClick={scrollToSection} />
      
      <main>
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-salema-softBlue/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-salema-purple opacity-10 blur-3xl"></div>
            <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-salema-blue opacity-10 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-salema-orange opacity-10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="px-4 py-2 rounded-full bg-salema-purple/10 text-salema-purple text-sm font-semibold mb-6 animate-fade-in">
                Professional Branding & Design Solutions
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                Elevate Your <span className="bg-gradient-brand bg-clip-text text-transparent">Brand Identity</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Salema Supplies provides premium branding, creative design, and stationery services to help your business stand out in a competitive market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <button 
                  className="btn-gradient"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                </button>
                <button 
                  className="btn-outline"
                  onClick={() => scrollToSection("services")}
                >
                  Explore Our Services
                </button>
              </div>
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full animate-fade-in" style={{ animationDelay: "0.4s" }}>
                {[
                  { number: "150+", label: "Happy Clients" },
                  { number: "500+", label: "Projects Completed" },
                  { number: "10+", label: "Years Experience" },
                  { number: "99%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <h2 className="text-4xl font-bold text-salema-purple mb-2">{stat.number}</h2>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <div ref={servicesRef}>
          <ServicesSection />
        </div>

        {/* Get Started (Contact) Section */}
        <div ref={getStartedRef}>
          <GetStartedSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
