import { Flex } from "@/admin/components/styles/flex";
import { Button, Input, Spacer, useInput } from "@nextui-org/react";
import React, { useMemo } from "react";

type SkillInputProps = {
  skillInput: string;
  onChangeSkill: (e: any) => void;
  onAddSkill: (skill: string) => void;
  skills: string[];
};
const SkillInput = ({
  skillInput,
  onChangeSkill,
  onAddSkill,
  skills
}: SkillInputProps) => {
  const { reset, bindings } = useInput("");
  const isInvalidSkill = useMemo(() => {
    return !!skills.find((skill) => skill === skillInput)
  }, [skillInput]);
  return (
    <Flex direction="row" align="end" justify="start">
      <Spacer y={1.5} />
      <Input
        {...bindings}
        clearable
        label="Add new skill"
        placeholder="Add Skill"
        width="400px"
        required
        value={skillInput}
        onChange={onChangeSkill}
        onClearClick={reset}
        status={isInvalidSkill ? "error" : undefined}
        color={isInvalidSkill ? "error" : undefined}
        helperColor={isInvalidSkill ? "error" : undefined}
        helperText={
          isInvalidSkill
            ? "This skill is existing in list, please enter another skill"
            : undefined
        }
      />
      <Button
        shadow
        color="primary"
        auto
        className="ml-4"
        onClick={() => onAddSkill(skillInput)}
      >
        Add
      </Button>
    </Flex>
  );
};

export default SkillInput;
