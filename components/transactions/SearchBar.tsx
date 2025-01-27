"use client";
import { BsSearch } from "react-icons/bs";
import React from "react";
import Icon from "../common/Icon";
import useSearchFilterContext from "@/hooks/useSearchFilterContext";

type SearchBarPropsType = {
  disabled: boolean;
};

const SearchBar = ({ disabled }: SearchBarPropsType) => {
  const { setQuery } = useSearchFilterContext();
  return (
    <div
      className="cursor-text flex items-center gap-2 searchBar__xs-width w-[70.5%] sm:w-[274px] lg:w-[30.5%] xl:w-[21.8%] dark:bg-[#334155] px-3 py-1 h-[43px] border border-[#6b7280] 
    focus:outline-none focus:border-[#2563eb] focus:border-2 "
    >
      <Icon iconName={BsSearch} iconCls="text-slate-500" iconcontainerCls="" />
      <input
        onChange={(e) => setQuery(e.target.value)}
        required
        placeholder="search transactions by title.."
        type="text"
        disabled={!disabled}
        className="outline-none dark:bg-[#334155] p-1 placeholder:text-slate-500 w-full"
      />
    </div>
  );
};

export default SearchBar;
