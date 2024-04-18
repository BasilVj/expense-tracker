import { tableHeaders } from "@/data/tableHeaders";
import React from "react";

const TransactionTableHeader = () => {
  return (
    <thead>
      <tr className="bg-[#334155]">
        {tableHeaders.map((tableHeader, index) => (
          <th
            className="text-[1rem] border-x border-[#6B7280] text-start px-3 py-3"
            key={index}
          >
            {tableHeader}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TransactionTableHeader;
