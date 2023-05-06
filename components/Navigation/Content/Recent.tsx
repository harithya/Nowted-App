import React from "react";
import Menu from "../Menu";

const data = [
  "Reflection on the Month of June",
  "Project Personal",
  "Travel itinerary",
];
const Recent = () => {
  return (
    <div className="pt-8 pb-3">
      <label className="text-sm font-semibold px-5 text-gray-400">
        Recents
      </label>
      <div className="mt-1">
        {data.map((val, i) => (
          <Menu key={i} isActive={i === 0} icon="DocumentTextIcon">
            {val}
          </Menu>
        ))}
      </div>
    </div>
  );
};

export default Recent;
