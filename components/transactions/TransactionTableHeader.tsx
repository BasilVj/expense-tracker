import { tableHeaders } from "@/data/tableHeaders";
import React from "react";

const TransactionTableHeader = () => {
  return (
    <thead>
      <tr className="dark:bg-[#334155] bg-[#E2E8F0]">
        {tableHeaders.map((tableHeader, index) => (
          <th
            className={`${
              tableHeader === "Actions" ? "text-center" : "text-start"
            } border-x dark:border-[#6B7280] border-[#DADFE6] px-3 py-3`}
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
