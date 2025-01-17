import DownloadCv from "./DownloadCv";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full flex items-center fixed top-0 left-0 justify-center xs:justify-between p-6 xs:p-2 z-20 xs:hidden">
      <NavBar />
      <DownloadCv />
    </header>
  );
};

export default Header;
