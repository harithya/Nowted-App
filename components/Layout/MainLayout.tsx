import React, { PropsWithChildren } from "react";
import Sidebar from "./Partials/Sidebar";
import FolderContent from "../FolderContent";
import BottomNavigation from "./Partials/BottomNavigation";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex">
        <div className="lg:w-4/12 hidden lg:block w-full h-screen">
          <FolderContent />
        </div>
        <div className=" lg:block h-screen bg-base-100 lg:w-8/12 w-full relative right-0 left-0">
          {children}
          <BottomNavigation />
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
