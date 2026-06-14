import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import IncomeVsExpenses from "./components/income-vs-expenses"
import ExpenseBreakdown from "./components/expense-breakdown"
import AiAnalysis from "./components/ai-analysis"

export default function Page() {
  return (
    <div className="flex flex-col gap-6 overflow-auto p-6">
      <div className="flex items-center gap-3">
        <h1 className="flex items-center gap-2 text-xl font-bold">
          <Sparkles className="h-5 w-5 text-primary" />
          Smart Insights
        </h1>
        <Badge variant="default" className="text-xs">AI-powered</Badge>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <IncomeVsExpenses />
        <ExpenseBreakdown />
      </div>

      <AiAnalysis />
    </div>
  )
}
