import React, { PropsWithChildren } from "react";
import Sidebar from "./Partials/Sidebar";
import FolderContent from "../FolderContent";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex">
        <div className="lg:w-4/12 w-full h-screen">
          <FolderContent />
        </div>
        <div className="hidden lg:block h-screen bg-base-100 w-8/12">
          {children}
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
