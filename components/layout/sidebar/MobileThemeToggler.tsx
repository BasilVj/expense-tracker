"use client";
import { sidebarLinks } from "@/constants/sidebarLinks";
import React from "react";
import { useTheme } from "next-themes";
import Icon from "../../common/Icon";

const MobileThemeToggler = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="p-2 rounded"
    >
      {theme === "light" ? (
        <Icon
          iconName={sidebarLinks.themes.dark.icon}
          iconcontainerCls=""
          iconCls={`text-[#1E293B] h-[25px] w-[25px]`}
        />
      ) : (
        <Icon
          iconName={sidebarLinks.themes.light.icon}
          iconcontainerCls=""
          iconCls={`dark:text-gray-50 h-[25px] w-[25px]`}
        />
      )}
    </div>
  );
};

export default MobileThemeToggler;
