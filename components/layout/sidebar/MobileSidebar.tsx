import { sidebarLinks } from "@/constants/sidebarLinks";
import React from "react";
import Icon from "../../Icon";
import MobileThemeToggler from "./MobileThemeToggler";

const MobileSidebar = () => {
  return (
    <div
      className="w-screen h-[55px] flex justify-center fixed bottom-0 z-10 overflow-hidden
     dark:bg-[#1E293B] bg-[#ffffff] px-4"
    >
      <div className="flex w-full h-full items-center">
        <ul className="cursor-pointer flex justify-between w-full">
          {sidebarLinks.navLinks.map((navLink, index) => (
            <li
              className="dark:bg-[#334054] bg-[#cbd5e1] p-2 rounded"
              key={index}
            >
              <Icon
                key={index}
                iconName={navLink.icon}
                iconcontainerCls={`w-auto h-full`}
                iconCls={`dark:text-gray-50 text-[#1E293B] h-[25px] w-[25px]`}
              />
            </li>
          ))}
          <MobileThemeToggler />
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
