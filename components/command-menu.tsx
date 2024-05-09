"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "./ui/command";
import { Laptop, LogOut, Moon, PackagePlus, Settings, Sun } from "lucide-react";
import { links } from "@/lib/links";
import { CommandBarContext } from "@/context/command-bar";

export function CommandMenu() {
  const [open, setOpen] = useContext(CommandBarContext);
  const router = useRouter();
  const { setTheme } = useTheme();
  const runCommand = (command: () => void) => {
    command();
    setOpen((open) => !open);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.shiftKey &&
        (e.key === "k" || e.key === "K")
      ) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "d" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/dashboard");
      }
      if (e.key === "a" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/dashboard/analytics");
      }
      if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/dashboard/products");
      }
      if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/dashboard/products");
      }
      if (e.key === "e" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/dashboard/employees");
      }
      if (e.key === "," && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/dashboard/settings");
      }
      if (e.key === "o" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/dashboard/orders");
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen, router]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {links.map((link) => {
            return (
              <CommandItem
                key={link.href}
                className="flex gap-2"
                onSelect={() => runCommand(() => router.push(link.href))}
                keywords={link.keywords}
              >
                {link.icon}
                {link.label}
                <CommandShortcut>{link.shortcut}</CommandShortcut>
              </CommandItem>
            );
          })}
          <CommandItem
            className="flex gap-2"
            onSelect={() =>
              runCommand(() => router.push("/dashboard/settings"))
            }
            keywords={["Preferences", "Options", "Configuration"]}
          >
            <Settings />
            Settings
            <CommandShortcut>cmd+,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Products">
          <CommandItem
            className="flex gap-2"
            onSelect={() =>
              runCommand(() => router.push("/dashboard/products/new"))
            }
            keywords={["Add", "Create", "New", "Product"]}
          >
            <PackagePlus />
            Add Product
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Session">
          <CommandItem
            className="flex gap-2"
            onSelect={() => runCommand(() => router.push("/"))}
          >
            <LogOut />
            Logout
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Theme">
          <CommandItem
            className="flex gap-2"
            onSelect={() => runCommand(() => setTheme("dark"))}
          >
            <Moon />
            Set dark theme
          </CommandItem>
          <CommandItem
            className="flex gap-2"
            onSelect={() => runCommand(() => setTheme("light"))}
          >
            <Sun />
            Set light theme
          </CommandItem>
          <CommandItem
            className="flex gap-2"
            onSelect={() => runCommand(() => setTheme("system"))}
          >
            <Laptop />
            Set theme same as system
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
