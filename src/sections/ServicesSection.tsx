/* eslint-disable @next/next/no-img-element */
import React from "react";

const services = [
  {
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1703220369/consulting_apwumc.webp",
    title: "Consulting, space designs and remodelling",
    desc: "If you need assistance for designing your home or workspace with wood cabinets, furniture and finishing, call us we will bring on board many new ideas together with our team of specialists.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1703220365/measurements_xbvhyf.webp",
    title: "Measurements, drawings and cutting lists",
    desc: "We will take care of all the technical aspects: measurements, 3D Drawings and materials procurement needs.",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dmaestro/image/upload/v1703220362/manufacturing_pukzdo.webp",
    title: "Manufacturing, installation and finishing",
    desc: "We manufacture and install. We work with several quality wood panels and accessories suppliers from Austria, Spain, and Turkey for a full range of designs, pricing according to your budget, never compromising on the quality.",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen py-16"
      id="services"
    >
      <div className="container mb-16">
        <p className="font-bold">Our Services</p>
        <div className="bg-gray-800 w-[40px] h-[5px]">&nbsp;</div>
      </div>
      <div className="grid md:grid-cols-3 container gap-16">
        {services.map((service, i) => (
          <div key={i}>
            <img
              src={service.imgUrl}
              className="w-full object-contain h-[300px]"
              alt=""
            />
            <h2 className="my-4">{service.title}</h2>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
