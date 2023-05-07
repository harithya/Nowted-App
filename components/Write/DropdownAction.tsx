import React from "react";

import {
  ArchiveBoxIcon,
  EllipsisHorizontalCircleIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const DropdownAction = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-sm m-1 btn-circle btn-ghost">
        <EllipsisHorizontalCircleIcon className="h-8 w-8" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content  menu py-2 shadow bg-primary rounded-md w-52"
      >
        <li>
          <a>
            <StarIcon className="h-5 w-5" /> Add to favorites
          </a>
        </li>
        <li>
          <a>
            <ArchiveBoxIcon className="h-5 w-5" /> Archived
          </a>
        </li>
        <div className="divider my-1" />
        <li>
          <a>
            <TrashIcon className="h-5 w-5" /> Delete
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownAction;
