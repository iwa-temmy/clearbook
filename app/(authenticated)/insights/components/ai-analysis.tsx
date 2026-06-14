import {
  TrendingUp,
  MapPin,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge, type BadgeProps } from "@/components/ui/badge"

type AnalysisCard = {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  badge: string
  badgeVariant: BadgeProps["variant"]
  title: string
  body: string
  cta: string
}

const analysisCards: AnalysisCard[] = [
  {
    icon: TrendingUp,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    badge: "Medium",
    badgeVariant: "warning",
    title: "Subscription spending is up 18%",
    body: "You're spending $3,240/month on software. Three subscriptions are possibly underused. Consider auditing Notion, Loom, and Zoom.",
    cta: "View subscriptions",
  },
  {
    icon: MapPin,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    badge: "Low",
    badgeVariant: "success",
    title: "Revenue seasonality detected",
    body: "Your income typically dips 12% in Q1 and Q3. Building a 3-month cash buffer would reduce financial stress during these periods.",
    cta: "See buffer plan",
  },
  {
    icon: AlertTriangle,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
    badge: "High",
    badgeVariant: "destructive",
    title: "Overdue invoice creating cash risk",
    body: "Horizon Digital's $3,200 invoice is 8 days overdue. If not resolved in 5 days, it may impact your ability to cover payroll.",
    cta: "Send reminder",
  },
  {
    icon: CheckCircle,
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    badge: "Info",
    badgeVariant: "info",
    title: "Best month profitability this quarter",
    body: "June is on track to be your most profitable month in Q2, with a projected net of $8,570 — up 22% from May.",
    cta: "View breakdown",
  },
]

export default function AiAnalysis() {
  return (
    <section>
      <h2 className="mb-4 text-base font-semibold">AI Analysis</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {analysisCards.map((card) => (
          <Card key={card.title} className="hover:border-primary/20 transition-colors">
            <CardContent className="p-5">
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${card.iconBg}`}>
                  <card.icon className={`h-4 w-4 ${card.iconColor}`} />
                </div>
                <Badge variant={card.badgeVariant} className="text-[10px]">
                  {card.badge}
                </Badge>
              </div>
              <h3 className="mb-2 text-sm font-semibold">{card.title}</h3>
              <p className="text-xs leading-relaxed text-gray-400">{card.body}</p>
              <button className="mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                {card.cta}
                <ArrowRight className="h-3 w-3" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
