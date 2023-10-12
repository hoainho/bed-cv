import Title from "@/components/Title";
import React from "react";
type Props = {};

const ProjectsPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center px-24 py-8 bg-[#E6DACE]">
      <div className="w-[750px]">
        <div className="w-full my-20">
          <Title label="Projects" />
          <p className="font-light text-lg mt-12 text-center px-8 tracking-wide">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="w-full h-[404px] flex items-start mb-12">
          <div className="w-7/12 py-12 px-8 bg-white relative h-full">
            <div className="title">
              <h1 className="text-primary font-black text-3xl">
                Project name 01
              </h1>
              <p className="font-bold text-lg mb-8">Role Title</p>
            </div>
            <p className="font-light text-xl">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="w-5/12 relative h-full">
            <img src="/Leaflet.webp" alt="project1" className="h-full object-cover" />
          </div>
        </div>
        
        <div className="w-full h-[404px] flex items-start mb-12">
          <div className="w-7/12 py-12 px-8 bg-white relative h-full">
            <div className="title">
              <h1 className="text-primary font-black text-3xl">
                Project name 02
              </h1>
              <p className="font-bold text-lg mb-8">Role Title</p>
            </div>
            <p className="font-light text-xl">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="w-5/12 relative h-full">
            <img src="/Leaflet.webp" alt="project1" className="h-full object-cover" />
          </div>
        </div>

        <div className="w-full h-[404px] flex items-start mb-12">
          <div className="w-7/12 py-12 px-8 bg-white relative h-full">
            <div className="title">
              <h1 className="text-primary font-black text-3xl">
                Project name 03
              </h1>
              <p className="font-bold text-lg mb-8">Role Title</p>
            </div>
            <p className="font-light text-xl">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="w-5/12 relative h-full">
            <img src="/Leaflet.webp" alt="project1" className="h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
