import { Route, Routes } from "react-router";
import { ROUTES } from "./utils/constants/linkRoutes";
import MainLayout from "./components/layout/mainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {ROUTES.map((route) => (
          <Route index={route.isIndex} element={<route.element />} path={route.route} key={route.route} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
