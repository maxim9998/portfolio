import LetsStartButtonArrow from "../../components/ui/letsStartButtonArrow/LetsStartButtonArrow.tsx";
import TypingAnimationText from "../../components/ui/typingAnimationText/TypingAnimationText.tsx";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { getHref, ROUTE_NAMES } from "../../utils/constants/sections.ts";

import styles from "./styles.module.scss";

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
      <div className="h-screen w-full flex items-center justify-center flex-col gap-9 text-dessert ">
        <div className="italic xs:text-5xl text-center text-5xl font-semibold font-garamond">
          <h1 className="opacity-0" id="header_start">
            Hello, I’m Maksim
          </h1>
          <h1 className="opacity-0 mt-2" id="header_end">
            Front-End Developer & Digital Creator
          </h1>
        </div>
        <div className="w-1/3 text-center text-sm text-silver">
          <TypingAnimationText text={subtitle} delay={2.5} />
        </div>
        <a className="absolute bottom-10 flex flex-col items-center justify-center gap-4" href={`#${getHref(ROUTE_NAMES["ABOUT_ME"])}`}>
          <h2 className="text-xl">Learn More About Me.</h2>
          <LetsStartButtonArrow />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
