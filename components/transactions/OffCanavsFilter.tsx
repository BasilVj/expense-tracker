"use client";
import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import Icon from "../common/Icon";
import { useOffCanvasContext } from "@/hooks/useOffCanvasContext";
import { categories } from "@/data/Transaction-categories";

const OffCanavsFilter = () => {
  const { toggleOffcanvas, setToggleOffcanvas } = useOffCanvasContext();

  return (
    <div
      className={`${
        toggleOffcanvas ? "translate-x-0" : "translate-x-full"
      } z-10 fixed top-0
      h-screen w-full overflow-y-scroll offCanvas__width sm:w-[300px] bg-[#ffffff]
      dark:bg-[#1e293b] right-0 transition-all duration-300 p-8`}
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-medium">Filters</h2>
        <div onClick={() => setToggleOffcanvas((prev) => !prev)}>
          <Icon
            iconName={BsXLg}
            iconCls=""
            iconcontainerCls="cursor-pointer bg-[#ef4444] p-2"
          />
        </div>
      </div>
      <div className="mt-10">
        <label className="flex flex-col mb-5">
          <span className="font-medium">Transaction Type:</span>
          <select
            name="transaction-category"
            id=""
            className="bg-[#e9e9ed] dark:bg-[#334155] ps-2 py-2 text-sm mt-2 border border-[#e9e9ed] dark:border-[#4b5563]
            focus:outline-none focus:border-[#2563eb] focus:border-2 rounded"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <label className="flex flex-col mb-5">
          <span className="font-medium">Sort By:</span>
          <select
            name="sort-type"
            id=""
            className="bg-[#e9e9ed] dark:bg-[#334155] ps-2 py-2 text-sm mt-2 border border-[#e9e9ed] dark:border-[#4b5563]
            focus:outline-none focus:border-[#2563eb] focus:border-2 rounded"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Amount Low to High</option>
            <option value="highToLow">Amount High to Low</option>
          </select>
        </label>
        <label className="flex flex-col">
          <span className="font-medium mb-1">Categories</span>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="flex gap-2 my-2">
                <input
                  type="checkbox"
                  onClick={() => console.log(category.value)}
                />
                <span className="font-normal">{category.label}</span>
              </li>
            ))}
          </ul>
        </label>
      </div>
    </div>
  );
};

export default OffCanavsFilter;
