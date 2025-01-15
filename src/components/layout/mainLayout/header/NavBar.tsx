import { SECTIONS_DATA } from "../../../../utils/constants/sections";

const NavBar = () => {
  return (
    <nav className="px-10 py-3 gap-10 rounded-lg flex items-center justify-around bg-glass/50 backdrop-blur-md">
      {SECTIONS_DATA.map((section) => (
        <div className="group">
          <a key={section.name} href={"#" + section.href} className={"text-dessert font-medium"}>
            {section.name}
          </a>
          <div className="w-0 group-hover:w-full transition-[width] h-[1px] bg-dessert underline_animation rounded-lg "></div>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
