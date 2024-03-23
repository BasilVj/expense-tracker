import { sidebarLinks } from "@/constants/sidebarLinks";
import Image from "next/image";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import Icon from "../Icon";

const Sidebar = () => {
  const scheme = "Dark";
  return (
    <div className="w-[58px] bg-slate-900 h-screen py-4 flex justify-between items-center flex-col">
      <div>
        <div className="pb-5">
          <TbCurrencyTaka className="bg-[#2463EA] text-white rounded h-[38px] w-[41px] p-1 hover:bg-[#1C4ED9] cursor-pointer" />
        </div>
        <div className="pt-4">
          {sidebarLinks.navLinks.map((navLink, index) => (
            <ul
              key={index}
              className="flex justify-center items-center py-[4px]"
            >
              <li className="hidden">{navLink.title}</li>

              <Icon key={index} iconName={navLink.icon} />
            </ul>
          ))}
        </div>
      </div>

      <div>
        {scheme === "Dark" ? (
          <Icon iconName={sidebarLinks.themes.light.icon} />
        ) : (
          <Icon iconName={sidebarLinks.themes.dark.icon} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
