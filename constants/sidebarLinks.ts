import { BiCog, BiHomeAlt, BiMoney, BiPlusCircle } from "react-icons/bi";
import { BiMoon, BiSun } from "react-icons/bi";
export const sidebarLinks = {
  title: "TrackTacka",
  navLinks: [
    { title: "Dashboard", icon: BiHomeAlt, path: "/dashboard" },
    { title: "Transactions", icon: BiMoney, path: "/transactions" },
    { title: "New transaction", icon: BiPlusCircle, path: "/new-transaction" },
    { title: "Settings", icon: BiCog, path: "/settings" },
  ],
  themes: {
    light: {
      title: "Light Theme",
      icon: BiSun,
    },
    dark: {
      title: "Dark Theme",
      icon: BiMoon,
    },
  },
};
