import TransactionForm from "@/components/common/TransactionForm";
import React from "react";

const page = () => {
  return (
    <div className="page__wrapper ">
      <h1 className="text-2xl font-bold">Create Transaction</h1>
      <TransactionForm />
    </div>
  );
};

export default page;
