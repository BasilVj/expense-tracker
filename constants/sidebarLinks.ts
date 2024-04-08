import { BiCog, BiHomeAlt, BiMoney, BiPlusCircle } from "react-icons/bi";
import { BiMoon, BiSun } from "react-icons/bi";
export const sidebarLinks = {
  title: "TrackTacka",
  navLinks: [
    { title: "Dashboard", icon: BiHomeAlt, path: "/dashboard" },
    { title: "Transactions", icon: BiMoney, path: "/transactions" },
    { title: "New transaction", icon: BiPlusCircle, path: "/transactions/create" },
    { title: "Settings", icon: BiCog, path: "/settings" },
  ],
  themes: {
    light: {
      title: "light theme",
      icon: BiSun,
    },
    dark: {
      title: "dark theme",
      icon: BiMoon,
    },
  },
};
