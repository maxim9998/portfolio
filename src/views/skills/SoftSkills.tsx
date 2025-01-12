import { useRef } from "react";

import SoftSkill from "../../components/ui/softSkill/SoftSkill";

import { softSkills } from "../../utils/constants/softSkills";

const SoftSkills = () => {
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-start gap-10 w-full">
      <h2 className="text-4xl text-dessert">The Human Side of My Expertise</h2>
      <div className="flex flex-col items-center justify-start w-full relative" ref={skillsContainerRef}>
        <div className="absolute w-1 h-full bg-silver rounded-lg top-0 bottom-0"></div>
        {softSkills.map((skill, i) => {
          return <SoftSkill key={skill.name} name={skill.name} description={skill.description} icon={skill.icon} reverse={i % 2 === 0} />;
        })}
      </div>
    </div>
  );
};

export default SoftSkills;
