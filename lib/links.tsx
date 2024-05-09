import { Home, LineChart, Package, ShoppingCart, Users2 } from "lucide-react";

export const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <Home />,
    keywords: ["Home", "Main"],
    shortcut: "cmd+d",
  },
  {
    href: "/dashboard/orders",
    label: "Orders",
    icon: <ShoppingCart />,
    keywords: ["Sales", "Purchases"],
    shortcut: "cmd+o",
  },
  {
    href: "/dashboard/employees",
    label: "Employees",
    icon: <Users2 />,
    keywords: ["Staff", "Workers"],
    shortcut: "cmd+e",
  },
  {
    href: "/dashboard/products",
    label: "Products",
    icon: <Package />,
    keywords: ["Items", "Inventory"],
    shortcut: "cmd+p",
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: <LineChart />,
    keywords: ["Reports", "Statistics"],
    shortcut: "cmd+a",
  },
];
