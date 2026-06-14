"use client"

import { useMemo, useState } from "react"
import { Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { transactions } from "./transaction-data"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { TransactionsFilters } from "./transactions-filters"

export function TransactionsPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [status, setStatus] = useState("All")

  const filtered = useMemo(
    () =>
      transactions.filter((t) => {
        const matchesSearch =
          search === "" ||
          t.name.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === "All" || t.category === category
        const matchesStatus = status === "All" || t.status === status
        return matchesSearch && matchesCategory && matchesStatus
      }),
    [search, category, status]
  )

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">Transactions</h1>
          <p className="mt-0.5 text-sm text-gray-500">
            {filtered.length} transaction{filtered.length !== 1 ? "s" : ""} · Last 30 days
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          Add transaction
        </button>
      </div>

      <TransactionsFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        status={status}
        onStatusChange={setStatus}
      />

      <Card>
        <CardContent className="p-0">
          <DataTable columns={columns} data={filtered} />
        </CardContent>
      </Card>
    </div>
  )
}
