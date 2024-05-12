"use client";
import React, { createContext, useState } from "react";

type OffCanvasContextProviderProps = {
  children: React.ReactNode;
};

type OffCanvasContext = {
  toggleOffcanvas: boolean;
  setToggleOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
  transactionCategory: string;
  setTransactionCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const OffCanvasContext = createContext<OffCanvasContext | null>(null);

const OffCanvasContextProvider = ({
  children,
}: OffCanvasContextProviderProps) => {
  const [toggleOffcanvas, setToggleOffcanvas] = useState(false);
  const [transactionCategory, setTransactionCategory] = useState("");
  const value = {
    toggleOffcanvas,
    setToggleOffcanvas,
    transactionCategory,
    setTransactionCategory,
  };
  return (
    <OffCanvasContext.Provider value={value}>
      {children}
    </OffCanvasContext.Provider>
  );
};

export default OffCanvasContextProvider;
