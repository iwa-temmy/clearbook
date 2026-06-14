"use client";

import React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "./label";

interface DateShortcutButtonsProps {
  // eslint-disable-next-line no-unused-vars
  onDateRangeChange: (range: string) => void;
  selectedShorcut: string;
}

interface DatePickerWithRangeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  date: DateRange | null;
  // eslint-disable-next-line no-unused-vars
  setDate: (key: string, range: DateRange | null) => void;
}
const DateRangePicker = ({
  onChange,
  range,
  date,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  range: string;
  date: DateRange | null;
}) => {
  const handleDateRangeChange = (range: string) => {
    const today = new Date();
    let start: Date;
    let end: Date;

    onChange("range", range);
    switch (range) {
      case "Today":
        start = end = today;
        break;
      case "Last 7 days":
        start = new Date(today);
        end = today;
        start.setDate(today.getDate() - 6);
        break;
      case "Last 30 days":
        start = new Date(today);
        end = today;
        start.setDate(today.getDate() - 29);
        break;
      case "YTD":
        start = new Date(today.getFullYear(), 0, 1);
        end = today;
        break;
      default:
        return;
    }
    onChange("date", { from: start, to: end });
  };

  return (
    <div className="space-y-3">
      <Label>Date</Label>
      <DateShortcutButtons
        onDateRangeChange={handleDateRangeChange}
        selectedShorcut={range}
      />
      <DatePickerWithRange date={date} setDate={onChange} />
    </div>
  );
};

const DateShortcutButtons: React.FC<DateShortcutButtonsProps> = ({
  onDateRangeChange,
  selectedShorcut,
}) => {
  const shortcuts = ["Today", "Last 7 days", "Last 30 days", "YTD"];

  const selectedClassList = "bg-primary1-300 text-white";
  const baseClass = "w-fit !no-underline px-3";

  return (
    <div className="flex space-x-2">
      {shortcuts.map((label) => (
        <Button
          key={label}
          type="button"
          variant="link"
          className={cn(
            baseClass,
            selectedShorcut === label ? selectedClassList : "",
          )}
          onClick={() => onDateRangeChange(label)}
        >
          {label === "Last 7 days"
            ? "Last 7 Days"
            : label === "Last 30 days"
              ? "Last 30 Days"
              : label}
        </Button>
      ))}
    </div>
  );
};

export function DatePickerWithRange({
  className,
  date,
  setDate,
}: DatePickerWithRangeProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            type="button"
            variant={"outline"}
            className={cn(
              "w-fit justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date?.to ? (
                <>
                  {format(date?.from, "LLL dd, y")} -{" "}
                  {format(date?.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            // initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date ?? undefined}
            onSelect={(dateRange) => setDate("date", dateRange ?? null)}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DateRangePicker;
