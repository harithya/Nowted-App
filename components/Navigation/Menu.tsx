import { DocumentTextIcon } from "@heroicons/react/24/outline";
import React, { PropsWithChildren } from "react";
import * as Icon from "@heroicons/react/24/outline";

interface Props {
  icon?: keyof typeof Icon;
  isActive?: boolean;
}
const Menu: React.FC<PropsWithChildren<Props>> = ({
  children,
  isActive,
  ...props
}) => {
  const MyIcon = Icon[props.icon ?? "AcademicCapIcon"];
  return (
    <div
      className={`py-3 flex   items-center space-x-5  cursor-pointer h-full w-full px-5 ${
        isActive ? "bg-info text-white" : "hover:bg-primary-focus"
      }`}
    >
      <MyIcon className="h-5 w-5" />
      <label className="font-semibold cursor-pointer">{children}</label>
    </div>
  );
};

export default Menu;
