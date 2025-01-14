import { FC } from "react";
import Logo from "../logo/Logo";
import ProgressBar from "../progressBar/ProgressBar";
import { ISkill } from "../../../views/skills/mainSkills/skillsData";

const SkillCard: FC<ISkill> = ({ name, mastery, logo, description }) => {
  return (
    <div className="rounded-lg flex flex-col justify-between items-center gap-6 py-4 px-2 h-72 bg-[#ffffff]/10 backdrop-blur-lg">
      <Logo src={logo} />
      <h4 className="text-lg text-dessert font-semibold">{name}</h4>
      <p className="text-justify text-xs min-h-20">{description}</p>
      <ProgressBar percent={mastery} />
    </div>
  );
};

export default SkillCard;
