import StatisticsChart from "@/components/common/StatisticsAreaChart";
import Wallet from "@/components/common/Wallet";
import { getCurrentCurrentUserTransactions } from "@/utils/transactionsUtils";
import React from "react";

const page = async () => {
  const transactions = await getCurrentCurrentUserTransactions();

  const isTableDataAvailable =
    Array.isArray(transactions) && transactions.length > 0;
  const expenses = transactions?.filter((data) => data.type === "expense");
  const totalExpense = expenses?.reduce((acc, curr) => acc + curr.amount, 0);

  const income = transactions?.filter((data) => data.type === "income");
  const totalIncome = income?.reduce((acc, curr) => acc + curr.amount, 0);

  const balanceAmount =
    (totalIncome ? totalIncome : 0) - (totalExpense ? totalExpense : 0);

  const totalTransactions = transactions?.length;

  return (
    <div className="page__wrapper">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <Wallet
        balance={balanceAmount}
        expense={totalExpense ? totalExpense : 0}
        income={totalIncome ? totalIncome : 0}
        transactionsTotal={totalTransactions ? totalTransactions : 0}
      />
      {isTableDataAvailable && (
        <StatisticsChart transactionsData={transactions} />
      )}
    </div>
  );
};

export default page;
