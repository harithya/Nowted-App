import { FolderPlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import Menu from "../Menu";

const data = ["Personal", "Work", "Travel", "Events", "Finances"];
const Folder = () => {
  return (
    <div className="pt-5 pb-3">
      <div className="flex justify-between px-5">
        <label className="text-sm font-semibold  text-gray-400">Folders</label>
        <button>
          <FolderPlusIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-1">
        {data.map((val, i) => (
          <Menu key={i} icon="FolderIcon">
            {val}
          </Menu>
        ))}
      </div>
    </div>
  );
};

export default Folder;
