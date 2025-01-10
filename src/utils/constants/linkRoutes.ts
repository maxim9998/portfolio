import { FC } from "react";
import HomePage from "../../views";
import NotFound from "../../views/notFound";

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
    title: "Not found",
    skip: true,
    element: NotFound,
    route: "*",
    isIndex: false,
  },
];
