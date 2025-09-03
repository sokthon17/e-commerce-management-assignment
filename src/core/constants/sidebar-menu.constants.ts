import { MenuList } from "../type/sidebar";

export const MENU_LIST: MenuList[] = [
  {
    defaultIcon: "/dashboard/category-dark-24.svg",
    activeIcon: "/dashboard/category-white-24.svg",
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    defaultIcon: "/dashboard/product-management-dark-24.svg",
    activeIcon: "/dashboard/product-management-white-24.svg",
    name: "Product Management",
    route: "/product-management",
  },
  {
    defaultIcon: "/dashboard/order-dark-24.svg",
    activeIcon: "/dashboard/order-white-24.svg",
    name: "Order Management",
    route: "/order-management",
  },
  {
    defaultIcon: "/dashboard/users-dark-24.svg",
    activeIcon: "/dashboard/users-white-24.svg",
    name: "Customer Management",
    route: "/customer-management",
  },
  {
    defaultIcon: "/dashboard/reports-dark-24.svg",
    activeIcon: "/dashboard/reports-white-24.svg",
    name: "Reports",
    route: "/reports",
  },
];
