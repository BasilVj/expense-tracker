"use client";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar2Event } from "react-icons/bs";
import { parse } from "date-fns";
import useDatePickerContext from "@/hooks/useDatePickerContext";
type DatePicker = {
  date?: string;
  type: "year" | "day" | "month";
};

const DatePicker = ({ date, type }: DatePicker) => {
  const [selectedDate, setSelectedDate] = useState(
    date ? parse(date, "dd/MM/yyyy", new Date()) : new Date()
  );
  const popperPlacement = type === "year" ? "left-start" : "top";

  const { setYear } = useDatePickerContext();

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setYear(date);
  };

  return (
    <div
      className="mt-1 w-auto flex items-center bg-[#ffffff] dark:bg-[#334155] py-2 ps-4 justify-center border border-[#6b7280] 
    focus:outline-none focus:border-[#2563eb] focus:border-2 cursor-pointer"
    >
      <span className="pr-2">
        <BsCalendar2Event />
      </span>

      <ReactDatePicker
        name="date"
        popperPlacement={popperPlacement}
        id="transactionDatePicker"
        selected={selectedDate}
        onChange={handleDateChange}
        className="bg-[#ffffff] dark:bg-[#334155] outline-none cursor-pointer w-full"
        dateFormat={`${type === "year" ? "yyyy" : "dd/MM/yyyy"} `}
        showPopperArrow={false}
        showYearPicker={type === "year" ? true : false}
        showMonthYearPicker={type === "month" ? true : false}
      />
    </div>
  );
};

export default DatePicker;
