import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";

type Props = {};

const Header = (props: Props) => {
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
  return (
    <div className="flex items-center justify-between px-24 py-14 sticky top-0 z-10 bg-white">
      <div className="flex justify-start items-center">
        <h1 className="text-2xl font-black uppercase tracking-widest">
          BeDuong
        </h1>
        <span className="font-bold uppercase mx-2">
          <SlArrowRight />
        </span>
        <h1 className="text-xl font-light uppercase">Designer UI</h1>
      </div>
      <div className="flex justify-start">
        {navbar.map((item, index) => (
          <div key={index} className="mx-2">
            <Link href={item.link} className={`text-xl font-light uppercase ${item.link === router.pathname ? 'text-primary' : ''}`}>{item.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
