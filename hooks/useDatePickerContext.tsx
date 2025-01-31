"use client";
import { DatePickerContext } from "@/context/DatePickerContext";
import { useContext } from "react";

const useDatePickerContext = () => {
  const context = useContext(DatePickerContext);
  if (!context) {
    throw new Error(
      "DatePickerContext should be used within DatePickerContextProvider"
    );
  }
  return context;
};

export default useDatePickerContext;
