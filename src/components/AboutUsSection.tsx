
import React from "react";

const AboutUsSection = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="inline-block bg-gradient-brand bg-clip-text text-transparent mb-4">
          About Us
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Learn more about Salema Supplies and our journey in providing exceptional branding and design services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold mb-6 text-salema-purple">Who We Are</h3>
          <p className="text-lg mb-4">
            Salema Supplies is a premier branding and creative design company specializing in customized promotional materials, corporate branding, and digital design. We take pride in offering high-quality, innovative, and visually striking branding solutions that help businesses stand out.
          </p>
          <p className="text-lg mb-4">
            With over a decade of experience in the industry, we've helped numerous businesses across various sectors establish strong brand identities and create compelling visual materials that effectively communicate their message and values.
          </p>
          <p className="text-lg">
            Our team of skilled designers, branding specialists, and marketing experts work together to deliver comprehensive solutions tailored to each client's unique needs, ensuring exceptional results that exceed expectations.
          </p>
        </div>
        <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://source.unsplash.com/random/800x600?creative,team,office"
            alt="Our Creative Team"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-salema-blue">Our Mission</h3>
            <p className="text-lg">
              To provide top-tier branding solutions that help businesses leave a lasting impression. We're committed to delivering excellence in every project, ensuring that our clients' brands not only stand out but also effectively communicate their values and connect with their target audience.
            </p>
            <p className="text-lg mt-4">
              We strive to be more than just a service provider – we aim to be a trusted partner in our clients' journey toward building a successful and recognizable brand that resonates with their audience and drives business growth.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-salema-orange">Our Vision</h3>
            <p className="text-lg">
              To be a leading brand identity provider, known for innovation, creativity, and excellence. We aim to set new standards in the branding and design industry through continuous improvement, embracing new technologies, and staying ahead of design trends.
            </p>
            <p className="text-lg mt-4">
              Our vision extends beyond creating beautiful designs – we aspire to transform how businesses perceive and implement branding strategies, making high-quality brand identity solutions accessible to businesses of all sizes across Kenya and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            {
              title: "Creativity & Innovation",
              description: "We bring unique ideas to life through innovative design thinking and creative problem-solving.",
              color: "bg-gradient-to-br from-salema-purple to-salema-pink",
            },
            {
              title: "Quality & Precision",
              description: "Delivering exceptional branding solutions with meticulous attention to detail and unwavering commitment to quality.",
              color: "bg-gradient-to-br from-salema-blue to-salema-softBlue",
            },
            {
              title: "Customer-Centric Approach",
              description: "Prioritizing client satisfaction by deeply understanding their needs and exceeding their expectations.",
              color: "bg-gradient-to-br from-salema-orange to-salema-softPeach",
            },
            {
              title: "Integrity & Transparency",
              description: "Honest and ethical service delivery built on open communication and trust with our clients.",
              color: "bg-gradient-to-br from-salema-purple to-salema-blue",
            },
            {
              title: "Timely Execution",
              description: "Meeting deadlines without compromising quality through efficient processes and dedicated teamwork.",
              color: "bg-gradient-to-br from-salema-pink to-salema-softPink",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 animate-fade-in card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${value.color} rounded-full mx-auto mb-4`} />
              <h4 className="font-bold mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Story</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Founded in 2013, Salema Supplies began as a small design studio with a passion for creating impactful brand identities. What started as a team of three dedicated designers has now grown into a full-service branding agency with specialists in various design disciplines.
            </p>
            <p className="text-lg">
              Over the years, we've had the privilege of working with hundreds of businesses across Kenya, helping them transform their brand presence and achieve their marketing objectives through strategic design solutions. Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to excellence.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://source.unsplash.com/random/800x600?design,studio,creative"
              alt="Our Design Studio"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
