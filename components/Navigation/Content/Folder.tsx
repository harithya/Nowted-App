import { FolderPlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import Menu from "../Menu";
import LoadingFolder from "../../Loading/LoadingFolder";
import { useQuery } from "react-query";
import http from "@/utils/http";

interface FolderProps {
  id: string;
  name: string;
}
const Folder = () => {
  const { data, isLoading } = useQuery(["folder"], async () => {
    const req = await http.get("folder");
    return req.data.result;
  });

  return (
    <div className="pt-5 pb-3">
      <div className="flex justify-between px-5">
        <label className="text-sm font-semibold  text-gray-400">Folders</label>
        <button>
          <FolderPlusIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-1">
        {isLoading ? (
          <LoadingFolder />
        ) : (
          data?.map((val: FolderProps) => (
            <Menu key={val.id} icon="FolderIcon">
              {val.name}
            </Menu>
          ))
        )}
        {/* {data.map((val, i) => (
          <Menu key={i} icon="FolderIcon">
            {val}
          </Menu>
        ))} */}
      </div>
    </div>
  );
};

export default Folder;
