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
