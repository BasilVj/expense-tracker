"use client";
import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import Icon from "../common/Icon";
import { useOffCanvasContext } from "@/hooks/useOffCanvasContext";

const OffCanavsFilter = () => {
  const { toggleOffcanvas, setToggleOffcanvas } = useOffCanvasContext();

  return (
    <div
      className={`${
        toggleOffcanvas ? "translate-x-0" : "translate-x-full"
      } z-10 fixed top-0
      min-h-screen w-full offCanvas__width lg:w-[29%] xl:w-[23.5%] bg-[#ffffff]
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
          <span className="font-medium">Transaction Category:</span>
          <select
            name="transaction-category"
            id=""
            className="bg-[#334155] ps-1.5 py-1.5 text-sm mt-2 border border-[#4b5563]
            focus:outline-none focus:border-[#2563eb] focus:border-2 rounded"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <label className="flex flex-col mb-4">
          <span className="font-medium">Sort By:</span>
          <select
            name="sort-type"
            id=""
            className="bg-[#334155] ps-1.5 py-1.5 text-sm mt-2 border border-[#4b5563]
            focus:outline-none focus:border-[#2563eb] focus:border-2 rounded"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Amount Low to High</option>
            <option value="highToLow">Amount High to Low</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default OffCanavsFilter;
