import React from "react";
import Recent from "./Content/Recent";
import Folder from "./Content/Folder";
import Menu from "./Menu";

const NavigationContent = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Recent />
      </div>
      <Folder />
      <div className="pt-8 pb-3">
        <label className="text-sm font-semibold px-5 text-gray-400">More</label>
        <div className="mt-1">
          <Menu icon="StarIcon">Favorites</Menu>
          <Menu icon="TrashIcon">Trash</Menu>
          <Menu icon="ArchiveBoxIcon">Archives</Menu>
        </div>
      </div>
    </div>
  );
};

export default NavigationContent;
