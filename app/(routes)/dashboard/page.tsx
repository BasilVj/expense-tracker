import Wallet from "@/components/common/Wallet";
import React from "react";

const page = () => {
  return (
    <div className="page__wrapper">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <Wallet />
    </div>
  );
};

export default page;
