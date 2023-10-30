import ProjectPage from "@/components/ProjectPage";
import Title from "@/components/Title";
import React from "react";
type Props = {};

const ProjectsPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center px-5 sm:px-24 py-8 bg-[#E6DACE]">
      <div className="w-full sm:w-[750px]">
        <div className="w-full my-20">
          <Title label="Projects" />
          <p className="w-full break-all font-light text-lg mt-12 text-justify sm:text-center px-8 tracking-wide">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <ProjectPage />
      </div>
    </div>
  );
};

export default ProjectsPage;
