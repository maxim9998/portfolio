import LeftPart from "./leftPart/LeftPart";
import RightPart from "./rightPart/RightPart";

const Footer = () => {
  return (
    <footer className="w-full border-t flex xs:flex-col items-start justify-between xs:gap-10 p-10">
      <LeftPart />
      <RightPart />
    </footer>
  );
};

export default Footer;
