import { Metadata } from "next";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Main } from "@/components/main-container";
import { CommandBarProvider } from "@/context/command-bar";

export const metadata: Metadata = {
  title: "Dashboard | Litoral Restaurant",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="absolute inset-0 -z-10 block h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:hidden"></div>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <CommandBarProvider>
          <>
            <Sidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
              <Header />
              <Main>{children}</Main>
            </div>
          </>
        </CommandBarProvider>
      </div>
    </>
  );
}
