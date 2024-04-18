"use client";
import React from "react";
import CountUp from "react-countup";
type CountUpProps = {
  amount: number;
};

const CountUpAmount = ({ amount }: CountUpProps) => {
  return (
    <div className="text-3xl font-bold">
      <CountUp end={amount} duration={2}/>
    </div>
  );
};

export default CountUpAmount;
