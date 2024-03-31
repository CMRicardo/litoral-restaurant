"use client";

import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

import {
  Home,
  ShoppingCart,
  Package,
  Users2,
  LineChart,
  Settings,
} from "lucide-react";

import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <Home />,
  },
  {
    href: "/dashboard/orders",
    label: "Orders",
    icon: <ShoppingCart />,
  },
  {
    href: "/dashboard/employees",
    label: "Employees",
    icon: <Users2 />,
  },
  {
    href: "/dashboard/products",
    label: "Products",
    icon: <Package />,
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: <LineChart />,
  },
];

export function Sidebar() {
  const pathName = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 text-muted-foreground sm:py-4">
        {links.map(({ href, label, icon }) => {
          const isActive = href === pathName;
          const classes = clsx(
            [
              "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
            ],
            [isActive && "bg-accent text-foreground"],
          );
          return (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <Link href={href} className={classes}>
                  {icon}
                  <span className="sr-only">{label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{label}</TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/dashboard/settings"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
