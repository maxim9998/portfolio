import { useRef } from "react";
import { aboutSections } from "./aboutSections";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AboutMeCards = () => {
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
        x: 20,
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
    <div className="w-full flex items-start justify-between flex-wrap" ref={cardsRef}>
      {aboutSections.map((section) => {
        return (
          <div className={`w-[45%] flex items-center py-3 justify-start`} key={section.title}>
            <div className={`w-full justify-self-end p-4 border rounded-lg`}>
              <div className="flex items-start justify-start gap-3">
                {section.icon}
                <p className="mb-3 text-xl font-bold text-dessert">{section.title}</p>
              </div>
              <p className="text-justify text-silver">{section.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutMeCards;
