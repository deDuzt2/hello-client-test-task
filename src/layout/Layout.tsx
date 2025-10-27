import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";

function Layout() {
  return (
    <div className="flex min-h-screen">
      <NavigationBar />
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
