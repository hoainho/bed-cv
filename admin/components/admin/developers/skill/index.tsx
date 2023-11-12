import { Box } from "@/admin/components/styles/box";
import React, { useState } from "react";
import SkillList from "./SkillList";
import SkillInput from "./SkillInput";

type SkillComponentProps = {
  defaultState: string[];
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
};
const SkillComponent = ({ defaultState, color }: SkillComponentProps) => {
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState(defaultState);

  const onRemoveSkill = (skillRemoved: string) => {
    setSkills(skills.filter((skill: string) => skill !== skillRemoved));
  };
  const onAddSkill = (skill: string) => {
    if (skills.find((skill) => skill === skillInput)) return;
    setSkills((skills) => [...skills, skill]);
    setSkillInput("");
  };

  const onChangeSkill = (e: any) => {
    setSkillInput(e.target.value);
  };

  return (
    <Box>
      <SkillList onRemoveSkill={onRemoveSkill} skills={skills} color={color}/>
      <SkillInput
        onChangeSkill={onChangeSkill}
        onAddSkill={onAddSkill}
        skillInput={skillInput}
        skills={skills}
      />
    </Box>
  );
};

export default SkillComponent;
