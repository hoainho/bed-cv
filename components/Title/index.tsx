import React from "react";
import { GiBearFace } from "react-icons/gi";

type Props = {
  label: string;
};

const Title = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <GiBearFace size={30} color="#0D6EFD" className="mr-2"/>
      <h1 className={`font-black text-[30px] my-2 tracking-widest uppercase`}>
        {props.label}
      </h1>
    </div>
  );
};

export default Title;
