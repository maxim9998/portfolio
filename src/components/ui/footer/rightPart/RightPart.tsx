import Address from "./Address";
import Email from "./Email";
import Links from "./Links";

const RightPart = () => {
  return (
    <div className="flex flex-col items-start justify-end gap-2 w-1/4 xs:w-full">
      <Email />
      <Address />
      <Links />
    </div>
  );
};

export default RightPart;
