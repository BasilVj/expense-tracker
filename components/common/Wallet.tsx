import React from "react";
import Card from "./Card";
import {
  BsCurrencyDollar,
  BsGraphDown,
  BsGraphUp,
  BsWallet,
} from "react-icons/bs";

type WalletProps = {
  income: number;
  balance: number;
  expense: number;
  transactionsTotal: number;
};

const Wallet = ({
  income,
  balance,
  expense,
  transactionsTotal,
}: WalletProps) => {
  return (
    <div className="mt-11 flex w-full gap-5 flex-wrap">
      <Card
        amount={balance}
        type="Wallet"
        icon={BsWallet}
        iconBgColor="bg-[#2563EB]"
      />
      <Card
        amount={income}
        type="Income"
        icon={BsGraphUp}
        iconBgColor="bg-[#22CE55]"
      />
      <Card
        amount={expense}
        type="Expense"
        icon={BsGraphDown}
        iconBgColor="bg-[#EF4444]"
      />
      <Card
        amount={transactionsTotal}
        type="Transactions"
        icon={BsCurrencyDollar}
        iconBgColor="bg-[#FACC15]"
      />
    </div>
  );
};

export default Wallet;
