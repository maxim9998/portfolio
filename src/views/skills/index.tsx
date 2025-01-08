import { mainStackSkills } from "../../utils/constants/skills";
import RunningLine from "../../components/ui/runningLine/RunningLine";
import SkillsHeader from "./header/SkillsHeader";
import styles from "./style.module.scss";

const Skills = () => {
  return (
    <main className="flex flex-col items-center justify-start w-screen overflow-hidden">
      <section className={`h-screen w-full flex flex-col items-center justify-center gap-20 ${styles["skills_main_section"]}`}>
        <SkillsHeader />
        <RunningLine logos={mainStackSkills} />
      </section>
    </main>
  );
};

export default Skills;
