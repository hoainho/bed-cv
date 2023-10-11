import React from "react";
import Title from "../Title";
type Props = {};

const ResumePage = (props: Props) => {
  return (
    <div className="flex flex-col items-center px-24 py-8 bg-[#E6DACE]">
      <div className="my-20">
        <Title label="Resume" size={36} />
      </div>

      <div className="w-[724px] mb-12">
        {/* Title */}
        <div className="flex justify-between items-center mb-12">
          <h1
            className={`font-black text-[30px] my-2 tracking-widest uppercase`}
          >
            Experience
          </h1>
          <button
            type="button"
            className="py-1 px-8 bg-primary text-white uppercase rounded-3xl h-[40px]"
          >
            resume
          </button>
        </div>
        {/* Content */}
        <div className="px-12 py-20 bg-white mb-12">
          <h1 className="text-primary font-bold text-2xl mb-4">2019 - 2020</h1>
          <div className="w-full flex justify-between items-start text-lg">
            <div className="w-50">
              {/* Job position */}
              <h1 className="font-light uppercase text-medium mb-3">Designer</h1>
              {/* Company name */}
              <h2 className="font-light text-medium mb-3">Hutech University</h2>
              {/* Company location */}
              <h3 className="font-light text-medium mb-3">Ho Chi Minh, Viet Nam</h3>
            </div>
            <div className="w-50">
              <p className="font-light text-medium">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
          </div>
        </div>
        <div className="px-12 py-20 bg-white">
          <h1 className="text-primary font-bold text-2xl mb-4">2019 - 2020</h1>
          <div className="w-full flex justify-between items-start text-lg">
            <div className="w-50">
              {/* Job position */}
              <h1 className="font-light uppercase text-medium mb-3">Designer</h1>
              {/* Company name */}
              <h2 className="font-light text-medium mb-3">Hutech University</h2>
              {/* Company location */}
              <h3 className="font-light text-medium mb-3">Ho Chi Minh, Viet Nam</h3>
            </div>
            <div className="w-50">
              <p className="font-light text-medium">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[724px] mb-12">
        {/* Title */}
        <div className="flex justify-between items-center mb-12">
          <h1
            className={`font-black text-[30px] my-2 tracking-widest uppercase`}
          >
            Education
          </h1>
          <button
            type="button"
            className="py-1 px-8 bg-primary text-white uppercase rounded-3xl h-[40px]"
          >
            resume
          </button>
        </div>
        {/* Content */}
        <div className="px-12 py-20 bg-white mb-12">
          <h1 className="text-primary font-bold text-2xl mb-4">2020 - 2021</h1>
          <div className="w-full flex justify-between items-start text-lg">
            <div className="w-50">
              {/* Job position */}
              <h1 className="font-light uppercase text-medium mb-3">Designer</h1>
              {/* Company name */}
              <h2 className="font-light text-medium mb-3">Hutech University</h2>
              {/* Company location */}
              <h3 className="font-light text-medium mb-3">Ho Chi Minh, Viet Nam</h3>
            </div>
            <div className="w-50">
              <p className="font-light text-medium">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
          </div>
        </div>
        <div className="px-12 py-20 bg-white">
          <h1 className="text-primary font-bold text-2xl mb-4">2020 - 2022</h1>
          <div className="w-full flex justify-between items-start text-lg">
            <div className="w-50">
              {/* Job position */}
              <h1 className="font-light uppercase text-medium mb-3">Designer</h1>
              {/* Company name */}
              <h2 className="font-light text-medium mb-3">Hutech University</h2>
              {/* Company location */}
              <h3 className="font-light text-medium mb-3">Ho Chi Minh, Viet Nam</h3>
            </div>
            <div className="w-50">
              <p className="font-light text-medium">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
