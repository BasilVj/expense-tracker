"use client";
import React, { useEffect, useState } from "react";
import Icon from "../common/Icon";
import { fetchTransactions, Transaction } from "@/services/transactions";
import { BsPen } from "react-icons/bs";
import DeleteTransaction from "./DeleteTransaction";
import Link from "next/link";
import { useOffCanvasContext } from "@/hooks/useOffCanvasContext";

const TransactionTableRow = () => {
  const { transactionCategory, transactionType, sortTransaction } =
    useOffCanvasContext();
  const [originalTransactionData, setOriginalTransactionData] = useState<
    Transaction[]
  >([]);
  const [transactionData, setTransactionData] = useState<Transaction[]>([]);

  useEffect(() => {
    const getTransactionsData = async () => {
      const data = await fetchTransactions();
      if (data && data.length > 0) {
        setOriginalTransactionData(data);
        setTransactionData(data);
      }
    };
    getTransactionsData();
  }, [transactionData]);

  useEffect(() => {
    let filteredData = [...originalTransactionData];

    if (transactionType !== "all") {
      filteredData = filteredData.filter(
        (data) => data.type === transactionType
      );
    }

    if (transactionCategory !== "") {
      filteredData = filteredData.filter(
        (data) => data.category === transactionCategory
      );
    }

    if (sortTransaction === "lowToHigh") {
      filteredData.sort((a, b) => a.amount - b.amount);
    } else if (sortTransaction === "highToLow") {
      filteredData.sort((a, b) => b.amount - a.amount);
    }

    setTransactionData(filteredData);
  }, [transactionCategory, transactionType, sortTransaction]);

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
              {data.id && <DeleteTransaction transactionId={data.id} />}
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TransactionTableRow;
