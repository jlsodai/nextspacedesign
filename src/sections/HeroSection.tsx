"use client";
import Navigation from "@/components/Navigation";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  links: {
    title: string;
    url: string;
  }[];
}

const HeroSection = ({ links }: Props) => {
  const [showTop, setShowTop] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="bgover min-h-screen flex flex-col" id="home">
        <Navigation />

        <div className="flex flex-1 items-center bg-cover bg-[url('https://res.cloudinary.com/dmaestro/image/upload/v1703770405/solidWoodBg_k4qv7e.jpg')]">
          <div className="flex flex-1 py-12 text-gray-800 container items-center">
            <div className="bg-white/80 p-8 lg:p-16 space-y-2 lg:space-y-4 h-full">
              <h2 className="font-bold text-3xl lg:text-7xl">
                Elevate Spaces,
              </h2>
              <h3 className="text-2xl lg:text-5xl">Craft Dreams</h3>
              <div className="bg-gray-800 w-[120px] h-[10px]">&nbsp;</div>
            </div>
          </div>
        </div>

        <div className="lg:bg-transparent  bg-[#ededed]">
          <div className="py-10 herohalf container lg:flex items-center">
            <div className="lg:w-[40%] md:text-right order-2">
              We are manufacturers of wood solutions for all kinds of spaces:
              kitchens, wardrobes, and and all cabinetry designs.
            </div>

            <h1 className="flex-1 order-1 -sm:text-center -sm:mt-8">
              <Link href="/contact-us">
                <span className="px-8 hover:bg-primary text-white bg-gray-800 py-3">
                  Contact Us
                </span>
                <span className="bg-white md:bg-[#ededed] p-3">→</span>
              </Link>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
