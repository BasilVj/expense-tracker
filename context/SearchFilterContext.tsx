"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react";

type SearchFilterContextProps = {
  children: React.ReactNode;
};

type SearchFilterContextType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

export const SearchFilterContext = createContext<SearchFilterContextType | null>(null);

const SearchFilterContextProvider = ({
  children,
}: SearchFilterContextProps) => {
  const [query, setQuery] = useState<string>("");

  const value = {
    query,
    setQuery,
  };

  return (
    <SearchFilterContext.Provider value={value}>
      {children}
    </SearchFilterContext.Provider>
  );
};

export default SearchFilterContextProvider;
