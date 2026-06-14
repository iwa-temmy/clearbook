"use client";

import * as React from "react";
import {
  LayoutDashboard,
  ArrowLeftRight,
  TrendingUp,
  Sparkles,
  Bell,
  Settings,
  // Sun,
  CircleHelp,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
  { title: "Transactions", icon: ArrowLeftRight, url: "/transactions" },
  { title: "Forecast", icon: TrendingUp, url: "/forecast" },
  { title: "Insights", icon: Sparkles, url: "/insights" },
  { title: "Alerts", icon: Bell, url: "/alerts", badge: "3" },
  { title: "Settings", icon: Settings, url: "/settings" },
];

const bottomItems = [
  // { title: "Light mode", icon: Sun, url: "#" },
  { title: "Help & Support", icon: CircleHelp, url: "/help-and-support" },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-[11px] font-bold shrink-0">
            CB
          </div>
          <span className="font-semibold text-sm tracking-tight">
            Clearbook
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 px-3 mb-1">
            Menu
          </SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => {
              const isActive = pathname === item.url;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={
                      isActive
                        ? "bg-sidebar-active text-sidebar-item-active hover:bg-sidebar-active hover:text-sidebar-item-active"
                        : "text-sidebar-item-inactive hover:text-sidebar-item-inactive"
                    }
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span className="text-sm">{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-white text-[10px] font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-2 py-2 border-t border-sidebar-border">
        <SidebarMenu>
          {bottomItems.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={
                    isActive
                      ? "bg-sidebar-active text-sidebar-item-active hover:bg-sidebar-active hover:text-sidebar-item-active"
                      : "text-sidebar-item-inactive hover:text-sidebar-item-inactive"
                  }
                >
                  <a href={item.url} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span className="text-sm">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>

        <div className="mt-2 flex items-center gap-3 rounded-lg p-2 hover:bg-white/5 cursor-pointer">
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarFallback className="bg-primary text-white text-xs font-semibold">
              SC
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium dark:text-gray-100 truncate">
              Iwaloye Olawale
            </p>
            <p className="text-xs text-gray-500 truncate">Pro plan</p>
          </div>
          <Badge variant="success" className="text-[10px] px-1.5 py-0">
            Pro
          </Badge>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
