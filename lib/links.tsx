import { Home, LineChart, Package, ShoppingCart, Users2 } from "lucide-react";

export const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <Home />,
    keywords: ["Home", "Main"],
  },
  {
    href: "/dashboard/orders",
    label: "Orders",
    icon: <ShoppingCart />,
    keywords: ["Sales", "Purchases"],
  },
  {
    href: "/dashboard/employees",
    label: "Employees",
    icon: <Users2 />,
    keywords: ["Staff", "Workers"],
  },
  {
    href: "/dashboard/products",
    label: "Products",
    icon: <Package />,
    keywords: ["Items", "Inventory"],
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: <LineChart />,
    keywords: ["Reports", "Statistics"],
  },
];
