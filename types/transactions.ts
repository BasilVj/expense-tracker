export type Transaction = {
  title: string;
  id?: string;
  amount: number;
  category: string;
  type: string;
  date: string;
  userId?: string;
};