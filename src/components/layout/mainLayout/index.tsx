import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen w-screen relative">
      <Outlet />
    </div>
  );
};

export default MainLayout;
