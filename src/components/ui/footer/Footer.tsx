import LeftPart from "./leftPart/LeftPart";
import RightPart from "./rightPart/RightPart";

const Footer = () => {
  return (
    <footer className="w-full border-t flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10 xl:gap-0 p-10 xs:px-4 overflow-x-hidden">
      <LeftPart />
      <RightPart />
    </footer>
  );
};

export default Footer;
