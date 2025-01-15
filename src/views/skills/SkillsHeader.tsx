import { useGSAP } from "@gsap/react";

import TypingAnimationText from "../../components/ui/typingAnimationText/TypingAnimationText";

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
    <div className="w-full flex flex-col items-center xs:items-start justify-start gap-6 p-10">
      <h2 className="text-4xl xs:text-3xl text-dessert opacity-0" id="skills_header">
        Tech Stack & Expertise
      </h2>
      <TypingAnimationText text={subtitle} delay={1} />
    </div>
  );
};

export default SkillsHeader;
