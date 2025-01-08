import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useMemo } from "react";

const TypingAnimationText: FC<{ text: string; id: string; delay: number }> = ({ text, id, delay }) => {
  const splittedText = useMemo(() => text.split(" "), [text]);

  useGSAP(() => {
    gsap.fromTo(
      `#${id} span`,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        delay,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <h3 id={id}>
      {splittedText.map((word, i) => (
        <span key={i}>{word + " "}</span>
      ))}
    </h3>
  );
};

export default TypingAnimationText;
