"use server";

import {
  Transaction,
  addTransaction,
  deleteTransaction,
  fetchTransactions,
  updateTransaction,
} from "@/services/transactions";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const addNewTransaction = async (data: FormData) => {
  const { title, amount, type, category, date } = Object.fromEntries(data);

  const transaction: Transaction = {
    title: title.toString(),
    amount: Number(amount),
    category: category.toString(),
    date: date.toString(),
    type: type.toString(),
  };
  try {
    await addTransaction(transaction);
    revalidatePath("/transactions");
  } catch (error) {
    console.log(error);
  }
  redirect("/transactions");
};

export const deleteTransactionAction = async (data: FormData) => {
  const { id } = Object.fromEntries(data);
  try {
    await deleteTransaction(id.toString());
    await fetchTransactions();
    revalidatePath("/transactions");
  } catch (error) {
    console.log(error);
  }
};

export const updateTransactionAction = async (data: FormData) => {
  const { title, amount, category, date, type, id } = Object.fromEntries(data);

  const transaction: Transaction = {
    title: title.toString(),
    amount: Number(amount),
    category: category.toString(),
    date: date.toString(),
    type: type.toString(),
  };

  try {
    await updateTransaction(transaction, id.toString());
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/transactions");
  redirect("/transactions");
};
