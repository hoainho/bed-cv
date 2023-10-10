import Link from "next/link";
import React, { useState } from "react";
import { LiaLinkedinIn, LiaInstagram, LiaFacebook } from "react-icons/lia";
type Props = {
  size?: "small" | "large";
};

const Social = ({size }: Props) => {
  const [socials] = useState([
    {
      label: <LiaFacebook />,
      link: "#",
    },
    {
      label: <LiaInstagram />,
      link: "#",
    },
    {
      label: <LiaLinkedinIn />,
      link: "#",
    },
  ]);
  return (
    <div className="flex align-center items-center">
      {socials.map((social, index) => (
        <Link key={index} href={social.link} className={`text-xl font-bold mx-2 ${size === 'large' ? 'text-3xl' : 'text-xl'}`}>
          {social.label}
        </Link>
      ))}
    </div>
  );
};

export default Social;
