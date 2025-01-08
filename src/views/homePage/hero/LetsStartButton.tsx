import { TiArrowDownThick } from "react-icons/ti";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LetsStartButton = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
    tl.to("#to_next_section_button", {
      y: -10,
      opacity: 0.2,
      duration: 0.7,
      yoyo: true,
    });

    tl.to("#to_next_section_button", {
      y: 0,
      opacity: 1,
      duration: 0.9,
      yoyo: true,
    });
  }, []);

  return (
    <button className="rounded-full border border-silver p-1" id="to_next_section_button">
      <TiArrowDownThick size={20} />
    </button>
  );
};

export default LetsStartButton;
