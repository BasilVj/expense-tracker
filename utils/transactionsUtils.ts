import { fetchTransactions } from "@/services/transactions";
import { Transaction } from "@/types/transactions";
import { currentUser, User } from "@clerk/nextjs/server";

export const getCurrentCurrentUserTransactions = async (): Promise<
  Transaction[] | undefined
> => {
  const user = await currentUser();
  const tableData = await fetchTransactions();
  const filteredTableDataByUserId = tableData?.filter(
    (data) => data.userId === user?.id
  );
  if (filteredTableDataByUserId && filteredTableDataByUserId?.length > 0) {
    return filteredTableDataByUserId;
  }
};

export const walletDetails = (
  transactions: Transaction[] | undefined
): {
  totalExpense: number;
  totalIncome: number;
  balanceAmount: number;
  totalTransactions: number;
} => {
  if (!transactions) {
    return {
      totalExpense: 0,
      totalIncome: 0,
      balanceAmount: 0,
      totalTransactions: 0,
    };
  }
  const expenses = transactions.filter((data) => data.type === "expense");
  const income = transactions.filter((data) => data.type === "income");
  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);

  const balanceAmount =
    (totalIncome ? totalIncome : 0) - (totalExpense ? totalExpense : 0);

  const totalTransactions = transactions?.length;
  return { totalExpense, totalIncome, balanceAmount, totalTransactions };
};
