
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUsSection from "@/components/AboutUsSection";

const AboutUsPage = () => {
  const scrollToSection = (section: string) => {
    if (section === "contact") {
      window.location.href = "/#get-started";
    } else if (section === "services") {
      window.location.href = "/#services";
    } else if (section === "about") {
      // Already on about page
    } else if (section === "why") {
      window.location.href = "/why-choose-us";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavClick={scrollToSection} />
      <main>
        <div className="pt-28 pb-16">
          <AboutUsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
