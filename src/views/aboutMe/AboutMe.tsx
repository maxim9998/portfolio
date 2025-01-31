import AboutMeCards from "./AboutMeCards";

import { getHref, ROUTE_NAMES } from "../../utils/constants/sections";

const AboutMe = () => {
  return (
    <section className={`w-full px-10 xs:px-2 pt-24 xs:pt-14 mb-14 4k:w-2/3`} id={getHref(ROUTE_NAMES["ABOUT_ME"])}>
      <div className="w-full flex flex-col items-center justify-start xs:items-center gap-10 4k:items-center 4k:justify-center">
        <h1 className="text-3xl xs:text-2xl text-green ml-6 xs:ml-0">Who I Am as a Developer</h1>
        <AboutMeCards />
      </div>
    </section>
  );
};

export default AboutMe;
