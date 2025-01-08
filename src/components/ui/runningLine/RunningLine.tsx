import { FC, useMemo, useRef } from "react";

import styles from "./style.module.scss";
import Logo from "../logo/Logo";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ISkill } from "../../../utils/constants/skills";

const RunningLine: FC<{ logos: ISkill[] }> = ({ logos }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const logosDouble = useMemo(() => [...logos, ...logos], [logos]);

  useGSAP(() => {
    const scrollWidth = containerRef.current?.scrollWidth || 0;
    const duration = 25;
    const translateX = -Math.round(scrollWidth / 2) - 6;

    gsap.to(".logo_single", {
      translateX: translateX,
      repeat: -1,
      duration,
      ease: "none",
    });
  }, []);

  return (
    <div className="w-2/3">
      <div className={`flex items-center justify-start gap-24 px-20 scrollbar-hidden ${styles["blur_borders"]}`} ref={containerRef}>
        {logosDouble.map((logo, i) => (
          <Logo src={logo.logo} className={"logo_single"} key={logo.name + i} />
        ))}
      </div>
    </div>
  );
};

export default RunningLine;
