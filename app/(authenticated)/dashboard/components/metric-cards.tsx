import {
  Wallet,
  ArrowDownToLine,
  Receipt,
  CalendarDays,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge, type BadgeProps } from "@/components/ui/badge"

type MetricCard = {
  icon: LucideIcon
  badge: string
  badgeVariant: BadgeProps["variant"]
  badgeIcon?: LucideIcon
  value: string
  label: string
  sublabel: string
}

const metricCards: MetricCard[] = [
  {
    icon: Wallet,
    badge: "+12.4%",
    badgeVariant: "success",
    badgeIcon: TrendingUp,
    value: "$24,850",
    label: "Current Balance",
    sublabel: "vs last month",
  },
  {
    icon: ArrowDownToLine,
    badge: "→3 invoices",
    badgeVariant: "default",
    value: "$8,200",
    label: "Incoming Payments",
    sublabel: "expected this week",
  },
  {
    icon: Receipt,
    badge: "Next 7 days",
    badgeVariant: "warning",
    value: "$5,640",
    label: "Upcoming Bills",
    sublabel: "rent + supplier",
  },
  {
    icon: CalendarDays,
    badge: "Safe",
    badgeVariant: "success",
    badgeIcon: TrendingUp,
    value: "94 days",
    label: "Cash Runway",
    sublabel: "at current burn rate",
  },
]

export default function MetricCards() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {metricCards.map((card) => (
        <Card key={card.label}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                <card.icon className="h-4 w-4 text-gray-400" />
              </div>
              <Badge variant={card.badgeVariant} className="flex items-center gap-1 shrink-0">
                {card.badgeIcon && <card.badgeIcon className="h-3 w-3" />}
                {card.badge}
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold">{card.value}</p>
              <p className="mt-0.5 text-sm text-gray-400">{card.label}</p>
              <p className="mt-0.5 text-xs text-gray-600">{card.sublabel}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
