import { db } from "@/config/firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export type Transaction = {
  title: string;
  id?: string;
  amount: number;
  category: string;
  type: string;
  date: string;
};

const transactionsCollectionRef = collection(db, "transactions");

export const fetchTransactions = async () => {
  try {
    const data = await getDocs(transactionsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...(doc.data() as Transaction),
      id: doc.id,
    }));
    return filteredData;
  } catch (error) {
    console.log(error);
  }
};

export const addTransaction = async (data: Transaction) => {
  await addDoc(transactionsCollectionRef, data);
};

export const deleteTransaction = async (id: string) => {
  const transactionDoc = doc(db, "transactions", id);
  await deleteDoc(transactionDoc);
};
