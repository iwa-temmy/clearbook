import { FileText, Home, Users, ArrowRight, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge, type BadgeProps } from "@/components/ui/badge"

type AttentionCard = {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  badge: string
  badgeVariant: BadgeProps["variant"]
  title: string
  description: string
}

const attentionCards: AttentionCard[] = [
  {
    icon: FileText,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
    badge: "Overdue 8 days",
    badgeVariant: "destructive",
    title: "Overdue Invoice",
    description: "Client: Horizon Digital — $3,200",
  },
  {
    icon: Home,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    badge: "Due in 2 days",
    badgeVariant: "warning",
    title: "Rent Due",
    description: "Office lease — $2,800/month",
  },
  {
    icon: Users,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    badge: "Due in 5 days",
    badgeVariant: "warning",
    title: "Supplier Payment",
    description: "Printworks Ltd — $1,840",
  },
  {
    icon: Users,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    badge: "Due in 11 days",
    badgeVariant: "info",
    title: "Payroll",
    description: "3 team members — $6,200",
  },
]

export default function AttentionSection() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold">What Needs Your Attention</h2>
        <button className="flex items-center gap-1 text-xs text-primary hover:underline">
          View all <ArrowRight className="h-3 w-3" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {attentionCards.map((card) => (
          <Card
            key={card.title}
            className="cursor-pointer transition-colors hover:border-primary/30"
          >
            <CardContent className="p-4">
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${card.iconBg}`}>
                  <card.icon className={`h-4 w-4 ${card.iconColor}`} />
                </div>
                <Badge variant={card.badgeVariant} className="shrink-0 text-[10px]">
                  {card.badge}
                </Badge>
              </div>
              <p className="text-sm font-semibold">{card.title}</p>
              <p className="mt-0.5 text-xs text-gray-500">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
