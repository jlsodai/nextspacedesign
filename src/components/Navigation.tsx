"use client";

/* eslint-disable @next/next/no-img-element */
import { links } from "@/lib/navlinks";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

const Navigation = () => {
  const currentRoute = usePathname();

  return (
    <header className="container py-4 flex justify-between items-center herohalf">
      <Link href="/" className="">
        <img
          src="https://static.wixstatic.com/media/6f054d_1ad5de06933947f889a89a509317c550~mv2.jpeg"
          width="300px"
          alt="Logo"
        />
      </Link>
      <div className="-sm:hidden my-3">
        <div className="text-right mb-2">Call Us: +233 20 502 1111</div>
        <div className="flex -sm:mt-8 -sm:justify-center space-x-12 mb-4 divide-x font-bold">
          {links.map((link, i) => (
            <Link
              href={link.url}
              className={`hover:text-primary ${
                currentRoute === link.url ? "text-primary" : ""
              }`}
              key={i}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
