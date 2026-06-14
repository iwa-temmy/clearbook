"use client"

import { Sparkles, Send } from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

const cashForecastData = [
  { date: "Jun 8", balance: 24850 },
  { date: "Jun 10", balance: 25600 },
  { date: "Jun 13", balance: 26100 },
  { date: "Jun 15", balance: 25800 },
  { date: "Jun 18", balance: 24200 },
  { date: "Jun 20", balance: 22500 },
  { date: "Jun 23", balance: 21800 },
  { date: "Jun 25", balance: 22300 },
  { date: "Jun 28", balance: 23000 },
  { date: "Jul 1", balance: 22600 },
  { date: "Jul 3", balance: 22100 },
]

const chartConfig: ChartConfig = {
  balance: { label: "Balance", color: "#2DD4BF" },
}

function CashForecastChart() {
  return (
    <Card className="lg:col-span-3">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base">30-Day Cash Forecast</CardTitle>
            <CardDescription className="mt-0.5 text-xs">
              Projected balance with upcoming events
            </CardDescription>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Balance
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Risk zone
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer config={chartConfig} className="h-[200px]">
          <AreaChart data={cashForecastData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2DD4BF" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#2DD4BF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
            <YAxis
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11 }}
              domain={[0, 28000]}
              ticks={[0, 7000, 14000, 21000, 28000]}
              width={38}
            />
            <Tooltip
              formatter={(value) => [`$${Number(value).toLocaleString()}`, "Balance"]}
              contentStyle={{
                background: "#131620",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <ReferenceLine y={7000} stroke="#FACC15" strokeDasharray="5 5" strokeWidth={1.5} />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#2DD4BF"
              strokeWidth={2}
              fill="url(#balanceGradient)"
              dot={false}
              activeDot={{ r: 4, fill: "#2DD4BF" }}
            />
          </AreaChart>
        </ChartContainer>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 text-[11px] text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
            Supplier payment due Jun 14
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Cash flow risk Jun 25
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Recovery expected Jun 30
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

function ClarityChat() {
  return (
    <Card className="flex flex-col lg:col-span-1">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div>
            <CardTitle className="text-sm">Clarity AI</CardTitle>
            <p className="flex items-center gap-1 text-[11px] text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Always on
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3 pb-4">
        <div className="flex flex-1 flex-col gap-3">
          <div className="rounded-lg bg-white/5 p-3 text-sm text-gray-300">
            Good morning! Your business is looking healthy today. Balance is up 12% this
            month. 🎉
            <p className="mt-1.5 text-[10px] text-gray-600">9:01 AM</p>
          </div>

          <div className="max-w-[85%] self-end rounded-lg bg-white/5 p-3 text-sm text-gray-300">
            Did you make any cash sales yesterday?
          </div>

          <div className="flex flex-wrap gap-2">
            {["Yes, $450", "No sales", "Log manually"].map((opt) => (
              <button
                key={opt}
                className="rounded-full border border-sidebar-border px-3 py-1 text-xs text-gray-400 hover:bg-white/5 transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-sidebar-border bg-white/5 px-3 py-2">
          <input
            placeholder="Ask Clarity anything..."
            className="flex-1 bg-transparent text-xs text-gray-400 placeholder:text-gray-600 outline-none"
          />
          <button>
            <Send className="h-3.5 w-3.5 text-primary" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ForecastSection() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <CashForecastChart />
      <ClarityChat />
    </div>
  )
}
