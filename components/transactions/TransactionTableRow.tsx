import { tableData } from "@/data/tableData";
import React from "react";
import Icon from "../common/Icon";

const TransactionTableRow = () => {
  return (
    <tbody className="bg-[#1E293B] w-full">
      {tableData.map((data, index) => (
        <tr className="w-full border border-[#374151]" key={index}>
          <td className="px-3 py-3 border-r border-[#374151]">{data.title}</td>
          <td className="px-3 py-3 border-r border-[#374151]">{data.amount}</td>
          <td className="px-3 py-3 border-r border-[#374151] lowercase">
            {data.category}
          </td>
          <td className="px-3 py-3 border-r border-[#374151]">
            <span
              className={`${
                data.type === "expense" ? "bg-[#EF4444]" : "bg-[#22C55E]"
              } px-2 py-1 rounded-sm text-[14px] font-medium`}
            >
              {data.type}
            </span>
          </td>
          <td className="px-3 py-3 border-r border-[#374151]">{data.date}</td>
          <td className="flex justify-center gap-1 py-2">
            <Icon
              iconName={data.actions.edit}
              iconCls=""
              iconcontainerCls="bg-[#2563EB] p-2"
            />
            <Icon
              iconName={data.actions.delete}
              iconCls=""
              iconcontainerCls="bg-[#EF4444] p-2"
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TransactionTableRow;
