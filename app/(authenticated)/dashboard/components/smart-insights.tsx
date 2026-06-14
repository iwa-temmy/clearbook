import {
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Send,
  Eye,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Insight = {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  body: string
  cta: string
  ctaIcon: LucideIcon
}

const insights: Insight[] = [
  {
    icon: TrendingDown,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    body: "Your expenses increased 18% this month, driven mainly by software subscriptions.",
    cta: "Review subscriptions",
    ctaIcon: ArrowRight,
  },
  {
    icon: AlertTriangle,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
    body: "One overdue invoice may create a cash gap next week. Follow up with Horizon Digital.",
    cta: "Send reminder",
    ctaIcon: Send,
  },
  {
    icon: CheckCircle,
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    body: "You can safely cover all upcoming bills for the next 30 days.",
    cta: "View forecast",
    ctaIcon: Eye,
  },
]

export default function SmartInsights() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-semibold">
          <Sparkles className="h-4 w-4 text-primary" />
          Smart Insights
        </h2>
        <Badge variant="secondary" className="text-[10px]">AI-generated</Badge>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {insights.map((insight, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${insight.iconBg}`}>
                <insight.icon className={`h-4 w-4 ${insight.iconColor}`} />
              </div>
              <p className="text-sm leading-relaxed text-gray-300">{insight.body}</p>
              <button className="mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                {insight.cta}
                <insight.ctaIcon className="h-3 w-3" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
