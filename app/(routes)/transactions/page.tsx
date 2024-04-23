import Wallet from "@/components/common/Wallet";
import SearchBar from "@/components/transactions/SearchBar";
import TransactionTable from "@/components/transactions/TransactionTable";
import TransactionTableActionBtns from "@/components/transactions/TransactionTableActionBtns";
import React from "react";

const page = () => {
  return (
    <div className="page__wrapper max-w-full ">
      <div>
        <h1 className="text-2xl font-bold">Transactions</h1>
      </div>
      <Wallet />
      <div className="flex justify-between mt-10 items-center">
        <SearchBar />
        <TransactionTableActionBtns/>
      </div>
      <TransactionTable />
    </div>
  );
};

export default page;
