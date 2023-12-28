import PageTitle from "@/components/PageTitle";
import Gallery from "@/sections/Gallery";
import React from "react";

const GalleryPage = () => {
  return (
    <>
      <section className="bg-cover bg-[url('https://res.cloudinary.com/dmaestro/image/upload/v1703770678/color1_wiiswn.jpg')]">
        <div className="container h-56 text-white flex items-center">
          <h2 className="text-5xl">Our Gallery</h2>
        </div>
      </section>
      <Gallery />
    </>
  );
};

export default GalleryPage;
