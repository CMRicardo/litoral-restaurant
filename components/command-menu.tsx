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
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

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
            <CommandShortcut>cmd+shift+,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Products">
          <CommandItem
            className="flex gap-2"
            onSelect={() =>
              runCommand(() => router.push("/dashboard/products/new"))
            }
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
