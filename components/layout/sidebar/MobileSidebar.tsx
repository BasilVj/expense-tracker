"use client";
import { sidebarLinks } from "@/constants/sidebarLinks";
import React from "react";
import Icon from "../../common/Icon";
import MobileThemeToggler from "./MobileThemeToggler";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <div
      className="w-screen h-[55px] flex justify-center fixed bottom-0 z-10 overflow-hidden
     dark:bg-[#1E293B] bg-[#ffffff] px-4"
    >
      <div className="flex w-full h-full items-center">
        <ul className="cursor-pointer flex justify-between w-full">
          {sidebarLinks.navLinks.map((navLink, index) => (
            <li
              className={`${
                pathname === navLink.path && "dark:bg-[#334155] bg-[#cbd5e1]"
              } p-2 rounded`}
              key={index}
            >
              <Link href={`${navLink.path}`}>
                <Icon
                  key={index}
                  iconName={navLink.icon}
                  iconcontainerCls={`w-auto h-full`}
                  iconCls={`dark:text-gray-50 text-[#1E293B] h-[25px] w-[25px]`}
                />
              </Link>
            </li>
          ))}
          <MobileThemeToggler />
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
