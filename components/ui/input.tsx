"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";

const inputVariants = cva("", {
  variants: {
    size: {
      sm: "h-8 text-sm", // 32px
      md: "h-10 text-sm", // 40px
      lg: "h-12 text-base", // 48px
      xl: "h-14 text-lg", // 56px
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants> & {
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, startAdornment, endAdornment, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const hasEndSlot = endAdornment || type === "password";
    return (
      <div className="w-full relative bg-transparent">
        {startAdornment && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
            {startAdornment}
          </div>
        )}
        <input
          type={isPasswordVisible && type === "password" ? "text" : type}
          className={cn(
            "flex w-full rounded-l-full rounded-r-full border-none outline-none bg-gray-600 dark:bg-gray-20 px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            inputVariants({ size }),
            startAdornment && "pl-10",
            hasEndSlot && "pr-10",
            className,
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-4"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <Eye /> : <EyeClosed />}
          </button>
        )}
        {endAdornment && type !== "password" && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
            {endAdornment}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
