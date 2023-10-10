import React from "react";
import Social from "./components/Socials";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex items-center justify-between px-24 py-14">
      <div className="flex flex-col justify-start items-center">
        <h2 className="mb-1">© 2023 by BeDuong</h2>
        <h2>
          Designed by{" "}
          <a
            className="italic underline-offset-8"
            href="https://hoainho.github.io/Rem-Cv/"
          >
            HoaiNho
          </a>
        </h2>
      </div>
      <div className="flex justify-start items-center">
        <div className="flex flex-col items-center justify-center mx-8">
          <h2 className="text-medium font-bold mb-4">Call</h2>
          <h2 className="text-medium font-light">+84 123 456 789</h2>
        </div>
        <div className="flex flex-col items-center justify-center mx-8">
          <h2 className="text-medium font-bold mb-4">Write</h2>
          <h2 className="text-medium font-light">beduong@gmail.com</h2>
        </div>
        <div className="flex flex-col items-center justify-center mx-8">
          <h2 className="text-medium font-bold mb-4">Follow</h2>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Footer;
