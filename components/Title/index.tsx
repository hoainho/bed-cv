import React from "react";
import { GiBearFace } from "react-icons/gi";

type Props = {
  label: string;
  size: number;
};

const Title = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <GiBearFace size={`${props.size / 1.5}px`} color="#0D6EFD" className="mr-2"/>
      <h1 className={`font-black text-[${+props.size}px] my-2 tracking-widest uppercase`}>
        {props.label}
      </h1>
    </div>
  );
};

export default Title;
