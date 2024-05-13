"use client";
import React, { useEffect, useState } from "react";
import Icon from "../common/Icon";
import { Transaction } from "@/services/transactions";
import { BsPen } from "react-icons/bs";
import DeleteTransaction from "./DeleteTransaction";
import Link from "next/link";
import { useOffCanvasContext } from "@/hooks/useOffCanvasContext";
type TransactionTableRow = {
  tableData: Transaction[];
};

const TransactionTableRow = ({ tableData }: TransactionTableRow) => {
  const { transactionCategory, transactionType } = useOffCanvasContext();

  const [transactionData, setTransactionData] =
    useState<Transaction[]>(tableData);

  const filterTableData = (
    key: keyof Transaction,
    filterProperty: string,
    dataToBeFiltered: Transaction[]
  ) => {
    return dataToBeFiltered.filter((data) => data[key] === filterProperty);
  };

  const filterTableDataByTransactionType = (data: Transaction[]) => {
    const filteredDataByType = filterTableData("type", transactionType, data);
    setTransactionData(filteredDataByType);
  };

  useEffect(() => {
    if (transactionType !== "all") {
      if (transactionCategory !== "") {
        const filteredDataByCategory = filterTableData(
          "category",
          transactionCategory,
          tableData
        );
        filterTableDataByTransactionType(filteredDataByCategory);
      } else {
        filterTableDataByTransactionType(tableData);
      }
    } else {
      if (transactionCategory !== "") {
        const filteredDataByCategory = filterTableData(
          "category",
          transactionCategory,
          tableData
        );
        setTransactionData(filteredDataByCategory);
      } else {
        setTransactionData(tableData);
      }
    }
  }, [transactionCategory, transactionType]);

  return (
    <tbody className="dark:bg-[#1E293B] bg-white w-full">
      {transactionData &&
        transactionData.map((data, index) => (
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
            <td className="flex justify-center gap-1 pt-2 w-[80px] sm:w-full">
              <Link href={`/transactions/${data.id}`}>
                <Icon
                  iconName={BsPen}
                  iconCls="text-white"
                  iconcontainerCls="bg-[#2563EB] p-2 cursor-pointer rounded-sm"
                />
              </Link>
              <DeleteTransaction transactionId={data.id!} />
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TransactionTableRow;
