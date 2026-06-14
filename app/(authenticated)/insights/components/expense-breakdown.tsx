import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const MAX_AMOUNT = 6200

const expenses = [
  {
    category: "Software & Tools",
    pct: "+12%",
    pctColor: "text-primary",
    amount: 3240,
  },
  {
    category: "Payroll",
    pct: "0%",
    pctColor: "text-gray-500",
    amount: 6200,
  },
  {
    category: "Rent & Utilities",
    pct: "0%",
    pctColor: "text-gray-500",
    amount: 2800,
  },
  {
    category: "Suppliers",
    pct: "+8%",
    pctColor: "text-primary",
    amount: 1840,
  },
  {
    category: "Marketing",
    pct: "+45%",
    pctColor: "text-amber-400",
    amount: 620,
  },
]

export default function ExpenseBreakdown() {
  return (
    <Card className="h-fit">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Expense Breakdown — June</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5">
          {expenses.map((item) => (
            <div key={item.category} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{item.category}</span>
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-medium tabular-nums ${item.pctColor}`}>
                    {item.pct}
                  </span>
                  <span className="min-w-[52px] text-right text-sm font-semibold">
                    ${item.amount.toLocaleString()}
                  </span>
                </div>
              </div>
              <Progress value={(item.amount / MAX_AMOUNT) * 100} className="h-1" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
