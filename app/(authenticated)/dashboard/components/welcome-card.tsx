"use client"

import { RadialBarChart, RadialBar, PolarAngleAxis, PolarRadiusAxis, Label } from "recharts"
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const HEALTH_SCORE = 87

const chartConfig: ChartConfig = {
  score: { label: "Health Score", color: "#2DD4BF" },
}

function HealthScoreChart() {
  return (
    <div className="flex flex-col items-center gap-1">
      <ChartContainer config={chartConfig} className="h-[90px] w-[90px]">
        <RadialBarChart
          data={[{ value: HEALTH_SCORE, fill: "#2DD4BF" }]}
          startAngle={90}
          endAngle={-270}
          innerRadius={30}
          outerRadius={44}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            dataKey="value"
            cornerRadius={6}
            background={{ fill: "rgba(255,255,255,0.06)" }}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan fontSize={18} fontWeight={700} fill="#2DD4BF">
                        {HEALTH_SCORE}
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
      <span className="text-[11px] text-white dark:text-gray-500">Health Score</span>
    </div>
  )
}

export default function WelcomeCard() {
  return (
    <Card className="bg-gradient border-0">
      <CardContent className="p-4 lg:p-6 space-y-8">
        <div className="grid grid-cols-[1fr_auto] items-start gap-6">
          <div>
            <p className="text-xs text-white dark:text-gray-500">Monday, June 14, 2026</p>
            <h1 className="mt-1 text-2xl font-bold text-white tracking-tight">
              Good morning, Olawale. 👋
            </h1>
            <p className="mt-1 text-sm text-white dark:text-gray-400">
              Your business is{" "}
              <span className="font-semibold text-primary">
                financially healthy
              </span>{" "}
              this week.
            </p>
          </div>

          <HealthScoreChart />
        </div>
        <Separator className="bg-sidebar-border" />
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-lg">
          <div>
            <p className="text-xs text-white dark:text-gray-500">Month to date revenue</p>
            <p className="mt-1 text-xl font-bold text-white">$18,450</p>
          </div>
          <div>
            <p className="text-xs text-white dark:text-gray-500">MTD expenses</p>
            <p className="mt-1 text-xl font-bold text-white">$9,880</p>
          </div>
          <div>
            <p className="text-xs text-white dark:text-gray-500">Net this month</p>
            <p className="mt-1 text-xl font-bold text-green-400">+$8,570</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
