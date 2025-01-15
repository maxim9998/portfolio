import NavBar from "./NavBar";
import DownloadCv from "./DownloadCv";

const Header = () => {
  return (
    <header className="w-full flex items-center fixed top-0 left-0 justify-center p-6 z-20">
      <NavBar />
      <DownloadCv />
    </header>
  );
};

export default Header;
