import folderDetailDummy from "@/pages/api/hello";
import Link from "next/link";
import React from "react";

const FolderContent = () => {
  return (
    <div className="h-screen overflow-y-auto  pb-32 lg:pb-5">
      <div className="px-5 h-20 flex items-center top-0 sticky bg-base-200">
        <h4 className="text-white text-2xl font-semibold">Personal</h4>
      </div>
      <div className="px-5 space-y-5">
        {folderDetailDummy.map((val, i) => (
          <Link href={"/write"} key={i}>
            <div className="bg-primary p-5 mb-5 rounded-sm cursor-pointer hover:bg-primary-focus">
              <h4 className="text-white font-semibold text-lg">{val.title}</h4>
              <div className="flex space-x-5 mt-2">
                <span className="text-gray-400">{val.date}</span>
                <p className="line-clamp-1 text-white/60">{val.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FolderContent;
