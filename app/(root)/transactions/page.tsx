import React from "react";
import Wallet from "@/components/common/Wallet";
import OffCanavsFilter from "@/components/transactions/OffCanavsFilter";
import SearchBar from "@/components/transactions/SearchBar";
import TransactionTable from "@/components/transactions/TransactionTable";
import TransactionTableActionBtns from "@/components/transactions/TransactionTableActionBtns";
import { fetchTransactions } from "@/services/transactions";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();

  const tableData = await fetchTransactions();
  const filteredTableDataByUserId = tableData?.filter(
    (data) => data.userId === user?.id
  );
  const isTableDataAvailable =
    Array.isArray(filteredTableDataByUserId) &&
    filteredTableDataByUserId.length > 0;

  return (
    <div className="page__wrapper max-w-full ">
      <OffCanavsFilter />
      <div>
        <h1 className="text-2xl font-bold">Transactions</h1>
      </div>
      <Wallet balance={1} expense={1} income={1} transactionsTotal={1} />
      <div className="flex justify-between mt-10 items-center">
        <SearchBar disabled={isTableDataAvailable} />
        <TransactionTableActionBtns disabled={isTableDataAvailable} />
      </div>
      {isTableDataAvailable ? (
        <TransactionTable tableData={filteredTableDataByUserId} />
      ) : (
        <div className="flex justify-center items-center h-[35vh]">
          <h1 className="text-lg ">
            Start Adding Your Transactions By clicking{" "}
            <span className="text-4xl text-green-500">+</span> Icon
          </h1>
        </div>
      )}
    </div>
  );
};

export default page;
