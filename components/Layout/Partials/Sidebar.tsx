import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import NavigationContent from "@/components/Navigation/NavigationContent";

const Sidebar = () => {
  return (
    <div className="w-80 bg-base-100 text-base-content relative">
      <div className="p-5 pb-2 bg-base-100 flex justify-between items-center sticky top-0 ">
        <div className="h-14 relative w-28">
          <Image
            src={"/img/logo.png"}
            height={300}
            width={300}
            alt="Logo App"
          />
        </div>
        <button>
          <MagnifyingGlassIcon className="h-5 text-gray-400 w-5" />
        </button>
      </div>
      <div className="px-5 mt-3">
        <button className="btn btn-primary w-full capitalize ">
          <PlusIcon className="h-5 w-5 mr-3" /> New Note
        </button>
      </div>
      <NavigationContent />
    </div>
  );
};

export default Sidebar;
