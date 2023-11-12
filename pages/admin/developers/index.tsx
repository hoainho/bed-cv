import { Box } from "@/admin/components/styles/box";
import { Flex } from "@/admin/components/styles/flex";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import SkillComponent from "@/admin/components/admin/developers/skill";

interface IFormInput {
  id: number;
  duration: string;
  role: string;
  companyName: string;
  location: string;
  thumbnails: string;
}

const DeveloperAdmin = () => {
  const [initForm] = useState<IFormInput>({
    id: 0,
    duration: "",
    role: "",
    companyName: "",
    location: "",
    thumbnails: "",
  });
  const [projectContainer, setProjectContainer] =
    useState<IFormInput>(initForm);
  const {
    register: registerProject,
    handleSubmit: handleSubmitProject,
    reset: resetProject,
  } = useForm<IFormInput>({
    defaultValues: initForm,
  });

  const [educationContainer, setEducationContainer] =
    useState<IFormInput>(initForm);
  const {
    register: registerEducation,
    handleSubmit: handleSubmitEducation,
    reset: resetEducation,
  } = useForm<IFormInput>({
    defaultValues: initForm,
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      duration: "2019 - 2020",
      role: "UI Designer",
      companyName: "Hutech University",
      location: "Ho Chi Minh, Viet Nam",
      thumbnails: `I'm a paragraph. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double click me to add
          your own content and make changes to the font.`,
    },
    {
      id: 2,
      duration: "2020 - 2021",
      role: "UI/UX Designer",
      companyName: "Hutech University",
      location: "Ho Chi Minh, Viet Nam",
      thumbnails: `lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.`,
    },
    {
      id: 3,
      duration: "2020 - 2021",
      role: "UI/UX Designer",
      companyName: "Hutech University",
      location: "Ho Chi Minh, Viet Nam",
      thumbnails: `lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.`,
    },
    {
      id: 4,
      duration: "2020 - 2021",
      role: "UI/UX Designer",
      companyName: "Hutech University",
      location: "Ho Chi Minh, Viet Nam",
      thumbnails: `lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.`,
    },
    {
      id: 5,
      duration: "2020 - 2021",
      role: "UI/UX Designer",
      companyName: "Hutech University",
      location: "Ho Chi Minh, Viet Nam",
      thumbnails: `lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.`,
    },
  ]);

  const [educations, setEducations] = useState([
    {
      id: 1,
      duration: "2019 - 2020",
      role: "Graphic Designer",
      companyName: "Hutech University",
      location: "Ho Chi Minh, Viet Nam",
      thumbnails: `I'm a paragraph. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double click me to add
          your own content and make changes to the font.`,
    },
  ]);
  useEffect(() => {
    if (projectContainer.id > 0) {
      resetProject(projectContainer);
      setProjectContainer(initForm);
    }
  }, [projectContainer]);

  useEffect(() => {
    if (educationContainer.id > 0) {
      resetEducation(educationContainer);
      setEducationContainer(initForm);
    }
  }, [educationContainer]);

  const onAddProject: SubmitHandler<IFormInput> = (data) => {
    setProjects([...projects, { ...data, id: projects.length + 1 }]);
    resetProject(projectContainer);
  };

  const onAddEducation: SubmitHandler<IFormInput> = (data) => {
    setEducations([...educations, { ...data, id: educations.length + 1 }]);
    resetEducation(educationContainer);
  };

  const onRemoveProject = (projectId: number) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };
  const onRemoveEducation = (educationId: number) => {
    setEducations(
      educations.filter((education) => education.id !== educationId)
    );
  };
  const [skills] = useState(["Adobe Photoshop", "Adobe Illustrator"]);
  const [otherSkills] = useState([
    "Office Informatics ( Basic )",
    "English ( Native )",
  ]);

  return (
    <Flex
      css={{
        mt: "$5",
        px: "$6",
        "@sm": {
          mt: "$10",
          px: "$16",
        },
      }}
      justify={"center"}
      direction={"column"}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base uppercase font-semibold leading-7 text-[var(--nextui-colors-accents9)]">
            About me
          </h2>
          <p className="mt-1 text-sm leading-6 text-[var(--nextui-colors-accents8)]">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="displayname"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Social
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-[var(--nextui-colors-accents6)] sm:text-sm">
                    facebook.com/
                  </span>
                  <input
                    type="text"
                    name="usernameFacebook"
                    id="usernameFacebook"
                    autoComplete="usernameFacebook"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-[var(--nextui-colors-accents9)] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="be-duong"
                  />
                </div>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-[var(--nextui-colors-accents6)] sm:text-sm">
                    instagram.com/
                  </span>
                  <input
                    type="text"
                    name="usernameInstagram"
                    id="usernameInstagram"
                    autoComplete="usernameInstagram"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-[var(--nextui-colors-accents9)] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="be-duong"
                  />
                </div>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-[var(--nextui-colors-accents6)] sm:text-sm">
                    linkedin.com/
                  </span>
                  <input
                    type="text"
                    name="usernameLinkedin"
                    id="usernameLinkedin"
                    autoComplete="usernameLinkedin"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-[var(--nextui-colors-accents9)] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="be-duong"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="display-name"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Display name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="display-name"
                  id="display-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="specialized"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Specialized
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="specialized"
                  id="specialized"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[var(--nextui-colors-accents4)] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--nextui-colors-accents6)]">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <FaUserCircle
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-[var(--nextui-colors-background)] px-2.5 py-1.5 text-sm font-semibold text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[var(--nextui-colors-background)]"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <HiOutlinePhoto
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-[var(--nextui-colors-accents6)]">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500  bg-transparent"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-[var(--nextui-colors-accents6)]">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base uppercase font-semibold leading-7 text-[var(--nextui-colors-accents9)]">
            Resume
          </h2>
          <p className="mt-1 text-sm leading-6 text-[var(--nextui-colors-accents6)] mb-2">
            Introduce yourself and what you do
          </p>

          <h2 className="text-base font-semibold leading-7 text-[var(--nextui-colors-accents9)] mt-5 mb-3">
            Project
          </h2>
          <Flex
            css={{ gap: "$4" }}
            align={"center"}
            justify={"between"}
            wrap={"wrap"}
          >
            {projects.map((project) => (
              <Box
                className="itemToRemove relative w-[48%] p-3 bg-[var(--nextui-colors-gray100)] mb-2 rounded"
                key={project.id}
                onClick={() => setProjectContainer(project)}
              >
                <h1 className="text-primary font-bold text-sm">
                  {project.duration}
                </h1>
                <Flex className="w-full flex flex-col sm:flex-row justify-between items-start text-base">
                  <div className="w-full sm:w-5/12 mb-2 sm:mb-0">
                    {/* Job position */}
                    <h1 className="font-light uppercase text-base mb-0">
                      {project.role}
                    </h1>
                    {/* Company name */}
                    <h2 className="font-light text-base mb-0">
                      {project.companyName}
                    </h2>
                    {/* Company location */}
                    <h3 className="font-light text-base mb-0">
                      {project.location}
                    </h3>
                  </div>
                  <div className="w-full sm:w-7/12">
                    <p className="font-light text-sm">{project.thumbnails}</p>
                  </div>
                </Flex>
                <Box className="remove absolute top-50 right-0">
                  <AiFillDelete
                    color="var(--nextui-colors-accents9)"
                    size={30}
                    onClick={() => onRemoveProject(project.id)}
                  />
                </Box>
              </Box>
            ))}
          </Flex>

          <form
            onSubmit={handleSubmitProject(onAddProject)}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div className="sm:col-span-3">
              <label
                htmlFor="duration"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Duration
              </label>
              <div className="mt-2">
                <input
                  {...registerProject("duration")}
                  type="text"
                  name="duration"
                  id="duration"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                role
              </label>
              <div className="mt-2">
                <input
                  {...registerProject("role")}
                  type="text"
                  name="role"
                  id="role"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Company
              </label>
              <div className="mt-2">
                <input
                  {...registerProject("companyName")}
                  type="text"
                  name="companyName"
                  id="companyName"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Location
              </label>
              <div className="mt-2">
                <input
                  {...registerProject("location")}
                  type="text"
                  name="location"
                  id="location"
                  autoComplete="location"
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="thumbnails"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Thumbnails
              </label>
              <div className="mt-2">
                <textarea
                  {...registerProject("thumbnails")}
                  id="thumbnails"
                  name="thumbnails"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[var(--nextui-colors-accents4)] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--nextui-colors-accents6)]">
                Write a few shorten descriptions about your project.
              </p>
            </div>
            <Button type="submit">Add</Button>
          </form>

          {/* Education Section */}
          <h2 className="text-base font-semibold leading-7 text-[var(--nextui-colors-accents9)] mt-10 mb-3">
            Education
          </h2>
          <Flex
            css={{ gap: "$4" }}
            align={"center"}
            justify={"between"}
            wrap={"wrap"}
          >
            {educations.map((education) => (
              <Box
                className="itemToRemove relative w-[48%] p-3 bg-[var(--nextui-colors-gray100)] mb-2 rounded"
                key={education.id}
                onClick={() => setEducationContainer(education)}
              >
                <h1 className="text-primary font-bold text-sm">
                  {education.duration}
                </h1>
                <Flex className="w-full flex flex-col sm:flex-row justify-between items-start text-base">
                  <div className="w-full sm:w-5/12 mb-2 sm:mb-0">
                    {/* Job position */}
                    <h1 className="font-light uppercase text-base mb-0">
                      {education.role}
                    </h1>
                    {/* Company name */}
                    <h2 className="font-light text-base mb-0">
                      {education.companyName}
                    </h2>
                    {/* Company location */}
                    <h3 className="font-light text-base mb-0">
                      {education.location}
                    </h3>
                  </div>
                  <div className="w-full sm:w-7/12">
                    <p className="font-light text-sm">{education.thumbnails}</p>
                  </div>
                </Flex>
                <Box className="remove absolute top-50 right-0">
                  <AiFillDelete
                    color="var(--nextui-colors-accents9)"
                    size={30}
                    onClick={() => onRemoveEducation(education.id)}
                  />
                </Box>
              </Box>
            ))}
          </Flex>

          <form
            onSubmit={handleSubmitEducation(onAddEducation)}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div className="sm:col-span-3">
              <label
                htmlFor="duration"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Duration
              </label>
              <div className="mt-2">
                <input
                  {...registerEducation("duration")}
                  type="text"
                  name="duration"
                  id="duration"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                role
              </label>
              <div className="mt-2">
                <input
                  {...registerEducation("role")}
                  type="text"
                  name="role"
                  id="role"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Company
              </label>
              <div className="mt-2">
                <input
                  {...registerEducation("companyName")}
                  type="text"
                  name="companyName"
                  id="companyName"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Location
              </label>
              <div className="mt-2">
                <input
                  {...registerEducation("location")}
                  type="text"
                  name="location"
                  id="location"
                  autoComplete="location"
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="thumbnails"
                className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
              >
                Thumbnails
              </label>
              <div className="mt-2">
                <textarea
                  {...registerEducation("thumbnails")}
                  id="thumbnails"
                  name="thumbnails"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-[var(--nextui-colors-accents9)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[var(--nextui-colors-accents4)] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  style={{ backgroundColor: "var(--nextui-colors-gray100)" }}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--nextui-colors-accents6)]">
                Write a few shorten descriptions about your education.
              </p>
            </div>
            <Button type="submit">Add</Button>
          </form>
        </div>
        {/* Skill Section*/}
        <h2 className="text-base uppercase font-semibold leading-7 text-[var(--nextui-colors-accents9)]">
          Skill
        </h2>
        <SkillComponent defaultState={skills} />
        {/* Other skill section */}
        <h2 className="text-base uppercase font-semibold leading-7 text-[var(--nextui-colors-accents9)]">
          Other Skill
        </h2>
        <SkillComponent defaultState={otherSkills} color="secondary"/>
        {/* Continue work at here */}

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-[var(--nextui-colors-accents9)]">
            Notifications
          </h2>
          <p className="mt-1 text-sm leading-6 text-[var(--nextui-colors-accents6)]">
            {`We'll always let you know about important changes, but you pick what else you want to hear about.`}
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-[var(--nextui-colors-accents9)]">
                By Email
              </legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-[var(--nextui-colors-accents9)]"
                    >
                      Comments
                    </label>
                    <p className="text-[var(--nextui-colors-accents6)]">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-[var(--nextui-colors-accents9)]"
                    >
                      Candidates
                    </label>
                    <p className="text-[var(--nextui-colors-accents6)]">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="offers"
                      className="font-medium text-[var(--nextui-colors-accents9)]"
                    >
                      Offers
                    </label>
                    <p className="text-[var(--nextui-colors-accents6)]">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-[var(--nextui-colors-accents9)]">
                Push Notifications
              </legend>
              <p className="mt-1 text-sm leading-6 text-[var(--nextui-colors-accents6)]">
                These are delivered via SMS to your mobile phone.
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
                  >
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
                  >
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-[var(--nextui-colors-accents9)]"
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-[var(--nextui-colors-accents9)]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </Flex>
  );
};

export default DeveloperAdmin;
