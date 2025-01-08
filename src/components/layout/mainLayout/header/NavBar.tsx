import React from "react";
import { NavLink } from "react-router";
import { ROUTES } from "../../../../utils/constants/linkRoutes";

const NavBar = () => {
  return (
    <nav className="px-10 gap-10 h-12 backdrop-blur-sm border border-dessert/60 rounded-lg z-10 flex items-center justify-around">
      {ROUTES.map((route) =>
        route.skip ? (
          <React.Fragment key={route.route}></React.Fragment>
        ) : (
          <NavLink key={route.route} to={route.route} className={({ isActive }) => (isActive ? "text-dessert font-medium" : "")}>
            {route.title}
          </NavLink>
        )
      )}
    </nav>
  );
};

export default NavBar;
