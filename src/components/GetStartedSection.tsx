
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

const GetStartedSection = () => {
  // Define the correct phone number with international format
  const phoneNumber = "+254722920177";
  const emailAddress = "rose@salema.co.ke";
  
  // Format for WhatsApp needs to remove the plus sign
  const whatsappNumber = phoneNumber.replace(/\+/g, '');

  return (
    <section id="get-started" className="section pt-28 pb-16 bg-gradient-to-b from-white to-salema-softBlue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="inline-block bg-gradient-brand bg-clip-text text-transparent mb-4">
            Get Started
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your brand? Reach out to us today and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-salema-purple">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-salema-softBlue rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-salema-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone Number</p>
                    <a 
                      href={`tel:${phoneNumber}`} 
                      className="text-lg font-medium hover:text-salema-purple transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-salema-softPink rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-salema-pink" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href={`mailto:${emailAddress}`} 
                      className="text-lg font-medium hover:text-salema-purple transition-colors"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-lg font-medium mb-3">Connect With Us</p>
                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare size={18} />
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  className="btn-gradient flex-1 flex gap-2 items-center justify-center"
                  asChild
                >
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline flex-1 flex gap-2 items-center justify-center"
                  asChild
                >
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
