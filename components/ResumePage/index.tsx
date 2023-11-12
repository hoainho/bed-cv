import React, { useState } from "react";
import Title from "../Title";
import { GiBearFace } from "react-icons/gi";
import { BiCloudDownload } from "react-icons/bi";
type Props = {};

const ResumePage = (props: Props) => {
  const [skills] = useState([
    {
      id: 1,
      label: "Adobe Photoshop",
    },
    {
      id: 2,
      label: "Adobe Illustrator",
    },
    {
      id: 3,
      label: "Figma",
    },
    {
      id: 4,
      label: "Canvas",
    },
  ]);
  const [skillOther] = useState([
    {
      id: 1,
      label: "Office Informatics ( Basic )",
    },
    {
      id: 2,
      label: "Drawing",
    },
  ]);
  const [projects] = useState([
    {
      id: 1,
      timeline: "Adobe Photoshop",
      position: "Graphic Designer",
      companyName: "Freelancer",
      location: "Ho Chi Minh, Viet Nam",
      assetsLink: "https://tinyurl.com/beduong-pts",
      description: `Worked on over 8+ products 
      Has experience with a wide range of market items such as:  F&B, poster film, cosmetics, etc.
      The product is designed to be unique and self-creative.
      Capable of creating a variety of designs such as a logo, banner, poster, card visit, etc.
      In-depth understanding of Photoshop tools and the ability to operate independently with little supervision`,
    },
    {
      id: 2,
      timeline: "Adobe Illustrator",
      position: "Graphic Designer",
      companyName: "Freelancer",
      location: "Ho Chi Minh, Viet Nam",
      assetsLink: "https://tinyurl.com/beduong-ai",
      description: `Worked on over 10+ products
      Basic design includes logo, banner, poster, icon, and advanced color change for product
      Capable of doing difficult research and self-resolving design challenges`,
    },
  ]);
  const [educations] = useState([
    {
      id: 1,
      timeline: "2022 - Present",
      position: "UI Designer",
      companyName: "Hutech University",
      location: "Ho Chi Minh, Viet Nam",
      description: `Regarding important subjects, I usually receive an 8+ since I am capable of self-study, and I am also confident in my ability to work. 
      With themes that need the formation of a design team, I am the team leader and work as a supervisor and important member of the team in the release of creative and product.
      Public speaking and product presentation abilities. I once gave a presentation in front of a class of more than 60 people and earned numerous accolades from professors and students, as well as good marks.`,
    },
  ]);
  return (
    <div className="flex flex-col items-center px-5 sm:px-24 py-8 bg-[#E6DACE]">
      <div className="my-20">
        <Title label="Resume" link="/resume" />
      </div>
      <div className="w-full sm:w-[724px]">
        <div className="w-full mb-12">
          {/* Title */}
          <div className="flex justify-between items-center mb-12">
            <h1
              className={`font-black text-[22px] sm:text-[24px] my-2 tracking-widest capitalize sm:uppercase`}
            >
              Experience
            </h1>
            <a
              href="/public/profile/DuongNTB-profile.pdf"
              download
              className="py-1 px-6 sm:px-8 bg-primary text-white uppercase rounded-3xl h-[34px] sm:h-[40px] flex items-center justify-center text-[14px] sm:text-[24px]"
            >
              Download cv <BiCloudDownload className="ml-2" />
            </a>
          </div>
          {/* Content */}
          {projects.map((project) => (
            <div className="px-12 py-20 bg-white mb-12" key={project.id}>
              <h1 className="text-primary font-bold text-2xl mb-4">
                {project.timeline}
              </h1>
              <div className="w-full flex flex-col sm:flex-row justify-between items-start text-lg">
                <div className="w-full sm:w-50 mb-3 sm:mb-0">
                  {/* Job position */}
                  <h1 className="font-light uppercase text-medium mb-3">
                    {project.position}
                  </h1>
                  {/* Company name */}
                  <h2 className="font-light text-medium mb-1 sm:mb-3">
                    {project.companyName}
                  </h2>
                  {/* Company location */}
                  <h3 className="font-light text-medium mb-5">
                    {project.location}
                  </h3>
                  {project.assetsLink && (
                    <a
                      target="_blank"
                      href={project.assetsLink}
                      className="font-light text-medium py-2 px-3 bg-primary text-white rounded"
                      rel="noreferrer"
                    >
                      View my products
                    </a>
                  )}
                </div>
                <div className="w-full sm:w-50">
                  <p className="font-light text-medium">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mb-12">
          {/* Title */}
          <div className="flex justify-between items-center mb-12">
            <h1
              className={`font-black text-[22px] sm:text-[24px] my-2 tracking-widest capitalize sm:uppercase`}
            >
              Education
            </h1>
          </div>
          {/* Content */}
          {educations.map((education) => (
            <div className="px-12 py-20 bg-white mb-12" key={education.id}>
              <h1 className="text-primary font-bold text-2xl mb-4">
                {education.timeline}
              </h1>
              <div className="w-full flex flex-col sm:flex-row justify-between items-start text-lg">
                <div className="w-full sm:w-50 mb-3 sm:mb-0">
                  {/* Job position */}
                  <h1 className="font-light uppercase text-medium mb-3">
                    {education.position}
                  </h1>
                  {/* Company name */}
                  <h2 className="font-light text-medium mb-1 sm:mb-3">
                    {education.companyName}
                  </h2>
                  {/* Company location */}
                  <h3 className="font-light text-medium mb-3">
                    {education.location}
                  </h3>
                </div>
                <div className="w-full sm:w-50">
                  <p className="font-light text-medium">
                    {education.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="w-full px-12 py-16 sm:py-20 bg-white mb-12">
          <div className="my-4 sm:my-8">
            <h1
              className={`font-black text-[22px] sm:text-3xl mb-12 tracking-widest`}
            >
              Professional skillset
            </h1>
            <div className="w-full flex flex-col sm:flex-row flex-nowrap sm:flex-wrap justify-between items-start text-lg">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="w-full sm:w-50 flex justify-start items-center mb-5"
                >
                  <GiBearFace size={15} color="#0D6EFD" className="mr-2" />
                  <h1 className="font-light text-medium">{skill.label}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="my-4 sm:my-8">
            <h1
              className={`font-black text-[22px] sm:text-3xl mb-12 tracking-widest`}
            >
              Other
            </h1>
            <div className="w-full flex flex-col sm:flex-row flex-nowrap sm:flex-wrap justify-between items-start text-lg">
              {skillOther.map((lang) => (
                <div
                  key={lang.id}
                  className="w-full sm:w-50 flex justify-start items-center mb-5"
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
