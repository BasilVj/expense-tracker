import React from "react";
import TransactionTableHeader from "./TransactionTableHeader";
import TransactionTableRow from "./TransactionTableRow";
import { Transaction } from "@/services/transactions";

type TransactionTableProps = {
  tableData: Transaction[];
};

const TransactionTable = async ({ tableData }: TransactionTableProps) => {
  return (
    <div className="mt-5 overflow-hidden overflow-x-scroll sm:overflow-auto">
      <table className="w-full">
        <TransactionTableHeader />
        <TransactionTableRow tableData={tableData} />
      </table>
    </div>
  );
};

export default TransactionTable;
