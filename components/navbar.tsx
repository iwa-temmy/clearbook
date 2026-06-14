"use client";

import React, { SetStateAction } from "react";
// import { useTheme } from "next-themes";
import {
  Search,
  // Sun,
  // Moon,
  Bell,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "./ui/date-range-picker";

const Navbar = () => {
  //   const { theme, setTheme } = useTheme();
  const [date, setDate] = React.useState<DateRange | null>(null);
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-sidebar-border px-6">
      <SidebarTrigger className="-ml-1 text-gray-400 hover:text-gray-100 block lg:hidden" />
      <Separator orientation="vertical" className="h-4 bg-sidebar-border block lg:hidden" />

      <div className="flex flex-1 max-w-sm">
        <Input
          placeholder="Search transactions, insights..."
          size="sm"
          className="rounded-lg border border-sidebar-border bg-white/5 dark:bg-white/5 text-sm text-gray-300 placeholder:text-gray-500"
          startAdornment={<Search className="h-4 w-4 text-gray-500" />}
          endAdornment={
            <kbd className="hidden rounded border border-sidebar-border px-1.5 py-0.5 text-[10px] text-gray-500 sm:inline-flex">
              ⌘K
            </kbd>
          }
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <DatePickerWithRange
          date={date}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setDate={(_key: any, value: SetStateAction<DateRange | null>) =>
            setDate(value)
          }
        />

        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="relative rounded-lg border border-gray-200 dark:border-sidebar-border p-2 text-gray-400 hover:bg-white/5 hover:text-gray-100 transition-colors"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
        </button> */}

        <button className="relative rounded-lg border border-gray-200 dark:border-sidebar-border p-2 text-gray-400 hover:bg-white/5 hover:text-gray-100 transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
        </button>

        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-white text-xs font-semibold">
            SC
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Navbar;
