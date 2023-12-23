import AboutSection from "@/sections/AboutSection";
import Footer from "@/sections/Footer";
import Gallery from "@/sections/Gallery";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import React from "react";

const links = [
  { title: "Home", url: "#home" },
  { title: "About Us", url: "#about" },
  { title: "Services", url: "#services" },
  { title: "Gallery", url: "#gallery" },
  { title: "Contact", url: "#contact" },
];

const page = () => {
  return (
    <>
      <HeroSection links={links} />
    </>
  );
};

export default page;
