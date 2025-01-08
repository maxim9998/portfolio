import { useGSAP } from "@gsap/react";
import TypingAnimationText from "../../../components/ui/typingAnimationText/TypingAnimationText";
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
    <div className="w-full h-96 flex items-center justify-around font-merriweather">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl text-dessert opacity-0" id="skills_header">
          Tech Stack & Expertise
        </h1>
        <TypingAnimationText text={subtitle} id={"skills_header"} delay={1} />
      </div>
    </div>
  );
};

export default SkillsHeader;
