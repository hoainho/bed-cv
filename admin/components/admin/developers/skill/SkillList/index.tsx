import { Box } from "@/admin/components/styles/box";
import { Badge, Grid, useInput } from "@nextui-org/react";
import React, { useMemo, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type SkillListProps = {
  onRemoveSkill: (skillRemoved: string) => void;
  skills: string[];
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
};

const SkillList = ({ skills, onRemoveSkill, color }: SkillListProps) => {
  return (
    <Grid.Container gap={2}>
      {skills.map((skill, index) => (
        <Grid
          key={`skill-${skill}-${index}`}
          className="itemToRemove removeWithoutShadow"
        >
          <Badge color={color || 'primary'} variant="bordered">
            {skill}
          </Badge>
          <Box className="remove absolute top-50 right-0">
            <AiOutlineCloseCircle
              color="var(--nextui-colors-accents9)"
              size={20}
              onClick={() => onRemoveSkill(skill)}
            />
          </Box>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default SkillList;
