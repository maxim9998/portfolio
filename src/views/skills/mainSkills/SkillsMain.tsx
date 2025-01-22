import { useRef } from "react";

import SkillCard from "../../../components/ui/skillCard/SkillCard";
import { mainStackSkills } from "./skillsData";

import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import styles from "../style.module.scss";

const SkillsMain = () => {
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const skills = gsap.utils.toArray<HTMLElement>(skillsContainerRef?.current?.children || []);

    skills.forEach((skill, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skill,
          start: "top 100%",
          toggleActions: "play pause resume reset",
          scrub: false,
        },
      });

      tl.fromTo(
        skill,
        {
          opacity: 0,
          // scale: 0.75,
        },
        {
          opacity: 1,
          duration: 0.2,
          ease: "none",
          delay: index / 30,
          scale: 1,
        }
      );
    });
  }, []);

  return (
    <div className={`${styles["skills_main_cards"]}`} ref={skillsContainerRef}>
      {mainStackSkills.map((skill) => {
        return <SkillCard key={skill.name} name={skill.name} mastery={skill.mastery} logo={skill.logo} description={skill.description} />;
      })}
    </div>
  );
};

export default SkillsMain;
