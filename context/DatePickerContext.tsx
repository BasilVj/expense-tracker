"use client";
import React, { createContext, useState } from "react";

type DatePickerContextType = {
  year: Date;
  setYear: React.Dispatch<React.SetStateAction<Date>>;
};
type DatePickerContextProps = {
  children: React.ReactNode;
};

export const DatePickerContext = createContext<DatePickerContextType | null>(
  null
);

const DatePickerContextProvider = ({ children }: DatePickerContextProps) => {
  const [year, setYear] = useState(new Date());
  const value = {
    year,
    setYear,
  };
  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  );
};

export default DatePickerContextProvider;
