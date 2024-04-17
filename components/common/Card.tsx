import React from "react";
import { IconType } from "react-icons";
import Icon from "./Icon";

type cardProps = {
  amount: number;
  type: string;
  icon: IconType;
  iconBgColor: string;
  marginRight?: string;
};

const Card = ({ amount, icon, type, iconBgColor, marginRight }: cardProps) => {
  return (
    <div
      className={`bg-white dark:bg-[#1E293B] ${marginRight} w-full sm:w-[31.8%] lg:w-[23.7%] flex items-center px-4 
        h-[90px] rounded border border-[#E5E7EB] dark:border-[#334155] mb-2 sm:mb-4 lg:mb-0`}
    >
      <Icon
        iconName={icon}
        iconCls="h-[30px] w-[30px] text-white"
        iconcontainerCls={`${iconBgColor} px-3 py-2.5 rounded mr-4`}
      />
      <div className="flex flex-col justify-center h-full">
        <h3 className="dark:text-slate-300 text-slate-600">{type}</h3>
        <h1 className="text-3xl font-bold">{amount}</h1>
      </div>
    </div>
  );
};

export default Card;
