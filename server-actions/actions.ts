"use server";

import { Transaction, addTransaction } from "@/services/transactions";
import { revalidatePath } from "next/cache";

export const addNewTransaction = (data: FormData) => {
  const { title, amount, type, category, date } = Object.fromEntries(data);

  const transaction: Transaction = {
    title: title.toString(),
    amount: Number(amount),
    category: category.toString(),
    date: date.toString(),
    type: type.toString(),
  };

  try {
    addTransaction(transaction);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/transactions");
};
