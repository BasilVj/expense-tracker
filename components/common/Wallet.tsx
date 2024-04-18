import React from "react";
import Card from "./Card";
import {
  BsCurrencyDollar,
  BsGraphDown,
  BsGraphUp,
  BsWallet,
} from "react-icons/bs";

const Wallet = () => {
  return (
    <div className="mt-11 flex w-full justify-between flex-wrap">
      <Card
        amount={20}
        type="Wallet"
        icon={BsWallet}
        iconBgColor="bg-[#2563EB]"
      />
      <Card
        amount={18220}
        type="Income"
        icon={BsGraphUp}
        iconBgColor="bg-[#22CE55]"
      />
      <Card
        amount={60}
        type="Expense"
        icon={BsGraphDown}
        iconBgColor="bg-[#EF4444]"
      />
      <Card
        amount={16}
        type="Transactions"
        icon={BsCurrencyDollar}
        iconBgColor="bg-[#FACC15]"
      />
    </div>
  );
};

export default Wallet;
