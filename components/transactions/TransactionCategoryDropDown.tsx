"use client";
import { categories } from "@/data/Transaction-categories";
import React from "react";
import Select from "react-select";
const TransactionCategoryDropDown = () => {
  return (
    <label className="flex flex-col mb-4">
      Transaction Category
      <Select
        name="category"
        required
        options={categories}
        className="mt-1 focus:border-[#2563eb] focus:border-2"
        menuPlacement="top"
        classNamePrefix="react-select"
        placeholder="select category"
      />
    </label>
  );
};

export default TransactionCategoryDropDown;
