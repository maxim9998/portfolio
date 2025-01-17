import { useRef } from "react";

import SoftSkill from "../../../components/ui/softSkill/SoftSkill";
import { softSkills } from "./softSkillsData";

import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SoftSkills = () => {
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const skills = gsap.utils.toArray<HTMLDivElement>(skillsContainerRef?.current?.children || []);

    skills.slice(1).forEach((skill) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skill,
          start: "top 85%",
          end: "+=200",
          scrub: true,
        },
      });
      tl.fromTo(
        skill,
        {
          opacity: 0,
          duration: 0.5,
          ease: "none",
        },
        {
          opacity: 1,
          duration: 2,
          ease: "none",
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-start xs:justify-center gap-10 xs:gap-3 w-full">
      <h2 className="text-4xl xs:text-xl text-green">The Human Side of My Expertise</h2>
      <div className="flex flex-col items-center justify-start w-full relative" ref={skillsContainerRef}>
        <div className="absolute w-1 h-full bg-silver rounded-lg top-0 bottom-0"></div>
        {softSkills.map((skill, i) => (
          <SoftSkill key={skill.name} name={skill.name} description={skill.description} icon={skill.icon} reverse={i % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
