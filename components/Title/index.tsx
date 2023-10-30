import Link from "next/link";
import React from "react";
import { GiBearFace } from "react-icons/gi";

type Props = {
  label: string;
  link: string;
};

const Title = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <GiBearFace size={30} color="#0D6EFD" className="mr-2" />
      <Link href={props.link}>
        <h1 className={`font-black text-[30px] my-2 tracking-widest uppercase`}>
          {props.label}
        </h1>
      </Link>
    </div>
  );
};

export default Title;
