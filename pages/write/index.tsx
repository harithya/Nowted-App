import FolderContent from "@/components/FolderContent";
import DropdownAction from "@/components/Write/DropdownAction";
import { CalendarDaysIcon, FolderIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

const Write = () => {
  return (
    <Fragment>
      <div className="lg:w-4/12 hidden  w-full lg:block h-screen">
        <FolderContent />
      </div>
      <div className=" lg:block h-screen bg-base-100 relative overflow-y-auto lg:w-8/12 block w-full  right-0 left-0">
        <div className=" lg:px-10 px-5  ">
          <div className="sticky top-0 w-full bg-base-100 z-10  pt-6 pb-2">
            <div className="flex justify-between space-x-5 pb-10">
              <input
                type="text"
                className="w-full text-3xl outline-none font-semibold bg-transparent text-white"
                onChange={() => null}
                placeholder="Type your title"
                value={"Reflection on the Month of June"}
              />
              <DropdownAction />
            </div>
            <div className="flex border-b py-4 border-primary">
              <div className="flex space-x-5 w-44">
                <CalendarDaysIcon className="h-6 w-6" />
                <label className="font-semibold">Date</label>
              </div>
              <label className="border-b border-gray-500">
                24 Agustus 2021
              </label>
            </div>
            <div className="flex border-b py-4 border-primary">
              <div className="flex space-x-5 w-44">
                <FolderIcon className="h-6 w-6" />
                <label className="font-semibold">Folder</label>
              </div>
              <label className="border-b border-gray-500">Personal</label>
            </div>
          </div>
          <div className="lg:pb-10 pb-32">
            <TextEditor />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Write;
