import TransactionForm from "@/components/transactions/TransactionForm";
import { fetchTransactionByID } from "@/services/transactions";
import React from "react";

type Params = {
  params: { transactionId: string };
};

const page = async ({ params }: Params) => {
  const transaction = await fetchTransactionByID(params.transactionId);
  return (
    <div className="page__wrapper ">
      <h1 className="text-2xl font-bold">Update Transaction</h1>

      <TransactionForm
        formType="UPDATE"
        transactionData={transaction && transaction}
        id={params.transactionId}
      />
    </div>
  );
};

export default page;
