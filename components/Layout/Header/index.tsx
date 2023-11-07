import Title from "@/components/Title";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { SlArrowRight } from "react-icons/sl";

type Props = {};

const Header = (props: Props) => {
  const refTooltipNav = useRef(null);
  const [navbar] = useState([
    {
      label: "About me",
      link: "/",
    },
    {
      label: "Resume",
      link: "/resume",
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ]);
  const router = useRouter();
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (openNavbar && !(refTooltipNav.current as any)?.contains(event.target)) {
        setOpenNavbar(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [refTooltipNav, openNavbar]);
  return (
    <div className="flex items-center justify-between px-24 py-14 relative sm:sticky top-0 z-10 bg-white">
      <div className="w-full flex justify-center sm:justify-start items-center flex-col sm:flex-row">
        <Title label="Duong" link="/" />
        <span className="font-bold uppercase mx-2 hidden sm:flex">
          <SlArrowRight />
        </span>
        <h1 className="text-xl font-light uppercase">
          {router.pathname === "/"
            ? "Design"
            : router.pathname?.replace("/", "")}
        </h1>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setOpenNavbar(!openNavbar)}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        className={`justify-start items-start sm:items-center ${
          openNavbar ? "navbar-mobile-display" : "navbar-mobile-hidden"
        } sm:flex navbar-mobile`}
        ref={refTooltipNav}
      >
        {navbar.map((item, index) => (
          <div key={index} className="navbar-item mx-2">
            <Link
              href={item.link}
              className={`text-xl text-nowrap font-light uppercase ${
                item.link === router.pathname ? "text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
