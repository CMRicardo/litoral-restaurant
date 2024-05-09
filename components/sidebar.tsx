"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { Settings } from "lucide-react";

import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { links } from "@/lib/links";
import { ThemeToggle } from "./theme-toggle";

export function Sidebar() {
  const pathName = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 text-muted-foreground sm:py-4">
        {links.map(({ href, label, icon, shortcut }) => {
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
              <TooltipContent side="right" className="z-[9999]">
                {label} <kbd>{shortcut}</kbd>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <ThemeToggle />
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
          <TooltipContent side="right">
            Settings <kbd>cmd+,</kbd>
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
