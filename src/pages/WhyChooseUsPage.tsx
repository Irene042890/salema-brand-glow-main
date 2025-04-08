
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

const WhyChooseUsPage = () => {
  const scrollToSection = (section: string) => {
    if (section === "contact") {
      window.location.href = "/#get-started";
    } else if (section === "services") {
      window.location.href = "/#services";
    } else if (section === "about") {
      window.location.href = "/about";
    } else if (section === "why") {
      // Already on why choose us page
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavClick={scrollToSection} />
      <main>
        <div className="pt-28 pb-16">
          <WhyChooseUsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyChooseUsPage;
