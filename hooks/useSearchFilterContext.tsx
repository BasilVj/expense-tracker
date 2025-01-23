"use client"
import { SearchFilterContext } from "@/context/SearchFilterContext";
import React, { useContext } from "react";

const useSearchFilterContext = () => {
  const context = useContext(SearchFilterContext);
  if (!context) {
    throw new Error(
      "SearchFilterContext should be used within SearchFilterContextProvider "
    );
  }

  return context;
};

export default useSearchFilterContext;
