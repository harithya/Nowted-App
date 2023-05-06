import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="w-80 bg-base-100 text-base-content">
      <div className="p-5 pb-5 flex justify-between items-center">
        <div className="h-14 relative w-28">
          <Image
            src={"/img/logo.png"}
            height={300}
            width={300}
            className="invert"
            alt="Logo App"
          />
        </div>
        <button className="btn btn-ghost btn-circle">
          <MagnifyingGlassIcon className="h-5 text-gray-500 w-5" />
        </button>
      </div>
      <div className="px-5">
        <button className="btn btn-primary w-full">
          <PlusIcon className="h-5 w-5 mr-3" /> New Note
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
