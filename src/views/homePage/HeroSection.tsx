import LetsStartButtonArrow from "../../components/ui/letsStartButtonArrow/LetsStartButtonArrow.tsx";
import TypingAnimationText from "../../components/ui/typingAnimationText/TypingAnimationText.tsx";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { getHref, ROUTE_NAMES } from "../../utils/constants/sections.ts";

import styles from "./styles.module.scss";
// import RunningLine from "../../components/ui/runningLine/RunningLine.tsx";
// import { mainStackSkills } from "../skills/mainSkills/skillsData.ts";

const subtitle = "Specializing in modern, responsive, and user-friendly digital solutions with seamless functionality and exceptional user experiences.";

const HeroSection = () => {
  useGSAP(() => {
    gsap.to("#header_start", {
      opacity: 1,
      duration: 2,
      ease: "none",
    });

    gsap.to("#header_end", {
      opacity: 1,
      delay: 1.5,
      ease: "none",
      duration: 2,
    });
  }, []);

  return (
    <section className={`w-full ${styles["home_page"]}`} id={getHref(ROUTE_NAMES["HOME"])}>
      <div className="h-screen w-full flex items-center justify-center flex-col gap-24 text-green overflow-x-hidden">
        <div className="w-full flex flex-col items-center justify-center gap-9">
          <div className="italic text-center text-5xl xs:text-3xl font-semibold font-garamond">
            <h1 className="opacity-0" id="header_start">
              Hello, I’m Maksim
            </h1>
            <h1 className="opacity-0 mt-2" id="header_end">
              Front-End Developer & Digital Creator
            </h1>
          </div>
          <div className="w-1/3 xs:w-full text-center text-sm xs:text-xs text-silver">
            <TypingAnimationText text={subtitle} delay={2.5} />
          </div>
        </div>
        {/* <div className="flex items-center justify-center w-full">
          <RunningLine logos={mainStackSkills} className="w-1/2 xs:w-full" />
        </div> */}
        <a className="absolute bottom-10 flex flex-col items-center justify-center gap-4" href={`#${getHref(ROUTE_NAMES["ABOUT_ME"])}`}>
          <h2 className="text-xl">Learn More About Me.</h2>
          <LetsStartButtonArrow />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
