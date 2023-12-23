"use client";

/* eslint-disable @next/next/no-img-element */
import { links } from "@/lib/navlinks";
import Link from "next/link";
import React, { useState } from "react";

import { usePathname } from "next/navigation";

const Navigation = () => {
  const currentRoute = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="container py-4 flex justify-between items-center herohalf">
      <Link href="/" className="">
        <img
          src="https://static.wixstatic.com/media/6f054d_1ad5de06933947f889a89a509317c550~mv2.jpeg"
          width="300px"
          alt="Logo"
        />
      </Link>
      <div className="my-3">
        <div className="text-right mb-2 -sm:hidden">
          Call Us: +233 20 502 1111
        </div>
        {/* <div className="flex -sm:mt-8 -sm:justify-center space-x-12 mb-4 divide-x font-bold">
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
        </div> */}
        <nav className="md:mb-4">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto -md:relative">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {/* mobile */}
            <div
              className={`${
                mobileMenu ? "" : "hidden"
              } w-full md:block md:w-auto -md:absolute top-6 min-w-[300px]`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg -md:bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.url}
                      className={`block py-2 px-3  ${
                        currentRoute === link.url
                          ? "md:text-primary -md:bg-primary -md:text-white"
                          : ""
                      }  rounded md:bg-transparent  md:p-0`}
                      aria-current="page"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
