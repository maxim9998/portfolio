import { FC, useMemo } from "react";
import { ISoftSkill } from "../../../views/skills/softSkills/softSkillsData";
import TypingAnimationText from "../typingAnimationText/TypingAnimationText";

interface ISoftSkillExtended extends ISoftSkill {
  reverse: boolean;
}

const SoftSkill: FC<ISoftSkillExtended> = ({ icon, name, reverse, description }) => {
  const renderLeftOrRight = useMemo(() => {
    return {
      direction: reverse ? "flex-row" : "flex-row-reverse",
      justify: reverse ? "justify-end" : "justify-start",
      description: reverse ? "items-start" : "items-end",
      text: reverse ? "text-left" : "text-right",
    };
  }, [reverse]);

  return (
    <div className={`flex items-center w-full justify-between pt-10 ${renderLeftOrRight.direction}`}>
      <div className={`w-1/2 flex items-center ${renderLeftOrRight.justify} px-6`}>{icon}</div>
      <div className={`rounded-lg w-1/2 flex flex-col justify-center px-6 ${renderLeftOrRight.description}`}>
        <h3 className={`text-2xl text-dessert ${renderLeftOrRight.text}`}>{name}</h3>
        <TypingAnimationText text={description} delay={0} className={`text-md font-medium my-2 ${renderLeftOrRight.text}`} />
      </div>
    </div>
  );
};

export default SoftSkill;
