"use client";
import { sidebarLinks } from "@/constants/sidebarLinks";
import Image from "next/image";
import React, { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import Icon from "../Icon";
import { Transition } from "@headlessui/react";

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const scheme = "Dark";
  return (
    <div
      className={`bg-slate-900 h-screen py-4 flex justify-between flex-col ${
        toggleSidebar ? "w-[233px] ps-4" : "w-[58px] items-center"
      }`}
    >
      <div>
        <button
          className={`mb-6 p-1 flex justify-start items-center  bg-[#2463EA] text-white hover:bg-[#1C4ED9] cursor-pointer ${
            toggleSidebar
              ? "h-[46px] w-[217px] rounded-s justify-start "
              : "h-[38px] w-[40px] rounded justify-center "
          }`}
          onClick={() => setToggleSidebar((prev) => !prev)}
        >
          <TbCurrencyTaka
            className={`h-full w-auto ${toggleSidebar ? "p-1 ps-2" : ""}`}
          />
          <span
            className={`${toggleSidebar ? "font-semibold text-xl" : "hidden"}`}
          >
            Track Taka
          </span>
        </button>
        <div className="pt-4">
          {sidebarLinks.navLinks.map((navLink, index) => (
            <ul
              key={index}
              className={`flex bg-[#1E293B] mb-[0.6rem] text-white font-medium ${
                toggleSidebar
                  ? "h-[41px] w-[217px] rounded-s justify-start items-center py-[0.6rem] ps-3"
                  : "h-[43px] w-[40px] rounded justify-center py-[0.6rem]"
              }`}
            >
              <Icon
                key={index}
                iconName={navLink.icon}
                iconcontainerCls={`w-auto h-full`}
                iconCls={`text-gray-50 h-[21px] w-[22px]`}
              />

              <li
                className={`${toggleSidebar ? "flex ps-[0.6rem]" : "hidden"}`}
              >
                {navLink.title}
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div
        className={`flex bg-[#1E293B]  text-white font-medium ${
          toggleSidebar
            ? "h-[41px] w-[217px] rounded-s justify-start items-center ps-3"
            : "h-[43px] w-[40px] rounded justify-center items-center"
        }`}
      >
        {scheme === "Dark" ? (
          <>
            <Icon
              iconName={sidebarLinks.themes.light.icon}
              iconcontainerCls=""
              iconCls={`text-gray-50 h-[21px] w-[22px]`}
            />
            <span
              className={`${
                toggleSidebar ? "font-normal ps-[0.7rem] " : "hidden"
              }`}
            >
              {sidebarLinks.themes.light.title}
            </span>
          </>
        ) : (
          <>
            <Icon
              iconName={sidebarLinks.themes.dark.icon}
              iconcontainerCls=""
              iconCls={`text-gray-50 h-[21px] w-[22px]`}
            />
            <span
              className={`${
                toggleSidebar ? "font-normal ps-[0.7rem] " : "hidden"
              }`}
            >
              {sidebarLinks.themes.dark.title}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
