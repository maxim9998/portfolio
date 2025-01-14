import { getHref, ROUTE_NAMES } from "../../utils/constants/sections";

import SkillsHeader from "./SkillsHeader";

import SkillsMain from "./mainSkills/SkillsMain";
import SoftSkills from "./softSkills/SoftSkills";
import Languages from "./languages/Languages";

import styles from "./style.module.scss";

const Skills = () => {
  return (
    <section id={getHref(ROUTE_NAMES["SKILLS"])} className={`w-full flex flex-col items-center justify-start gap-10 py-8 pt-20 ${styles["all_skills"]}`}>
      <SkillsHeader />
      <SkillsMain />
      <Languages />
      <SoftSkills />
    </section>
  );
};

export default Skills;
