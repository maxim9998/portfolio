import LetsStartButtonArrow from "../../components/ui/letsStartButtonArrow/LetsStartButtonArrow.tsx";
import AboutMeCards from "./AboutMeCards";

import styles from "./styles.module.scss";

const AboutMe = () => {
  return (
    <section className={`w-full p-10 ${styles["about_me_my_image"]}`} id="aboutThisPage">
      <div className="w-2/3 flex flex-col items-start justify-start gap-10">
        <h1 className="text-3xl text-dessert ml-6">About me</h1>
        <AboutMeCards />
      </div>
      <div>
        <a className="flex flex-col items-center justify-center gap-4" href="#mySkills">
          <h2 className="text-xl">Discover my skills.</h2>
          <LetsStartButtonArrow />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
