import React from "react";
import Icon from "../common/Icon";
import { fetchTransactions } from "@/services/transactions";
import { BsPen } from "react-icons/bs";
import DeleteTransaction from "./DeleteTransaction";
const TransactionTableRow = async () => {
  const tableData = await fetchTransactions();

  return (
    <tbody className="dark:bg-[#1E293B] bg-white w-full">
      {tableData &&
        tableData.map((data, index) => (
          <tr
            className="w-full border dark:border-[#374151] border-[#E5E7EB]"
            key={index}
          >
            <td className="transaction__table-border">{data.title}</td>
            <td className="transaction__table-border">{data.amount}</td>
            <td className="transaction__table-border lowercase">
              {data.category}
            </td>
            <td className="transaction__table-border">
              <span
                className={`${
                  data.type === "expense" ? "bg-[#EF4444]" : "bg-[#22C55E]"
                } px-2 py-1 rounded-sm text-[14px] font-medium text-white`}
              >
                {data.type}
              </span>
            </td>
            <td className="transaction__table-border">{data.date}</td>
            <td className="flex justify-center gap-1 py-2 w-[80px] sm:w-full">
              <Icon
                iconName={BsPen}
                iconCls="text-white"
                iconcontainerCls="bg-[#2563EB] p-2 cursor-pointer"
              />
              <DeleteTransaction transactionId={data.id && data.id} />
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TransactionTableRow;
