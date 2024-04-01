import { Home, LineChart, Package, ShoppingCart, Users2 } from "lucide-react";

export const links = [
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