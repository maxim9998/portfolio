import { Link } from "react-router";
import { findRoute, ROUTE_NAMES } from "../../../../utils/constants/linkRoutes";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const DescriptionSection = () => {
  const containerElement = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray<HTMLElement>(containerElement?.current?.children || []);

    const link = cards[2];

    cards.slice(0, cards.length - 1).forEach((card) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerElement.current,
          start: "top 70%",
          toggleActions: "play pause resume reset",
          scrub: false,
        },
      });

      tl.from(card, {
        x: 20,
        opacity: 0,
      }).to(card, {
        x: 0,
        opacity: 1,
        duration: 0.3,
      });

      tl.fromTo(link, { opacity: 0 }, { opacity: 1, ease: "back.out", duration: 2 });
    });
  }, []);

  return (
    <div className="w-2/3 h-full flex flex-col items-start justify-center gap-8" ref={containerElement}>
      <h3 className="text-dessert font-merriweather text-2xl" id="home_about_header_text">
        About Me
      </h3>
      <p id="home_about_header_text">I am a dedicated Front-End Developer with over 3 years of experience building modern, responsive, and user-focused web applications. My primary skills include React, TypeScript, and GraphQL, which I use to deliver seamless and efficient digital experiences. I am passionate about solving challenges, creating intuitive designs, and collaborating with teams to craft high-quality solutions that align with user needs and business goals.</p>
      <Link to={findRoute(ROUTE_NAMES["ABOUT_ME"]).route} className="border text-dessert rounded-lg font-merriweather px-3 py-2 hover:bg-silver/45" id="home_about_header_link">
        Get to Know Me
      </Link>
    </div>
  );
};

export default DescriptionSection;
