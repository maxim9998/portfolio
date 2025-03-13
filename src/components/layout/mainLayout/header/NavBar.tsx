import { SECTIONS_DATA } from "../../../../utils/constants/sections";

const NavBar = () => {
  return (
    <nav className="gap-3 py-2 px-3 md:gap-10 rounded-lg flex items-center justify-around bg-glass/50 backdrop-blur-md">
      {SECTIONS_DATA.map((section) => (
        <div className="group" key={section.name}>
          <a href={"#" + section.href} className={"text-green font-medium text-xs md:text-base"}>
            {section.name}
          </a>
          <div className="w-0 group-hover:w-full transition-[width] h-[1px] bg-green rounded-lg hidden md:block"></div>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
