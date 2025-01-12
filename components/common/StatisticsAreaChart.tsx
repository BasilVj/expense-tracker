"use client";

import React, { useEffect } from "react";

type chartData = {
  title: string;
  category: string;
  type: string;
  amount: number;
  date: string;
};

type StatisticsChartProps = {
  chartBgColor: string;
  title: string;
  chartData: chartData[];
};

const StatisticsAreaChart = ({
  chartBgColor,
  chartData,
  title,
}: StatisticsChartProps) => {
  return (
    <div className="mt-6 tracking-wider">
      <h2 className="text-sm font-medium mb-1 capitalize">{title}</h2>
      <div className="h-[320px] bg-[#1e293b]"></div>
    </div>
  );
};

export default StatisticsAreaChart;
