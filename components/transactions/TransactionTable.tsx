import React from "react";
import TransactionTableHeader from "./TransactionTableHeader";
import TransactionTableRow from "./TransactionTableRow";

const TransactionTable = () => {
  return (
    <div className="mt-8">
      <table className="w-full">
        <TransactionTableHeader />
        <TransactionTableRow />
      </table>
    </div>
  );
};

export default TransactionTable;
