import PageTitle from "@/components/PageTitle";
import ServicesSection from "@/sections/ServicesSection";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <section className="bg-cover bg-top bg-[url('https://res.cloudinary.com/dmaestro/image/upload/w_800,h_300,g_north,c_fill/v1703770679/color2_l6uxxx.jpg')]">
        <div className="container h-56 text-white flex items-center">
          <h2 className="text-5xl">Our Services</h2>
        </div>
      </section>
      <ServicesSection />
    </>
  );
};

export default ServicesPage;
