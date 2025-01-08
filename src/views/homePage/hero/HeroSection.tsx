import TypingAnimationText from "../../../components/ui/typingAnimationText/TypingAnimationText.tsx";
import LetsStartButton from "./LetsStartButton.tsx";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import styles from "../styles.module.scss";

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
    <section className={["w-full h-screen flex items-center justify-center flex-col gap-9 text-dessert", styles["home_page"]].join(" ")}>
      <div className="italic xs:text-5xl text-center text-5xl font-semibold font-garamond">
        <h1 className="opacity-0" id="header_start">
          Hello, I’m Maksim
        </h1>
        <h1 className="opacity-0 mt-2" id="header_end">
          Front-End Developer & Digital Creator
        </h1>
      </div>
      <div className="w-1/3 text-center text-sm text-silver">
        <TypingAnimationText text={subtitle} id="hero_subtitle" delay={2.5} />
      </div>
      <a className="absolute bottom-10 flex flex-col items-center justify-center gap-4" href="#aboutThisPage">
        <h2 className="text-xl">Learn More About Me.</h2>
        <LetsStartButton />
      </a>
    </section>
  );
};

export default HeroSection;
