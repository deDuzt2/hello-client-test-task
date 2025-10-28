import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import DesktopNavigationBar from "./components/DesktopNavigationBar";
import MobileBottomNavigation from "./components/MobileBottomNavigation";

function Layout() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <DesktopNavigationBar />
      </div>
      <div className="block md:hidden">
        <MobileBottomNavigation />
      </div>
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
