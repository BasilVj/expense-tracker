import React from "react";
import Wallet from "@/components/common/Wallet";
import OffCanavsFilter from "@/components/transactions/OffCanavsFilter";
import SearchBar from "@/components/transactions/SearchBar";
import TransactionTable from "@/components/transactions/TransactionTable";
import TransactionTableActionBtns from "@/components/transactions/TransactionTableActionBtns";
import { getCurrentCurrentUserTransactions } from "@/utils/transactionsUtils";

const page = async () => {
  const transactions = await getCurrentCurrentUserTransactions();

  const expenses = transactions?.filter((data) => data.type === "expense");
  const totalExpense = expenses?.reduce((acc, curr) => acc + curr.amount, 0);

  const income = transactions?.filter((data) => data.type === "income");
  const totalIncome = income?.reduce((acc, curr) => acc + curr.amount, 0);

  const balanceAmount =
    (totalIncome ? totalIncome : 0) - (totalExpense ? totalExpense : 0);

  const totalTransactions = transactions?.length;

  const isTableDataAvailable =
    Array.isArray(transactions) && transactions.length > 0;

  return (
    <div className="page__wrapper max-w-full ">
      <OffCanavsFilter />
      <div>
        <h1 className="text-2xl font-bold">Transactions</h1>
      </div>
      <Wallet
        balance={balanceAmount}
        expense={totalExpense ? totalExpense : 0}
        income={totalIncome ? totalIncome : 0}
        transactionsTotal={totalTransactions ? totalTransactions : 0}
      />
      <div className="flex justify-between mt-10 items-center">
        <SearchBar disabled={isTableDataAvailable} />
        <TransactionTableActionBtns disabled={isTableDataAvailable} />
      </div>
      {isTableDataAvailable ? (
        <TransactionTable tableData={transactions} />
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
