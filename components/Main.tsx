"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const needTreeCols =
    pathname.includes("/products") || pathname === "/dashboard/employees";

  const classes = clsx([
    "grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8",
    !needTreeCols && "lg:grid-cols-3 xl:grid-cols-3",
  ]);

  return <main className={classes}>{children}</main>;
}
