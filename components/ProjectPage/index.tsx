/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const ProjectPage = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "Mushroom Design",
      role: "Graphic Designer",
      description: `Use the Gaussian Blur tool to blur the background, the Object Selection Tool to crop the mushroom image, then go to Hue/ Saturation, adjust the appropriate color and select the Color Dodge filter, select the newly adjusted color layer, press (Ctrl + i) to turn the layer black, and use the Brush Tool to reduce the Opacity.`,
      image: "/projects/project1.jpg",
    },
    {
      id: 2,
      name: "Cosmetic Design",
      role: "Graphic Designer",
      description: `The Gradient Tool is used to assist adjust the color of the backdrop, and the pen tool is used to draw the base of the box (yellow). To create a shadow effect for the frame, go to the frame drawing window and select Drop Shadow. Select the frame layer, then hold down the Alt key and drag the cloud picture beneath the frame layer. Crop the image using the Object Selection Tool, add a shadow effect on the product with the Drop Shadow tool, then add text using the Horizontal Type Tool.`,
      image: "/projects/project2.jpg",
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
            <p className="font-light text-xl">{project.description}</p>
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
