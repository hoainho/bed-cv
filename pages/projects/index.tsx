import ProjectPage from "@/components/ProjectPage";
import Title from "@/components/Title";
import React from "react";
type Props = {};

const ProjectsPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center px-5 sm:px-24 py-8 bg-[#E6DACE]">
      <div className="w-full sm:w-[750px]">
        <div className="w-full my-20">
          <Title label="Projects" link="/projects"/>
          <p className="w-full break-all font-light text-lg mt-12 text-justify sm:text-center px-8 tracking-wide">
            {`Thank you for looking at my projects, here are some of my favorites. In addition to the things listed here, I have many other unique and innovative products on the market, please contact me if you are interested to learn more`}
          </p>
        </div>
        <ProjectPage />
      </div>
    </div>
  );
};

export default ProjectsPage;
