import { SECTIONS_DATA } from "../../../../utils/constants/sections";

const NavBar = () => {
  return (
    <nav className="bg-glass px-10 gap-10 h-12 backdrop-blur-sm border border-dessert/60 rounded-lg flex items-center justify-around">
      {SECTIONS_DATA.map((section) => (
        <a key={section.name} href={"#" + section.href} className={"text-dessert font-medium"}>
          {section.name}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
