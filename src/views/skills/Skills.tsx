import { getHref, ROUTE_NAMES } from "../../utils/constants/sections";

import SkillsHeader from "./SkillsHeader";

import SkillsMain from "./mainSkills/SkillsMain";
import SoftSkills from "./softSkills/SoftSkills";
import Languages from "./languages/Languages";

const Skills = () => {
  return (
    <section id={getHref(ROUTE_NAMES["SKILLS"])} className={`w-full flex flex-col items-center justify-start gap-10 xs:gap-2 pt-24 xs:pt-14 4k:min-h-screen 4k:w-2/3`}>
      <SkillsHeader />
      <SkillsMain />
      <Languages />
      <SoftSkills />
    </section>
  );
};

export default Skills;
