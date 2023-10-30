import ContactPage from "@/components/ContactPage";
import Title from "@/components/Title";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex flex-col items-center px-5 sm:px-24 py-8 bg-[#E6DACE]">
      <div className="my-6 sm:my-20">
        <Title label="Let's talk" />
      </div>
      <ContactPage />
    </div>
  );
};

export default Contact;
