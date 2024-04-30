"use client";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar2Event } from "react-icons/bs";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div
      className="mt-1 w-[137px] flex items-center bg-[#ffffff] dark:bg-[#334155] py-2 ps-4 justify-center border border-[#6b7280] 
    focus:outline-none focus:border-[#2563eb] focus:border-2 cursor-pointer"
    >
      <span className="pr-1">
        <BsCalendar2Event />
      </span>

      <ReactDatePicker
      id="transactionDatePicker"
        selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        className="bg-[#ffffff] dark:bg-[#334155] outline-none cursor-pointer w-full"
        dateFormat={"dd/MM/yyyy"}
        showPopperArrow={false}
      />
    </div>
  );
};

export default DatePicker;
