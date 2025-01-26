"use client";

import { Chart } from "@/services/chart";
import { Transaction } from "@/types/transactions";
import { findMonthAndYearFromDate } from "@/utils/dateUtils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { AreaChart, CartesianGrid, XAxis, Area } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import InsufficientDataCard from "./InsufficientDataCard";
type StatisticsChartProps = {
  transactionsData: Transaction[];
};

const StatisticsAreaChart = ({ transactionsData }: StatisticsChartProps) => {
  const transactionsChartData: Chart[] = [];

  transactionsData.forEach((data) => {
    const { month, year } = findMonthAndYearFromDate(data.date);
    let transactionsChartObj = {
      month,
      income: data.type === "income" ? data.amount : 0,
      expense: data.type === "expense" ? data.amount : 0,
      year,
    };
    transactionsChartData.push(transactionsChartObj);
  });

  const reducedDataTransactionChartData = transactionsChartData.reduce<Chart[]>(
    (acc, current) => {
      const existing = acc.find(
        (item) => item.month === current.month && item.year === current.year
      );
      if (existing) {
        existing.income += current.income;
        existing.expense += current.expense;
      } else {
        acc.push({ ...current });
      }

      return acc;
    },
    []
  );

  const sortedData = reducedDataTransactionChartData.sort((a, b) => {
    const monthA = new Date(`${a.year}-${a.month}-01`).getMonth(); // Convert to Date object and get the month index
    const monthB = new Date(`${b.year}-${b.month}-01`).getMonth(); // Same for the other entry
    return monthA - monthB; // Sort in ascending order
  });


  const chartConfig = {
    income: {
      label: "Income",
      color: "#22CE55",
    },
    expense: {
      label: "Expense",
      color: "#EF4444",
    },
  } satisfies ChartConfig;

  return (
    <div className="mt-6 tracking-wider">
      {reducedDataTransactionChartData.length > 1 ? (
        <Card
          className="dark:bg-[#0f172a] 
          bg-[#f1f5f9] border border-[#E5E7EB] dark:border-[#334155]"
        >
          <CardHeader>
            <CardTitle>Income and Expenses Chart - 2025</CardTitle>
            <CardDescription>
              A clear view of your income and expenses throughout the year in a
              single chart
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={sortedData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-income)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-income)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-expense)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-expense)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="expense"
                  type="natural"
                  fill="url(#fillExpense)"
                  fillOpacity={0.4}
                  stroke="var(--color-expense)"
                  stackId="a"
                />
                <Area
                  dataKey="income"
                  type="natural"
                  fill="url(#fillIncome)"
                  fillOpacity={0.4}
                  stroke="var(--color-income)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      ) : (
       <InsufficientDataCard/>
      )}
    </div>
  );
};

export default StatisticsAreaChart;
