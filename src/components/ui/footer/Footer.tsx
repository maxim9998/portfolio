import LeftPart from "./leftPart/LeftPart";
import RightPart from "./rightPart/RightPart";

const Footer = () => {
  return (
    <footer className="w-full border-t h-64 flex items-start justify-between p-10">
      <LeftPart />
      <RightPart />
    </footer>
  );
};

export default Footer;
