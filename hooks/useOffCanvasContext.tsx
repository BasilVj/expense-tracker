"use client";

import { OffCanvasContext } from "@/context/OffCanvasContextProvider";
import { useContext } from "react";

export const useOffCanvasContext = () => {
  const context = useContext(OffCanvasContext);
  if (!context) {
    throw new Error(
      "useOffCanvasContext should be used within OffCanvasContextProvider "
    );
  }
  return context;
};
