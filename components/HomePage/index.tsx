import Image from "next/image";
import React from "react";
import Social from "../Layout/Footer/components/Socials";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between mx-24 mb-32 sm:mb-0">
      <div className="relative w-[100vw] sm:w-full h-screen py-8 mt-12 sm:mt-0">
        <div className="absolute inset-0 w-full sm:w-[45%] h-full bg-[#E6DACE] z-[-1] top-32 sm:top-0"></div>
        <div className="flex w-full h-full flex items-center justify-center flex-col sm:flex-row">
          <div className="flex flex-col items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col items-center justify-center py-14 bg-[#F4ECE6] w-[320px] sm:w-[375px]">
              <Image
                src="/avatar.webp"
                alt="avatar"
                width={205}
                height={205}
                className="rounded-full h-[205px] border object-contain p-5 mb-8"
              />
              <h1 className="font-bold text-4xl uppercase">Duong</h1>
              <div className="w-[50px] h-[2px] bg-primary my-8"></div>
              <h1 className="font-light text-2xl tracking-wide uppercase">
                Designer
              </h1>
            </div>
            <div className="bg-white w-full py-5 flex justify-center">
              <Social size={"large"} />
            </div>
          </div>
          <div className="flex flex-col justify-start items-baseline px-5 py-4 max-w-md">
            <h1 className="font-black text-[88px] my-2 tracking-widest uppercase stroke-1">
              Hello
            </h1>
            <h1 className="font-light text-2xl uppercase my-8">
              {`Here's who I am & what I do`}
            </h1>
            <div className="flex justify-start items-baseline mb-14">
              <Link href={"/resume"}>
                <button
                  type="button"
                  className="py-2 px-8 bg-primary text-white uppercase rounded-3xl"
                >
                  resume
                </button>
              </Link>
              <Link href={"/projects"}>
                <button
                  type="button"
                  className="py-2 px-8 ml-4 bg-white text-primary border border-primary uppercase rounded-3xl"
                >
                  projects
                </button>
              </Link>
            </div>
            <h2 className="break-word text-justify mb-8 text-medium">{`I'm a graphic designer who works as a freelancer, and I have
              expertise in design with Photoshop, Adobe Illustrator, and Figma.
              I have also completed over 20+ projects.`}</h2>
            <h2 className="break-word text-justify text-medium">
              {`My passion is learning
              about graphic design and content creativity. I'm working and
              studying for over 8 hours every day.`}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
