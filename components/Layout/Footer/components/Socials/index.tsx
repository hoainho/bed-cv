import Link from "next/link";
import React, { useState } from "react";
import { LiaLinkedinIn, LiaInstagram, LiaFacebook } from "react-icons/lia";
type Props = {
  size?: "small" | "large";
};

const Social = ({ size }: Props) => {
  const [socials] = useState([
    {
      label: <LiaFacebook />,
      link: "https://www.facebook.com/beduong.nguyen.773",
    },
    {
      label: <LiaInstagram />,
      link: "https://www.instagram.com/brduong",
    },
    {
      label: <LiaLinkedinIn />,
      link: "https://www.linkedin.com/in/nguy%E1%BB%85n-th%E1%BB%8B-b%C3%A9-d%C6%B0%C6%A1ng-39242a298/",
    },
  ]);
  return (
    <div className="flex align-center items-center">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          className={`text-xl font-bold mx-2 ${
            size === "large" ? "text-3xl" : "text-xl"
          }`}
          rel="noopener noreferrer"
        >
          {social.label}
        </a>
      ))}
    </div>
  );
};

export default Social;
