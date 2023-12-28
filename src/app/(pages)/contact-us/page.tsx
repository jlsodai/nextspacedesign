import PageTitle from "@/components/PageTitle";
import ContactSection from "@/sections/ContactSection";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <section className="bg-cover bg-[url('https://res.cloudinary.com/dmaestro/image/upload/v1703770405/solidWoodBg_k4qv7e.jpg')]">
        <div className="container h-56 text-white flex items-center">
          <h2 className="text-5xl">Contact Us</h2>
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default ContactPage;
