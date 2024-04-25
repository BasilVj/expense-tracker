"use client";
import React, { createContext, useState } from "react";

type OffCanvasContextProviderProps = {
  children: React.ReactNode;
};

type OffCanvasContext = {
  toggleOffcanvas: boolean;
  setToggleOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OffCanvasContext = createContext<OffCanvasContext | null>(null);

const OffCanvasContextProvider = ({
  children,
}: OffCanvasContextProviderProps) => {
  const [toggleOffcanvas, setToggleOffcanvas] = useState(false);
  const value = { toggleOffcanvas, setToggleOffcanvas };
  return (
    <OffCanvasContext.Provider value={value}>
      {children}
    </OffCanvasContext.Provider>
  );
};

export default OffCanvasContextProvider;
