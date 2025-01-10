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
          start: "top 104%",
          scrub: true,
        },
      });

      tl.from(card, {
        opacity: 0.1,
        x: 140,
        duration: 0.2,
        ease: "none",
      }).to(card, {
        x: 0,
        opacity: 1,
        stagger: 2,
      });
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4" ref={cardsRef}>
      {aboutSections.map((section) => {
        return (
          <div className="pl-4 py-3 max-w-3xl border-l" key={section.title}>
            <div className="flex items-start justify-start gap-3">
              {section.icon}
              <p className="mb-3 text-xl font-bold text-dessert">{section.title}</p>
            </div>
            <p className="text-justify text-silver">{section.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutMeCards;
