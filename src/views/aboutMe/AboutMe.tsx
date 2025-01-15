import AboutMeCards from "./AboutMeCards";

import { getHref, ROUTE_NAMES } from "../../utils/constants/sections";

import styles from "./styles.module.scss";

const AboutMe = () => {
  return (
    <section className={`w-full p-10 ${styles["about_me_my_image"]}`} id={getHref(ROUTE_NAMES["ABOUT_ME"])}>
      <div className="w-full flex flex-col items-start justify-start gap-10">
        <h1 className="text-3xl text-dessert ml-6 pt-10">Who I Am as a Developer</h1>
        <AboutMeCards />
      </div>
    </section>
  );
};

export default AboutMe;
