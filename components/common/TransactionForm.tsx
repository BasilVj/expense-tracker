"use client";
import React from "react";
import Select from "react-select";
import DatePicker from "./ReactDatePicker";

const TransactionForm = () => {
  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#334155",
      borderColor: "#6b7280",
      height: "43px",
    }),
  };

  return (
    <div className="pt-8 w-full xl:w-[42.7%]">
      <form action="">
        <label className="flex flex-col mb-4">
          Transaction Title
          <input
            required
            type="text"
            className="bg-[#334155] px-3 py-1 mt-1 h-[43px] border border-[#6b7280] 
            focus:outline-none focus:border-[#2563eb] focus:border-2"
          />
        </label>
        <label className="flex flex-col mb-4">
          Transaction Amount
          <input
            type="number"
            min={1}
            defaultValue={0}
            className="bg-[#334155] px-3 py-1 mt-1 h-[43px] border border-[#6b7280] 
            focus:outline-none focus:border-[#2563eb] focus:border-2"
          />
        </label>
        <label className="flex flex-col mb-4">
          Transaction Type
          <select
            name="transaction-type"
            id=""
            className="bg-[#334155] px-3 py-1 mt-1 h-[43px] border border-[#6b7280] 
            focus:outline-none focus:border-[#2563eb] focus:border-2"
          >
            <option disabled value="">
              select transaction type
            </option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <label className="flex flex-col mb-4">
          Transaction Category
          <Select
          required
            className="mt-1 focus:border-[#2563eb] focus:border-2 "
            menuPlacement="top"
            styles={colorStyles}
            placeholder="select category"
          />
        </label>
        <div className="mb-4 flex flex-col">
          <label>Transaction Date</label>
          <DatePicker />
        </div>
        <div className="w-full flex justify-end mt-10">
          <button className="bg-[#EF4444] me-2 py-2 px-4">Cancel</button>
          <button className="bg-[#22C55E] px-4">CREATE</button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
