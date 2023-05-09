import {
  Bars3Icon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const BottomNavigation = () => {
  return (
    <div className="fixed lg:hidden bg-base-300 bottom-0 z-50 right-0 left-0 h-16 items-center px-5 flex justify-between">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost rounded-full btn-square"
      >
        <Bars3Icon className="h-6 w-6" />
      </label>
      <button className="btn btn-info flex-1 shadow-sm rounded-full text-lg capitalize -mt-16">
        <PlusIcon className="h-6 w-6 mr-3" />
        New Note
      </button>
      <button className="btn btn-ghost rounded-full btn-square">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BottomNavigation;
