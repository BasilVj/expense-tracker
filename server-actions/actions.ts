"use server";

export const addNewTransaction = (data: FormData) => {
  const { title, amount, type, category, date } = Object.fromEntries(data);
};
