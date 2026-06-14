import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary/20 text-primary",
        secondary: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
        destructive: "bg-red-500/20 text-red-400",
        warning: "bg-amber-500/20 text-amber-400",
        success: "bg-green-500/20 text-green-400",
        info: "bg-blue-500/20 text-blue-400",
        outline: "border border-current",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
