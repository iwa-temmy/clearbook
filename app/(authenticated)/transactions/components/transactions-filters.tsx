"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const CATEGORIES = ["All", "Income", "Supplier", "Software", "Rent", "Payroll"] as const
const STATUSES = ["All", "Paid", "Pending", "Overdue"] as const

interface TransactionsFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  category: string
  onCategoryChange: (value: string) => void
  status: string
  onStatusChange: (value: string) => void
}

export function TransactionsFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  status,
  onStatusChange,
}: TransactionsFiltersProps) {
  return (
    <div className="rounded-xl border border-sidebar-border bg-foreground p-4 space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <Input
          placeholder="Search transactions..."
          size="sm"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          startAdornment={<Search className="h-4 w-4 text-gray-500" />}
          className="w-60 rounded-lg border-sidebar-border bg-white/[0.04] text-gray-300 placeholder:text-gray-500"
        />

        <div className="flex items-center gap-1.5 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-colors border",
                category === cat
                  ? "bg-primary text-white border-primary"
                  : "text-gray-400 hover:text-gray-200 border-sidebar-border hover:border-white/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-medium text-gray-500">Status:</span>
        {STATUSES.map((s) => (
          <button
            key={s}
            onClick={() => onStatusChange(s)}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-colors border",
              status === s
                ? "bg-primary text-white border-primary"
                : "text-gray-400 hover:text-gray-200 border-sidebar-border hover:border-white/20"
            )}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
