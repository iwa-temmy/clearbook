"use client"

import * as React from "react"
import { ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

export type ChartConfig = {
  [key: string]: {
    label?: string
    color?: string
  }
}

type ChartContextProps = { config: ChartConfig }
const ChartContext = React.createContext<ChartContextProps | null>(null)

export function useChart() {
  const ctx = React.useContext(ChartContext)
  if (!ctx) throw new Error("useChart must be used within ChartContainer")
  return ctx
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<typeof ResponsiveContainer>["children"]
  }
>(({ className, children, config, ...props }, ref) => {
  const cssVars = Object.fromEntries(
    Object.entries(config)
      .filter(([, c]) => c.color)
      .map(([k, c]) => [`--color-${k}`, c.color!])
  ) as React.CSSProperties

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        style={cssVars}
        className={cn(
          "h-[250px] w-full [&_.recharts-cartesian-axis-tick_text]:fill-gray-500 dark:[&_.recharts-cartesian-axis-tick_text]:fill-gray-400 [&_.recharts-cartesian-grid_line]:stroke-gray-200 dark:[&_.recharts-cartesian-grid_line]:stroke-gray-800",
          className
        )}
        {...props}
      >
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "ChartContainer"

export { ChartContainer }
