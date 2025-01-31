import { db } from "@/config/firebase";
import { Transaction } from "@/types/transactions";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";


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
    console.error("Error fetching transactions:", error);
  }
};

export const addTransaction = async (data: Transaction) => {
  await addDoc(transactionsCollectionRef, data);
};
export const updateTransaction = async (data: Transaction, id: string) => {
  const transactionDoc = doc(db, "transactions", id);
  try {
    await updateDoc(transactionDoc, data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTransaction = async (id: string) => {
  const transactionDoc = doc(db, "transactions", id);
  await deleteDoc(transactionDoc);
};

export const fetchTransactionByID = async (id: string) => {
  const transactionDoc = doc(db, "transactions", id);
  try {
    const data = await getDoc(transactionDoc);
    const filteredData = data.data() as Transaction;
    return filteredData;
  } catch (error) {
    console.log(error);
  }
};
