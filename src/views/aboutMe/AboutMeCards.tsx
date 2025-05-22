import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { memo, useRef } from "react";
import { aboutSections } from "./aboutSections";

const AboutMeCards = memo(() => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray<HTMLElement>(cardsRef?.current?.children || []);

    cards.forEach((card) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          scrub: true,
        },
      });

      tl.from(card, {
        opacity: 0,
        x: 4,
        duration: 0.1,
        ease: "none",
      }).to(card, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "none",
      });
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-start justify-start 4k:items-center" ref={cardsRef}>
      {aboutSections.map((section) => {
        return (
          <div className={`w-full 2xl:w-1/2 flex items-center justify-start`} key={section.title}>
            <div className={`w-full justify-self-end p-4 border-l 4k:border-l-0`}>
              <div className="flex items-start justify-start gap-3 4k:justify-center">
                {section.icon}
                <p className="mb-3 text-xl font-bold text-green">{section.title}</p>
              </div>
              <p className="text-justify text-silver 4k:text-center">{section.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
})

export default AboutMeCards;
