import Wallet from "@/components/common/Wallet";
import TransactionTable from "@/components/transactions/TransactionTable";
import React from "react";

const page = () => {
  return (
    <div className="page__wrapper">
      <div>
        <h1 className="text-2xl font-bold">Transactions</h1>
      </div>
      <Wallet />
      <TransactionTable />
    </div>
  );
};

export default page;
