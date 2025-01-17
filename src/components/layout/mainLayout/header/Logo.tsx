import myLogo from "@assets/images/my_logo.png";

const Logo = () => {
  return (
    <div className="text-green fixed left-4 xs:text-xs rounded-full">
      <img src={myLogo} alt="logo" className="h-16 rounded-full" />
    </div>
  );
};

export default Logo;
