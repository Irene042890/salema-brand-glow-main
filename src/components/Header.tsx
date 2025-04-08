
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavClick: (section: string) => void;
}

const Header = ({ onNavClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section: string) => {
    onNavClick(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white shadow-md" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
        >
          <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-brand bg-clip-text text-transparent">
            Salema Supplies
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-foreground hover:text-salema-purple font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("services");
            }}
          >
            Our Services
          </a>
          <a
            href="#"
            className="text-foreground hover:text-salema-purple font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            About Us
          </a>
          <a
            href="#"
            className="text-foreground hover:text-salema-purple font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("why");
            }}
          >
            Why Choose Us
          </a>
          <Button 
            className="btn-gradient ml-4"
            onClick={() => handleNavClick("contact")}
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-salema-purple" />
          ) : (
            <Menu className="h-6 w-6 text-salema-purple" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg px-4 py-5 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a
              href="#"
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("services");
              }}
            >
              Our Services
            </a>
            <a
              href="#"
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("about");
              }}
            >
              About Us
            </a>
            <a
              href="#"
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("why");
              }}
            >
              Why Choose Us
            </a>
            <Button
              className="btn-gradient mt-4 w-full"
              onClick={() => handleNavClick("contact")}
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
