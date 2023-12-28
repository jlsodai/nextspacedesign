import Navigation from "@/components/Navigation";
import PageTitle from "@/components/PageTitle";
import AboutSection from "@/sections/AboutSection";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="bg-cover bg-[url('https://res.cloudinary.com/dmaestro/image/upload/v1703770405/solidWoodBg_k4qv7e.jpg')]">
        <div className="container h-56 text-white flex items-center">
          <h2 className="text-5xl">About Us</h2>
        </div>
      </section>
      <AboutSection />
    </>
  );
};

export default AboutPage;
