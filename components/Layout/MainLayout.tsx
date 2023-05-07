import React, { PropsWithChildren } from "react";
import Sidebar from "./Partials/Sidebar";
import FolderContent from "../FolderContent";
import BottomNavigation from "./Partials/BottomNavigation";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex">
        {children}
        <BottomNavigation />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
