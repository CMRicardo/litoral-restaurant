"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { PanelLeft, Search, Settings, User } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { links } from "@/lib/links";
import { ThemeToggle } from "./theme-toggle";
import { CommandBarContext } from "@/context/command-bar";
import { useContext } from "react";

export function Header() {
  const [, setOpen] = useContext(CommandBarContext);
  const pathName = usePathname();
  const paths = pathName.split("/").filter((p) => p !== "");
  let acc = "";
  const urls = paths.map((path) => {
    acc += `/${path}`;
    return acc;
  });

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            {links.map(({ href, label, icon }) => {
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  {icon}
                  {label}
                </Link>
              );
            })}
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
            <ThemeToggle />
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="z-10 hidden md:flex">
        <BreadcrumbList>
          {paths.map((path, index) => {
            return (
              <div className="contents" key={path}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href={urls[index].includes("edit") ? "" : urls[index]}
                      className="capitalize"
                    >
                      {path}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index !== paths.length - 1 && <BreadcrumbSeparator />}
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <Button
        className="relative ml-auto flex-1 md:grow-0"
        variant={"outline"}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <div className="w-full rounded-lg pl-4 text-left shadow-none md:w-[200px] lg:w-[320px]">
          <span>Search...</span>
        </div>
        <div className="absolute right-2.5 top-1.5">
          <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>k</kbd>
        </div>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <User height={32} width={32} className="overflow-hidden" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/dashboard/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
