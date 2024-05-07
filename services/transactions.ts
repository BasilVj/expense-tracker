import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";

type Transaction = {
  title: string;
  id: string;
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
