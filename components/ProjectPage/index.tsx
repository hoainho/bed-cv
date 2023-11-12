/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const ProjectPage = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "Mushroom Design",
      role: "Graphic Designer",
      description: `Use the Gaussian Blur tool to blur the blackground, then use the Object Selection Tool to cut the mushroom image, then go to Levels to reduce the image's brightness, then select the mushroom layer and go to Hue/Saturation to adjust the color. Finally, use the Brush Tool to paint highlights.`,
      image: "/projects/project1.jpg",
    },
    {
      id: 2,
      name: "Cosmetic Design",
      role: "Graphic Designer",
      description: `The Gradient Tool is used to help modify the color of the backdrop, the pen tool is used to form the base of the box, add the cloud picture to the frame drawing window, crop the image using the Object Selection Tool, and produce the effect. The Drop Shadow tool was used to create a shadow for the object, and the Horizontal Type Tool was used to create text.`,
      image: "/projects/project2.jpg",
    },
    {
      id: 3,
      name: "Cosmetic Design",
      role: "Graphic Designer",
      description: `Change the color with the Gradient Tool, then blur with Gaussian Blur, crop the picture with the Object Selection Tool, then cut the can into three sections with the Pen Tool.`,
      image: "/projects/project3.jpg",
    },
  ]);
  return (
    <div>
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full h-full sm:h-[450px] flex flex-col sm:flex-row items-start mb-12"
        >
          <div className="w-full sm:w-7/12 py-12 px-8 bg-white relative h-full">
            <div className="title">
              <h1 className="text-primary font-black text-3xl">
                {project.name}
              </h1>
              <p className="font-bold text-lg mb-8">{project.role}</p>
            </div>
            <p className="font-light text-xl text-justify break-word">{project.description}</p>
          </div>
          <div className="w-full sm:w-5/12 relative h-full">
            <img
              src={project.image}
              alt="project1"
              className="w-full h-[350px] sm:h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
