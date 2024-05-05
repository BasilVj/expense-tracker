"use client";
import { TooltipProps } from "recharts";
import React, { useEffect } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

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
  const generateData = (chartData: chartData[]) => {
    const newData = [];
    for (let i = 1; i <= 30; i++) {
      const dataPoint = chartData.find((item) => parseInt(item.date) === i);
      newData.push(dataPoint || { date: i.toString(), amount: 0 });
    }
    return newData;
  };
  const data = generateData(chartData);

  return (
    <div className="mt-6 tracking-wider">
      <h2 className="text-sm font-medium mb-1 capitalize">{title}</h2>
      <div className="h-[320px] bg-[#1e293b]">
        <ResponsiveContainer width="100%">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 10,
              left: -10,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis tick={{ fontSize: 12 }} dataKey="date" />
            <YAxis tick={{ fontSize: 12 }} />
            <CartesianGrid strokeLinecap="butt" />
            <Tooltip content={<CustomTooltip title={title} />} />
            <Area
              type="monotone"
              dataKey="amount"
              stroke={`${chartBgColor}`}
              fill={`${chartBgColor}`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({
  active,
  payload,
  label,
  title,
}: TooltipProps<ValueType, NameType> & { title: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 p-4 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p
          className={`text-sm text-[${
            title === "Income" ? "#22c55e" : "#ef4444"
          }]`}
        >
          {title} :<span className="ml-2">{payload[0].value}</span>
        </p>
      </div>
    );
  }
};

export default StatisticsAreaChart;
