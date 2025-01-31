import DatePicker from "@/components/common/DatePicker";
import InsufficientDataCard from "@/components/common/InsufficientDataCard";
import StatisticsChart from "@/components/common/StatisticsAreaChart";
import Wallet from "@/components/common/Wallet";
import {
  getCurrentCurrentUserTransactions,
  walletDetails,
} from "@/utils/transactionsUtils";
import React from "react";

const page = async () => {
  const transactions = await getCurrentCurrentUserTransactions();

  const isTableDataAvailable =
    Array.isArray(transactions) && transactions.length > 0;
  const { balanceAmount, totalExpense, totalIncome, totalTransactions } =
    walletDetails(transactions);

  return (
    <div className="page__wrapper">
      <div className="flex justify-between items-center pe-3">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="w-[100px]">
          <DatePicker type="year" />
        </div>
      </div>
      <Wallet
        balance={balanceAmount}
        expense={totalExpense}
        income={totalIncome}
        transactionsTotal={totalTransactions}
      />
      {isTableDataAvailable ? (
        <StatisticsChart transactionsData={transactions} />
      ) : (
        <InsufficientDataCard />
      )}
    </div>
  );
};

export default page;
