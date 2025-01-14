import { useRef } from "react";

import LanguageRow from "../../../components/ui/languageRow/LanguageRow";
import { knownLanguages } from "./languagesData";

import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Languages = () => {
  const languagesContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const languages = gsap.utils.toArray<HTMLElement>(languagesContainer?.current?.children || []);

    languages.forEach((language) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: language,
          start: "top 100%",
          toggleActions: "play pause resume reset",
          scrub: false,
        },
      });

      tl.fromTo(
        language,
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.2,
          ease: "none",
        },
        {
          opacity: 1,
          duration: 0.2,
          ease: "none",
          scale: 1,
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-start gap-14 w-full px-8">
      <h2 className="text-4xl text-dessert">Beyond Code: Languages I Speak</h2>
      <div className="flex flex-col items-center justify-start gap-6 w-full" ref={languagesContainer}>
        {knownLanguages.map((language) => {
          return <LanguageRow key={language.name} flag={language.flag} level={language.level} proficiency={language.proficiency} name={language.name} />;
        })}
      </div>
    </div>
  );
};

export default Languages;
