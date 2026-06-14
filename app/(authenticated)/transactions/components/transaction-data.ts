export type Category = "Income" | "Supplier" | "Software" | "Rent" | "Payroll"
export type Status = "Paid" | "Pending" | "Overdue"

export type IconKey =
  | "monitor"
  | "package"
  | "cloud"
  | "palette"
  | "building2"
  | "pencil"
  | "file-text"
  | "users"
  | "layout-grid"
  | "flower2"
  | "bar-chart3"
  | "rocket"

export interface Transaction {
  id: string
  name: string
  category: Category
  date: string
  status: Status
  amount: number
  isIncome: boolean
  icon: IconKey
}

export const transactions: Transaction[] = [
  {
    id: "1",
    name: "Client payment — Horizon Digital",
    category: "Income",
    date: "2026-06-07",
    status: "Paid",
    amount: 5500,
    isIncome: true,
    icon: "monitor",
  },
  {
    id: "2",
    name: "Printworks Ltd — Supplier",
    category: "Supplier",
    date: "2026-06-06",
    status: "Pending",
    amount: 1840,
    isIncome: false,
    icon: "package",
  },
  {
    id: "3",
    name: "AWS — Cloud infrastructure",
    category: "Software",
    date: "2026-06-05",
    status: "Paid",
    amount: 289,
    isIncome: false,
    icon: "cloud",
  },
  {
    id: "4",
    name: "Client retainer — Studio Nova",
    category: "Income",
    date: "2026-06-04",
    status: "Paid",
    amount: 3200,
    isIncome: true,
    icon: "palette",
  },
  {
    id: "5",
    name: "Office rent — June",
    category: "Rent",
    date: "2026-06-01",
    status: "Paid",
    amount: 2800,
    isIncome: false,
    icon: "building2",
  },
  {
    id: "6",
    name: "Figma — Design tool",
    category: "Software",
    date: "2026-06-01",
    status: "Paid",
    amount: 75,
    isIncome: false,
    icon: "pencil",
  },
  {
    id: "7",
    name: "Invoice #1038 — Peak Media",
    category: "Income",
    date: "2026-05-30",
    status: "Overdue",
    amount: 2100,
    isIncome: true,
    icon: "file-text",
  },
  {
    id: "8",
    name: "Payroll — May",
    category: "Payroll",
    date: "2026-05-28",
    status: "Paid",
    amount: 6200,
    isIncome: false,
    icon: "users",
  },
  {
    id: "9",
    name: "Google Workspace",
    category: "Software",
    date: "2026-05-25",
    status: "Paid",
    amount: 180,
    isIncome: false,
    icon: "layout-grid",
  },
  {
    id: "10",
    name: "Freelance project — Bloom Co",
    category: "Income",
    date: "2026-05-22",
    status: "Paid",
    amount: 1800,
    isIncome: true,
    icon: "flower2",
  },
  {
    id: "11",
    name: "Accounting software — Xero",
    category: "Software",
    date: "2026-05-20",
    status: "Paid",
    amount: 59,
    isIncome: false,
    icon: "bar-chart3",
  },
  {
    id: "12",
    name: "Invoice #1042 — TechStart",
    category: "Income",
    date: "2026-05-18",
    status: "Paid",
    amount: 4200,
    isIncome: true,
    icon: "rocket",
  },
]
