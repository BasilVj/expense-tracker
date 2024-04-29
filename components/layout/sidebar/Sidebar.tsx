"use client";
import { sidebarLinks } from "@/constants/sidebarLinks";
import React, { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import Icon from "../../common/Icon";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [sidebarValue, setSidebarValue] = useState("");
  let dataSidebar = "";

  useEffect(() => {
    if (document.body.getAttribute("data-sidebar")) {
      dataSidebar = document.body.getAttribute("data-sidebar")!;
    }
    if (dataSidebar) {
      setSidebarValue(dataSidebar);
    }
  }, [toggleSidebar]);

  const handleSidebarToggle = () => {
    setToggleSidebar((prev) => !prev);
    document.body.setAttribute(
      "data-sidebar",
      sidebarValue === "true" ? "false" : "true"
    );
  };

  return (
    <div
      data-test="false"
      className={`z-10 fixed dark:bg-slate-900 bg-[#ffffff] h-screen py-4 flex justify-between flex-col transition-all ease-in duration-300 ${
        toggleSidebar ? "w-[249px] ps-4" : "w-[58px] items-center "
      }`}
    >
      <div>
        <button
          className={`mb-6 p-1 flex justify-start items-center  bg-[#2463EA] text-white
           hover:bg-[#1C4ED9] cursor-pointer transition-all ease-in duration-300
           ${
             toggleSidebar
               ? "h-[46px] w-[233px] rounded-s justify-start "
               : "h-[38px] w-[40px] rounded ps-1"
           }`}
          onClick={handleSidebarToggle}
        >
          <TbCurrencyTaka
            className={`h-full w-auto ${toggleSidebar ? "p-1 ps-2" : ""}`}
          />
          <span
            className={`${
              toggleSidebar
                ? "font-semibold text-xl whitespace-nowrap"
                : "hidden"
            }`}
          >
            Track Taka
          </span>
        </button>
        <div className="pt-4">
          <ul>
            {sidebarLinks.navLinks.map((navLink, index) => (
              <li key={index}>
                <Link href={`${navLink.path}`}>
                  <div
                    className={`flex justify-start cursor-pointer ${
                      pathname === navLink.path &&
                      "dark:bg-[#1E293B] bg-[#cbd5e1]"
                    }  mb-[0.6rem] dark:text-white text-[#1E293B]
                  font-semibold transition-all ease-in duration-300 ${
                    toggleSidebar
                      ? "h-[41px] w-[233px] rounded-s items-center py-[0.6rem] ps-3"
                      : "h-[43px] w-[40px] rounded py-[0.6rem] ps-2"
                  }`}
                  >
                    <Icon
                      key={index}
                      iconName={navLink.icon}
                      iconcontainerCls={`w-auto h-full`}
                      iconCls={`dark:text-gray-50 text-[#1E293B] h-[21px] w-[22px]`}
                    />

                    <p
                      className={`${
                        toggleSidebar
                          ? "flex ps-[0.6rem] whitespace-nowrap"
                          : "hidden"
                      }`}
                    >
                      {navLink.title}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`flex justify-start cursor-pointer bg-[#1E293B]  text-white font-medium transition-all ease-in duration-300 
      ${
        toggleSidebar
          ? "h-[41px] w-[233px] rounded-s items-center ps-3"
          : "h-[43px] w-[40px] rounded items-center ps-2"
      }`}
        onClick={() =>
          resolvedTheme == "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        <div>
          {resolvedTheme === "light" ? (
            <div className="flex items-center">
              <Icon
                iconName={sidebarLinks.themes.dark.icon}
                iconcontainerCls=""
                iconCls={`text-gray-50 h-[21px] w-[22px]`}
              />
              <span
                className={`${
                  toggleSidebar
                    ? "font-normal ps-[0.7rem] whitespace-nowrap "
                    : "hidden"
                }`}
              >
                {sidebarLinks.themes.dark.title}
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <Icon
                iconName={sidebarLinks.themes.light.icon}
                iconcontainerCls=""
                iconCls={`text-gray-50 h-[21px] w-[22px]`}
              />
              <span
                className={`${
                  toggleSidebar
                    ? "font-normal ps-[0.7rem] whitespace-nowrap cursor-pointer"
                    : "hidden"
                }`}
              >
                {sidebarLinks.themes.light.title}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
