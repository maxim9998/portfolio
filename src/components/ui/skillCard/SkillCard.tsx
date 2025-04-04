import { FC } from "react";
import { ISkill } from "../../../views/skills/mainSkills/skillsData";
import Logo from "../logo/Logo";
import ProgressBar from "../progressBar/ProgressBar";

const SkillCard: FC<ISkill> = ({ name, mastery, logo, description }) => {
  return (
    <div className="rounded-lg flex flex-col justify-between items-center gap-6 py-4 px-2 h-72 bg-[#ffffff]/10 backdrop-blur-lg">
      <Logo src={logo} />
      <h4 className="text-lg text-green font-semibold">{name}</h4>
      <p className="text-justify text-xs min-h-20">{description}</p>
      <ProgressBar percent={mastery} />
    </div>
  );
};

export default SkillCard;
