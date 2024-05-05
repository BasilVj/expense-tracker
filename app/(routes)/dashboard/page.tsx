import StatisticsChart from "@/components/common/StatisticsAreaChart";
import Wallet from "@/components/common/Wallet";
import { statistics } from "@/data/statistics";
import React from "react";

const page = () => {
  const incomeData = statistics.filter(
    (statistic) => statistic.type === "income"
  );
  const expenseData = statistics.filter(
    (statistic) => statistic.type === "expense"
  );
  let totalIncome = 0;
  let totalExpense = 0;

  incomeData.map((income) => (totalIncome = income.amount + totalIncome));
  expenseData.map((expense) => (totalExpense = expense.amount + totalExpense));

  const availableBalance = totalIncome - totalExpense;
  const transactionsTotal = totalIncome + totalExpense;

  return (
    <div className="page__wrapper">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <Wallet
        balance={availableBalance}
        expense={totalExpense}
        income={totalIncome}
        transactionsTotal={transactionsTotal}
      />
      <StatisticsChart
        chartBgColor="#209152"
        chartData={incomeData}
        title="Income"
      />
      <StatisticsChart
        chartBgColor="#a93b41"
        chartData={expenseData}
        title="Expense"
      />
    </div>
  );
};

export default page;
