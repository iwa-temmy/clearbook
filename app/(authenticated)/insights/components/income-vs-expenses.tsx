"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

const data = [
  { month: "Jan", income: 15200, expenses: 8400 },
  { month: "Feb", income: 14800, expenses: 9100 },
  { month: "Mar", income: 18500, expenses: 13800 },
  { month: "Apr", income: 20100, expenses: 12200 },
  { month: "May", income: 17300, expenses: 10500 },
  { month: "Jun", income: 18450, expenses: 9880 },
]

const chartConfig: ChartConfig = {
  income: { label: "Income", color: "#2DD4BF" },
  expenses: { label: "Expenses", color: "#1a5c54" },
}

export default function IncomeVsExpenses() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base">Income vs Expenses</CardTitle>
            <CardDescription className="mt-0.5 text-xs">6-month comparison</CardDescription>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Income
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#1a5c54]" />
              Expenses
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px]">
          <BarChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }} barGap={3}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11 }}
            />
            <YAxis
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11 }}
              width={38}
            />
            <Tooltip
              formatter={(value, name) => [
                `$${Number(value).toLocaleString()}`,
                name === "income" ? "Income" : "Expenses",
              ]}
              contentStyle={{
                background: "#131620",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Bar dataKey="income" fill="#2DD4BF" radius={[4, 4, 0, 0]} barSize={25} />
            <Bar dataKey="expenses" fill="#1a5c54" radius={[4, 4, 0, 0]} barSize={25} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
