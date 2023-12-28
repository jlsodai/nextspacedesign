import PageTitle from "@/components/PageTitle";
import ServicesSection from "@/sections/ServicesSection";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <section className="bg-cover bg-[url('https://res.cloudinary.com/dmaestro/image/upload/v1703770679/color2_l6uxxx.jpg')]">
        <div className="container h-56 text-white flex items-center">
          <h2 className="text-5xl">Our Services</h2>
        </div>
      </section>
      <ServicesSection />
    </>
  );
};

export default ServicesPage;
