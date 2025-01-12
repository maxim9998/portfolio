import Languages from "./Languages";
import SkillsHeader from "./SkillsHeader";
import SkillsMain from "./SkillsMain";
import SoftSkills from "./SoftSkills";

const Skills = () => {
  return (
    <section id="mySkills" className="w-full flex flex-col items-center justify-start gap-10 py-8">
      <SkillsHeader />
      <SkillsMain />
      <Languages />
      <SoftSkills />
    </section>
  );
};

export default Skills;
