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
