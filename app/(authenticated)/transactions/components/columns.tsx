"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
  Monitor,
  Package,
  Cloud,
  Palette,
  Building2,
  Pencil,
  FileText,
  Users,
  LayoutGrid,
  Flower2,
  BarChart3,
  Rocket,
  ArrowDownLeft,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { type Transaction, type IconKey, type Status } from "./transaction-data"

const iconMap: Record<IconKey, React.ElementType> = {
  monitor: Monitor,
  package: Package,
  cloud: Cloud,
  palette: Palette,
  building2: Building2,
  pencil: Pencil,
  "file-text": FileText,
  users: Users,
  "layout-grid": LayoutGrid,
  flower2: Flower2,
  "bar-chart3": BarChart3,
  rocket: Rocket,
}

const statusVariant: Record<Status, "success" | "warning" | "destructive"> = {
  Paid: "success",
  Pending: "warning",
  Overdue: "destructive",
}

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number)
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Description",
    cell: ({ row }) => {
      const t = row.original
      const Icon = iconMap[t.icon]
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
            <Icon className="h-4 w-4 text-gray-400" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-100">{t.name}</p>
            <p className="text-xs text-gray-500">{t.category}</p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <span className="text-sm text-gray-400 tabular-nums">
        {formatDate(row.original.date)}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      const sorted = column.getIsSorted()
      return (
        <button
          onClick={() => column.toggleSorting(sorted === "asc")}
          className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-300 transition-colors"
        >
          Amount
          {sorted === "asc" ? (
            <ChevronUp className="h-3 w-3" />
          ) : sorted === "desc" ? (
            <ChevronDown className="h-3 w-3" />
          ) : (
            <ChevronsUpDown className="h-3 w-3 opacity-50" />
          )}
        </button>
      )
    },
    cell: ({ row }) => {
      const { amount, isIncome } = row.original
      const formatted = `$${amount.toLocaleString()}`
      return (
        <div className="flex items-center gap-1.5">
          <span
            className={
              isIncome
                ? "text-sm font-medium text-emerald-400"
                : "text-sm font-medium text-gray-100"
            }
          >
            {isIncome ? `+${formatted}` : formatted}
          </span>
          {isIncome ? (
            <ArrowDownLeft className="h-3.5 w-3.5 text-emerald-400/60" />
          ) : (
            <ArrowUpRight className="h-3.5 w-3.5 text-gray-500" />
          )}
        </div>
      )
    },
    sortingFn: "basic",
  },
]
