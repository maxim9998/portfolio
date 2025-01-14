import { IconType } from "react-icons";
import { FaUpwork, FaGithub, FaLinkedin } from "react-icons/fa6";

interface ISocialLinks {
  socialIcon: IconType;
  link: string;
}

export const socialLinks: ISocialLinks[] = [
  {
    socialIcon: FaUpwork,
    link: "https://www.upwork.com/freelancers/~01f548f48dc1469835?mp_source=share",
  },
  {
    socialIcon: FaGithub,
    link: "https://github.com/maxim9998",
  },
  {
    socialIcon: FaLinkedin,
    link: "https://www.linkedin.com/in/maxim9998/",
  },
];
