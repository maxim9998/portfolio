import { useGSAP } from "@gsap/react";
import RunningLine from "../../components/ui/runningLine/RunningLine";
import TypingAnimationText from "../../components/ui/typingAnimationText/TypingAnimationText";
import { mainStackSkills } from "../../utils/constants/skills";
import gsap from "gsap";

const subtitle = "Crafting seamless user experiences with modern web technologies.";

const SkillsHeader = () => {
  useGSAP(() => {
    gsap.to("#skills_header", {
      opacity: 1,
      duration: 2,
      ease: "none",
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-start gap-6 p-10">
      <h2 className="text-4xl text-dessert opacity-0" id="skills_header">
        Tech Stack & Expertise
      </h2>
      <TypingAnimationText text={subtitle} id={"skills_header"} delay={1} />
      <div className="flex items-center justify-center w-full">
        <RunningLine logos={mainStackSkills} className="w-2/3" />
      </div>
    </div>
  );
};

export default SkillsHeader;
