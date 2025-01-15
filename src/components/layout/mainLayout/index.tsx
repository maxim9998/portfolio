import { Outlet } from "react-router";
import Header from "./header/Header";

const MainLayout = () => {
  return (
    <div className="h-screen w-screen relative overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
