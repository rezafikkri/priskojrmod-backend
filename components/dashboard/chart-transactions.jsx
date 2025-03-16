'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';
import Link from 'next/link';
import { Button } from '../ui/button';

const chartData = [
  { date: '2024-04-30', sales: 48 },
  { date: '2024-05-31', sales: 64 },
  { date: '2024-06-30', sales: 36 },
  { date: '2024-07-31', sales: 22 },
  { date: '2024-08-31', sales: 29 },
  { date: '2024-09-30', sales: 80 },
  { date: '2024-10-31', sales: 84 },
  { date: '2024-11-30', sales: 92 },
  { date: '2024-12-31', sales: 46 },
  { date: '2025-01-31', sales: 6 },
  { date: '2025-02-28', sales: 26 },
  { date: '2025-03-16', sales: 75 },
];
const chartConfig = {
  sales: {
    label: 'Sales',
    color: 'var(--chart-1)',
  },
};

export default function ChartTransactions() {
  return (
    <Card className="flex-1 shadow-none">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle className="mb-2">Transactions</CardTitle>
            <CardDescription>Last 12 months</CardDescription>
          </div>
          <Button variant="outline">See details</Button>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-60 w-full">
          <AreaChart
            data={chartData}
            margin={{
              left: -20,
              right: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis axisLine={false} tickLine={false} tickMargin={8} tickCount={3}/>
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  year: '2-digit',
                  month: 'short',
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      year: 'numeric',
                      month: 'short',
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="sales"
              type="monotone"
              fill="url(#fillSales)"
              fillOpacity={0.4}
              stroke="var(--color-sales)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
