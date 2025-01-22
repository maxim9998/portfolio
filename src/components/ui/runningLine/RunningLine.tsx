import { FC, useMemo, useRef } from "react";

import styles from "./style.module.scss";
import Logo from "../logo/Logo";

import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ISkill } from "../../../views/skills/mainSkills/skillsData";

const RunningLine: FC<{ logos: ISkill[]; className: string }> = ({ logos, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const logosDouble = useMemo(() => [...logos, ...logos], [logos]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollWidth = containerRef.current?.scrollWidth || 0;
    const duration = logos.length;

    const logosData = gsap.utils.toArray<HTMLDivElement>(containerRef?.current?.children || []);

    logosData.forEach((logo) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef?.current,
          toggleActions: "play pause resume reset",
          scrub: false,
        },
      });

      tl.to(logo, {
        translateX: -scrollWidth / 1.97,
        repeat: -1,
        duration,
        ease: "none",
      });
    });
  }, []);

  return (
    <div className={className}>
      <div className={`flex items-center justify-start gap-16 scrollbar-hidden ${styles["blur_borders"]}`} ref={containerRef}>
        {logosDouble.map((logo, i) => (
          <Logo src={logo.logo} key={logo.name + i} />
        ))}
      </div>
    </div>
  );
};

export default RunningLine;
