import { FC } from "react";
import HomePage from "../../views/homePage";
import NotFound from "../../views/notFound";
import Skills from "../../views/skills";

interface IRoute {
  title: string;
  element: FC;
  route: string;
  isIndex: boolean;
  skip?: boolean;
}

export const ROUTE_NAMES = {
  HOME: "Home",
  ABOUT_ME: "About me",
  SKILLS: "Skills",
  CONTACTS: "Contacts",
};

export const ROUTES: IRoute[] = [
  {
    title: "Home",
    element: HomePage,
    route: "/",
    isIndex: true,
  },
  {
    title: "About me",
    element: () => "",
    route: "/aboutMe",
    isIndex: false,
  },
  {
    title: "Skills",
    element: Skills,
    route: "/skills",
    isIndex: false,
  },
  {
    title: "Contacts",
    element: () => "",
    route: "/contacts",
    isIndex: false,
  },
  {
    title: "Not found",
    skip: true,
    element: NotFound,
    route: "*",
    isIndex: false,
  },
];

export const findRoute = (name: string) => {
  return ROUTES.find((route) => route.title === name) || ROUTES[0];
};
