import React, { PropsWithChildren } from "react";
import Sidebar from "./Partials/Sidebar";
import CategoryBar from "./Partials/CategoryBar";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex">
        <CategoryBar />
        <div className="hidden lg:block h-screen bg-base-100 w-8/12">
          {children}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
