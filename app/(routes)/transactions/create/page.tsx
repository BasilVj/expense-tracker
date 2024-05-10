import TransactionForm from "@/components/transactions/TransactionForm";
import React from "react";

const page = () => {
  return (
    <div className="page__wrapper ">
      <h1 className="text-2xl font-bold">Create Transaction</h1>
      <TransactionForm formType="CREATE" />
    </div>
  );
};

export default page;
