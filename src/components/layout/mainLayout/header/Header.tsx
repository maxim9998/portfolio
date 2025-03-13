import DownloadCv from "./DownloadCv";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full flex items-center fixed top-0 left-0 justify-between z-20 p-2">
      <div className="w-36 hidden md:block"/>
      <NavBar />
      <DownloadCv />
    </header>
  );
};

export default Header;
