import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { FC, useRef } from "react";

const TypingAnimationText: FC<{ text: string; delay: number; className?: string }> = ({ text, delay, className }) => {
  const title = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(title?.current, {
      scrollTrigger: {
        trigger: title.current,
        scrub: false,
      },
      duration: 3,
      delay,
      ease: "none",
      text: text,
    });
  }, []);

  return <p className={`h-7 ${className}`} ref={title}></p>;
};

export default TypingAnimationText;
