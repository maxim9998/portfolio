export const ROUTE_NAMES = {
  HOME: "Home",
  ABOUT_ME: "About me",
  SKILLS: "Skills",
  CONTACT_ME: "Contact me",
};

export const SECTIONS_DATA = [
  {
    name: ROUTE_NAMES["HOME"],
    href: "home",
  },
  {
    name: ROUTE_NAMES["ABOUT_ME"],
    href: "aboutMe",
  },
  {
    name: ROUTE_NAMES["SKILLS"],
    href: "skills",
  },
  {
    name: ROUTE_NAMES["CONTACT_ME"],
    href: "contactMe",
  },
];

export const getHref = (sectionName: string) => SECTIONS_DATA.find((section) => section.name === sectionName)?.href || "";
