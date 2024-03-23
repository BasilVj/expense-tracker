import React from "react";
import { IconType } from "react-icons";

type props = {
  iconName: IconType;
};
const Icon = ({ iconName }: props) => {
  const Icons = iconName;

  return (
    <div className="bg-opacity-100 bg-[#1E293B] px-[0.55rem] py-[0.70rem] rounded cursor-pointer">
      <Icons className="text-gray-50 h-[22px] w-[23px]" />
    </div>
  );
};

export default Icon;
