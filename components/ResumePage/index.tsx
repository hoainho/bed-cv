import React, { useState } from "react";
import Title from "../Title";
import { GiBearFace } from "react-icons/gi";
import { BiCloudDownload } from 'react-icons/bi'
type Props = {};

const ResumePage = (props: Props) => {
  const [skills] = useState([
    {
      id: 1,
      label: "Entrepreneurial Mindset",
    },
    {
      id: 2,
      label: "Go-to-Market Planning",
    },
    {
      id: 3,
      label: "Teamwork & Collaboration",
    },
    {
      id: 4,
      label: "Digital Analytics",
    },
  ]);
  const [languages] = useState([
    {
      id: 1,
      label: "English (native)",
    },
    {
      id: 2,
      label: "French (proficient)",
    },
    {
      id: 3,
      label: "Spanish (proficient)",
    },
  ]);
  return (
    <div className="flex flex-col items-center px-24 py-8 bg-[#E6DACE]">
      <div className="my-20">
        <Title label="Resume" />
      </div>
      <div className="w-[724px]">
        <div className="w-full mb-12">
          {/* Title */}
          <div className="flex justify-between items-center mb-12">
            <h1
              className={`font-black text-[24px] my-2 tracking-widest uppercase`}
            >
              Experience
            </h1>
            <button
              type="button"
              className="py-1 px-8 bg-primary text-white uppercase rounded-3xl h-[40px] flex items-center justify-center"
            >
              Download cv <BiCloudDownload className="ml-2"/>
            </button>
          </div>
          {/* Content */}
          <div className="px-12 py-20 bg-white mb-12">
            <h1 className="text-primary font-bold text-2xl mb-4">
              2019 - 2020
            </h1>
            <div className="w-full flex justify-between items-start text-lg">
              <div className="w-50">
                {/* Job position */}
                <h1 className="font-light uppercase text-medium mb-3">
                  Designer
                </h1>
                {/* Company name */}
                <h2 className="font-light text-medium mb-3">
                  Hutech University
                </h2>
                {/* Company location */}
                <h3 className="font-light text-medium mb-3">
                  Ho Chi Minh, Viet Nam
                </h3>
              </div>
              <div className="w-50">
                <p className="font-light text-medium">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
          <div className="px-12 py-20 bg-white">
            <h1 className="text-primary font-bold text-2xl mb-4">
              2019 - 2020
            </h1>
            <div className="w-full flex justify-between items-start text-lg">
              <div className="w-50">
                {/* Job position */}
                <h1 className="font-light uppercase text-medium mb-3">
                  Designer
                </h1>
                {/* Company name */}
                <h2 className="font-light text-medium mb-3">
                  Hutech University
                </h2>
                {/* Company location */}
                <h3 className="font-light text-medium mb-3">
                  Ho Chi Minh, Viet Nam
                </h3>
              </div>
              <div className="w-50">
                <p className="font-light text-medium">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-12">
          {/* Title */}
          <div className="flex justify-between items-center mb-12">
            <h1
              className={`font-black text-[24px] my-2 tracking-widest uppercase`}
            >
              Education
            </h1>
          </div>
          {/* Content */}
          <div className="px-12 py-20 bg-white mb-12">
            <h1 className="text-primary font-bold text-2xl mb-4">
              2020 - 2021
            </h1>
            <div className="w-full flex justify-between items-start text-lg">
              <div className="w-50">
                {/* Job position */}
                <h1 className="font-light uppercase text-medium mb-3">
                  Designer
                </h1>
                {/* Company name */}
                <h2 className="font-light text-medium mb-3">
                  Hutech University
                </h2>
                {/* Company location */}
                <h3 className="font-light text-medium mb-3">
                  Ho Chi Minh, Viet Nam
                </h3>
              </div>
              <div className="w-50">
                <p className="font-light text-medium">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
          <div className="px-12 py-20 bg-white">
            <h1 className="text-primary font-bold text-2xl mb-4">
              2020 - 2022
            </h1>
            <div className="w-full flex justify-between items-start text-lg">
              <div className="w-50">
                {/* Job position */}
                <h1 className="font-light uppercase text-medium mb-3">
                  Designer
                </h1>
                {/* Company name */}
                <h2 className="font-light text-medium mb-3">
                  Hutech University
                </h2>
                {/* Company location */}
                <h3 className="font-light text-medium mb-3">
                  Ho Chi Minh, Viet Nam
                </h3>
              </div>
              <div className="w-50">
                <p className="font-light text-medium">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full px-12 py-20 bg-white mb-12">
          <div className="my-8">
            <h1 className={`font-black text-3xl mb-12 tracking-widest`}>
              Professional skillset
            </h1>
            <div className="w-full flex flex-wrap justify-between items-start text-lg">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="w-50 flex justify-start items-center mb-5"
                >
                  <GiBearFace size={15} color="#0D6EFD" className="mr-2" />
                  <h1 className="font-light text-medium">{skill.label}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="my-8">
            <h1 className={`font-black text-3xl mb-12 tracking-widest`}>
              Languages
            </h1>
            <div className="w-full flex flex-wrap justify-between items-start text-lg">
              {languages.map((lang) => (
                <div
                  key={lang.id}
                  className="w-50 flex justify-start items-center mb-5"
                >
                  <GiBearFace size={15} color="#0D6EFD" className="mr-2" />
                  <h1 className="font-light text-medium">{lang.label}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
